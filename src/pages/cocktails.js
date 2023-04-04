import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export async function getServerSideProps(context) {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
    const data = await res.json()

    return {
        props: { data },
    }
}

function Cocktails({ data }) {
    const [cocktails, setCocktails] = useState(data.drinks)

    const getCocktailsBySearch = async (e) => {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e.target.value}`)
        const data = await res.json()
        setCocktails(data.drinks);
        console.log("cocktails", cocktails);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("cocktails", cocktails);
    }


    console.log("data :", data);
    return (
        <div>
            <h1>Cocktails</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={getCocktailsBySearch} />
                <Link href={"/results"}>
                    <button>Search</button>
                </Link>
            </form>
            <ul>
                {data.drinks.map((drink) => (
                    <li key={drink.idDrink}>
                        <h2>{drink.strDrink}</h2>
                        <Link href={`/cocktails/${drink.idDrink}`}>
                            <Image src={drink.strDrinkThumb} width={100} height={100} alt={drink.strDrink} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cocktails