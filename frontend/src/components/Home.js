import React from 'react';
import "./Home.css";
import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import Swal from 'sweetalert2';

const userSubmit = (formdata) => {
    fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Success!!👍",
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Login Failed!!👍",
        });
      }
    });
  };

const Home = () => {

  return (
    <div className='center1'>
        <div className='parent'>
        <Formik initialValues={{
            username : '',
            email : '',
        }} 
        onSubmit={userSubmit}
        >
            { ( { values, handleChange, handleSubmit } ) => (
                <form onSubmit={handleSubmit}>
                    <TextField label="Username" id="username" onChange={handleChange} value={values.username} />    
                    <TextField label="Email Address" id="email" onChange={handleChange} value={values.email} />      

                    <Button type='submit'>Submit</Button>
                </form>
            ) }
        </Formik>
        </div>
    </div>
  )
}

export default Home