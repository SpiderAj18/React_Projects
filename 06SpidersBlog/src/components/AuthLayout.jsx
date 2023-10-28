import React,{useState,useEffect} from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'



export default function Protected({children,authenticaton=true}) {
    const navigate = useNavigate();
    const authStatus = useSelector();
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
       
        if (authenticaton && authStatus !== authenticaton) {
            navigate("/login")

        } else if(!authenticaton && authStatus !== authenticaton) {
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authenticaton])

  return (
    loader ? <h1>Loading...</h1>:<>{children}</>
  )
}

