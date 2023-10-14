import Login from "../component/Login";

export default function User(props) {
  return (
    <Login
      isRegistrating={props.isRegistrating}
      setIsRegistrating={props.setIsRegistrating}
      setEmail={props.setEmail}
      email={props.email}
      setPassword={props.setPassword}
      password={props.password}
      setLoggedInUser={props.setLoggedInUser}
    />
  );
}