import { useState } from 'react';
import SelectedItem from './SelectItem';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-full bg-white text-violet-600 border-2 border-violet-600 hover:bg-viole-300 font-medium py-2 px-4 rounded-md "
      >
       Add new link
      </button>

      {isOpen && (
        <div className="w-full absolute mt-2 py-2 bg-white shadow-lg rounded-md">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg- hover:text-white"
          >
         
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg- hover:text-white"
          >
        
          </a>
         
         
        </div>
      )}
    </div>
  );
};

export default Dropdown;