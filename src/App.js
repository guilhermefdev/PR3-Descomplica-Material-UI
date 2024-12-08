import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import LoginPage from "./pages/Login/login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tarefas" element={<ListarTarefa />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
