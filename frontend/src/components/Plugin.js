import React from "react";
import { Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import './Plugin.css';
import { Formik } from "formik";


const Plugin = ({ownerId}) => {
  // const navigate = useNavigate();
  const userSubmit = async (formdata) => {
    console.log(formdata);

    // 1. address
    // 2. request method
    // 3. data
    // 4. data forrmat

    // for creating request on backend

    const response = await fetch("http://localhost:5000/subs/add", {
      method: "Post",
      body: JSON.stringify(formdata),
      headers: {
        "content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("Success");
      Swal.fire({
        icon: "success",
        title: "Nice",
        text: "well done!",
      });
      // navigate("/Welcome");
    } else {
      console.log(response.status);
      console.log("something went wrong ");
      Swal.fire({
        icon: "error",
        title: "something went wrong ",
        text: "Wrong",
      });
    }
  };

  return (
    <div className="mycard">
      <Formik initialValues={{
        name: '',
        email: '',
        owner: ownerId,
        createdAt : new Date()
      }}
        onSubmit={userSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>


            <img src="https://icon-library.com/images/email-png-icon/email-png-icon-9.jpg" alt="" className="logo" />
            <Button></Button>
            <h1 className="text-center t">Newsletter</h1>
            <h5 className="mt-4 text-center  t1">Stay tuned with upto date with our latest news and products</h5>

            <TextField
              className="w-100 mt-4 myinput"
              id="name"
              label="Full Name"
              onChange={handleChange}
              value={values.name}
            />
            <TextField
              className="w-100 mt-4 myinput"
              id="email"
              label="Email"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            <Button
              type="Submit"
              variant="contained"
              className="mt-4 w-100 mybtn"
            >
              Subscribe
            </Button>
            <h5 className="mt-3 text-muted text-center">Your Email is safe with us, we don't spam</h5>
          </form>
        )}
      </Formik>

    </div>
  )
}

export default Plugin;
