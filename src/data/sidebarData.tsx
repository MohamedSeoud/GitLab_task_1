import { SideBarDataModel } from "../types/interfaces";
import { FaBell } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";

export const sideBarDate:SideBarDataModel[]=[
{name:'Alerts',item:<FaBell />,valid:true},
{name:'Training',item:<FaGraduationCap />,valid:true},
{name:'Automation',item:<FaGears />},
{name:'Portfolio',item:<IoIosDocument />},
{name:'Trading',item:<BsGraphUp />},

]