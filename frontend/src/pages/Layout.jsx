import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

export default function Layout(props) {
  const navigate = useNavigate();
  return (
    <div>
      <nav id="navBar" className="navbar sticky-top navbar-expand-lg navbar-light">
        <Link to="/">
          <img src="logo_copy.png" alt="Home" width="60px" />
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
              <Link to="/category/chicken">
                <Dropdown.Item onClick={() => navigate("/category/chicken")}>
                  Chicken
                </Dropdown.Item>
              </Link>

              <Link to="/category/pork">
                <Dropdown.Item onClick={() => navigate("/category/pork")}>
                  Pork
                </Dropdown.Item>
              </Link>

              <Link to="category/beef">
                <Dropdown.Item onClick={() => navigate("/category/beef")}>
                  Beef
                </Dropdown.Item>
              </Link>

              <Link to="category/lamb">
                <Dropdown.Item onClick={() => navigate("/category/lamb")}>
                  Lamb
                </Dropdown.Item>
              </Link>

              <Link to="category/goat">
                <Dropdown.Item onClick={() => navigate("/category/goat")}>
                  Goat
                </Dropdown.Item>
              </Link>

              <hr />

              <Link to="category/seafood">
                <Dropdown.Item onClick={() => navigate("/category/seafood")}>
                  Seafood
                </Dropdown.Item>
              </Link>
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

        {!props.loggedInUser ? (
          <Link to="/logIn">
            <button onClick={() => props.setIsRegistrating(null)}>
              Login/Signup
            </button>
          </Link>
        ) : (
          <Link to="/loggedInUser">
            <button>{props.loggedInUser.username}</button>
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
}
