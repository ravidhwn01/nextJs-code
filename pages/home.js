import Navbar from "../components/navbar";

const home = () => {
  return (
  <>
    <Navbar/>
    {/* <div  style={{color:"green"} }>home page!</div> */}
    {/* using inline css */}
    <div>home page!</div>
    <style jsx >
      {`
        div{
          color:blue;  
        }
      `}
    </style>
    {/* using styled-jsx css */}

  </>)
};

export default home;
