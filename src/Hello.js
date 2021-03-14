import React,{Component} from 'react';
import 'tachyons'
import './Hello.css'
class Hello extends Component{
	render(){
		return (

			<div className='f1 tc'>
				<h1>hello</h1>
				<p>hello this is my first react Component</p>
				<p>{this.props.greetings}</p>
			</div>


			);
	}
	
}

export default Hello;