import React, { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent, 
  TextField,
  Typography,
  Button, 
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import * as Yup from "yup";

export const ValidationForm = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  
  const FormSchema = Yup.object().shape({
    input: Yup.string().required("Required")
  });
  
   const deleteList = (item, i) => {
    const tempData = [...data];
    tempData.splice(i, 1);
    setList(tempData);
    //let newUser = Object.assign({}, user);   
  };
  
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">React curd and validation Input value already exist with formik </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{ input }}
            validationSchema={FormSchema}
            onSubmit={(values, { setSubmitting }) => {
              // alert(JSON.stringify(values, null, 2));
              if (list.includes(values.input)) {
                alert("Input value already exist!!");
                return;
              } else {
                setInput(values);
                const tempData = list;
                tempData.push(values.input);
                setList(tempData);
                setSubmitting(false);
                setInput("");
                return;
              }
            }}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="email">Name</label>
                <Field
                  type="type"
                  name="input"
                  placeholder="User Name"
                  className={`form-control`}
                />
              </div>
              <Button type="submit" className="btn btn-primary btn-block">
                Submit
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
      {list?.map((item, i) => {
        return (
          <li key={i} style={{ marginTop: 20 }}>
            {item}
			 <ClearSharpIcon
                          fontSize="small"
                          color="error"
                          className="f-right pointer"
                          onClick={(e) => deleteList(item, i)}
                        />
          </li>
        );
      })}
    </div>
  );
};


