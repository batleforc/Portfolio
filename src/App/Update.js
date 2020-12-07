import React, {useState,useEffect} from 'react'
import * as serviceWorker from '../serviceWorkerRegistration'

export default function Update() {
    const [ShowSnackBar,setShowSnackBar] = useState(false)
    const [hide, setHide] = useState(true);
    const reload = ()=>{
        window.location.reload(true)
    }
    useEffect(()=>{
        if(hide===false){
            setShowSnackBar(true)
            setHide(true)
            setTimeout(()=>{
            setShowSnackBar(false)
            },8000)
        }
    })
    return (
        <div id="snackbar" className={ShowSnackBar?"show-bar":""}>
            <p>A new version of the app is available</p>
            <button onClick={reload}> Reload? </button>
            <button onClick={()=>setShowSnackBar(false)}> Later</button>
        </div>
    )
}
