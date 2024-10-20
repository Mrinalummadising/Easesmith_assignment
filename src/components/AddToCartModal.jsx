import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddToCartModal = ({ product, isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-sm p-6 bg-white rounded-lg">
        <button
          className="absolute text-gray-600 top-2 right-2 hover:text-black"
          onClick={onClose}
        >
          <AiOutlineClose size={20} />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-48"
        />

        <h2 className="mt-4 mb-1 text-xl font-[500]">{product.name}</h2>
        <p className="mb-2 text-sm font-normal text-[#838383]">
          {product.description}
        </p>

        <div className="flex items-center">
          <span className="text-xl font-semibold text-[#5E5A5A]">
            ₹{product.discountedPrice}
          </span>
          {product.totalPrice !== product.discountedPrice && (
            <span className="ml-2 text-[16px] font-normal text-[#5E5A5A] opacity-70 line-through">
              ₹{product.totalPrice}
            </span>
          )}
        </div>

        <div className="flex justify-start mt-4">
          <button
            className="px-4 py-2 text-white text-sm font-[500] bg-[#165315] rounded-lg hover:bg-green-600 mb-1"
            onClick={onConfirm}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
