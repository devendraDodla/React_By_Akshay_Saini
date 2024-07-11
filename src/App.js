import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
/**
 * 
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Img
 *          - Name of Res, Star Rating, Cuisine, delvery time
 * Footer 
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 * 
 * 
 */



  
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}

// const Title = () => (
//     <h2 className="head" tabIndex="5">
//         Namaste React Using JSX 🚀
//     </h2>
// )
// const ele = <span>React Element</span>
// const title = <h1>{ele} - Title</h1>
// // Component Composition
// const HeadingComponent = () => (
//     <div id = "container">
//         {title}
//         <Title/>
//         <h1 className="heading">Hello World 🚀</h1>
//     </div>
    
// )

// // console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)