import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isvalid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    const enteredText = event.target.value.trim(); // Trim whitespace from the input value

    if (enteredText.length > 0) {
      // Check if trimmed input value has length greater than 0
      setIsValid(true); // Set isValid to true if input value is not empty
    }

    setEnteredValue(enteredText); // Update enteredValue state with trimmed input value
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //it is basically used to validation when user submitted with blank inputbox then it will set setValid as false
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* below code is used to apply the dynamic css class to label working of it if in inputbox the value is valis 
      the form control css class will apply otherwise invalid class will dynamically applied  */}

      <div className={`form-control ${!isvalid ? "invalid" : ""}`}>
        {/* used ternary operator to set the color of label for validation purpose 
        is user not entered anything user tries to submit then it will show in red */}

      {/* this is using  css module  */}
      {/* <div className={`${styles [form-control]}`}>  */}

        <label>Course Goal</label>

        {/* Setting background and border also */}
        <input
        
          // this is dynamic inline css
          // style={{
          //   borderColor: !isvalid ? "red" : "black",
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
