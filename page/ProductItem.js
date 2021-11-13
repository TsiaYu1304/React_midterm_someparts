import Productdetail from "../components/productdetail";
import products from '../json/products.json';


function ProductItem() {


  const product = products.find(
   product => product.seller_name === "Becca1304");
  return (
    <div>

      {/* {products.map(product => (
        <Productdetail key={product.id} product={product} />
      ))} */}
       <Productdetail product = {product} />
    </div>
  );
}
export default ProductItem;
