import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 flex justify-center text-center">
      <div className="text-white text-lg font-bold">
        ABIV
      </div>
      <div className="text-white text-lg grow h-14 font-bold">
        Interview
      </div>
    </nav>
  );
};

export default Navbar;
