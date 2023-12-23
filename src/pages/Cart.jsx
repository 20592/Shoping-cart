import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state); //this is fetch from cartslice.jsx
  console.log("print errors");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div
          className="flex  justify-evenly   
  max-w-6xl min-h-[100px] mt-8 mx-auto"
        >
          <div className="">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="  pt-18   ">
            <div className=" ">
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Itmes: {cart.length}</span>
              </p>
            </div>
            <div className="flex items-end pb-19">
              <p className=" ">Total Amount:{totalAmount}</p>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Cart Empty</h2>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
