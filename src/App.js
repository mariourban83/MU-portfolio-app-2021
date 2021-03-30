import React from 'react'
import { Switch, Route } from 'react-router-dom'

// styles
import './App.scss'

// views
import TheHome from './views/TheHome'
import TheProjects from './views/TheProjects'
import TheContact from './views/TheContact'

function App() {
	return (
		<div className="App">
			<header>
				<h2>Header</h2>
			</header>

			<main className="content">
				<Switch>
					<Route path="/" component={TheHome} exact />
					<Route path="/projects" component={TheProjects} />
					<Route path="/contact" component={TheContact} />
				</Switch>
			</main>
		</div>
	)
}

export default App
