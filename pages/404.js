// 404 error page
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../components/navbar";
function error() {
  const router = useRouter();
  useEffect(()=>{
    setTimeout(()=>{ 
      router.push('/')   // redirecting to home page after few second
    }, 3000)
  },[]);

  return (
    <>
    <Navbar/>
      <h1>404 error page! sorry</h1>
      {/* it will route to home page without loading the page */}
      {/* <a onClick={() => router.push("/")}> go to home</a> */}
    </>
  );
}

export default error;
