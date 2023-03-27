import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { Account } from "./pages/Account";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/account" exact element={<Account />} />
    </Routes>
  </Router>
);

export default App;
