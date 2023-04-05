import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { schoolname, study, date } = this.props;
        return (
            <div>
                
                    <h1>{schoolname}</h1>
                    <h1>{study}</h1>
                    <h1>{date}</h1>
                
            </div>
        )
    }
}



export default Education;