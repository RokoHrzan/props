import React from "react";

export default class UserClass extends React.Component
{
    render(){
        const { name, age } = this.props;
        return (
            <>
               <p>Pozdrav ja sam {name}, imam {age} godina.</p>
            </>
        )
    }
}