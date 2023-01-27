import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <h2 style={{ color: "blue" }}>Products Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        aspernatur sequi, quae, provident nihil excepturi explicabo neque itaque
        soluta harum placeat maiores enim iusto voluptates id. Ex deserunt vero
        perspiciatis minima, laboriosam officia quis atque porro nihil, ut
        voluptatibus quibusdam incidunt animi asperiores fugit ea molestiae
        distinctio ab esse! Quo dolor iste, repellat nihil voluptatibus rerum
        adipisci doloribus quae aliquid eveniet architecto neque enim, est nemo
        nesciunt assumenda quasi exercitationem illo excepturi fugiat? Tempora
        possimus soluta pariatur impedit excepturi consequuntur reiciendis
        libero labore ex voluptates. Iusto, nisi maiores. Vero, assumenda
        nostrum enim quidem officiis et molestias? Quasi hic eos ipsum!
      </p>

      {products.length > 0 ? (
        <div
          style={{
            margin: "50px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {products.map((product) => {
            return (
              <div
                key={product.id}
                style={{
                  boxShadow: "0 0 10px black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <Link to={`/productdetails/${product.id}`}>
                  <img src={product.image} width="300" height="300" />
                </Link>
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
                <Link to={`/productdetails/${product.id}`}>
                  <button>More Information</button>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 style={{ color: "red", textAlign: "center", margin: "50px" }}>
          Data is not Available
        </h2>
      )}
    </div>
  );
}

export default Products;
