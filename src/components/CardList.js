import React from 'react';
import Card from './Card'

const CardList =({robots}) =>{
	// {robots}=props.robots; Why it is not working

	const cardArray=robots.map( (value,i) =>{

		return(<Card key={robots[i].id} robots={value}/>);
		// return(<Card robots={robots[i]}/>);

	});
return(
	<div>
		{cardArray    // note that no fn call 
		}
	</div>
);
}

export default CardList;