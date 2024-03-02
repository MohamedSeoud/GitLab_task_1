import { IoSearchSharp } from "react-icons/io5"

function SearchInput({placeHolder,className,text}:{placeHolder?:string,text?:string,className?:string}) {
  return (
    <div className={`${text?text:'text-white'} flex justify-between  w-full relative items-center`}>
    <input className={`${className?className:' rounded-lg  text-lg  px-5'} bg-silver w-full`} 
    placeholder={placeHolder?placeHolder:"Search By....."}/>

     <span className=" absolute right-0 px-2 "> <IoSearchSharp size="1.5rem" /></span>
    </div>
  )
}

export default SearchInput
