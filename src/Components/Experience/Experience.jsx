import React, { Component } from "react";

class Experience extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        const {company, position, tasks, startdate, enddate} = this.props;
        return (
            <div>
                
                    <h1>{company}</h1>
                    <h1>{position}</h1>
                    <h1>{tasks}</h1>
                    <h1>{startdate}</h1>
                    <h1>{enddate}</h1>
                
            </div>

        )
    }
}



export default Experience;