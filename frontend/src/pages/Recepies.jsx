import { useEffect, useState } from "react";
export default function Recepies() {
    const [recepies, setRecepies] = useState(null);
    const [clickedRecepie, setClickedRecepie] = useState(false);

    useEffect(() => {
        const fetchRecepies = async () => {
            const recepiesResponse = await fetch("http://localhost:4000/api/v1");
            const recepiesData = await recepiesResponse.json();
            setRecepies(recepiesData);
            console.log(recepiesData);
        };
        fetchRecepies();
    }, [])

    if (!recepies) {
        return <h2>Recepies are loading...</h2>
    }

    return (
        <div className="recepiesContainer">
            <h1>Recepies</h1>
            {recepies.map((recepie) => {
                return (
                    <section className="recepie">
                        <h3>{recepie.name}</h3>
                        <img src={recepie.strMealThumb} alt={recepie.name}></img>
                    </section>
                )
            })}
        </div>
    )
}