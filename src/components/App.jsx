import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function update(event) {
    const { name, value } = event.target;
    setContact((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
        {contact.email}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={update}
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          name="lName"
          onChange={update}
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          name="email"
          onChange={update}
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
