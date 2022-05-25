import "./FamilyList.scss"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Datatable from "../../Components/Datatable/Datatable"
// const selected = (optionState === option.value) ? true : false;
const List = ({title, link, type, users}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
      <Navbar users={users}/>
      {/* <select value={optionsState}>
  <option value={option.value} {selected ? 'selected' : ''}>Apple</option>
  <option value="B">Banana</option>
  <option value="C">Cranberry</option>
</select> */}

{/* <select value={optionsState}> */}
  <select>
  <option value="A">Apple</option>
  <option value="B">Banana</option>
  <option value="C">Cranberry</option>
</select>
        {title}
        <Datatable type={type} title={title} link={link}/>
      </div>
    </div>
  )
}

export default List