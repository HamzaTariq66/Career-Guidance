import React, { Component } from "react";
import { Card, Col, Row, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getUniversities,
  deleteUniversity
} from "../../redux/actions/university";

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

class Universities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getUniversities(0);
  }

  getUniversities = offset => {
    // this.props.getCandidates({ offset: offset,...this.state });
    this.props.getUniversities();
  };

  cellClick = (colData, cellMeta) => {
    if (window.getSelection().toString()) {
      return false;
    } else if (cellMeta.colIndex === 1) {
      var data = this.props.universityList;
      var id = data[cellMeta.dataIndex]["id"];
      // console.log('Cell meta ',colData,cellMeta,data[cellMeta.dataIndex])
      this.props.history.push("/universities/update/" + id);
    }
  };

  getFormattedUniversityData = universityList => {
    var formattedUniversityList = [];
    universityList.map(university => {
      formattedUniversityList.push({
        id: university.id,
        title: university.title,
        address: university.address,
        phone: university.phone,
        createdAt: new Date(university.createdAt).toLocaleString(),
        delete: (
          <button
            className="btn btn-ghost-danger"
            onClick={() => this.handleDeleteClick(university.id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        )
      });
    });
    return formattedUniversityList;
  };
  handleDeleteClick = id => {
    if (window.confirm("Are you sure you want to delete ?")) {
      this.props.deleteUniversity(id);
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
    const { universityList } = this.props;

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
            onClick={() => this.props.history.push("/universities/create")}
          >
            <i className="fa fa-plus-circle"></i>
            <span>Add University</span>
          </button>
          <Row>
            <Col xl={12}>
              <Card>
                <MUiTable
                  title={"Universities Listing"}
                  data={this.getFormattedUniversityData(universityList)}
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
  console.log('state');
  console.log(state);
  let resp = state.university;
  return {
    loading: resp.loading,
    universityList: resp.payload,
    status: resp.status,
    error: resp.error,
    errorMessage: resp.errorMessage,
    count: resp.count
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUniversities, deleteUniversity }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Universities);
