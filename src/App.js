import Header from "./components/Header";
import "./App.css";
import Meals from "./components/Meals";
import AvailableMeals from "./components/AvailableMeals";
import Card from "./components/Card";
import CardProvider from "./store/CardProvider";

function App() {
  
  const showCardHandler = () => {
    document.getElementById("overlays").style.display = "block";
  };
  const hideCardHandler = () => {
    document.getElementById("overlays").style.display = "none";
  };
  const onOrder = () => {
    console.log('Ordering...');
  }


  return (
    <CardProvider>
      <Header onShowCard={showCardHandler} />
      <Meals />
      <Card  onHideCard={hideCardHandler} onOrder = {onOrder}/>
      <AvailableMeals />
    </CardProvider>
  );
}

export default App;
