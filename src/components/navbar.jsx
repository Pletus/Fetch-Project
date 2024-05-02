import '../App.css'


function Navbar() {
  return (
    <nav className='p-10 navbarstyling flex justify-between'>
        <div>
          <h1 className='p-3 font-mono'>Hacker News</h1>
          <ul className='inline-flex p-3 text-3xl gap-4 font-mono'>
            <a>new</a>
            <br />
            <a>past</a>
            <br />
            <a>comments</a>
            <br />
            <a>ask</a>
            <br />
            <a>show</a>
            <br />
            <a>jobs</a>
            <br />
            <a>submit</a>
          </ul>
      </div>
      <div className='grid'>
          <a className='text-5xl justify-self-end font-mono' href="">login</a>
          <button className='search-btn-navbar py-1'><input className='text-center input-btn-navbar' type="text" placeholder='type here what you are looking for...' /></button>
      </div>
    </nav>
  )
}

export default Navbar;