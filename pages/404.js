// 404 error page
import { useRouter } from "next/router";
function error() {
  const router = useRouter();

  return (
    <>
      <h1>404 error page! sorry</h1>
      {/* it will route to home page without loading the page */}
      <a onClick={() => router.push("/")}> go to home</a>
    </>
  );
}

export default error;
