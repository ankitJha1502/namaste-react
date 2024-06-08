
import React from "react";
import ReactDOM  from "react-dom/client";
const parent=React.createElement("div",{
    id:'parent',
},[React.createElement("div",{
    id:'child',
},[React.createElement("h1",{},"i am child 1 sibling 1"),React.createElement("h1",{},"i am child 1 sibling 2")]),
React.createElement("div",{
    id:'child2',
},[React.createElement("h1",{},"i am child 2 sibling 1"),React.createElement("h1",{},"i am child 2 sibling 2")])
]);














const heading=React.createElement("h1",{
    id:'heading',
    xyz:'abc'
},"Hello world from react");




console.log(heading) //object



const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(parent); 






// const heading=  document.createElement("h1");
// heading.innerHTML="Hello WOrld form javascript";
// const root=document.getElementById("root");
// root.appendChild(heading);

