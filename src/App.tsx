import About from "./Components/About/About";
import Card from "./Components/Card/Card";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import { useGetProductsQuery } from "./redux/api/api";

function App(){
  const {data: products, isLoading, isError} = useGetProductsQuery(undefined);
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <div className="bg-gray-100">
    <Navbar/>
    <Hero/>
    <h1 className="text-4xl text-green-500 font-bold text-center py-10">All Products</h1>
    <div id="products" className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
    {products?.data?.map((product, index) => (
        <Card
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
          rating={product.rating}
          category={product.category}
        />
      ))}
    </div>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
