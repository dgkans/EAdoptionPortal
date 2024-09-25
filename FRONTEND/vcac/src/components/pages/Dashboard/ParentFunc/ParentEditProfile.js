import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../../layout/Footer'


import { Link, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
const url = 'http://3.110.178.10:8080/user'

const ParentEditProfile = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  
  const [name, setName] = useState(user.name)
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber)
  const [email, setEmail]=useState(user.email)
  const [id, setId] = useState(user.id)//hide
  const [password, setPassword] = useState(user.password)//hide
  const [Roles, setRoles] = useState(user.Roles)//hide
  const [isActive, setIsActive] = useState(user.isActive)//hide

  console.log(user)
  console.log(sessionStorage.getItem('user'))
  const history = useHistory()

  const EditProfile = () => {
    const body = { id:user.id, name:name,  mobileNumber:mobileNumber, email:email,  password:password, Roles:Roles,  isActive:isActive}
 
    axios.put(`http://3.110.178.10:8080/user/edit-profile`, body).then((response) => {
      const result = response.data
    
      if(result){
        alert("error")
        history.push('/peditprofile')
        console.log(result)
        sessionStorage.setItem("user", JSON.stringify({Id : result.Id}))
      }
      // saveTokenInLocalStorage(result)
      else{
        alert( 'success')
        history.push('/parentdash')
      }
      
       
    })
  }
  return (

    <div>
    <div className="container">
     


      <label htmlFor="">Name   </label>
      <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => {
        setName(e.target.value)
      }} defaultValue={user.name} /><br />

      <label htmlFor="">Mobile Number</label>
      <input type="text" class="form-control" onChange={(e) => {
        setMobileNumber(e.target.value)
      }} defaultValue={user.mobileNumber} /><br />

      <label htmlFor="">Email  </label>
      <input type="text" class="form-control" onChange={(e) => {
        setEmail(e.target.value)
      }} defaultValue={user.email} /><br />

      <input type="hidden" class="form-control" onChange={(e) => {
        setId(e.target.value)
      }} defaultValue={user.id} /><br />

    <input type="hidden" class="form-control" onChange={(e) => {
        setPassword(e.target.value)
      }} defaultValue={user.password} /><br />


      <input type="hidden" class="form-control" onChange={(e) => {
        setIsActive(e.target.value)
      }} defaultValue={user.isActive} /><br />

        <input type="hidden" class="form-control" onChange={(e) => {
        setRoles(e.target.value)
      }} defaultValue={user.Roles} /><br />
       <div className='row'>
        
        <div className='col-10'>
        <button type="submit" class="btn btn-primary" onClick={() => { EditProfile(user.Id) }}>Submit</button>
          
          </div>
          <div className='col'>
          <Link to="/parentdash">
            <a className="btn btn-warning">Back</a>
          </Link></div>
        
          </div>
{/*   
         <div className="mb-3">
          <button type="submit" class="btn btn-primary" onClick={() => { EditProfile(user.Id) }}>Submit</button>
            {'   '}

          </div>
          
          <div className="col-1">
            <Link to="/parentdash">
              <a className="btn btn-warning">Back</a>
            </Link></div> */}
            
    </div><Footer /></div>
    
  );
}
export default ParentEditProfile