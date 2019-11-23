import React, { Component } from "react";
import { Card, Col, Row, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCareers, deleteCareer } from "../../redux/actions/career.js";

import MUiTable from "../Datatable/MuiTable";

const columns = [
  {
    name: "id",
    label: "ID",
    options: {
      display: false,
      viewColumns: false
    }
  },
  {
    name: "title",
    label: "Title",
    options: {
      sortDirection: "asc",
      sort: true
    }
  },
  {
    name: "subject",
    label: "Subject",
    options: {}
  },
  {
    name: "delete",
    label: "Delete",
    options: {
      sort: false,
      download: false,
      filter: false
    }
  }
];

class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getCareers(0);
  }

  getCareers = offset => {
    // this.props.getCandidates({ offset: offset,...this.state });
    this.props.getCareers();
  };

  cellClick = (colData, cellMeta) => {
    if (window.getSelection().toString()) {
      return false;
    } else if (cellMeta.colIndex === 1) {
      var data = this.props.careerList;
      var id = data[cellMeta.dataIndex]["id"];
      // console.log('Cell meta ',colData,cellMeta,data[cellMeta.dataIndex])
      this.props.history.push("/careers/update/" + id);
    }
  };

  getFormattedCareerData = careerList => {
    var formattedcareerList = [];
    careerList.map(career => {
      formattedcareerList.push({
        id: career.id,
        title: career.title,
        subject: career.subject,
        createdAt: new Date(career.createdAt).toLocaleString(),
        delete: (
          <button
            className="btn btn-ghost-danger"
            onClick={() => this.handleDeleteClick(career.id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        )
      });
    });
    return formattedcareerList;
  };
  handleDeleteClick = id => {
    if (window.confirm("Are you sure you want to delete ?")) {
      this.props.deleteCareer(id);
    }
  };

  options = {
    responsive: "scrollFullHeight",
    selectableRows: "none",
    rowHover: true,
    textLabels: {
      body: {
        toolTip: ""
      }
    },
    onCellClick: this.cellClick
  };

  render() {
    const { careerList } = this.props;

    if (this.props.loading) {
      return (
        <Spinner
          color="primary"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      );
    } else {
      return (
        <div className="animated fadeIn">
          <button
            type="button"
            className="btn btn-brand btn-linkedin"
            onClick={() => this.props.history.push("/careers/create")}
          >
            <i className="fa fa-plus-circle"></i>
            <span>Add Career</span>
          </button>
          <Row>
            <Col xl={12}>
              <Card>
                <MUiTable
                  title={"Careers Listing"}
                  data={this.getFormattedCareerData(careerList)}
                  columns={columns}
                  options={this.options}
                />
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  let resp = state.career;
  return {
    loading: resp.loading,
    careerList: resp.payload,
    status: resp.status,
    error: resp.error,
    errorMessage: resp.errorMessage,
    count: resp.count
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getCareers, deleteCareer }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Careers);
