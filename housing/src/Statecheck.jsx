import React, { useState }  from 'react'

const Statecheck = () => {
	const [count, setCount] = useState(0);
	function incrementCount(){
		setCount(count+1)
	}

	function deccrementCount(){
		setCount(count-1)
	}
  return ( 
	<>
		<button onClick={incrementCount}>+</button>
			{count}
		<button onClick={deccrementCount}>-</button>
	</>
  )
}

export default Statecheck
