import  { ReactNode } from 'react'

function RowItem({item,name,budget,risk,document}:{name?:string,budget?:number,risk?:string,document?:number,item:ReactNode}) {
  return (
    <div className=" w-full col-span-1 border-r-[2px] justify-center border-border items-center h-8 flex flex-row gap-8">
        {item}
    {name &&<span className=" text-lg font-light">{name}</span>}
    {budget &&<span className={ `text-lg font-light ${budget>0? 'text-green':'text-red'}`}>{budget}%</span>}
    {risk &&<span className=" text-lg font-light uppercase">{risk}</span>}
    {document &&<span className=" text-lg font-light">{document}</span>}

  </div>

  )
}

export default RowItem
