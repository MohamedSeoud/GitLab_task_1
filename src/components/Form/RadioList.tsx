import RadioInput from "./RadioInput"

function RadioList() {
  return (
    <div className=" flex flex-col">
     
    <p className=" text-start text-md font-semibold py-3 px-2"> Industry</p>
    <RadioInput/>
    <RadioInput/>
    <RadioInput/>

    </div>
  )
}

export default RadioList
