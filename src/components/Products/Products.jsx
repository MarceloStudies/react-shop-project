import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';

import Img1 from '../../assets/product/p-1.jpg';
import Img2 from '../../assets/product/p-2.jpg';
import Img3 from '../../assets/product/p-3.jpg';
import Img4 from '../../assets/product/p-4.jpg';
import Img5 from '../../assets/product/p-5.jpg';


const productsData = [
  {
    id:1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "100",
  },
  {
    id:2,
    img: Img2,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "200",
  },
  {
    id:3,
    img: Img3,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "400",
  },
  {
    id:4,
    img: Img4,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "600",
  },
  {
    id:5,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "100",
  },
  {
    id:6,
    img: Img3,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "200",
  },
  {
    id:7,
    img: Img2,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "400",
  },
  {
    id:8,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle="Explore Our Products" />
        {/* Body section */}
        <ProductCard data= {productsData} />
      </div>
    </div>
  )
}

export default Products
