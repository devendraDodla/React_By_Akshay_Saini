import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnName,setBtnName] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className = "logo" src = {LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul className="ul-design">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        const actual = btnName == 'Login' ? 'Logout' : 'Login'
                        setBtnName(actual)
                        console.log(btnName)
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;