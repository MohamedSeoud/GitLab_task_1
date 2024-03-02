
import image from '../../../public/vite.png'
import SidebarList from './SidebarList'

function SideBar() {
  return (
    <div className=" flex flex-col min-h-screen h-fit hover:pt-4 bg-metal justify-start 
    items-start w-20 transition-all duration-500 hover:w-[230px] overflow-hidden ">

       <div className=" flex justify-center items-center w-full  cursor-pointer px-2 h-[100px]">
            <img src={image} className=" w-full  max-h-[80px]"/>
        </div> 

        <SidebarList/>
      
    </div>
  )
}

export default SideBar
