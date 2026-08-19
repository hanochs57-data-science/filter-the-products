import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      setProducts(response.data);
    }); }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) );

  return(
    <div>
      <h1>Product Post</h1>
      <input 
      type= "text"
      placeholder= "Search Post"
      value={search}
      onChange={(e) => setSearch(e.target.value)} />
      <hr/>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Post Content</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) =>(
            <tr key={product.id}>
              <td>{product.id}</td>
               <td>{product.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
}
