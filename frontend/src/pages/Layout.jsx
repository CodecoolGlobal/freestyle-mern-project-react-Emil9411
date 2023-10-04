import { Outlet, Link } from "react-router-dom";

export default function Layout(props) {
    return (
        <div>
            <div className="navBar">
                <Link to="/">
                    <button>Main page</button>
                </Link>

                <Link to="/recipes">
                    <button onClick={() => props.setClickedRecipe(null)}>Recipes</button>
                </Link>

                <Link to="/meatAndSeafood">
                <button>Meat & Seafood</button>
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

                <Link to="/logIn">
                    <button onClick={() => props.setIsRegistrating(null)}>Login/Signup</button>
                </Link>

            </div>
            <Outlet />
        </div>
    )
}