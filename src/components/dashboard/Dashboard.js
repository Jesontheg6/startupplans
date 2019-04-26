import React, {Component } from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjecList'

class Dashboard extends Component {
	render(){
		return (
				<div className="dashbaord container">
		<div className='row'>
		<div className="col s12 m6"></div>
		<div className="col s12 m5 offset-m1">
			<Notifications/>
				</div>
			</div>
		</div>
		)
	}
}