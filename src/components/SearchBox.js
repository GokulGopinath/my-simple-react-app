import React from 'react';
 
const SearchBox= (props)=>{
	const fn=props.f;
	return(
		<div classNamel='pa2'>
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			placeholder='search robot'
			onChange={fn}
			/>

		</div>
		);
}
export default SearchBox;