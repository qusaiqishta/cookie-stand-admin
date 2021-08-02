import Link from 'next/link'
import Head from 'next/head'
export default function Careers() {
    return (
        <div className="">
          <Head>
          <title>Careers Page</title>
          <link rel="icon" href="/favicon.ico" />
          </Head>
        
         <header className="flex items-center justify-between p-4 text-gray-100 bg-green-500">
          <h1 className="text-4xl">Cookie Stand Admin</h1>
          
          
          
        </header>
  
         <main className="">
             </main>
             <footer className="items-center p-4 text-gray-100 bg-green-500 my-50">
        <Link href="/">
          <a>Home</a>
        </Link>
      </footer>
        </div>  
    )
}