import React, { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io';
import CartItem from './CartItem';
import { CartContext } from '../context/CartContext';
import { TbTrash } from 'react-icons/tb';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemQuantity } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full  '
      } w-full h-full bg-white fixed top-0 shadow-2xl sm:w-[55vw] md:max-w-[44vw] xl:max-w-[27vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flexBetween py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemQuantity})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flexCenter"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[455px] overflow-y-auto overflow-x-hidden border-b my-6">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flexBetween mb-2">
        <div className="uppercase bold-16">
          <span>Total=</span>
          <span>${parseFloat(total).toFixed(2)}</span>
        </div>
        <div onClick={clearCart} className="text-2xl">
          <TbTrash />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button className="btn-light">View cart</button>
        <button className="btn-dark">Checkout</button>
      </div>
    </div>
  );
};

export default Sidebar;
