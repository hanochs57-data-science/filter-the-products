import axios from "axios";
import { useEffect,useState} from "react";
export default function App(){
  const [products,setProducts]=useState([]);
  useEffect(() =>{axios.get ("https://dummyjson.com/products")
                 .then((response) => {
                  setProducts(response.data.products);
                 }); }, []);
    return(
      <div>
        <h1>Product List</h1>
        <hr/>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
             {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>₹{product.price}</td>
                  <td>{product.category}</td>
                </tr>
             ))}      Output:
          </tbody>
        </table>
        </div>
    );
}
