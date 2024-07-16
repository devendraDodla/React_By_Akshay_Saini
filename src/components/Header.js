import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName,setBtnName] = useState("Login")

    // Whenever state variables update, react triggers a reconcilation cycle ( re-renders the component)
    return (
        <div className="header">
            <div className="logo-container">
                <img className = "logo" src = {LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul className="ul-design">
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to= "/about">About Us</Link></li>
                    <li><Link to= "/contact">Contact Us</Link></li>
                    <li><Link to= "/link">Cart</Link></li>
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