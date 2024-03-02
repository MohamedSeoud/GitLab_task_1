import  {dataTable}  from "../../data/dataTable"
import { DataTableModel } from "../../types/interfaces"
import TableRow from "./TableRow"


function TableList() {
  return (
    <div className=" flex flex-col w-full py-5 gap-4 px-4">
      {dataTable.map((item:DataTableModel) => <TableRow key={item.name} data={item}/>)}
    </div>
  )
}

export default TableList
