import '../App.css'


function Navbar() {
  return (
    <nav className='p-6 navbarstyling flex justify-between shadow-lg shadow-purple-100'>
        <div>
          <h1 className='p-3 font-mono font-bold text-black indent-4 decoration-solid'>Hacker News</h1>
          <ul className='inline-flex p-3 text-3xl gap-4 font-mono'>
            <a className='font-bold text-black'>new</a>
            <div className='vertical-bar'></div>
            <a className='font-bold text-black'>past</a>
            <div className='vertical-bar'></div>
            <a className='font-bold text-black'>comments</a>
            <div className='vertical-bar'></div>
            <a className='font-bold text-black'>ask</a>
            <div className='vertical-bar'></div>
            <a className='font-bold text-black'>show</a>
            <div className='vertical-bar'></div>
            <a className='font-bold text-black'>jobs</a>
            <div className='vertical-bar'></div>
            <a className='font-bold text-black'>submit</a>
          </ul>
      </div>
      <div className='grid'>
          <a className='text-4xl pt-2 justify-self-end font-mono font-semibold text-black' href="">login</a>
          <button className='drop-shadow-xl rounded-lg shadow-lg shadow-purple-100 search-btn-navbar py-1'><input className='rounded-lg text-center input-btn-navbar' type="text" placeholder='type here what you are looking for...' /></button>
      </div>
    </nav>
  )
}

export default Navbar;