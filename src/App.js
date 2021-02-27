import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: 'Samsung', price: "100", id: "1" },
    { name: "Sony", price: "300$", id: "2" },
    { name: "Asus", price: "140$", id: "3" },
    { name: "Apple", price: "200$", id: "4" },
    { name: "Acer", price: "400$", id: "5" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{" "}
        </p>{" "}
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
        {/* {<Product product={products[0]}></Product>} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}
function Product(props) {
  const productStyle = {
    color: "red",
    backgroundColor: "lightgray",
    margin: "10px",
  };
  return (
    <div style={productStyle}>
      <h1>Name: {props.name} </h1>
      <h3>Price: {props.price} </h3>
    </div>
  );
}

export default App;
