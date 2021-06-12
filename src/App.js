import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeItem = {
    author: "Kodluyoruz",
    title: "Avokado Ezmeli Taco",
    date: "12 Ocak 2021, Salı",
    image: food,
    description: "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
    likeCount: 193,
    isLiked : true,
  };

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          item={recipeItem}
        />
      </header>
    </div>
  );
}

export default App;
