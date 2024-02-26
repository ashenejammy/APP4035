import React from 'react'

const Greet =props=>{
    console.log(props)
    return (
        <div>
            <h1>
                 {props.dets} 
            </h1>
            {props.personal}
            <h1>
                 {props.edu} 
            </h1>
            {props.education}
            <h1>
                 {props.exp} 
            </h1>
            {props.workexp}
            <h1>
                 {props.hobbs} 
            </h1>
            {props.hobbies}
            <h1>
                 {props.refs} 
            </h1>
            {props.referees}
        </div>
    )
}
export default Greet