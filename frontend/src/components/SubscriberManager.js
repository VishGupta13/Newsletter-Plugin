import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UpdateUser from "./UpdateUser";

const SubscriberManager = () => {
  const [userArray, setUserArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  const [letterContent, setLetterContent] = useState("");
  const [subject, setSubject] = useState("");

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const getDataFromBackend = async () => {
    setLoading(true);

    const response = await fetch("http://localhost:5000/subs/getbyowner/"+currentUser._id);
    const data = await response.json();

    console.log(data);
    setUserArray(data);
    setLoading(false);
  };

  const deleteUser = async (id) => {
    console.log(id);

    const response = await fetch("http://localhost:5000/subs/delete/" + id, {
      method: "Delete",
    });
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "User deleted successfully",
      });

      //get data from backend
      getDataFromBackend();
    }
  };

  const updateUser = (user) => {
    console.log(user);
    setUpdateFormData(user);
    setShowUpdateForm(true);
  };
  useEffect(() => {
    getDataFromBackend();
  }, []);

  const sendMail = async (recAddress) => {
    const res = await fetch('http://localhost:5000/util/sendmail', {
      method : 'POST',
      body : JSON.stringify({
        from: "vishgupta130701@gmail.com", // sender address
        to: recAddress, // list of receivers
        subject: subject,
        html : letterContent
      }),
      headers : {
        'Content-Type' : 'application/json'
      }
    })

    console.log(res);
  }

  const sendNewsLetter = () => {
    userArray.forEach(({email}) => {
      console.log('mail sent to '+email);
      sendMail(email);
    })
  }

  const copyText = () => {
    navigator.clipboard.writeText(currentUser._id);
  }

  const displayUser = () => {
    if (loading) {
      return (
        <div>
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </button>
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      );
    } else {
      return userArray.map(({ _id, name, email }) => (
        <tr key={_id}>
          <td>{name}</td>
          <td>{email}</td>
          <td>
            <Button
              className="btn btn-primary"
              onClick={(e) => updateUser({ _id, name, email })}
            >
              {" "}
              <i class="fas fa-pen-nib"></i>
            </Button>
          </td>
          <td>
            <Button className="btn btn-danger"
             onClick={(e) => deleteUser(_id)}>
              <i class="fas fa-trash"></i>{" "}
            </Button>
          </td>
        </tr>
      ));
    }
  };
  return (
    <div className="container pt-5">
      <div className="card">
        <div className="card-header">
          <h4 className="m-0">Your Account</h4>
        </div>
        <div className="card-body">
            <div className="input-group">

              <span class="input-group-text" >Your Plugin Key</span>
              <input type="text" className="form-control" value={currentUser._id} />
              <button className="btn btn-outline-primary" onClick={copyText}>Copy Key</button>
            </div>
        </div>
      </div>
      <h1 className="text-center mt-5">Subscriber Manager</h1>
      <div className="row">
        <div className="col-md">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{displayUser()}</tbody>
          </table>
        </div>
        
      </div>

      <div className='card mt-5'>
        <div className='card-body'>
          <input className='form-control' onChange={e => setSubject(e.target.value)}  />
          <textarea className='form-control mt-4' rows="10" onChange={e => setLetterContent(e.target.value)}  ></textarea>
          <button className='btn btn-primary mt-4' onClick={sendNewsLetter}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriberManager;