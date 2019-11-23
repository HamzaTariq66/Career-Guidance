import React, { Component } from "react";
import { Card, Col, Row, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getColleges, deleteCollege } from "../../redux/actions/college";

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
    name: "address",
    label: "Address",
    options: {
      sort: true
    }
  },
  {
    name: "phone",
    label: "Phone",
    options: {
      sort: true
    }
  },
  {
    name: "createdAt",
    label: "Created At",
    options: {
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

class Colleges extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getColleges(0);
  }

  getColleges = offset => {
    // this.props.getCandidates({ offset: offset,...this.state });
    this.props.getColleges();
  };

  cellClick = (colData, cellMeta) => {
    if (window.getSelection().toString()) {
      return false;
    } else if (cellMeta.colIndex === 1) {
      var data = this.props.collegeList;
      var id = data[cellMeta.dataIndex]["id"];
      // console.log('Cell meta ',colData,cellMeta,data[cellMeta.dataIndex])
      this.props.history.push("/colleges/update/" + id);
    }
  };

  getFormattedCollegeData = collegeList => {
    var formattedcollegeList = [];
    collegeList.map(college => {
      formattedcollegeList.push({
        id: college.id,
        title: college.title,
        address: college.address,
        phone: college.phone,
        createdAt: new Date(college.createdAt).toLocaleString(),
        delete: (
          <button
            className="btn btn-ghost-danger"
            onClick={() => this.handleDeleteClick(college.id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        )
      });
    });
    return formattedcollegeList;
  };
  handleDeleteClick = id => {
    if (window.confirm("Are you sure you want to delete ?")) {
      this.props.deleteCollege(id);
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
    const { collegeList } = this.props;

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
            onClick={() => this.props.history.push("/colleges/create")}
          >
            <i className="fa fa-plus-circle"></i>
            <span>Add College</span>
          </button>
          <Row>
            <Col xl={12}>
              <Card>
                <MUiTable
                  title={"Colleges Listing"}
                  data={this.getFormattedCollegeData(collegeList)}
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
  let resp = state.college;
  return {
    loading: resp.loading,
    collegeList: resp.payload,
    status: resp.status,
    error: resp.error,
    errorMessage: resp.errorMessage,
    count: resp.count
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getColleges, deleteCollege }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Colleges);
