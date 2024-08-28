import React from "react";
import Child from './Child';
import Child2 from './Child2';

function Parent(){
    return(
        <div> 
            <h1>This is the Parent Component</h1>
            <Child/>
            <Child2/>
        </div>
    );
}

export default Parent;

