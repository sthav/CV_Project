import React, { Component } from "react";


class General extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, email, phone } = this.props;
        return (
            <div>

                <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{phone}</h1>

            </div>



        )
    }

}

export default General;