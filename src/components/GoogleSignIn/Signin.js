import React, { useEffect } from 'react'
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
function Signin() {

    const handleClick =()=>{
        const [value,setValue] = useState('')
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }


    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })


  return (
    <div>
        {value?<App/>:
        <button onClick={handleClick}>Signin With Google</button>
        }
    </div>
  );
}

export default Signin