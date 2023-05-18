 const heading = React.createElement("h1",{id:"heading"},"Hello from React second");
 const roots = ReactDOM.createRoot(document.getElementById("roots"));
 roots.render(heading);
//  <div id="parent">
//     <div id="child">
//         <h1>This is H1 tag</h1>
//         <h2>THis is H2 tag</h2>
//     </div>
// </div> 

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"This is H1 tag"),React.createElement("h2",{},"This is H2 tag")]));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
