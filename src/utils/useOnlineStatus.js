import { useEffect, useState } from "react";

// CUSTOM_HOOKS
const useOnlineStatus = () => {
    // check if online
    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {
        console.log("RENDERNG!!!!")
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        }),

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    },[]) // Excuted only once after the initial Render
    // return a boolean
    return onlineStatus
}

export default useOnlineStatus;