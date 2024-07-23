import { useRef, useState } from "react";
import React from 'react'


function TextArea(props) {


  
  const [text, setText] = useState("Write something...")
   // converting to uppercase
  let handleUpClick = ()=> {
    let newText = text.toUpperCase()
    setText(newText)
    if(!text=="")
      props.showAlert("Converted to uppercase.", "success")
    else{
      props.showAlert("Empty text area.", "warning")
    }
  }
  
  // clear default value of text area for first time only.

  const [isClicked, setIsClicked] = useState(false)

  let clearTextAreaHandle = function clearTextArea() {
    
    if (!isClicked) {         // it conditioned first time using isclicked state.
      setText("")
      setIsClicked(true); // Mark that the textarea has been clicked
    }
  }

  //........................................................................................................

  // converting to lowercase
  let handleLowClick = ()=> {
    let newText = text.toLowerCase()
    setText(newText)
    if(!text=="")
      props.showAlert("Converted to lowercase.", "success")
    else{
      props.showAlert("Empty text area.", "warning")
    }
  }

  // text area on change value
  const handleOnChange = (e)=> {
    
    setText(e.target.value)
  }

  // remove extra spaces 
  const removeExtraSpace = ()=> {
    setText(text.replace(/\s+/g, ' ').trim())
    if(!text=="")
      props.showAlert("Extra spaces are removed.", "success")
    else{
      props.showAlert("Empty text area.", "warning")
    }
    
  }

  // clear text

  const handleClearText = ()=> {
    setText("")
    if(!text=="")
      props.showAlert("Text is cleared.", "success")
    else{
      props.showAlert("Empty text area.", "warning")
    }
  }
 
    // copy of text

  const textAreaRef = useRef(null)
  const handleCopyText = ()=> {
    textAreaRef.current.select()        // selecting use referencessss
    navigator.clipboard.writeText(text)
    if(!text=="")
      props.showAlert("Text is copied.", "success")
    else{
      props.showAlert("Empty text area.", "warning")
    }
  }


  return (
    <div >
      <h2 style={{ margin: "40px 0 10px 0", textAlign: "left" }}>
        Paint and manipulate the text.
      </h2>
      <div className="form-floating" style={{ margin: "0px 0 30px 0" }}>
        <textarea
          className="form-control"
          ref={textAreaRef}
          value= {text}
          onClick={clearTextAreaHandle}
          onChange={handleOnChange}
          id="floatingTextarea2"
          style={{ height: "30vh", backgroundColor: (props.mode ==="#2D4356") ? "#D6DAC8": "white" }}
        ></textarea>
        
      </div>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "20px" }}>
        <button type="button" 
        onClick={handleUpClick}
        className="btn btn-outline-primary">
          Convert to Uppercase
        </button>
        <button type="button"
        onClick={handleLowClick} 
        className="btn btn-outline-primary">
          Convert to Lowercase
        </button>
        <button type="button"
        onClick={removeExtraSpace} 
        className="btn btn-outline-primary">
          Remove Extra Spaces
        </button>
        <button type="button"
        onClick={handleClearText} 
        className="btn btn-outline-primary">
          Clear Text 
        </button>
        <button type="button"
        onClick={handleCopyText} 
        className="btn btn-outline-primary">
          Copy Text
        </button>
      </div>
      <ul className="list-group" style={{width: "400px"}}>
        <li className="list-group-item d-flex justify-content-between align-items-center" style= {{backgroundColor: (props.mode ==="#2D4356") ? "#D6DAC8": "white"}}>
          No. of character
          <span className="badge text-bg-primary rounded-pill">{text.length}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center" style= {{backgroundColor: (props.mode ==="#2D4356") ? "#D6DAC8": "white"}}>
          No. of words
          <span className="badge text-bg-primary rounded-pill">{text.length <= 0 ? 0 :text.split(" ").length}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center" style= {{backgroundColor: (props.mode ==="#2D4356") ? "#D6DAC8": "white"}}>
          No. of sentence
          <span className="badge text-bg-primary rounded-pill">{text.split(/[.!?][ ]/g).filter(a=> a.trim().length>0).length}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center" style= {{backgroundColor: (props.mode ==="#2D4356") ? "#D6DAC8": "white"}}>
          Minutes to read
          <span className="badge text-bg-primary rounded-pill">{((text.length <= 0 ? 0 :text.split(" ").length) * 0.0054).toFixed(4)}</span>
        </li>
      </ul>
    </div>
  );
}

export default TextArea
