import FilterItem from './FilterItem'

function FilterInput() {
  return (
    <>
<p className=" text-3xl text-center"> Filters</p>

<div className=" flex capitalize justify-between items-center"> 
<p className=" text-sm text-writing"> Filters Applied  </p>
<p className=" text-sm cursor-pointer "> clear all  </p>
</div>

<div className="  bg-metal flex flex-row flex-wrap gap-2 p-3 w-full h-fit min-h-[70px] rounded-xl">

<FilterItem/> <FilterItem/> <FilterItem/>
</div>

    </>
  )
}

export default FilterInput
