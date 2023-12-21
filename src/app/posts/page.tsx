import Link from 'next/link'
import Image from 'next/image'
import './pages.css'
export default function FirstPost() {
   return (
      <div className= "container">
         <h1>My First Post</h1>
         <h2 className="heading">
            <Link href="/">
               Home
            </Link>
         </h2>
         <br/>
         <Image src="/favicon.ico" alt="TutorialsPoint Logo" className='image' width={800}
      height={500}/>
      </div>	  
   )
}
