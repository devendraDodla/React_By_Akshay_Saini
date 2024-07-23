import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        console.log(`${this.props.name} constructor`);
    }

    componentDidMount() {
        console.log(`${this.props.name} ComponentDidMount`);
    }

    
    render() {
        console.log(`${this.props.name} Render`)
        const {name,location} = this.props;
        return (
            <div>
                <h1>About class Component</h1>
                <h2>Name: {name}</h2>
                <h2>location: {location}</h2>
            </div>
        )
    }
}

export default UserClass;