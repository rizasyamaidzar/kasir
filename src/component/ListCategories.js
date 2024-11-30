import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../utils/constans";
import App from "../App";
const icon = ({ nama }) => {
  if (nama === "Makanan") return <i class="fa-solid fa-user"></i>;
};
export default class ListCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { categories } = this.state;
    const { changeCategory, categoryChoice } = this.props;
    return (
      <div className="mx-auto">
        <div class="w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {categories &&
            categories.map((category) => (
              <button
                type="button"
                className={`relative inline-flex items-center w-full px-4 py-2 text-xl font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white ${
                  changeCategory === category.nama
                    ? "text-blue-700 ring-blue-700"
                    : ""
                }`}
                key={category.id}
                onClick={() => changeCategory(category.nama)}
              >
                <svg
                  class="w-5 h-5 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                {category.nama}
              </button>
            ))}
        </div>
      </div>
    );
  }
}
