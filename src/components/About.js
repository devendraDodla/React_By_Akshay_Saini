// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is About Page</h2>
//         </div>
//     )
// }

import React from "react";
import UserClass from "./UserClass";

export class About extends React.Component {
    constructor(props) {
        super(props);

        
        console.log("Parent Constructor");
    }

    async componentDidMount() {
        console.log("Parent Did Mount")
    }

    render() {
        return (
            <div>
                <h1>Parent</h1>
                {/* <img src = {avatar_url} /> */}
                <UserClass name = {"Dev (class)"} location = {"Hyderabad"} />
            </div>
        )
    }
}

export default About;