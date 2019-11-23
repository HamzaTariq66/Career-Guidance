import React, { Component } from "react";
import { Card, Col, Row, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSchools, deleteSchool } from "../../redux/actions/school";

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

class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getSchools(0);
  }

  getSchools = offset => {
    // this.props.getCandidates({ offset: offset,...this.state });
    this.props.getSchools();
  };

  cellClick = (colData, cellMeta) => {
    if (window.getSelection().toString()) {
      return false;
    } else if (cellMeta.colIndex === 1) {
      var data = this.props.schoolList;
      var id = data[cellMeta.dataIndex]["id"];
      // console.log('Cell meta ',colData,cellMeta,data[cellMeta.dataIndex])
      this.props.history.push("/schools/update/" + id);
    }
  };

  getFormattedSchoolData = schoolList => {
    var formattedschoolList = [];
    schoolList.map(school => {
      formattedschoolList.push({
        id: school.id,
        title: school.title,
        address: school.address,
        phone: school.phone,
        createdAt: new Date(school.createdAt).toLocaleString(),
        delete: (
          <button
            className="btn btn-ghost-danger"
            onClick={() => this.handleDeleteClick(school.id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        )
      });
    });
    return formattedschoolList;
  };
  handleDeleteClick = id => {
    if (window.confirm("Are you sure you want to delete ?")) {
      this.props.deleteSchool(id);
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
    const { schoolList } = this.props;

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
            onClick={() => this.props.history.push("/schools/create")}
          >
            <i className="fa fa-plus-circle"></i>
            <span>Add School</span>
          </button>
          <Row>
            <Col xl={12}>
              <Card>
                <MUiTable
                  title={"Schools Listing"}
                  data={this.getFormattedSchoolData(schoolList)}
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
  let resp = state.school;
  return {
    loading: resp.loading,
    schoolList: resp.payload,
    status: resp.status,
    error: resp.error,
    errorMessage: resp.errorMessage,
    count: resp.count
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getSchools, deleteSchool }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schools);
