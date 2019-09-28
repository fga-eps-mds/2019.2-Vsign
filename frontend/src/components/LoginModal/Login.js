/*
*
*		@author: Marcos Cabeceira
*		Talk is cheap, show me the code
*/

import React from 'react';
import './Login.css';
import { Icon } from 'rsuite';

const Login = props => (
  <div className='container'>
    <div className="triangle"></div>
    <div className='modal-container'>
      <button onClick={() => props.setLoginModal(false)} className='close-modal'> Close <Icon icon='close' /> </button>
      <div className="login-form">
        <div>
          <div className='input-div'>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={e => {console.log(e.target.value); props.setEmail(e.target.value)}} />
          </div>

          <div className='input-div'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={e => {console.log(e.target.value); props.setPassword(e.target.value)}} />
          </div>
        </div>

        <button onClick={() => handleLogin(props.email, props.password)}>
          Login
        </button>
      </div>
    </div>
  </div>
);

const handleLogin = (email, password) => {
  alert("Tudo pronto, só esperando PR de usuário ser aceito...")
  if(email != '' && password != '') {
    try {
      fetch('http://localhost:3000/user/login', {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          'user': {
            email,
            password
          }
        })
      })
      .then(res => res.ok ? res.json() : null)
      .then(resJson => {
        if(resJson != null) {
          alert('Logged.');
        } else {
          alert('Could not log.');
        }
      })
    } catch (error) {
      alert('Error trying to login.');
    }
  }
}

export default Login;