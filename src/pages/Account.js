import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.div`
  padding: 20px;
  height: 100vh;
  width: 100%;
  background: #e0e0e0;
`;
const Account = () => {
  const navigate = useNavigate();
  const onPush = () => navigate('/dashboard');
  return (
    <Page>
      <h1>Account Page</h1>
      <div className="workspace"></div>
      <div className="isActive">isActive</div>
      <button testid="list-icon" className="button" onClick={onPush}>
        Dashboard
      </button>
    </Page>
  );
};

export { Account };
