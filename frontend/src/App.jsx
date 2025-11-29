import ProductList from "./componentes/ProductList";
import ProductForm from "./componentes/ProductForm";

export default function App(){

  return(
    <div>
      <h1>Beyerdinamic Store</h1>
      <ProductForm onAdded={() => window.location.reload()} />
      <ProductList />
    </div>
  );
}
