import React, { Component } from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import General from "../General/General";

class App extends Component {
  constructor(props) {
    super(props); 


  }



  render() {
    return (
      <div>
        <General name="sthav" email="sthav@gmail.com" phone="8197549029"/>
        <Education schoolname="nps" study="science" date="2016" />
        <Experience company="yerado" position="BDA" tasks="B-PLan" startdate="june" enddate="tbd" />
      </div>
    )
  }
}


export default App;