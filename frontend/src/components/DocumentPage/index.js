import React, { Component, Fragment } from 'react';
import Dropzone from './Dropzone';
import { Button, Progress } from 'rsuite';
import Navbar from '../Shared/Navbar';
import { Link } from 'react-router-dom';
import { RECORD_URL } from '../../constants/routes';
import './UploadImage.css';


export default class DocumentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: [],
            uploading: false,
            uploadProgress: {},
            successfullUploaded: false
        };

        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.renderActions = this.renderActions.bind(this);
    }

    render() {
        const { Line } = Progress;

        return (
            <Fragment>
                <Navbar />
                {/* <SigningSteps history={this.props.history} /> */}
                <div className="container py-5">
                    <div className="card mb-3">
                        <div className="card-header">Enviar Documento</div>
                        <div className="Upload">    
                            <div className="Content text-center">
                                <Dropzone
                                    onFilesAdded={this.onFilesAdded}
                                    disabled={this.state.uploading || this.state.successfullUploaded}
                                />
                                <div className="Files">
                                    {this.state.files.map(file => {
                                        return (
                                            <div key={file.name} className="Row">
                                                <span className="Filename">{file.name}</span>
                                                <Line percent={30} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* <div className="Actions">{this.renderActions()}</div> */}
                        </div>
                    </div>
                    <Link to={RECORD_URL}>
                        <button className="btn btn-primary btn-lg float-right">Continuar</button>
                    </Link>
                </div>
            </Fragment>
        );
    }

    onFilesAdded(files) {
        this.setState(prevState => ({
            files: prevState.files.concat(files)
        }));
    }

    renderActions() {
        if (this.state.successfullUploaded) {
            return (
                <Button
                    style={{
                        fontSize: 18
                    }}
                    appearance="primary"
                    onClick={() =>
                        this.setState({ files: [], successfullUploaded: false })
                    }
                >
                    Limpar
                </Button>
            );
        } else {
            return (
                <div>
                    <Button
                        style={{
                            fontSize: 18
                        }}
                        appearance="primary"
                        active={this.state.files.length < 0 || this.state.uploading}
                        onClick={this.uploadFiles}
                    >
                        Enviar
                    </Button>
                    <Link to="/script">
                        <Button
                            style={{
                                fontSize: 18,
                                marginLeft: 10
                            }}
                            appearance='primary'

                        >
                            Próximo Passo
                        </Button>
                    </Link>
                </div>
            );
        }
    }

    async uploadFiles() {
        this.setState({ uploadProgress: {}, uploading: true });
        const promises = [];
        this.state.files.forEach(file => {
            // this.sendRequest(file);
            promises.push(this.sendRequest(file));
        });
        try {
            await Promise.all(promises);

            this.setState({ successfullUploaded: true, uploading: false });
        } catch (e) {
            // Might cause problems on production
            this.setState({ successfullUploaded: true, uploading: false });
        }
    }

    sendRequest(file) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();

            req.upload.addEventListener("progress", event => {
                if (event.lengthComputable) {
                    const copy = { ...this.state.uploadProgress };
                    copy[file.name] = {
                        state: "pending",
                        percentage: (event.loaded / event.total) * 100
                    };
                    this.setState({ uploadProgress: copy });
                }
            });

            req.upload.addEventListener("load", event => {
                const copy = { ...this.state.uploadProgress };
                copy[file.name] = { state: "done", percentage: 100 };
                this.setState({ uploadProgress: copy });
                resolve(req.response);
            });

            req.upload.addEventListener("error", event => {
                const copy = { ...this.state.uploadProgress };
                copy[file.name] = { state: "error", percentage: 0 };
                this.setState({ uploadProgress: copy });
                reject(req.response);
            });

            const formData = new FormData();
            formData.append("user_document", file, file.name);

            req.open("POST", "http://localhost:3000/v1/user/upload_document");
            req.send(formData);
        });
    }
};