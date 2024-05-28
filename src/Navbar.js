import './App.css';
import './index';
import React, {useState} from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar bg-mytheme-accent">
    <div className="navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-base-100 ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/about"
                  className={classNames(
                    active ? 'bg-base-100 text-base-100' : 'text-base-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  about me
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/portfolio"
                  className={classNames(
                    active ? 'bg-base-100 text-base-100' : 'text-base-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  portfolio
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/commissions"
                  className={classNames(
                    active ? 'bg-base-100 text-base-100' : 'text-base-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  commissions
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/blog"
                  className={classNames(
                    active ? 'bg-base-100 text-base-100' : 'text-base-100',
                    'block w-full px-4 py-2 text-left text-sm'
                  )}
                >
                  blog
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
        </div>
        </div>
        <a href="/" className="btn btn-ghost text-xl secondary">macknroll</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><a href='/about'>about</a></li>
        <li><a href='/portfolio'>portfolio</a></li>
        <li><a href='commissions'>commissions</a></li>
        <li><a href='/blog'>blog</a></li>
        </ul>
    </div>
    <div className="navbar-end">
        <a href="https://www.etsy.com/shop/macknroll"className="btn">my shop!</a>
    </div>
    </div>
  );
}

export default Navbar;