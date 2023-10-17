import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDataEdit(props) {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [username, setUsername] = useState(props.loggedInUser.username);
  const [email, setEmail] = useState(props.loggedInUser.email);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== cPassword) {
      return alert("Passwords do not match");
    }

    const response = await fetch(
      `http://localhost:4000/user/update-user/${props.loggedInUser._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      }
    );
    const data = await response.json();
    console.log(data);

    if (data.message) {
      props.setLoggedInUser(data.user);
      navigate("/user");
      return alert("User updated successfully");
    } else {
      return alert(data.error);
    }
  };

  return (
    <div className="regContainer">
      <h1>Edit User Data</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="username">Username</label>
        <br />
        <input
          name="username"
          type="text"
          id="username"
          onChange={(event) => [
            setUsername(event.target.value),
            console.log(event.target.value),
          ]}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          name="password"
          type="password"
          id="password"
          onChange={(event) => [setPassword(event.target.value)]}
          required
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <br />
        <input
          name="confirmPassword"
          type="password"
          id="confirmPassword"
          onChange={(event) => setCPassword(event.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          name="email"
          type="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <button>Update User</button>
      </form>
      <button onClick={() => navigate("/user")}>Cancel</button>
    </div>
  );
}
