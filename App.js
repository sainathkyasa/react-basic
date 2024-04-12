import React from '../project1/node_modules/react';
import ReactDOM from '../project1/node_modules/react-dom/client';
import logo from '../project1/sfc_logo.png';

// const heading = React.createElement("h1", {className: "heading"}, "Hello World! using React");
const Logo = ()=>{
    return (
    <img src={logo} alt='logo' height="100" />
)
}
// Functional component
const  App = () => {
    return (
        <>
        <Logo />
            <div>Sainath Fried Chicken</div>
            {/* <div>second line</div> */}
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
