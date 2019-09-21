import React, { Component } from 'react'
import './ScriptPage.css';
import camera_icon from '../assets/images/camera-icon.png';
import user_icon from '../assets/images/user-icon.png';
import {
    BrowserRouter as Router,
    withRouter,
    Switch,
    Route,
    Link,
  } from "react-router-dom";


function recordVideo(props){
    props.history.push('/')
}

function relataErro(props){
    props.history.push({
      pathname: `/scriptpage/reportar`,
      state: { modal: true }
    })
  }


export class Script extends Component {
    previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }
    render() {
        let { location } = this.props;

        let isModal = !!(
        location.state &&
        location.state.modal &&
        this.previousLocation !== location
        );
        return (
            <div className='container borda'>
                <div className='cabecalho borda'>
                    <img src={user_icon} alt=''/>
                    <p>Contrato Nº###</p>

                </div>
                <div className='instrucao borda'>
                    <p>Para assinar o contrato você deve ler o roteiro
                        abaixo e gravar um video aqui mesmo na nossa plataforma.
                    </p>
                </div>
                <div className="tela borda">
                    <h2>Roteiro</h2>
                    <p>(exibir o roteiro aqui)</p>
                </div>

                <button className="gravar borda" onClick={() => recordVideo(this.props)}>
                    <p>Gravar</p>
                    <img src={camera_icon} alt="" />
                </button>
                <div>
                    <Switch location={isModal ? this.previousLocation : location}>
                        <div>
                            <button className='erro borda' onClick={() => relataErro(this.props)}>
                                <p>Relatar erro no texto do roteiro</p>
                            </button>
                        </div>
                    </Switch>
                    {isModal ? <Route path="/scriptpage" component={Modal} /> : null}
                </div>
            </div>
        )
    }
}
function Modal({history }) {

    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 50,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          className="modal"
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "10%",
            right: "10%",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          <h1>Meu texto</h1>
          <p>oq eu quiser que apareça</p>
          <button type="button" onClick={back}>
            Close
          </button>
        </div>
      </div>
    );
  }
  
  function ScriptPage() {
    return (
      <Router>
        <Route component={Script} />
      </Router>
    );
  }
  
export default ScriptPage;