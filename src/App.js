
import './App.css';
import React, { Component, useState } from 'react'


function App() {
  const [output,setOutput]=useState('');
  const [input,setInput]=useState('');
  const button=['7','8','9','+','4','5','6','-','1','2','3','*','C','0','=','/'];
  const handleclick=(e)=>{
    let userinput=e.target.value;
    if(userinput==='C'){
      setInput('')
      setOutput('')
    }else if(userinput==='='){
      if(input=='0/0'){setOutput('NaN')}
      else if(input===''){setOutput('Error')}
      else if(input.slice(-2)=='/0'){setOutput('Infinity')}
      else{

        setOutput(eval(input))
      }
    }else{
      setInput(input+e.target.value);
    }
  }
  return (
    <div className="App">
      <div className="container">
        <input type="text" value={input} onChange={()=>setInput(input)}/>
        {output?<div className="result" style={{marginTop:'10px'}}>{output}</div>:''}
        <div className="butt">
          {button.map((ele,ind)=>{
            return (<button key={ind} className='butnum' onClick={handleclick} value={ele}>{ele}</button>)
          })}
         
        </div>
      </div>
    </div>
  );
}

export default App;
