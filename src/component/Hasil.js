import React, { Component } from "react";
import { numberWithCommas } from "../utils/utils";
export default class Hasil extends Component {
  render() {
    const { keranjangs } = this.props;
    console.log(keranjangs);

    return (
      <div className="mx-auto">
        <div class="flex items-start justify-between">
          <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
            Shopping cart
          </h2>
        </div>
        <div class="mt-8">
          <div class="flow-root">
            <ul role="list" class="my-6 divide-y divide-gray-200">
              {keranjangs &&
                keranjangs.map((keranjang) => (
                  <li class="flex py-6">
                    <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={
                          "assets/images/" +
                          keranjang.product.category.nama.toLowerCase() +
                          "/" +
                          keranjang.product.gambar
                        }
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        class="size-full object-cover"
                      />
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">{keranjang.product.nama}</a>
                          </h3>
                          <p class="ml-4">
                            Rp. {numberWithCommas(keranjang.product.harga)}
                          </p>
                        </div>
                        <p class="mt-1 text-lg text-gray-500">jumlah</p>
                      </div>
                      <div class="flex flex-1 items-end justify-between text-lg">
                        <p class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                          {keranjang.jumlah}
                        </p>

                        <div class="flex">
                          <button
                            type="button"
                            class="font-medium text-red-600 hover:text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>Rp. {numberWithCommas(262000)}</p>
          </div>
          <p class="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div class="mt-6">
            <a
              href="#"
              class="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    );
  }
}
