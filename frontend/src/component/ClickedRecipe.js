import { useNavigate } from "react-router-dom"
export default function ClickedRecipe({ clickedRecipe, setClickedRecipe, page }) {
    const navigate = useNavigate();

    if (!clickedRecipe) {
        return <h2>Loading recipes..</h2>
    }

    return (
        <>
            <h2>{clickedRecipe.name}</h2>
            <button onClick={() => [setClickedRecipe(null), navigate(`${page}`)]}>Back</button>
        </>
    )
}