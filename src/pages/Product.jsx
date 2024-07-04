import React, { Component } from "react";

import {
  IoIosStar,
  IoIosStarHalf,
  IoIosCart,
  IoIosAdd,
  IoIosRemove,
  IoIosHeart,
} from "react-icons/io";

export class Product extends Component {
  render() {
    return (
      <div className="w-full h-full  flex flex-col">
        <div className=" flex  container items-center justify-around gap-4 py-5 rounded-md bg-black/10 shadow-lg ">
          {/* section info product */}
          <div className="w-1/3 h-full   ">
            <div className="flex flex-col g ">
              <h1 className="uppercase text-4xl lg:text-4xl text-gray-700 font-bold z-10">
                MAXTER 7.1 SURROUND
              </h1>
              <div
                id="border-name"
                className="bg-primary w-1/2 h-3 relative bottom-4  "
              ></div>
              {/* avaliation area */}
              <div className="flex gap-1">
                <IoIosStar className="text-primary" />
                <IoIosStar className="text-primary" />
                <IoIosStar className="text-primary" />
                <IoIosStar className="text-primary" />
                <IoIosStarHalf className="text-primary" />
                <p className="text-sm">(10.000 avaliations)</p>
              </div>

              {/* description area */}
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec quam sed nisl tincidunt luctus. Nullam nec nunc ut nunc
                aliquet gravida. Nullam nec nunc ut nunc aliquet gravida.
              </p>

              {/* price area */}
              <div className="flex  gap-1  mt-6">
                <p className="text-4xl text-primary font-bold">$ 200,00</p>
                <p className="text-md line-through">$ 300,00</p>
              </div>

              {/* buttons area */}
              <div className="flex gap-4 mt-6">
                <button className=" flex justify-center items-center bg-primary w-44 text-white py-2 px-4 rounded-md">
                  <IoIosCart className="mr-2" />
                  Add to cart
                </button>
                <button className="border-2 flex items-center gap-2 border-primary  text-primary py-2 px-2 rounded-md">
                  <IoIosAdd />
                  1
                  <IoIosRemove />
                </button>
              </div>

              {/* share social media area */}
              <div className="flex gap-4 mt-1">
                <button className="flex items-center gap-2 border-b-2 border-white rounded-md">
                  <IoIosHeart />
                  <p>Auf die Wunschliste</p>
                </button>
              </div>
            </div>
          </div>

          {/* section image product */}
          <div className="w-2/3 h-full  ">
          
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
