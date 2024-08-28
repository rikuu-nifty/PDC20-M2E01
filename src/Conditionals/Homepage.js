import React from 'react';
import UserGreetings from './UserGreetings';

function Homepage(){
   return(
        <div>
            <UserGreetings isLoggedIn={true}/>
        </div>
    );
}

export default Homepage;