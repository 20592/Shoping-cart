import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("item removed");
  };

  return (
    <div className="pt-5  pl-10">
      <div className="flex justify-between gap-x-2 mb-7 w-30">
        <div className="">
          <img src={item.image} className="h-[140px]" />
        </div>
        <div className="h-[150px]">
          <h1 className="text-gray-700 font-semibold text-sm text-left  w-40 mt-1">
            {item.title}
          </h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] min-w-[280px] text-left mt-3">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>
          <div className="mt-4 flex justify-between items-center pt-8">
            <p className="text-green-600 font-semibold">{item.price}</p>
            <div onClick={removeFromCart}
            className="text-2xl">
              <FcDeleteDatabase />
     
            </div>
               
          </div>
              
        </div>
           
      </div>
      <div className="border border-b-gray-400 border-5" ></div>
    </div>
  );
};

export default CartItem;
