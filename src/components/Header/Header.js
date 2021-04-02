import React from "react";
import logo from "../../logo.svg"
import  "./Header.css"

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <div className="logo">
                            <h1>React-Redux App</h1>
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;