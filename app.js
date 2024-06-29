import React from "react";
import ReactDOM from "react-dom/client"


const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React Using JSX 🚀
    </h1>
)

const HeadingComponent = () => (
    <div id = "container">
        <Title/>
        <h1 className="heading">Hello World 🚀</h1>
    </div>
    
)

// console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />)