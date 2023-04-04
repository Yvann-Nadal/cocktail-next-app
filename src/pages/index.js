import Image from "next/image";

export async function getServerSideProps(context) {
  const resRandom = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  const dataRandom = await resRandom.json()
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
  const data = await res.json()

  return {
    props: { dataRandom, data },
  }
}

export default function Home({ dataRandom, data }) {

  const cocktailsCut = data.drinks.slice(data.drinks.length - 6,)
  return (
    <>
      <h1>Home</h1>
      <Image src={dataRandom.drinks[0].strDrinkThumb} width={100} height={100} alt={dataRandom.drinks[0].strDrink} />
      <ul>
        {cocktailsCut.map((drink) => (
          <li key={drink.idDrink}>
            <h2>{drink.strDrink}</h2>
            <Image src={drink.strDrinkThumb} width={100} height={100} alt={drink.strDrink} />
          </li>
        ))}
      </ul>
    </>
  )
}