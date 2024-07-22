import React, {useState} from 'react'




function Alert(props) {

  // capitalize first letter
  function capitalize(word) {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);

  }
    
  return (
    props.alert && 
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{padding:"4px 0 4px 0"}}>
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
    </div>
  )
}

export default Alert