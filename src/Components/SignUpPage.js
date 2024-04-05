import React, { useState } from "react";
import { signup } from "../Services/user-services";

function SignupPage() {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });
  const [error, setError] = useState("");

  // const history = useHistory();

  const handleChange = (event) => {
    try {
      const { name, value } = event.target;

      if (!value) {
        setError("Please fill all fields");
        return;
      }
      setFormData({ ...formData, [name]: value }); //here spread array used to get the all actual data . but in name it will only contains only actual value
      // when u r changing value of pass then in value pass will be set and when u r trying to change username then name will contains username 
      setError("");
    } catch (error) {
      console.error("Signup failed:");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform signup logic, such as calling an API endpoint
    // For simplicity, let's just log the form data to the console
    console.log(formData);

    signup(formData)
      .then((res) => {
        console.log(res);
        console.log("log success");
        window.location.href = "/Login";
      })
      .catch((error) => {
        console.error();
        window.location.href = "/Login"; ///render from one page to another
      });
  };

  return (
    <div className="signup-container ">
      <div className="card">
        <div className="card-body">
          <h2>Signup</h2>
          <form>
            <label>
              ID:
              <input
                type="text"
                name="id"
                value={formData.id} //used to binding with id 
                onChange={handleChange} //used to two way binding 
              />
            </label>
            <br />
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit" onClick={handleSubmit}>
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
