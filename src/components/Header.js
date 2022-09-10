import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({token, setToken}) => {

  const navigate = useNavigate();

  const logoutHandler = () => {
    setToken("");
    localStorage.clear();
    navigate("/")
  }
  if (localStorage.getItem("token")) {
  return (
   <> <div className="ui fixed menu">
      <div className="ui container center">
        <h2> Shop </h2>
      </div>
        <button onClick={logoutHandler}> Logout </button>   
    </div>
      </> 
  );
  } else {
    return(
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2> Shop </h2>
      </div>
      </div>
    )
  }
};

export default Header;