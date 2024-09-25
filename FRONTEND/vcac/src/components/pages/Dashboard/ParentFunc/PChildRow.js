import { Link } from 'react-router-dom'
import axios from "axios"
import { useHistory } from 'react-router-dom'
const url = 'http://3.110.178.10:8080/admin'
const PChildRow = ({ child }) => {
  const history = useHistory()
  const onAdopt =(child)=>{
    // console.log(child.image)
    localStorage.setItem("childId", child.childId);
    alert(localStorage.getItem("childId"))
    history.push(`/adoptionform/${child.childId}`)
  }
  // const onDelete =(child)=>{
  //   localStorage.setItem("childId", child.childId);
  //   alert(localStorage.getItem("childId"))
  //   history.push("/deletechild")
  // }
  // const updateRow = (childId, child) => {
  //   sessionStorage.setItem("childId", childId)
  //   console.log(child)
  //      // console.log(childId)
        
  //   } 
  return (
    <tr>
      <td>{child.childId}</td>
      <td>{child.name}</td>
      <td>{child.age}</td>
      <td>{child.bloodGroup}</td>
      <td>{child.colourComplexity}</td>
      <td>{child.deficiency}</td>
      <td>{child.education}</td>
      <td>{child.gender}</td>
      <td>{child.medicalHistory}</td>
      <td>{child.other}</td>
      <td>{child.status}</td>
      <td>
        <img height="100"
          src={"http://3.110.178.10:8080/" + child.image}
          alt="na"
          className="thumbnail-sm"
        />
      </td>
      
      <td>
      
      {/* <button onClick={() => {onDelete(child)}} className="btn btn-danger" >Delete</button><br></br> */}
         <button onClick={() =>{onAdopt(child)}} className="btn btn-success">Adopt</button>
      {/*} <td><Link to="/editchildprofile"><button type="submit" className="btn btn-primary" onClick={() => updateRow(child.childId)}>update</button></Link></td>
    */}
    </td>
    </tr>
  )
}

export default PChildRow
