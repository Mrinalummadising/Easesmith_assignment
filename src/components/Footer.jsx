import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-20 bg-[#F0FFE5] ">
      <div className="px-4 md:px-20">
        <div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-5">
          <div className="col-span-1">
            <h3 className="mb-2 text-[20px] font-[500] text-black">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="mb-2 text-sm text-[#838383] font-normal">
              Lorem Ipsum Dolor Sit Amet, Aut Ipsam Illum Et Nostrum Quidem Aut
              Nec
            </p>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full max-w-[268px] p-3 pl-4 mb-2 text-sm font-normal bg-white border"
            />
            <button className="px-6 py-2 bg-[#247822] text-white font-semibold text-[16px] rounded-full">
              SUBSCRIBE
            </button>
          </div>

          <div className="md:ml-4 ">
            <h3 className="mb-4 text-[20px] text-black font-[500]">ABOUT US</h3>
            <ul className="space-y-2 text-[15px] font-[500]  text-[#999999]">
              <li>Our Story</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Help & Support</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[20px] text-black font-[500]">
              OUR SERVICES
            </h3>
            <ul className="space-y-2 text-[15px] font-[500]  text-[#999999]">
              <li>Book Maali</li>
              <li>Plant Day Care</li>
              <li>Rent Plants</li>
              <li>Plants & Pots</li>
              <li>Gardening Tools</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[20px] text-black font-[500]">
              USEFUL LINKS
            </h3>
            <ul className="space-y-2 text-[15px] font-[500]  text-[#999999]">
              <li>My Account</li>
              <li>Orders & Returns</li>
              <li>Track Order</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Return, Refund & Replacement Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[20px] text-black font-[500]">
              GET IN TOUCH
            </h3>
            <ul className="space-y-2 text-[15px] font-[500]  text-[#999999]">
              <li>
                Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
                Gurgaon, Haryana, India 122003
              </li>
              <li>Call: +919958287272</li>
              <li>Email: care@chaperoneplants.com</li>
            </ul>
          </div>
        </div>

        <div className="py-6 mt-8">
          <div className="mb-4">
            <h3 className="text-[22px] text-black leading-9 font-[500]">
              CHAPERONE
            </h3>
            <p className="text-[16px] text-left  font-normal text-[#838383]">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necessitatibus enim ut internos accusantium a numquam autem ab
              rerum omnis. Non molestiae ratione et laborum doloribus aut
              molestiae voluptates ut porro excepturi sit molestiae obcaecati
              qui quis beatae est voluptatem eius. Et architecto nihil id labore
              omnis hic iste deleniti et porro aspernatur.
            </p>
          </div>

          <div>
            <h1 className="text-[22px] font-[500] text-black leading-9">
              Follow Us
            </h1>
            <div className="flex mt-2 space-x-4">
              <a href="#" className="text-black">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-black">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-black">
                <FaSquareThreads size={24} />
              </a>
              <a href="#" className="text-black">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-black">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full my-6 border-[#000]" />

      <span className="mt-4 ml-2 md:ml-20 text-[16px] font-[500] text-[#999999]">
        © 2023, chaperone.com All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
