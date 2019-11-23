import MUIDataTable from "mui-datatables";
import React, { Component } from 'react';
// import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './muidatatable.css';

export default class MUiTable extends Component {

  // getMuiTheme = () => createMuiTheme({

  //   overrides: {

  //     MUIDataTableBody:{
  //       emptyTitle:{
  //         fontSize: 14,
  //       }
  //     },
  //     MUIDataTableHeadCell: {
  //       fixedHeader: {
  //         fontSize: 14,
  //         paddingTop:10,
  //         paddingBottom:10,
  //         color: 'black', 
  //         fontWeight:'bold'

  //       }

  //     },
  //     MUIDataTable:{
  //       responsiveScroll:{
  //           maxHeight:'none'
  //     }
  //   },
  //     MUIDataTableBodyCell: {
  //       root: {
  //         color: 'black', 
  //         fontSize: 13,
  //         paddingTop:5,
  //         paddingBottom:5,        
  //         // minWidth:120,

  //       }

  //     }
  //    ,    
  //     MuiTableCell: {
  //       root: {
  //         color: 'black', 
  //         fontSize: 13,
  //         paddingLeft:10,
  //         paddingRight:10,
  //         textOverflow:'ellipsis',
  //         overflow: 'hidden',
  //         whiteSpace: 'nowrap',
  //         maxWidth: 200,
  //         firstChild : {
  //           color: 'red'
  //         }
  //       }

  //     },
  //     MUIDataTableToolbar: {
  //       root: {
  //         minHeight:0,
  //       }

  //     },
  //     MUIDataTableBodyRow:{
  //       root: {
  //         height:'initial',
  //       }
  //     },
  //     MUIDataTableHeadRow:{
  //       root: {
  //         height:'initial',
  //       }
  //     },


  //   }
  // })

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.data === nextProps.data) {
      return false
    }
    else {
      return true
    }

  }
  render() {

    return (
      <MUIDataTable
        className='muitable'
        title={this.props.title}
        data={this.props.data}
        columns={this.props.columns}
        options={this.props.options}
      />
    );

  }
}