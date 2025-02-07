import React from "react";
import { useState, useEffect  } from "react";
import  "./style.css";

function Quiz(){
const [question, setQuestion] = useState([]);
let indx=0;
const quest = [
      {
        Q:"First Quest",
        C: ["A","B","C","D"],
        A: "A"
      },
      {
        Q:"Second Quest",
        C: ["A","B","C","D"],
        A: "B"
      }

]
function QST(){
    setQuestion(quest);
    console.log(question);
}
function NextQuestion(){
    indx+=1;
}

return (<>

   
    <button onClick={QST}>My Button</button>
    
    {question[indx].C.map((mp)=>(<button></button>))}
</>)

}
export default Quiz;