import React from "react";

function Hero ({name}){
    if(name === 'Alex'){
        throw new Error ('Not a matching name!')
    }
    return(
        <div>
            {name}
        </div>
    )
}
export default Hero