import React from 'react';
import "./form.css"

export default class Form extends React.Component {
    validateForm = (event) => {
        var x = document.forms["myForm"]["articleID"].value;
        var y = document.forms["myForm"]["articleTitle"].value;
        var z = document.forms["myForm"]["articleTxt"].value;
        if (x === "" || y === "" || z === "") {
            alert("All data must be filled out!");
            return false;
        }
    }

    render() {
        return (
            <div className="form-container">
                <div className="form">
                    <h1>Article addition form</h1>
                    <form className="myForm" name="myForm" onSubmit={this.validateForm}>
                        <p>Enter article ID:</p>
                        <input type="text" name="articleID"/>
                        <p>Enter article title:</p>
                        <input type="text" name="articleTitle"/>
                        <p>Enter article text:</p>
                        <textarea name="articleTxt" style={{height:400}}/><br/><br/>
                        <input type="submit" value="Submit article"/>
                    </form>
                </div>
            </div>

        );
    }

}
