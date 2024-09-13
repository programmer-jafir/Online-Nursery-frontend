import About from '@/Components/About/About';
import Contact from '@/Components/Contact/Contact';
import Hero from '@/Components/Hero/Hero';
import AllProducts from '@/Components/Products/AllProducts';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AllProducts></AllProducts>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;