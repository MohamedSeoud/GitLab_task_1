
import FormContainer from "./components/Form/FormContainer";
import TableList from "./components/dataTable/TableList";
import Header from "./components/header/Header";

import SideBar from "./components/sidebar/SideBar";


function App() {

  return (
    <>
      <div className=' bg-black min-w-full  p-5 text-white 
        w-full min-h-screen h-fit grid grid-cols-[90px,1000px,1fr] overflow-x-auto'>
        <div className=" z-20">
          <SideBar/>
       </div>
      <div>
        <Header/>
        <TableList/>
      </div>
      <FormContainer/>

       </div>

    </>
  )
}

export default App
