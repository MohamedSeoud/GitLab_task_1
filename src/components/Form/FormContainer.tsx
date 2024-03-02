import SearchInput from "../header/SearchInput"
import FilterInput from "./FilterInput"
import IndustryList from "./IndustryList"
import RadioList from "./RadioList"
import SelectList from "./SelectList"

function FormContainer() {
  return (
    <div className=" bg-black flex flex-col p-4">

    <FilterInput/>
    <div className=" bg-metal flex flex-col my-4 flex-wrap gap-2 p-3 w-full h-fit min-h-[70px] rounded-xl">
    <p className=" text-start text-md font-semibold"> Stock</p>
    <SearchInput placeHolder={'$ TICKER'} text={'text-writing'} className={'rounded-lg  py-2 px-2  text-sm  h-fit'}/>
    <p className=" text-start text-md font-semibold py-3 px-2"> Industry</p>
    
    <div className=" flex flex-row px-5 justify-between items-center">
    <IndustryList/>
    <IndustryList/>
    </div>

    <div className=" flex flex-row px-5 justify-between items-center">
    <RadioList/>
    <RadioList/>
    </div>

    <div className=" flex flex-row px-5 justify-between items-center">
    <SelectList/>
    <SelectList/>
    </div>

    </div>

  </div>
  )
}

export default FormContainer
