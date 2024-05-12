import { data } from "@/projectData/data";
import Product from "./Product";

function Products() {
  return (
    <div className='flex flex-wrap'>
      {data.map((product) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Products;
