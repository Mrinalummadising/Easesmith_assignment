import {Link} from 'react-router-dom';
import Plant from "../assets/thankyou-plant.png";

const ThankYouPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-full px-3 "
    >
    
        <h2 className="text-lg mb-2 text-[#0F4811] font-normal text-center">Your Cart</h2>
     
      <hr className="border-[#B0B0B0] mb-4 border w-full" />
      <h2 className="mb-4 text-2xl font-semibold text-[#165315] text-center">
        Congratulations! Order Placed!
      </h2>
      <img src={Plant} alt="Plant icon" className="w-24 h-24 mx-auto mb-4" />
      <p className="mb-4 font-normal text-center text-[#165315] text-[16px]">
        Thank you for choosing Chaperone services. We will soon get in touch with you!
      </p>
      <Link to='/shop'>
      <button className="w-[307px] py-2 font-semibold text-white bg-[#165315] text-[16px] rounded hover:bg-green-600 ">
        Continue Shopping
      </button>
      </Link>
    </div>
  );
};

export default ThankYouPage;
