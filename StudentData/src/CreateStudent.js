import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateStudent(){
  const [id,setid]=useState("");
  const [name,setname]=useState("");
  const [place,setplace]=useState("");
  const [phone,setphone]=useState("");
  const[validation,setvalidation]=useState(false);
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const studentData={id,name,place,phone};
    
    fetch("http://localhost:8000/students",
      {method:'POST',
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(studentData)
      }
    )
    .then((res)=>{alert("STUDENT DATA SAVED SUCCESSFULLY");
      navigate("/")
    })
    .catch((err)=>console.log(error.message))
  }

    return(
     <div className="container">

<center><h2>Add new Student</h2></center>

      <form onSubmit={handleSubmit}>

        <label htmlFor="id">ID:</label>
        <input type="text"
         id="id" name="id" required value={id} 
        onChange={e=>setid(e.target.value)}
        onMouseDown={()=>setvalidation(true)}/><br/>
        {id.length===0 && validation && <span style={{ color: 'red' }}>please enter your id</span>}<br/> <br/>



        <label htmlFor="id">Name:</label>
        <input type="text"
         id="name" name="name" required value={name} 
          onChange={e=>setname(e.target.value)}
          onMouseDown={()=>setvalidation(true)}/>
        <br/>
        {name.length===0 && validation && <span style={{ color: 'red' }}>please enter your name</span>}<br/> <br/>



        <label htmlFor="id">PLACE:</label>
        <input type="text" 
        id="place" name="place" required value={place}
        onChange={e=>setplace(e.target.value)}
        onMouseDown={()=>setvalidation(true)}/><br/>
        {place.length===0 && validation && <span style={{ color: 'red' }}>please enter your place</span>}<br/> <br/>



        <label htmlFor="id">PHONE:</label>
        <input type="text"
         id="phone" name="phone" required value={phone} 
          onChange={e=>setphone(e.target.value)}
          onMouseDown={()=>setvalidation(true)}/><br/>
        {phone.length===0 && validation && <span style={{ color: 'red' }}>please enter your phone number</span>}<br/> <br/>



         <div> <button type="submit">save</button>
       <button><Link to="/" className="btn btn-back">Back</Link></button>
       </div>
      </form>
     </div>
    
    )
     }
     export default CreateStudent;
