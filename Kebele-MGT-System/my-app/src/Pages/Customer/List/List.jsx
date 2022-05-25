import "./List.scss"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Datatable from "../../Components/Datatable/Datatable"

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