import React from '../project1/node_modules/react';
import ReactDOM from '../project1/node_modules/react-dom';

// const heading = React.createElement("h1", {className: "heading"}, "Hello World! using React");

// Functional component
const  App = () => {
    return (
        <>
            <div>from Jsx</div>
            <div>second line</div>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
