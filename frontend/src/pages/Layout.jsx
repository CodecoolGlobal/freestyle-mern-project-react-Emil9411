import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

export default function Layout(props) {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <img
            src="https://icons8.com/icon/2797/home"
            alt="Home"
            className="homeLogo"
          />
        </Link>

        <Link to="/recipes">
          <button onClick={() => props.setClickedRecipe(null)}>Recipes</button>
        </Link>

        <Link>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Meat & Seafood
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate("/category/chicken")}>
                Chicken
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/category/pork")}>
                Pork
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/category/beef")}>
                Beef
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/category/lamb")}>
                Lamb
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/category/goat")}>
                Goat
              </Dropdown.Item>
              <hr />
              <Dropdown.Item onClick={() => navigate("/category/seafood")}>
                Seafood
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Link>

        <Link to="/vegetarian">
          <button>Vegetarian</button>
        </Link>

        <Link to="/dessert">
          <button>Dessert</button>
        </Link>

        <Link to="/foodByCountry">
          <button>Food By Country</button>
        </Link>

        {props.loggedInUser === "" ? (
          <Link to="/logIn">
            <button onClick={() => props.setIsRegistrating(null)}>
              Login/Signup
            </button>
          </Link>
        ) : (
          <Link to="/logedInUser">
            <button>{props.loggedInUser}</button>
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
}
