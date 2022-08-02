import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";

const Preview = ({ownerkey}) => {

 const suscribeSubmit=(data)=>{
 console.log(data);
 

 fetch("http://localhost:5000/Suscribe/sscrib",{
  method:"POST",
  body:JSON.stringify(data),
  headers:{
    "Content-Type": "application/json",
  }
 }).then((res) => {
  if (res.status===200) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "preview successful",
    });
  }else{
    Swal.fire({
      icon: "error",
      title: "Oops",
      text: "some error occured",
    });
  }
})
 }

  return (
    <div className="p-5 ">
      <div className="container">
        <h1>Key : {ownerkey}</h1>
        <div className="card">
          <div className="card-body">
            <h2>preview box heading</h2>
            <hr />
            <Formik
            initialValues={{
              name:"",
              email:"",
              owner:ownerkey,
              createdAt : new Date()
            }}
            onSubmit={suscribeSubmit}
            >
           {({values,handleChange,handleSubmit})=>(
            <form onSubmit={handleSubmit}>
            <label className="mt-4">Username</label>
            <input
              className="form-control"
              placeholder="name"
              value={values.name}
              id="name"
              onChange={handleChange}
            />
            <label className="mt-4">owner</label>
            <input
              className="form-control"
              placeholder="owner"
              value={values.owner}
              id="owner"
              onChange={handleChange}
            />
            <label className="mt-4">Email</label>
            <input
              className="form-control"
              placeholder="email"
              value={values.email}
              id="email"
              onChange={handleChange}
            />
             <button className="btn btn-primary mt-5" type="Submit">
                  Submit
                </button>
             </form>
           )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
