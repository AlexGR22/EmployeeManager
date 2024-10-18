
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useFetch } from "../hooks/useFetch"

import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaFolderClosed } from "react-icons/fa6";

const menuItems = [
    {
        icons: <IoHomeOutline size={30} />,
        label: 'Home'
    },
    {
        icons: <FaList size={30} />,
        label: 'Areas'
    },
    {
        icons: <CiSettings size={30} />,
        label: 'Setting'
    },
]

export default function Sidebar() {

    const navigate = useNavigate()

    const [open, setOpen] = useState(true)
    
    const [AreasOpen, setAreasOpen] = useState(false)

    const handleAction = (item) => {
        if (item.label === 'Home') {
            setAreasOpen(false)
            navigate("/");
        } else if (item.label === 'Areas') {
            navigate("/areas")
            setAreasOpen(!AreasOpen)
        } else if (item.label === 'Setting') {
            console.log('settings');

        }
    }


      const {data, isLoading,hasError,errorMessage} = useFetch(import.meta.env.VITE_API_URL)
      const [areas, setAreas] = useState([]);
  
  
      useEffect(() => {
          data && setAreas(data.reduce((areas, empleado) => areas.includes(empleado.workArea) ? areas : [...areas, empleado.workArea], []));
        }, [data]);
  
        const countUsersByWorkArea = (data) => {
          return data?.reduce((acc, curr) => {
            const { workArea } = curr;
            if (acc[workArea]) {
              acc[workArea].count += 1;
            } else {
              acc[workArea] = {
                label: workArea,
                count: 1
              };
            }
            return acc;
          }, {});
        };
        
        const usersByWorkArea = countUsersByWorkArea(data)

    return (
        <nav className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-blue-900 text-white ${open ? 'w-60' : 'w-20'}`}>
            <div className=' px-3 py-2 h-20 flex justify-between items-center'>
                <h1 className={open ? 'text-2xl font-black' : 'text-5xl font-black'}>{open ? 'Employee Manager' : 'E'}</h1>
            </div>
            <div><MdMenuOpen size={34} className={` duration-500 cursor-pointer ${!open && ' rotate-180'} ml-auto mr-5`} onClick={() => setOpen(!open)} /></div>

            <ul className='flex-1'>
                {
                    menuItems.map((item, index) => {
                        return (
                            <li key={index} className='px-3 py-2 my-2 hover:bg-blue-800 rounded-md duration-300 items-center relative group'>
                                <div>
                                    <div className="flex gap-2 cursor-pointer  " onClick={() => handleAction(item)}>
                                        {item.icons}
                                        <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                                    </div>
                                    {AreasOpen && item.label === 'Areas' && (
                                        <ul>
                                                {hasError && <p className="text-white font-bold">{errorMessage.messageText}</p>}
                                                {isLoading && <p className="text-white font-bold">Loading...</p>}
                                            {areas?.map((area) => (
                                                <li key={area} className='px-3 py-2 my-2 bg-blue-700 rounded-md duration-300 flex-1 gap-2 items-center '>
                                                    <div className={`${open && 'flex gap-1'}`}>
                                                        <FaFolderClosed size={20}/>
                                                        <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>({usersByWorkArea[area]?.count || 0})</p>
                                                    </div>
                                                     <p className={`${!open && 'w-0 h-0 translate-x-24'} duration-500 overflow-hidden font-semibold`}>{area} </p>
                                                </li>

                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        )
                    })
                }

            </ul>

            <div className='flex items-center gap-2 px-3 py-2'>
                <div><FaUserCircle size={30} /></div>
                <div className={`leading-5 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
                    <p>User</p>
                    <span className='text-xs'>User@user.com</span>

                </div>
            </div>


        </nav>
    )
}