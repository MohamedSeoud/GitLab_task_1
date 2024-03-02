import { ReactNode, useState } from "react"

function BarItem({ItemName,item,valid}:{ItemName:string,item:ReactNode,valid?:boolean}) {

    const[name,setName] = useState(ItemName)

  return (
    <>
   { valid? 
   <div className=" flex justify-start overflow-hidden flex-row items-center p-3 
    backdrop-blur-2xl hover:text-sky w-full 
    cursor-pointer min-h-[70px] relative gap-2 ">
   <span className="min-w-[60px] text-4xl flex justify-center items-center "> {item} </span>
   <span className=" text-xl  "> {ItemName}</span>
   </div>:
    <div className=" flex justify-start overflow-hidden flex-row items-center p-3 
    backdrop-blur-2xl hover:bg-blur w-full to-blur text-border from-black hover:bg-gradient-to-t
    cursor-pointer min-h-[70px] relative gap-2 " onMouseEnter={()=>setName('Coming Soon')} onMouseLeave={()=>setName(ItemName)}>
{   name!=='Coming Soon'?
<>
<span className="min-w-[60px] text-4xl flex justify-center items-center "> {item}  </span>
<span className=" text-xl   "> {name}</span>
</>
:
<span className=" text-xl text-white text-center w-full   "> {name}</span>
}
</div>
   }

   </>
  )
}

export default BarItem
