import React from "react";
import styled from 'styled-components';
//import './Person.css';

// styled way to define component
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    
    @media (min-width: 1000px) {
        width: '800px'
    }
`; // adjust the px values (@media) according to your monitor resolution to see the difference

// functional based component
const person = (props) => {

    return (
        // must return single root element
        //use the defined (styled) component
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name}, and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    );
};

export default person;