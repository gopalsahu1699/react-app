//rfc + enter

import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=> {
             console.log("Upper case was clicked");
             setText("You have clicked on handleUpClick")
    }

    const handleOnChange = (event)=> {
             console.log("On change");
             setText(event.target.value)
    }

    // Declare a new state variable, which we'll call "count"
    const [text, setText] = useState('Enter text here');

  return (
    <div>
        <h2>{props.heading}</h2>
        <div className="mb-3">
           {/* <label for="myBox" className="form-label">Text Area</label> */}
           <textarea id="myBox" className="form-control"  rows = "8" value={text} onChange={handleOnChange} />
        </div>
        <button className="btn btn-primary" onClick = {handleUpClick}>Conver to upper case</button>
    </div>
  )
}
