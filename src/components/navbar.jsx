import '../App.css'


function Navbar() {
  return (
    <nav>

        <div>
          <h1>Hacker News</h1>
          <div>
            <ul>
              <li>new</li>
              <li>past</li>
              <li>comments</li>
              <li>ask</li>
              <li>show</li>
              <li>jobs</li>
              <li>submit</li>
            </ul>
        </div>

      </div>

      

        {/* Separating nav in two */}

        <div>
            <a href="">Login</a>
            <button><input type="text" /></button>
        </div>

    </nav>
  )
}

export default Navbar;