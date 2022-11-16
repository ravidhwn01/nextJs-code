import Link from 'next/link'
function navbar() {
  return (
  <>
    <div className="navbar">
        <div className="navbar__links">

            <Link href="/">count</Link> <br/>
            <Link href="/home">home</Link> <br/>
            <Link href="/blog">Blog</Link> <br/>
            <Link href="/contact">Contact</Link> <br/>
            <Link href="/service">services</Link> <br/>
        </div>
    </div>
  </>
  )
}

export default navbar