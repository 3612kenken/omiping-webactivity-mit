import React from "react";
import { useState, useEffect  } from "react";
import axios from 'axios';


import  "./css/style.css";
import "./css/loader.css";

const Timer = ({ startTime }) => {
  const [timeLeft, setTimeLeft] = useState(startTime);

  useEffect(() => {
    // If the timer has reached 0, stop the interval
    if (timeLeft === 0) return;

    // Set up an interval to decrease time every second
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval when the component is unmounted or timeLeft changes
    return () => clearInterval(timerId);
  }, [timeLeft]);
 

  // Function that can be called to restart the timer with a new value
  const restartTimer = (newTime) => {
    setTimeLeft(newTime);
  };

  return (timeLeft );
};


export default function QuizGame(){
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0); 
  
    const [quizFinished, setQuizFinished] = useState(false);
    const [indexForm, setIndexForm] = useState(0);
    const [PlayerName, setPlayerName] = useState('');

    const [timeValue, setTimeValue] = useState(0); 
    const [qindex, setQindex] = useState(1);
   
    const [playerNames, setPlayerNames] = useState([]);

    const sortDirection = "desc";
    let copyArray = [...playerNames]; // create a new array & not mutate state
    const [topScores, setTopScores] = useState([]);
    let nextId = 0;
    let count = 1;
    const [data, setData] = useState();

    useEffect(() => {
      axios
        .get("/src/questions.json")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
      }, []);
     // const jsonStr = data;
     // let obj = Object.entries(data);
    // QuestionAnswers = [];
    const QuestionAnswers = data;
      // for (let j in obj){
      //  // QuestionAnswers[obj[j]];
      // }
    
      //  console.log(QuestionAnswers);
      //  console.log(data);

    

        // useEffect(() => {
        //   fetch('/src/questions.json')
        //     .then(response => response.json())
        //     .then(json => setData(json))
        //     .catch(error => console.error('Error fetching:', error));
        // }, []);

        // const jsonStr = data;
        // let obj = eval('(' + jsonStr + ')');
        // for (let j in obj)
        //   QuestionAnswers.push(obj[j]);

        // console.log(data);

//console.log(data);
 // QuestionAnswers.push(JSON.parse(data));


    const handleAnswer = (answer) => {
            if (answer === QuestionAnswers[currentQuestion].answer) {
                setScore(score + 1);
            }else{
              location.href="#popup1";
              document.getElementById("head-contents").innerHTML = "The correct answer is <b>" + QuestionAnswers[currentQuestion].answer + "</b>";
              console.log("Wrong Answer");
              if (currentQuestion < QuestionAnswers.length - 1) {
                setCurrentQuestion(Math.floor(Math.random()* QuestionAnswers.length));  
                setQindex(qindex+1);
               } 
            }

            if (currentQuestion < QuestionAnswers.length - 1) {
              setCurrentQuestion(Math.floor(Math.random()* QuestionAnswers.length));  
              setQindex(qindex+1);
                setIndexForm(1);     
            } else {
              
              setPlayerNames(prevStateArray =>[...prevStateArray ,
                
                { id: nextId++, playerName: PlayerName, playerScore: score }
              ]);


              copyArray = [...playerNames]; 
              copyArray.sort((a, b) => (a.playerScore > b.playerScore) ? 1 : -1);
              
              setTopScores(copyArray);
              setIndexForm(2);
              setQuizFinished(true);  
            }
    };
    

    function NextForm() {
        setIndexForm(1);
    }
    function CustomForm() {
      setIndexForm(3);
    }

    const qAnswer = [];

    function onChangeCh(){

      //const  qA = [document.getElementById("ch-value-1").value, document.getElementById("ch-value-2").value, document.getElementById("ch-value-3").value, document.getElementById("ch-value-4").value];
      //qAnswer = qA;

      document.getElementById("ch-btn-1").innerHTML ="A. " + document.getElementById("ch-value-1").value;
      document.getElementById("ch-btn-2").innerHTML ="B. " + document.getElementById("ch-value-2").value;
      document.getElementById("ch-btn-3").innerHTML ="C. " + document.getElementById("ch-value-3").value;
      document.getElementById("ch-btn-4").innerHTML ="D. " + document.getElementById("ch-value-4").value;
      
    
    }
    
    const [qqanswer, setQqanswer] = useState(""); 
    const saveArrayQuestion = (indx) => {
     
      

      if(indx==0){
        setQqanswer(document.getElementById("ch-value-1").value);
      }else if(indx==1){
        setQqanswer(document.getElementById("ch-value-2").value);
      }else if(indx==2){
        setQqanswer(document.getElementById("ch-value-3").value);
      }else if(indx==3){
        setQqanswer(document.getElementById("ch-value-4").value);
      }

      const qAns = {question: document.getElementById("qst-value").value, options: [document.getElementById("ch-value-1").value, document.getElementById("ch-value-2").value, document.getElementById("ch-value-3").value, document.getElementById("ch-value-4").value], answer: qqanswer };
      QuestionAnswers.push(qAns);
      
      document.getElementById("qst-value").value="";
      document.getElementById("ch-btn-1").innerHTML="A";
      document.getElementById("ch-value-1").value="";
      document.getElementById("ch-btn-2").innerHTML="B";
      document.getElementById("ch-value-2").value="";
      document.getElementById("ch-btn-3").innerHTML="C";
      document.getElementById("ch-value-3").value="";
      document.getElementById("ch-btn-4").innerHTML="D";
      document.getElementById("ch-value-4").value="";
      
      console.log(QuestionAnswers);
    }

    function NewQuiz() {
      setIndexForm(0);
      setPlayerName("");
      setScore(0);
      setQuizFinished(false);
      setCurrentQuestion(0);
  }
    
    const handleInputChange = (event) => {
      setPlayerName(event.target.value);
    };


try {
  if(indexForm==1){
    const headerTime = document.getElementById("time-value").innerHTML;
    if(headerTime=="0"){
      setCurrentQuestion(QuestionAnswers.length);
      setPlayerNames(prevStateArray =>[...prevStateArray ,   
        { id: nextId++, playerName: PlayerName, playerScore: score }
      ]);
      copyArray = [...playerNames]; 
      copyArray.sort((a, b) => (a.playerScore > b.playerScore) ? 1 : -1);
      setIndexForm(2);
      setQuizFinished(true);
    }
  }
} catch (error) {
  
}
    return (
         <>
      <div class="main"> 
   
        <div class="main-panel"> 

        <label for="chk" aria-hidden="true">Quiz App by Kenz</label>
        <div id="popup1" class="overlay">
          <div class="popup">
            <h2 id='head-popup'>Wrong Answer</h2>
            <a class="close" href="#">&times;</a>
            <div class="content" id='head-contents'>
             Correct Answer <b>C++</b>
            </div>
            <div class="inputBoxButton">
                   <a class="btn-close" href="#">Close</a>

            </div>
          </div>
        </div>
        <div class="inputBox"> 
             {(() => {
                 
            if (indexForm == 0){
             
                
                return(
                    <>
                    <h2>Welcome to   Programming Quiz Game <br/> {PlayerName}</h2>
                    <input type="text" value={PlayerName} placeholder="Input Your Name(min 3 words)" onChange={handleInputChange} ></input>
                   <div class="inputBoxButton">
                   <button class={"btn"}  onClick={NextForm}>Start Quiz</button>
                   <button class={"btn2"} onClick={CustomForm}>Custom</button>

                   </div>
                    
                 

                    </>
                    
                )
                    
         
               
            }else if (indexForm ==2){
             
                return(
                  
                <>
                
                    <h2>Final score: {score}/{QuestionAnswers.length}</h2>
                    
                    <table>
                      <tr>
                        <th colSpan={3}><h2>List Scores</h2></th>
                      </tr>
                      <tr>

                      <th>#</th>
                        <th>Player Name</th>
                        <th>Score</th>
                      </tr>
                    
                  {playerNames.map(pname=> (

                  <tr key={pname.id}>
                    <td>{count++}</td> 
                     <td>{pname.playerName}</td> 
                     <td> {pname.playerScore}</td>
                    </tr>

                  ))}
                  
                  </table>
                  <div class="inputBoxButton">
                    <button class={"btn"}  onClick={NewQuiz}>New Quiz</button>
                    </div>
                </>
                )
            }else if (indexForm ==3){
             
              return(
                
              <>
              <h2>Create Questions</h2>

              <textarea placeholder="Input your question" id="qst-value"></textarea>
              <p>Choices</p>
              <input type="text"  id="ch-value-1" placeholder="A" onChange={onChangeCh} />
              <input type="text"  id="ch-value-2" placeholder="B" onChange={onChangeCh} />
              <input type="text"  id="ch-value-3" placeholder="C" onChange={onChangeCh} />
              <input type="text"  id="ch-value-4" placeholder="D" onChange={onChangeCh} />
       
              <p>Correct Answer</p>
                  <div class="inputBoxButton">
                  <button class="btn2" id="ch-btn-1" onClick={() => saveArrayQuestion(0)}>A</button>
                  <button class="btn2" id="ch-btn-2" >B</button>
                  <button class="btn2" id="ch-btn-3" >C</button>
                  <button class="btn2" id="ch-btn-4" >D</button>
              </div>
              <div class="inputBoxButton">
         
                   <button class="btn" id="ch-btn-1" >Save</button>
                   <button class="btn" id="ch-btn-1" onClick={NewQuiz}>Back</button>
              </div>
              <div class="inputBoxButton">
                </div>
              </>

              );
              
            }else{
            
                return(
                <> 
                <h2>Question {qindex}: {QuestionAnswers[currentQuestion].question}</h2>
                <div className="btn-container">
                    {
                    QuestionAnswers[currentQuestion].options.map((answer) => (
                    <button class={"nbtn"}  key={answer} onClick={() => handleAnswer(answer)}>{answer}</button>
                    ))
                    }
                </div>
                <h2>Score: {score}/{QuestionAnswers.length}</h2> 

                <div class="center-div">
                  <div class="loader">
                  
                  </div>
                  <div class="countdown">
                 <h2 id="time-value"><Timer startTime={60} /></h2> 
                  </div>
                  
              </div> 
              
                </>
                )

             

            }
           
            })()}
        </div>
       
  
        </div>
        
        
      </div>
    
      </>
    );
  }
