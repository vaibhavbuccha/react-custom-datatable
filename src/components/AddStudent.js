import { useState, useEffect } from "react";
import StudentList from "./StudentList";

// eslint-disable-next-line
export default () => {
  const [students, setStudents] = useState([]);
  const studentDetails = {
    name: "",
    rollno: "",
    std: "",
  };
  const [studentData, setStudentData] = useState(studentDetails);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const data = localStorage.getItem("student");
    if (data) {
      console.log("data", JSON.parse(data));
      setStudents(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(studentData);
      setStudents([...students, studentData]);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }
  }, [errors]);

  useEffect(() => {
    if (students) {
      localStorage.setItem("student", JSON.stringify(students));
    }
  }, [students]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
    setErrors(validator(studentData));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validator(studentData));
    setIsSubmit(true);
  };

  const validator = (values) => {
    const err = {};
    const nameRegex =
      /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/g;
    if (!values.name) {
      err.name = "Name is required";
    } else if (!nameRegex.test(values.name)) {
      err.name = "Enter valid name";
    }

    if (!values.rollno) {
      err.rollno = "Roll number is required";
    }
    if (!values.std) {
      err.std = "Standard is required";
    }
    return err;
  };

  return (
    <>
      <h2>Student Add</h2>
      {success ? "Student Added Successfully" : ""}
      <section onSubmit={submitHandler}>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              defaultValue={studentData.name}
              name="name"
              onChange={changeHandler}
            />
            <p>{errors.name}</p>
          </div>
          <div>
            <label>Roll No.</label>
            <input
              type="number"
              defaultValue={studentData.rollno}
              name="rollno"
              onChange={changeHandler}
            />
            <p>{errors.rollno}</p>
          </div>
          <div>
            <label>Standard</label>
            <input
              type="text"
              defaultValue={studentData.std}
              name="std"
              onChange={changeHandler}
            />
            <p>{errors.std}</p>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>

      <StudentList data={students} />
      {/* {JSON.stringify(students)} */}
    </>
  );
};
