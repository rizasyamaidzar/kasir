import logo from "./logo.svg";
// import "./App.css";
import { API_URL } from "./utils/constans";
import axios from "axios";
import {
  DaftarProduk,
  Hasil,
  ListCategories,
  Menus,
  NavbarComponent,
} from "./component";
import Alert from "./component/Alert";
import React, { Component } from "react";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      choice: "Makanan",
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.choice)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeCategory = (value) => {
    this.setState({
      choice: value,
      menus: [],
    });
    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  addKeranjang = (value) => {
    // console.log(value);
    // get keranjang id
    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const cart = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };
          axios
            .post(API_URL + "keranjangs", cart)
            .then((res) => {
              // <Alert nama={cart.product.nama} />;
              console.log(`sukses added cart ${cart.product.nama}`);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };
          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, keranjang)
            .then((res) => {
              // <Alert nama={cart.product.nama} />;
              console.log(`sukses updated cart ${keranjang.product.nama}`);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { menus, choice } = this.state;
    return (
      <div className="App">
        <NavbarComponent />
        <div class="grid grid-rows-1 grid-flow-col gap-4 mx-10 my-20">
          <ListCategories
            changeCategory={this.changeCategory}
            choice={choice}
          />
          <div class="grid grid-rows-2 grid-flow-col gap-4 mx-10">
            {menus &&
              menus.map((menu) => (
                <Menus
                  key={menu.id}
                  menu={menu}
                  addKeranjang={this.addKeranjang}
                />
              ))}
          </div>
          <Hasil />
        </div>
      </div>
    );
  }
}
