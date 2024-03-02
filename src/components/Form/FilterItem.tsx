import { AiOutlineClose } from 'react-icons/ai'

function FilterItem() {
  return (
    <span className=" bg-sky  text-xs gap-4 h-fit rounded-[5px]  text-black flex justify-between items-center w-fit
    py-[1px] px-1">
     <span className="">mohamed</span>
     <span className=" cursor-pointer text-sm"><AiOutlineClose /></span>
   </span>
  )
}

export default FilterItem
