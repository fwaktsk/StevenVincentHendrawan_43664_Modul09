//Import react
import React from "react";
import ReactDOM from "react-dom";

//Directly in index.js
/*function Heading() {
  return <h1>My Favourite Foods</h1>;
}*/

//Directly and also Componented Heading
/*
import Heading from "./Heading";
ReactDOM.render(<div>
      <Heading />
      <ul>
        <li>Nasi Goreng</li>
        <li>Indomie Goreng</li>
        <li>Bakso Goreng</li>
      </ul>
    </div>, document.getElementById("root"));
*/

//Componented List
/*
import List from "./List";
ReactDOM.render(<div>
      <Heading />
      <List />
    </div>, document.getElementById("root"));
*/

//COmponented App, connecting to List and Heading component still in the same folder
/*
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
*/

//Componented App, connecting to List and Heading component grouped in a folder
/*
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
*/

//Namecard Without Props
/*
function Card() {
  return (
    <div>
      <h2>John Thor</h2>
      <p>+62123456789</p>
      <p>john.thor@email.com</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card />
  </div>,
  document.getElementById("root")
);
*/

//Namecard Without Props
/*
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="John Thor" tel="+62123456789" email="john.thor@email.com" />
  </div>,
  document.getElementById("root")
);
*/

//Tugas
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
