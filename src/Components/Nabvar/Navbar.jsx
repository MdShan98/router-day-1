import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationItems = [
  {
    id: 1,
    name: "Home",
    url: "https://example.com/home",
    path: "/home"
  },
  {
    id: 2,
    name: "About Us",
    url: "https://example.com/about",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    url: "https://example.com/services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    url: "https://example.com/blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    url: "https://example.com/contact",
    path: "/contact"
  }
];


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = navigationItems.map(route=><Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-10 mt-4 text-black'>
            <span className='flex' onClick={()=> setOpen(!open)}>
              { open ? <X className='md:hidden'></X> : 
              <Menu className='md:hidden'></Menu>}
              <ul className={`md:hidden absolute duration-1000
                ${ open? 'top-8': '-top-40'}  bg-amber-200`}>
                {links}
              </ul>
              
              <h3 className='ml-4'>My Navbar</h3>
            </span>
            <ul className='md:flex hidden'>
                {
                  links
                }
            </ul>
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;
