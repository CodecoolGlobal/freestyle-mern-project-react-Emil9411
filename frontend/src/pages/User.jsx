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

// useffect to fetch user data, login data validation, if okay, pass user data to layout, if not, display error message
// if user is logged in, display user's username, with arrow to dropdown menu, for settings, logout, favorites
// if user is not logged in, display login button, which will take user to login page
// show add to favorites button on recipe page, if user is logged in

/* navigálás belépés után
import { useHistory } from "react-router-dom";

// ...

const history = useHistory();

const handleSuccessfulLogin = () => {
  history.push("/dashboard");
};
*/
