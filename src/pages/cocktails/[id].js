import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


function CocktailsDetails() {
    const { id } = useRouter().query;
    const [cocktail, setCocktail] = useState([]);

    useEffect(() => {
        getCocktail()
    }, [id])

    const getCocktail = async () => {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json()
        setCocktail(data.drinks)
    }

    return (
        <div>
            <h1>CocktailsDetails</h1>
            {cocktail.map((drink) => (
                <ul key={drink.idDrink}>
                    <h2>{drink.strDrink}</h2>
                    <Image src={drink.strDrinkThumb} width={100} height={100} alt={drink.strDrink} />
                    <p>{drink.strIngredient1}</p>
                    <p>{drink.strIngredient2}</p>
                    <p>{drink.strIngredient3}</p>
                    <p>{drink.strIngredient4}</p>
                    <p>{drink.strIngredient5}</p>
                    <p>{drink.strIngredient6}</p>
                    <p>{drink.strIngredient7}</p>
                    <p>{drink.strIngredient8}</p>
                    <p>{drink.strIngredient9}</p>
                    <p>{drink.strIngredient10}</p>
                </ul>
            ))}
        </div>
    )
}

export default CocktailsDetails