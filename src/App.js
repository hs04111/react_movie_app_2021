const Food = ({fav}) => {
    return <h3>I like {fav}</h3>
}

const Drink = (props) => {
  return <h4>I also like {props.favDrink}</h4>
}

function App() {
  return (
    <div>
    <h2 className="App">
      Hello!
      
    </h2>
    <Food fav="Kimchi"/>
    <Food fav="Ramen"/>
    <Food fav="Kimbob"/>
    <Drink favDrink="Soju"/>
    <Drink favDrink="Beer"/>
    </div>
  );
}

export default App;
