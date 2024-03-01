import { GiTicket } from "react-icons/gi"
import { DataTableModel } from "../../types/interfaces"
import { CgFileDocument } from "react-icons/cg"
import { BsGraphUp } from "react-icons/bs"
import { FaMoneyCheck } from "react-icons/fa"
import RowItem from "./RowItem"

function TableRow({data}:{data:DataTableModel}) {
  return (
    <div className=" grid-cols-4 rounded-md gap-3 py-4 grid justify-center items-center bg-silver sa ">
      <RowItem name={data.name} item={<GiTicket  size='2.5rem'/>}/>
      <RowItem document={data.document} item={<CgFileDocument  size='2.5rem'/>}/>
      <RowItem budget={data.budget} item={<BsGraphUp  size='2.5rem'/>}/>
      <RowItem risk={data.risk} item={<FaMoneyCheck  size='2.5rem'/>}/>
  </div>
  )
}

export default TableRow
