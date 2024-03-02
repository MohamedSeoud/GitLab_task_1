import { FaBell } from 'react-icons/fa'
import SearchInput from './SearchInput'

function Header() {
  return (
    <div className=" flex items-center justify-center">

    <div className=" w-[5px] h-16 rounded-lg bg-sky"/>
    <div className="  uppercase text-white px-4 text-6xl  font-semibold">Alerts </div>

     <SearchInput/>

    <span className=" text-sky text-4xl px-2 flex"><FaBell /> 
    <span className=" h-6 rounded-full relative right-4 w-6 bg-green text-center justify-center 
    flex items-center text-white text-[17px]">5</span>
    </span>

   </div>
)
}

export default Header
