import { useState } from "react";

export default function Registration(props) {
    
    const [pass, setPass] = useState("");
    const [cPass, setCPass] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (pass !== cPass) {
        return alert("Passwords do not match");
      }

    const { username, email, password } = props;
    const response = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    console.log(data);

    if (data){
        props.setIsRegistrating(null);
        return alert("User registered successfully") 
    }
  };

  return (
    <div className="regContainer">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          name="username"
          type="text"
          id="username"
          onChange={(event) => [props.setUsername(event.target.value), console.log(event.target.value)]}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          name="password"
          type="password"
          id="password"
          onChange={(event) => [props.setPassword(event.target.value), setPass(event.target.value)]}
          required
        />
        <br />
        <label htmlFor="password">Confirm Password</label>
        <br />
        <input
          name="cpassword"
          type="password"
          id="cpassword"
          onChange={(event) => [props.setCPassword(event.target.value), setCPass(event.target.value)]}
          required
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          name="email"
          type="email"
          id="email"
          onChange={(event) => props.setEmail(event.target.value)}
          required
        />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
