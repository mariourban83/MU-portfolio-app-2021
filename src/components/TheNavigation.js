import React from 'react'
import { NavLink } from 'react-router-dom'

// styles
import styles from './TheNavigation.module.scss'
import { Container } from 'react-bootstrap'


const TheNavigation = () => {
	return (
		<Container>
			<nav className={styles.navigation}>
				<NavLink to="/" activeClassName={styles.active} exact>
					Home
				</NavLink>
				<NavLink to="/projects" activeClassName={styles.active}>
					Projects
				</NavLink>
				<NavLink to="/contact" activeClassName={styles.active}>
					Contact
				</NavLink>
			</nav>
		</Container>
	)
}

export default TheNavigation;