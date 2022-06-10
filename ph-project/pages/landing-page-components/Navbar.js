import React from 'react'

function Navbar() {
  return (
    <nav className="mx-12 py-5 flex text-black">
      <div className="nav-brand font-bold text-3xl font-montserrat">
        TechShare
      </div>
      {/* <div className="flex"> */}
      <ul className="nav-links text-base mx-auto flex gap-10">
        <li>Home</li>
        <li>About Us</li>
        <li>Designs</li>
        <li>Community</li>
      </ul>
      {/* </div> */}
      <div className="action-buttons-wrapper flex gap-6 items-center">
        <span>Login</span>
        <button className="px-4 py-2 custom-btn bg-blue-500 text-white">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar