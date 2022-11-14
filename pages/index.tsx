import  { useState } from "react";
function index() {
  const [num, setNum] = useState(0);
  return (
    <>
      <button onClick={() => setNum(num + 1)}>Click Me</button> <br />
      <button onClick={() => setNum(num - 1)}>Click Me</button>
      <p>{num}</p>
    </>
  );
}
export default index;
