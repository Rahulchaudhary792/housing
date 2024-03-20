import React from 'react'
function House(props){
    return(
        <>  
		<div style={{"display": "flex", "justifyContent": "center", "alignItems": "center"}}>
            <img alt="house" style={{"width": "300px"}} src={props.himg}/>
		</div>
            <p style={{"textAlign": "Center"}}>This is a beautiful house with name {props.hname}</p>
        </>
    )
}

export default House;