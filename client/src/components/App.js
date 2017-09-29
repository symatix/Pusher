import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login';
import Game from './Game'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
	render() {
		return (
			<div className="container">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/push" component={Game} />
                    </div>
                </BrowserRouter>
            </div>
		)
	}
}
export default App;
