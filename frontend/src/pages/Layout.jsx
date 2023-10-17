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
          <button onClick={() => props.setClickedRecipe(null)}>All Recipes</button>
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

        {/*same dropdown as above but for vegetarian and vegan */}

        <Link>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Vegetarian & Vegan
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link to="/category/vegetarian">
                <Dropdown.Item onClick={() => navigate("/category/vegetarian")}>
                  Vegetarian
                </Dropdown.Item>
              </Link>

              <Link to="/category/vegan">
                <Dropdown.Item onClick={() => navigate("/category/vegan")}>
                  Vegan
                </Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Link>

        {/* dropdown to "Mixed Culinary Creations", including the following: breakfast, miscellaneous, pasta, dessert, side, starter. */}

        <Link>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Mixed Culinary Creations
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link to="/category/breakfast">
                <Dropdown.Item onClick={() => navigate("/category/breakfast")}>
                  Breakfast
                </Dropdown.Item>
              </Link>

              <Link to="/category/miscellaneous">
                <Dropdown.Item onClick={() => navigate("/category/miscellaneous")}>
                  Miscellaneous
                </Dropdown.Item>
              </Link>

              <Link to="/category/pasta">
                <Dropdown.Item onClick={() => navigate("/category/pasta")}>
                  Pasta
                </Dropdown.Item>
              </Link>

              <Link to="/category/dessert">
                <Dropdown.Item onClick={() => navigate("/category/dessert")}>
                  Dessert
                </Dropdown.Item>
              </Link>

              <Link to="/category/side">
                <Dropdown.Item onClick={() => navigate("/category/side")}>
                  Side
                </Dropdown.Item>
              </Link>

              <Link to="/category/starter">
                <Dropdown.Item onClick={() => navigate("/category/starter")}>
                  Starter
                </Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Link>

        <Link to="/foodByCountry">
          <button>Food By Country</button>
        </Link>

        {!props.loggedInUser ? (
          <Link to="/login">
            <button onClick={() => props.setIsRegistrating(null)}>Login/Signup</button>
          </Link>
        ) : (
          <Link to="/user">
            <button>{props.loggedInUser.username}</button>
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
}
