import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./component/NavbarComponent";
import ListCategories from "./component/ListCategories";
import Hasil from "./component/Hasil";
import DaftarProduk from "./component/DaftarProduk";
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div class="grid grid-rows-1 grid-flow-col gap-4 mx-10 my-20">
        <ListCategories />
        <DaftarProduk />
        <Hasil />
      </div>
    </div>
  );
}

export default App;
