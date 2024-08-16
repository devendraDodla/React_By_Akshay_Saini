import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName,setBtnName] = useState("Login")

    const onlineStatus = useOnlineStatus(); // Custom Hooks
    // Whenever state variables update, react triggers a reconcilation cycle ( re-renders the component)
    return (
        <div className="flex justify-between bg-pink-100 shadow-md sm:bg-gray-100 h-[150px]">
            <div className="logo-container">
                <img className = "h-[150px] " src = {LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Status :{onlineStatus ? "✅" : "🛑"}</li>
                    <li className="px-4"><Link to = "/">Home</Link></li>
                    <li className="px-4"><Link to= "/about">About Us</Link></li>
                    <li className="px-4"><Link to= "/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to= "/link">Cart</Link></li>
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