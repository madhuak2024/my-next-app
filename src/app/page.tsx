import Link from 'next/link'

function HomePage() {
   return (
      <>
         <div className="container mx-auto p-4">Welcome to Next.js!
         <Link href="/posts" className="text-2xl text-blue-500 ml-8">First Post</Link></div>
         
      </>	    
   )
}

export default HomePage