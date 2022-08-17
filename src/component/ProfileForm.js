import React from 'react'
import { useState } from 'react'

function ProfileForm() {
const [profile, setProfiles] = useState({
fristname:"",
lastname:"",
email:"",
phone:""    
});
const handle = (event) => {
    setprofile((prev) =>({
    ...prev,
   [event.target.name]: event.target.value
    }));
}
const handleForm =(e) =>{
    e.preventDefault();
    Submit(profile)
}






  return (
    <div className="formContainer">
<h3>profile Form</h3>
<form>
<legend>Bio data</legend>
<div className="names">
<lable>First Name
<input name="firstname" value=
{profile.firstname} type="text" onChange={handle}  />
</lable>
<lable>Last Name
<input name="lastname" value=
{profile.lastname} type="text" onChange={handle}  />
</lable>
    </div>
<div className="names">
<lable>email
<input name="email" value=
{profile.email} type="email" onChange={handle}  />
</lable>
<lable>phone
<input name="phone" value=
{profile.phone} type="tel" onChange={handle}  />
</lable>
    </div>
    
    </form>
    </div>
  )
}

export default ProfileForm