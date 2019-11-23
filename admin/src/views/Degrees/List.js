import React, { Component } from "react";
import { Card, Col, Row, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDegrees, deleteDegree } from "../../redux/actions/degree.js";

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
    name: "delete",
    label: "Delete",
    options: {
      sort: false,
      download: false,
      filter: false
    }
  }
];

class Degrees extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getDegrees(0);
  }

  getDegrees = offset => {
    // this.props.getCandidates({ offset: offset,...this.state });
    this.props.getDegrees();
  };

  cellClick = (colData, cellMeta) => {
    if (window.getSelection().toString()) {
      return false;
    } else if (cellMeta.colIndex === 1) {
      var data = this.props.degreeList;
      var id = data[cellMeta.dataIndex]["id"];
      // console.log('Cell meta ',colData,cellMeta,data[cellMeta.dataIndex])
      this.props.history.push("/degrees/update/" + id);
    }
  };

  getFormattedDegreeData = degreeList => {
    var formatteddegreeList = [];
    degreeList.map(degree => {
      formatteddegreeList.push({
        id: degree.id,
        title: degree.title,
        createdAt: new Date(degree.createdAt).toLocaleString(),
        delete: (
          <button
            className="btn btn-ghost-danger"
            onClick={() => this.handleDeleteClick(degree.id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        )
      });
    });
    return formatteddegreeList;
  };
  handleDeleteClick = id => {
    if (window.confirm("Are you sure you want to delete ?")) {
      this.props.deleteDegree(id);
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
    const { degreeList } = this.props;

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
            onClick={() => this.props.history.push("/degrees/create")}
          >
            <i className="fa fa-plus-circle"></i>
            <span>Add Degree</span>
          </button>
          <Row>
            <Col xl={12}>
              <Card>
                <MUiTable
                  title={"Degrees Listing"}
                  data={this.getFormattedDegreeData(degreeList)}
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
  let resp = state.degree;
  return {
    loading: resp.loading,
    degreeList: resp.payload,
    status: resp.status,
    error: resp.error,
    errorMessage: resp.errorMessage,
    count: resp.count
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getDegrees, deleteDegree }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Degrees);
