import React,{Component} from 'react'
import {robots} from '../robot';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'

class App extends Component{

	constructor(){
		super();
		this.state={
			robots:robots,
			search:'',
			filteredRobots:robots
		}
	}

	//write fn in foll way otherwise we are not able to write 'this' 
	//Also note the we are not writing const fn
	fn=(event)=>{
			// console.log(event.target.value);
			this.setState({
				search:event.target.value,
				filteredRobots:  this.state.robots.filter (robot=>{
				return robot.name.toLowerCase().includes(event.target.value.toLowerCase());})
				});
			
			// console.log(filteredRobots);
			// this.setState({
			// 	robots:filteredRobots
			// 	})

				
	}


		
	render(){

		

		return(
		<div className='tc'>
			<h1 className='f1'>Robofriends</h1>
			<SearchBox f={this.fn}/ >
			<Scroll>
				<CardList robots={this.state.filteredRobots}/>	
			</Scroll>
        </div>
		);

	}
	
} 

export default App;