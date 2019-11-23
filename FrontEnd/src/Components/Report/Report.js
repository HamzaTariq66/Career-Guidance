import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Report extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPie: {
        labels: props.subjects,
        datasets: [
          {
            data: props.marks,
            backgroundColor: ["#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
            hoverBackgroundColor: ["#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
          }
        ]
      }
    };
  }
  render() {
    return (
      <MDBContainer>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default Report;
