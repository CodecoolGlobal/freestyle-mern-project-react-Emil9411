import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const { email, password } = props;
    const response = await fetch("http://localhost:4000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);

    if (data.message) {
      props.setLoggedInUser(data.user.username);
      navigate("/");
      return alert("User logged in successfully");
    } else {
      return alert(data.error);
    }
  };

  return (
    <div>
      <h1>Log-In</h1>
      <form onSubmit={handleLogin} className="loginForm">
        <label htmlFor="email">E-mail</label>
        <br />
        <input
          name="email"
          type="email"
          id="email"
          onChange={(event) => props.setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          name="password"
          type="password"
          id="password"
          onChange={(event) => props.setPassword(event.target.value)}
        />
        <br />
        <button>Login</button>
      </form>
      <h3>Don't have an account?</h3>
      <button
        onClick={() => [props.setIsRegistrating(true), navigate("/register")]}
      >
        Register
      </button>
    </div>
  );
}
