import React, { Component } from 'react'

const InputRange = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
            <label>Buy {props.amount} packages of {props.name}</label>
            <input type="range" min="0" max={props.max} onChange={props.handleInput} value={props.content}/>
            <button type="submit">buy</button>
        </form>
	)
}

export default InputRange;
