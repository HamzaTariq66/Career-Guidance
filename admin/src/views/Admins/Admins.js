import React, { Component } from "react";
import { Card, Col, Row, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAdmins } from "../../redux/actions/admin";

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
    name: "first_name",
    label: "First Name",
    options: {
      sortDirection: "asc",
      sort: true
    }
  },
  {
    name: "last_name",
    label: "Last Name",
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
    name: "email",
    label: "Email",
    options: {
      sort: true
    }
  },
  {
    name: "is_active",
    label: "Active",
    options: {
      sort: true
    }
  }
];

class Admins extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getAdmins(0);
  }
  getAdmins = offset => {
    // this.props.getCandidates({ offset: offset,...this.state });
    this.props.getAdmins();
  };

  cellClick = (colData, cellMeta) => {
    if (window.getSelection().toString()) {
      return false;
    } else if (cellMeta.colIndex === 1) {
      var data = this.props.adminList;
      var id = data[cellMeta.dataIndex]["id"];
      // console.log('Cell meta ',colData,cellMeta,data[cellMeta.dataIndex])
      this.props.history.push("/admins/update/" + id);
    }
  };

  getFormattedAdminData = adminList => {
    var formattedAdminList = [];

    adminList.map(user => {
      formattedAdminList.push({
        first_name: user.first_name,
        last_name: user.last_name,
        createdAt: new Date(user.createdAt).toLocaleString(),
        email: user.email,
        is_active: user.is_active === "true" ? "Yes" : "No",
        is_receive_email: user.is_receive_email ? "Yes" : "No"
      });
    });
    return formattedAdminList;
  };

  options = {
    responsive: "scrollFullHeight",
    selectableRows: "none",
    rowHover: true,
    // print:false,
    // download:false,
    // filter:false,
    // search:false,
    // rowsPerPageOptions :[25,50,100],
    // rowsPerPage:rowsPerPage,
    // viewColumns:false,
    textLabels: {
      body: {
        toolTip: ""
      }
    },
    onCellClick: this.cellClick

    //  serverSide:true,
    //  count: count,
    //  page: page,
    //  onTableChange: this.onTableChange,
  };

  render() {
    const { adminList } = this.props;

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
            onClick={() => this.props.history.push("/admins/sign-up")}
          >
            <i className="fa fa-plus-circle"></i>
            <span>Add Admin</span>
          </button>
          <Row>
            <Col xl={12}>
              <Card>
                <MUiTable
                  title={"Admin Users Listing"}
                  data={this.getFormattedAdminData(adminList)}
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
  let resp = state.admin;
  return {
    loading: resp.loading,
    status: resp.status,
    error: resp.error,
    errorMessage: resp.errorMessage,
    adminList: resp.payload,
    count: resp.count
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAdmins }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admins);
