import  { useState } from "react";
import ProductCard from "../components/ProductCard";
import mockProducts from "../data";
import FilterSection from '../components/FilterSection';
import Footer from "../components/Footer";
import NurserySlider from "../components/NurserySlider";
import SearchBar from "../components/SearchBar"; 
import Pagination from "../components/Pagination"; 

const ProductListingPage = ({ updateCartQuantity }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = mockProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(mockProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container p-6 mx-auto ">
        <SearchBar />

        <div className="flex justify-start mb-8 space-x-4">
          <button className="bg-[#165315] text-white w-[114px] py-2">Plants</button>
          <button className="w-[114px] py-2 text-black border">Pots</button>
        </div>

        <p className="text-[#838383] text-left font-normal leading-relaxed">
          Lorem ipsum dolor sit amet...
        </p>

        <div className="py-5">
          <h1 className="text-[#000] font-semibold text-2xl">Nursery</h1>
          <NurserySlider />
          <p>slider</p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <aside className="w-full md:w-1/4">
            <FilterSection />
          </aside>

          <div>
            <div className="flex">
              <p className="font-normal text-[15px] text-[#6A6A6A]">300 products</p>
              <div className="mb-4 ml-4">
                <select
                  id="sort"
                  className="p-2 w-[139px] border text-white bg-[#165315] border-none outline-none"
                >
                  <option value="default">SORT BY</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} updateCartQuantity={updateCartQuantity} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductListingPage;
