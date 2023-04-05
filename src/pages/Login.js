import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Modal = styled.div`
  width: 400px;
  height: 600px;
  background: grey;
  border: 1px solid black;

  top: calc(-50% + 20px);
  left: 50%;
  display: flex;
  justify-content: flex-start;
  transform: translate(-50%, 50%);
  position: absolute;
  .header {
    width: 100%;
    background: red;
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 48px;
  }
  .button {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    background: black;
  }
`;

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [modal, setModal] = useState(true);

  const navigate = useNavigate();

  const onClose = () => {
    setModal(false);
  };

  const onOpen = () => {
    setModal(true);
  };

  const onChange = e => {
    const { value, name } = e.target;
    setState(state => ({ ...state, [name]: value }));
  };

  const onLogin = () => navigate('/account');

  return (
    <div className="App">
      <input
        data-test="name-input"
        type="text"
        name="email"
        value={state.email}
        onChange={onChange}
      />
      <input
        data-test="password-input"
        type="password"
        name="password"
        value={state.password}
        onChange={onChange}
      />
      <button onClick={onLogin}>Log In</button>
      <button onClick={onOpen}>Open</button>
      {modal && (
        <Modal id="modal-container">
          <div onClick={onClose} className="button">
            X
          </div>
          <div className="header">
            <h2>Your Queues</h2>
          </div>
        </Modal>
      )}
    </div>
  );
};

// data-testid="clickable-icon-xmark"
export { Login };
