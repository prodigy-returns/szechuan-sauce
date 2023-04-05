import React from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();
  const onPush = () => navigate('/dashboard');
  return (
    <div>
      <h1>Account Page</h1>
      <div className="isActive">isActive</div>
      <button onClick={onPush}>Dashboard</button>
    </div>
  );
};

export { Account };
