import React, {useState,useEffect} from 'react'
import * as serviceWorker from '../serviceWorkerRegistration'

export default function Update() {
    const [ShowSnackBar,setShowSnackBar] = useState(false)
    const [hide, setHide] = useState(true);

    navigator.serviceWorker.addEventListener('controllerchange',()=>{
        setShowSnackBar(true)
        setHide(false);
    });

    const reload = ()=>{
        setShowSnackBar(false);
        if ('serviceWorker' in navigator) {
            // Register a service worker hosted at the root of the
            // site using the default scope.
            navigator.serviceWorker.register('/sw.js').then(
            (registration) => {
                registration.waiting.postMessage({type: 'SKIP_WAITING'})
            },
            (error) => {
                console.log('Service worker registration failed:', error)
            }
            )
        } else {
            console.log('Service workers are not supported.')
        }
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
