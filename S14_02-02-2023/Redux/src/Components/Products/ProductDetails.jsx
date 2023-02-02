import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h2 style={{ color: "orangered" }}>Product Details {id}</h2>
    </div>
  );
}

export default ProductDetails;
