import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/cards";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    axios
      .post("https://pear-puzzled-salmon.cyclic.app/getProducts?limit=0")
      .then(function (response) {
        setProducts(response.data.products);
      });
  }

  return (
    <div>
      {/* products */}
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((element, index) => {
            return (
              <Card
                id={element.id}
                title={element.title}
                imageUrl={element.thumbnail}
                key={index}
              />
            );
          })}
        </div>
      )}

      {/* pagination */}
      <div className="pagination">
        {page > 1 && <span onClick={() => setPage(page - 1)}>⬅️</span>}
        {products.length > 0 &&
          products.slice(0, 10).map((element, index) => {
            return (
              <span
                onClick={() => setPage(index + 1)}
                className={page == index + 1 ? "page_selected" : ""}
                key={index}
              >
                {index + 1}
              </span>
            );
          })}
        {page < 10 && <span onClick={() => setPage(page + 1)}>➡️</span>}
      </div>
    </div>
  );
}

export default HomeScreen;
