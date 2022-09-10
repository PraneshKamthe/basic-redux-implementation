import "./App.css";
import Header from "./components/Header";
// import { Routes, Route } from "react-router-dom";s
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import ProductComponent from "./components/ProductComponent";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";

function App() {
  const[token, setToken] = useState(localStorage.getItem('token') ?? null);
  return (
    <div className="App">
       <Router>
        <Header token={token} setToken={setToken} />
        <Routes>
        {token ? 
        <>
        <Route path="/home" exact element={<Home />} />
        </> : <Route path="/" element={<Login token={token} setToken={setToken} />} />
}
        <Route path="/product/:productId" element={<ProductDetail/>} />
     
         {/* <Route path="/" element={<Login token={token} setToken={setToken} />} /> */}

    
         
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
