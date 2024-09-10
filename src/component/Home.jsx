import Products from "./Products";
import InputSearch from "./InputSearch";
import ListaProducts from "./ListaProducts";
const Home = () => {
  const performSearch = (searchTherm) => {
    console.log("Termo de pesquisa recebido no header", searchTherm);
  };
  return (
    <>
      <div>
        <section className="container-home">
          {/* <InputSearch
            icon="pi-search"
            placeholder="Pesquisar"
            products={ListaProducts}
          /> */}
          <Products />
        </section>
      </div>
    </>
  );
};

export default Home;
