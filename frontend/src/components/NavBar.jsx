import { Link, NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";

const menuItems = [
    {
      icons: <IoHomeOutline size={25} />,
      label: 'Home',
      path: '/'
    },
    {
      icons: <FaList size={25} />,
      label: 'Areas',
      path: '/areas'
    },
    {
      icons: <CiSettings size={30} />,
      label: 'Settings',
    },
  ];
export const NavBar = () => {
  return (
    <nav className="shadow-md h-16 p-2 flex flex-row justify-between bg-blue-900 text-white">
      <div className="flex flex-row items-center">
        <Link to="/" className="text-5xl font-black">
          E
        </Link>
      </div>
      <ul className="flex flex-row justify-center">
        {menuItems.map((item, index) => (
          <li key={index} className="mr-4">
            <NavLink
              to={item.path}
              className="text-white"
              activeClassName="text-blue-500"
            >
              {item.icons}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
