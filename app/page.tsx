import Image from "next/image";
import "./page.css"
/* import { Link } from 'react-router-dom';
 */

export default function Home() {
  return (
  <>
  
  <nav className="navbar_page">
        {/* <Link to="/about" >
          <img  className='logo'/>
        </Link> */}
        <ul>
        <li>About</li>
        <li>Contact</li>
        <li></li>
      </ul>
      </nav>
    <main className="main_page">
      
      <div className="div_title">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}  <h2>Probando Next</h2>
      </div>
    </main>
  </>
  
  );
}
