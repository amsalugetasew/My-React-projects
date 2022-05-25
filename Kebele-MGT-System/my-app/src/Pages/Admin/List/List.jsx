import Navbar from "../../../Components/Admin/Navbar/Navbar"
import Sidebar from "../../../Components/Admin/Sidebar/Sidebar"
import Datatable from "../../../Components/Admin/Datatable/Datatable"
import "./List.scss"

const List = ({title, link, type, users}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
      <Navbar users={users}/>
        {title}
        <Datatable type={type} title={title} link={link}/>
      </div>
    </div>
  )
}

export default List