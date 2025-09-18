import { useState } from "react";
export default function MyForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    isStudent: false,
    country: "",
    gender: "",
    personalInfo: "",
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formInputs);
      }}
    >
      <label>Name:</label>
      <input
        onChange={(event) => {
          setFormInputs({ ...formInputs, name: event.target.value });
        }}
        value={formInputs.name}
      ></input>

      <hr></hr>
      <label>Email:</label>
      <input
        onChange={(event) => {
          setFormInputs({ ...formInputs, email: event.target.value });
        }}
        value={formInputs.email}
      ></input>

      <hr></hr>
      <label>are you a student?</label>
      <input
        type="checkbox"
        checked={formInputs.isStudent}
        onChange={(event) => {
          setFormInputs({ ...formInputs, isStudent: event.target.checked });
        }}
      ></input>

      <hr></hr>

      <select
        onChange={(event) => {
          setFormInputs({ ...formInputs, country: event.target.value });
        }}
      >
        <option>Sweeden</option>
        <option>USA</option>
        <option>Germany</option>
      </select>

      <hr></hr>
      <label>Male</label>
      <input
        value="male"
        type="radio"
        name="gender"
        checked={formInputs.gender == "male"}
        onChange={(event) => {
          setFormInputs({ ...formInputs, gender: event.target.value });
        }}
      ></input>

      <label>Female</label>
      <input
        value="female"
        type="radio"
        name="gender"
        checked={formInputs.gender == "female"}
        onChange={(event) => {
          setFormInputs({ ...formInputs, gender: event.target.value });
        }}
      ></input>
      <textarea
        onChange={(event) => {
          setFormInputs({ ...formInputs, personalInfo: event.target.value });
        }}
        value={formInputs.personalInfo}
      ></textarea>

      <button>Submit</button>
    </form>
  );
}
