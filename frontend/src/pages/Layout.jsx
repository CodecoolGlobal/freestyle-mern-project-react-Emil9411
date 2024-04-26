import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { capitalizeWords } from "../utility/capitalizeWords";

export default function Layout(props) {
  const navigate = useNavigate();
  const meatCategories = ["chicken", "pork", "beef", "lamb", "goat", "seafood"];
  const vegCategories = ["vegetarian", "vegan"];
  const mixedCategories = ["breakfast", "miscellaneous", "pasta", "dessert", "side", "starter"];

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
            {meatCategories.map(c => 
            <Link to= {`/category/${c}`}>
                <Dropdown.Item onClick={() => navigate(`/category/${c}`)}>
                  {capitalizeWords(c)}
                </Dropdown.Item>
              </Link>)}
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
            {vegCategories.map(c => 
              <Link to= {`/category/${c}`}>
                <Dropdown.Item onClick={() => navigate("/category/vegetarian")}>
                  {capitalizeWords(c)}
                </Dropdown.Item>
              </Link>)}
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
              {mixedCategories.map(c => 
              <Link to= {`/category/${c}`}>
                <Dropdown.Item onClick={() => navigate(`/category/${c}`)}>
                  {capitalizeWords(c)}
                </Dropdown.Item>
              </Link>)} 
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
