import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppData from "./AddData";
// import { deleteUser } from "../reducers/action";
import { Modal } from "react-bootstrap";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
  CSpinner,
  CImage,
  CContainer,
  CFormInput,
  CFormRange,
} from "@coreui/react";
import Popup from "./Popup";
import { deleteUser } from "../reducers/action";
// import { confirmAlert } from "react-confirm-alert";
// import "react-confirm-alert/src/react-confirm-alert.css";
// import List from "./components/List";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles({
  table: {
    marginTop: 20,
    minWidth: 900,
  },
});

export default function Home() {
  const [view, setView] = useState(false);
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const handleClose = () => {
    setShow(false);
  };
  const dispatch = useDispatch();
  const userList = useSelector((state) => {
    // console.log("userList", state);
    return state.user.items;
  });

  // const handleClickdelete = (id) => {
  //   confirmAlert({
  //     customUI: ({ onClose }) => {
  //       return (
  //         <div className="custom-ui">
  //           <h1>Are you sure?</h1> <p>You want to delete this file?</p>
  //           <button onClick={onClose} style={{ background: "blue" }}>
  //             No
  //           </button>
  //           <button
  //             style={{ background: "red", margin: "26px" }}
  //             onClick={() => {
  //               dispatch(deleteUser(id));
  //               onClose();
  //             }}
  //           >
  //             Yes, Delete it!
  //           </button>
  //         </div>
  //       );
  //     },
  //   });
  // };
  // const deleteData=(id)=>{

  //   console.log(id)
  // }

  const hide = () => {
    setView(false);
    setId();
  };

  const comparision = (id) => {
    setView(!view);
    setId(id);
  };
  const deleted = () => {
    dispatch(deleteUser(id));
    setView(false);
  };

  return (
    <div>
      <Popup del={view} hide={hide} show={show} deleted={deleted} />
      <Link to="/add">
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "46px" }}
        >
          Add
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">UserName</StyledTableCell>
              <StyledTableCell align="center">Mobile</StyledTableCell>
              <StyledTableCell align="center">Role Key</StyledTableCell>
              <StyledTableCell align="center">Password</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((item, index) => {
              return (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">{item.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.username}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.mobile}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.password}
                  </StyledTableCell>

                  <CButton
                    style={{ background: "blue" }}
                    onClick={() => comparision(item.id)}
                  >
                    Delete
                  </CButton>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
