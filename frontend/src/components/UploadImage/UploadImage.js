/*
*
*		@author: Marcos Cabeceira
*		Talk is cheap, show me the code
*/

import React from 'react';
import Dropzone from './Dropzone';
import { Button, Progress } from 'rsuite';
import './UploadImage.css';

class Uploadimage extends React.Component {
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
            <div className="container">
                <div className="card">
                    <div className="Upload">
                        <span className='Title'>Enviar Documento</span>
                        <div className="Content">
                            <div>
                                <Dropzone
                                    onFilesAdded={this.onFilesAdded}
                                    disabled={this.state.uploading || this.state.successfullUploaded}
                                />
                            </div>
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
                        <div className="Actions">{this.renderActions()}</div>
                    </div>
                </div>
            </div>
        )
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
            );
        }
    }

    async uploadFiles() {
        this.setState({ uploadProgress: {}, uploading: true });
        const promises = [];
        this.state.files.forEach(file => {
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

            const formData = new FormData();
            formData.append("file", file, file.name);

            req.open("POST", "http://localhost:80/graphql/");
            req.send(formData);
        });
    }
};


export default Uploadimage;