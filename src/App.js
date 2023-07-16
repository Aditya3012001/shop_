import Header from "./components/Header";
import Summary from "./components/Summary";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Cart />
      <Header />
      <Summary />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
