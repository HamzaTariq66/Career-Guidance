import React, { Component } from "react";
import { Card, Col, Row, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFields, deleteField } from "../../redux/actions/field.js";

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
    name: "degree",
    label: "Degree",
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

class Fields extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getFields(0);
  }

  getFields = offset => {
    // this.props.getCandidates({ offset: offset,...this.state });
    this.props.getFields();
  };

  cellClick = (colData, cellMeta) => {
    if (window.getSelection().toString()) {
      return false;
    } else if (cellMeta.colIndex === 1) {
      var data = this.props.fieldList;
      var id = data[cellMeta.dataIndex]["id"];
      // console.log('Cell meta ',colData,cellMeta,data[cellMeta.dataIndex])
      this.props.history.push("/fields/update/" + id);
    }
  };

  getFormattedFieldData = fieldList => {
    var formattedfieldList = [];
    fieldList.map(field => {
      formattedfieldList.push({
        id: field.id,
        title: field.title,
        degree: field.degree,
        createdAt: new Date(field.createdAt).toLocaleString(),
        delete: (
          <button
            className="btn btn-ghost-danger"
            onClick={() => this.handleDeleteClick(field.id)}
          >
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        )
      });
    });
    return formattedfieldList;
  };
  handleDeleteClick = id => {
    if (window.confirm("Are you sure you want to delete ?")) {
      this.props.deleteField(id);
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
    const { fieldList } = this.props;

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
            onClick={() => this.props.history.push("/fields/create")}
          >
            <i className="fa fa-plus-circle"></i>
            <span>Add Field</span>
          </button>
          <Row>
            <Col xl={12}>
              <Card>
                <MUiTable
                  title={"Fields Listing"}
                  data={this.getFormattedFieldData(fieldList)}
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
  let resp = state.field;
  return {
    loading: resp.loading,
    fieldList: resp.payload,
    status: resp.status,
    error: resp.error,
    errorMessage: resp.errorMessage,
    count: resp.count
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getFields, deleteField }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fields);
