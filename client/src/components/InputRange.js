import React from 'react'
import '../style/input-range.css'
const InputRange = (props) => {
	return (
		<form className="text-center" onSubmit={props.handleSubmit}>
			<div className="range range-info">
              <input type="range" name="range" min="0" max={props.max} value={props.content} onChange={props.handleInput}/>
              <output id="range">{props.content}</output>
            </div>
			<label>{props.text}</label>
            <button className="btn btn-default btn-block" type="submit">{props.btnText}</button>
        </form>
	)
}

export default InputRange;
