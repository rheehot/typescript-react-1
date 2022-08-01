import {useEffect} from "react";
import {LogoutStatusRouter} from "./router/logout.status.router";


/**
 * 
 * @constructor
 */

export default function App() {

  useEffect(()=>{
    console.log("app 최상위 화면 랜더링")
  },[])

  return (
    <LogoutStatusRouter/>
  );
}


