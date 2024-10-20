
import { Link } from 'react-router-dom';
import Image from '../assets/homepage-img2.jpg';
const HomePage = () => {
  return (
    
  <section className="flex flex-col items-center justify-center h-full px-4 py-12 text-center bg-green-100">
    <h1 className="mb-6 text-5xl font-extrabold text-green-900">
      Welcome to Chaperone
    </h1>
    <p className="max-w-xl mx-auto mb-8 text-lg text-gray-700">
      Chaperone is Delhi-NCR’s locally sown and grown plant care brand. 
      We go beyond just selling plants – we believe in nurturing lifelong companions. 
      Discover our range of indoor plants, gardening equipment, and much more.
    </p>
    <img 
      src={Image} 
      alt="Beautiful Indoor Plants" 
      className="object-contain w-full max-w-[600px]  mx-auto mb-8 rounded-lg"
    />
    <Link to='/shop'>
    <button className="block px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-800" >
      Explore Plants
      
    </button>
    </Link>
  </section>

  
 


  );
};

export default HomePage;