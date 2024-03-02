import BarItem from "./BarItem"
import UserLogo from "./UserLogo"
import { sideBarDate } from "../../data/sidebarData"
import { SideBarDataModel } from "../../types/interfaces"

function SidebarList() {

  return (
    <div className=" w-full flex flex-col items-start h-full min-h-[100px] justify-between">

        <div className=" flex flex-col justify-start items-center relative ">
            {sideBarDate.map((item:SideBarDataModel)=><BarItem key={item.name} ItemName={item.name} item={item.item} valid={item.valid}/>)}
        </div>
          <UserLogo name="Git_Lab"/>
    </div>
  )
}

export default SidebarList
