import React from 'react';

export default class Form extends React.Component {
    validateForm = (event) => {
        var x = document.forms["myForm"]["inputName"].value;
        if (x == "") {
            alert("Name must be filled out");
            return false;
        }
    }

    render() {
        return (
            <form name="myForm" onSubmit={this.validateForm}>
                <p>Enter your name:</p>
                <input
                    type="text"
                    name="inputName"
                />
                <input type="submit" value="Submit!"/>

            </form>

        )
    }

}





