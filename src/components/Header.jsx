import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { MdClose, MdMenu } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemQuantity } = useContext(CartContext);

  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 35 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'bg-white shadow-sm py-3' : 'bg-transparent py-4'
      } fixed left-0 right-0 w-full  max-padd-container flexBetween z-10 transition-all duration-300`}
    >
      <Link to={'/'} className="bold-24">
        <h4>
          Glam <span className="text-secondary">Store</span>
        </h4>
      </Link>
      <div className="flexBetween gap-x-20">
        <Navbar
          containerStyles={'hidden md:flex gap-x-5 xl:gap-x-10 medium-15'}
        />
        <Navbar
          containerStyles={`${
            menuOpened
              ? 'flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300'
              : 'flex items-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]'
          }`}
        />
        <div className="flexBetween gap-x-3 sm:gap-x-8">
          {!menuOpened ? (
            <MdMenu
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
            />
          ) : (
            <MdClose
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:text-secondary text-2xl"
            />
          )}
          <Link onClick={() => setIsOpen(!isOpen)} className="flex relative">
            <GiShoppingBag className="text-[25px]" />
            <span className="bg-secondary text-white text-sm absolute -top-2.5 -right-2.5 flexCenter w-5 h-5 rounded-full shadow-md">
              {itemQuantity}
            </span>
          </Link>
          <button className="btn-outline rounded-full">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
