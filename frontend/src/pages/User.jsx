import { useState } from "react";
import Registration from "../component/Registration";
import Login from "../component/Login";

export default function User(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cPassword, setCPassword] = useState("");

  return !props.isRegistrating ? (
    <Login
      isRegistrating={props.isRegistrating}
      setIsRegistrating={props.setIsRegistrating}
      setEmail={setEmail}
      email={email}
      setPassword={setPassword}
      password={password}

    />
  ) : (
    <Registration
      setUsername={setUsername}
      username={username}
      setPassword={setPassword}
      cPassword={cPassword}
      setCPassword={setCPassword}
      password={password}
      setEmail={setEmail}
      email={email}
      setIsRegistrating={props.setIsRegistrating}
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
