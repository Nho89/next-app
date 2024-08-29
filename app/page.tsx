import Image from "next/image";
import "./page.css"

export default function Home() {
  return (
  <>
  
  <nav className="navbar_page">
        <ul>
        <li>About</li>
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
