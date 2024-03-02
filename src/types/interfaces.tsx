import { ReactNode } from "react"

export interface DataTableModel{
    name:string,
    document:number,
    budget:number,
    risk:string
}
export interface SideBarDataModel{
    name:string,
    valid?:boolean,
    item:ReactNode
}