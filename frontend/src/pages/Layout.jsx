import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <div className="navBar">
                <Link to="/">
                    <button>Main page</button>
                </Link>

                <Link to="/recepies">
                    <button>Recepies</button>
                </Link>

                <Link to="/meatAndSeafood">
                <button>Meat & Seafood</button>
                </Link>

                <Link to="/vegetarian">
                    <button>Vegetarian</button>
                </Link>

                <Link to="/cuisine">
                    <button>Cuisine</button>
                </Link>

            </div>
            <Outlet />
        </div>
    )
}