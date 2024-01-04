import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../assets/logo.png'
import useWindowWidth from "../../Hook/useWindowWidth";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const width = useWindowWidth()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  return (
    <>
      {width > 767 ? (

        <div className="bg-blue-600">
          <nav className="h-16 max-w-7xl mx-auto relative flex items-center justify-center">

            <div className="left-0 md:inline md:absolute">
              <a href="#">
                <img
                  src={logo}
                  className="ml-4 w-auto h-12 rounded-full"
                />
              </a>
            </div>

            <ul className="md:flex md:space-x-10">
              <li>
                <a href="#" className="font-medium text-lg text-white hover:text-gray-900">Accueil</a>
              </li>
              <li>
                <a href="#" className="font-medium text-lg text-white hover:text-gray-900">Projets</a>
              </li>
              <li>
                <a href="#" className="font-medium text-lg text-white hover:text-gray-900">Blog</a>
              </li>
              <li>
                <a href="#" className="font-medium text-lg text-white hover:text-gray-900">Qui suis-je ?</a>
              </li>
            </ul>

            <a href="#" className="block absolute right-0 rounded-md mr-4 shadow-md px-6 py-2 border font-medium round-md text-indigo-600 bg-white hover:bg-black hover:border-black hover:text-white">Me contacter</a>
          </nav>
        </div>

      ) : (

        <nav className="absolute z-10 top-2 w-11/12 left-1/2 transform -translate-x-1/2 shadow-md ring-1 ring-black ring-opacity-5 p-1 rounded-lg bg-white">
          <div className="px-5 h-16 flex items-center justify-between">
            <a
              href="#"
            >
              <img
                src={logo}
                className="h-8 w-auto rounded-full sm:h-10"
              />
            </a>
            <div className="-mr-2">
              <button
                onClick={() => toggleMenu()}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center ring-1 ring-black ring-opacity-20 hover:bg-indigo-500 hover:text-white"
              >
                <RxHamburgerMenu />
              </button>
            </div>
          </div>

          <ul className={`toggle-menu p-2 ${isOpen ? '' : 'hidden'}`}>
            <li>
              <a href="" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Accueil
              </a>
            </li>
            <li>
              <a href="" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Projets
              </a>
            </li>
            <li>
              <a href="" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Qui suis-je ?
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default NavBar;