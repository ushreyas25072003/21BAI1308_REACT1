import "./style.css";
import {useState} from "react";

export default function App(){
  
  let [text,setText]=useState(0);

  function handleText(e){
    let input=e.target.value;

    let words=input.split(' ');

    let result=words.length;

    setText(result);


  }
return(
    <>
      <div className="container">
        <h1 className="headertext">Responsive Word Counter</h1>
        <textarea className="input" onChange={handleText}></textarea>
        <h2 className="h2text">Word Count: {text}</h2>
      </div>    
    </>
)
}