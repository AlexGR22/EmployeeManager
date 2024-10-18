import { Outlet} from "react-router-dom"
import Sidebar from "./SideBar"
import { NavBar } from "./NavBar"

export const Layout = () => {

  return (
    <>
    <div className='md:flex md:max-h-screen '>

    <div className="md:flex lg:flex xl:flex hidden">
        <Sidebar />
      </div>
      <div className="sm:flex md:hidden lg:hidden xl:hidden">
        <NavBar />
      </div>

        <main className='md:w-3/4 p-10 md:min-h-screen md:flex-1 md:overflow-y-auto  sm:min-h-screen sm:overflow-y-auto'>
              <Outlet />
          </main>
    </div>
    </>
  )
}
