import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                login: "Base",
            }
        }

        console.log(`${this.props.name} constructor`);
    }

    async componentDidMount() {
        const data  = await fetch("https://api.github.com/users/devendraDodla");
        const json = await data.json();
        console.log("JSON",json);

        this.setState({
            userInfo: json
        })
        console.log(`Child ComponentDidMount`);
    }

    
    render() {
        console.log(`${this.props.name} Render`)
        const {login,avatar_url} = this.state.userInfo
        return (
            <div>
                <h1>About class Component</h1>
                <h2>Name: {login}</h2>
                <img src={avatar_url} />
            </div>
        )
    }
}

export default UserClass;