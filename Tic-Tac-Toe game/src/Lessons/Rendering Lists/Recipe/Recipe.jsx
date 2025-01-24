import { recipes } from "./data.js";
const Recipe = () => {
  const names = recipes.map((item) => [item.name, item.id, item.ingredients]);
  return (
    < >
      {names.map((item) => (
        <>
          <h2 key={item[1]}>{item[0]}</h2>
          <ul>
            {item[2].map((itm) => (
              <li key={itm}>{itm}</li>
            ))}
          </ul>
        </>
      ))}
    </>
  );
};

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <Recipe />
    </div>
  );
}
