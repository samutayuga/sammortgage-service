import { ReactNode } from "react";

//import React from 'react'
import React from 'react'

const Greeting = (props) =>{
//    const {
//     message='World'
//    } = props;
const {message}=props;
    return (
        <div>
            Hello {message}
        </div>
    );
}

export default Greeting;