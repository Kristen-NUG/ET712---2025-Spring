import './App.css';
import React, {useState} from 'react';

function App() {
  const[count, setCount] = useState(0)
  // const[name, setName] = useState("")

  //set state for multiple inputs, destructing useState
  const[inputs, setInputs] = useState({})
  const submitForm = function(event){
    event.preventDefault()
    alert(`Welcome to React State, ${inputs.username}. Your lucky number is ${inputs.luckynumber}.`)
  }
  const handle_changes = function(event){
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]:value}))
  }
  const[textcomment, setTextComment] = useState("")
  const submitted_comments = function(event){
    setTextComment(event.target.value)
  }
  const[mygender, selectedGender] = useState("other")
  const collectedGender = function(event){
    selectedGender(event.target.value)
  }
  return (
    <>
      <h1>Lab 14: React State</h1>
      <p>Count = {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment the count</button>
      <button onClick={()=>setCount(0)}>Reset the Count</button>

      <h1>Form Application Using State</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Forms in ReactJS</legend>
          <section>
            <label for="username">Enter your name: </label>
            <input type="text" id="username" name= "username" value={inputs.username} onChange={handle_changes}/>
          </section>
          <section>
            <label for="luckynumber">Enter a lucky number: </label>
            <input type='number' id='luckynumber' name='luckynumber' value={inputs.luckynumber} onChange={handle_changes}/>
          </section>
          <section>
            <select value={mygender} onChange={collectedGender}>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="others">Others</option>
            </select>
          </section>
          <section>
            <label for="comments">Any Suggestions?</label>
            <textarea id='comments' value={textcomment} onChange={submitted_comments}/>
          </section>
          <input type='submit'/>
        </fieldset>
      </form>
      <p>Name: {inputs.username}</p>
      <p>Lucky Number: {inputs.luckynumber}</p>
      <p>Gender: {mygender}</p>
      <p>Comments: {textcomment}</p>
    </>
  );
}

export default App;
