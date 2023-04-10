import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import shortid from "shortid"
import { useDispatch } from "react-redux";
import { userRegister } from "../reducers/action";
import {useNavigate} from "react-router-dom";
import {
  Button,
  Collapse,
  FormLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AppData() {
  // const [inputField,setInputField]=useState({
  //   name: "",
  //   email: "",
  //   username: "",
  //   mobile: "",
  //   role: "",
  //   password: "",
  // })
  const classes = useStyles();
  const dispatch = useDispatch();
  const history=useNavigate();
  const signUpSchema = Yup.object({
    name: Yup.string()
      .min(4)
      .max(15)
      .required(" please enter your title min 10 character"),

    email: Yup.string()
      .min(4)
      .max(10)
      .required(" please enter your title min 8 character"),
    username: Yup.string()
      .min(5)
      .max(8)
      .required("username must be 8 character"),
    mobile: Yup.string().min(5).max(10).required("required 10 character"),
    password: Yup.string()
      .min(7)
      .max(12)
      .required("password atleast 7 to 12 character"),
    role: Yup.mixed().required("Please select Role Key"),
  });
  const initialValues = {
    name: "",
    email: "",
    username: "",
    mobile: "",
    role: "",
    password: "",
  };
  // const inputHandler=(e)=>{
  //   setInputField({...inputField,[e.target.name]:e.target.value})
  // }
        Object.assign(initialValues,{id:shortid.generate()})

  const { errors, touched, handleBlur, handleChange, handleSubmit} = useFormik(
    {
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (val) => {
        // console.log(val);
        // object.assign(initialValues,{id:shortid.generate()})
        // console.log(shortid)
        dispatch(userRegister(val))
        history('/')
      },
    }
  );
  
  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        style={{ marginLeft: "36%" }}
        onSubmit={handleSubmit}
      >
        <div>
          <h1 style={{ marginLeft: "16%" }}>DATA</h1>
          <div>
            <TextField
              style={{ width: "43%" }}
              name="name"
              label="Name"
              type="name"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.name && touched.name ? (
              <p style={{ color: "red" }}>{errors.name}</p>
            ) : null}

            <br />
            <TextField
              style={{ width: "43%" }}
              name="email"
              id="outlined-number"
              label="email"
              type="email"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : null}
            <br />

            <TextField
              style={{ width: "43%" }}
              name="username"
              id="outlined-number"
              label="username"
              type="username"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username ? (
              <p style={{ color: "red" }}>{errors.username}</p>
            ) : null}
            <br />

            <TextField
              style={{ width: "43%" }}
              name="mobile"
              id="outlined-number"
              label="Mobile"
              type="mobile"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            {errors.mobile && touched.mobile ? (
              <p style={{ color: "red" }}>{errors.mobile}</p>
            ) : null}

     
            <select
              style={{ width: "43%", height: "49px", marginLeft: "1%" }}
              onChange={handleChange}
              onBlur={handleBlur}
              id="role"
              name="role"
            >
              <option value="select">Select</option>
              <option value="saab">saab</option>
              <option value="fiat">fiat</option>
              <option value="audi">audi</option>
            </select>
            {errors.role && touched.role ? (
              <p style={{ color: "red" }} className="">
                {errors.role}{" "}
              </p>
            ) : null}
            <br />

            <TextField
              style={{ width: "43%" }}
              name="password"
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p style={{ color: "red" }}>{errors.password}</p>
            ) : null}
          </div>
          <Button variant="contained" color="primary" type="submit" >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
