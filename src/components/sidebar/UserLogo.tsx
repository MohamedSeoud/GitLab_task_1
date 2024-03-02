import userDefault from '../../assets/userDefault.jpg'

function UserLogo({image,name}:{image?:string,name:string}) {
  return (
    <div className=" flex justify-start overflow-hidden flex-row items-end p-3 
    backdrop-blur-2xl hover:text-sky w-full 
    cursor-pointer min-h-[250px] relative gap-2 ">

     <div className=" justify-center items-center flex gap-3">
   <span className="min-w-[60px] text-4xl flex justify-center items-center ">
      <img src={image?image:userDefault} className=" w-12 h-12 rounded-full"/> </span>
   <span className=" text-xl  "> {name}</span>
   </div>
   </div>
  )
}

export default UserLogo
