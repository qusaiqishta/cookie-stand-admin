import Head from 'next/head'
import Link from 'next/link'


import { useState } from 'react';



export default function Home() {

  const [submittedlocation, setLocation] = useState([]);
  

  function cookiesHandler(event){
    event.preventDefault();
    
    const location = {
      location: event.target.location.value,
      minCustomer: event.target.minCustomer.value,
      maxCustomer:event.target.maxCustomer.value,
      avgCookies:event.target.avgCookies.value,
    }
    setLocation([...submittedlocation,location]);

  }


  

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="flex items-center justify-between p-4 text-gray-100 bg-green-500">
        <h1 className="text-4xl text-black">Cookie Stand Admin</h1>
        <Link href="/career">
          <a className="px-1 text-xl font-medium text-black">careers</a>
        </Link>
        
        
      </header>

      <main className="">
        <form onSubmit={cookiesHandler} className="grid items-center justify-center grid-cols-3 gap-5 p-5 mx-20 my-4 text-center bg-green-300 border-2 border-green-400 rounded-lg gap-x-12" >
          <div className="flex flex-col col-span-8 mb-4">
            <lable className="px-1 font-medium">Location</lable>
          <input name="location" className="flex-auto p-2"/>
        
          </div>
          <div className="flex flex-col col-span-2">
            <lable className="px-1 font-medium">Minimum Customer Per Hour</lable>
          <input name="minCustomer" type='number' className="flex-auto p-2"/>
          </div>
          <div className="flex flex-col col-span-2">
            <lable className="px-1 font-medium">Maximum Customer Per Hour</lable>
          <input name="maxCustomer" type='number' className="flex-auto p-2"/>
        
          </div>
          <div className="flex flex-col col-span-2">
            <lable className="px-1 font-medium">Average Cookies Per Sale</lable>
          <input name="avgCookies" type='number' className="flex-auto p-2"/>
        
          </div>
          <button type='submit' className="px-6 py-3 mx-4 text-gray-100 bg-green-700 " >Create </button>
        </form>
        
        <table space-x-4 className="w=1/2 mx-auto my-4">
          <thead>
            <tr>
              <th className="space-x-4 border border-green-600">Location</th>
              <th className="border border-green-600">minCustomers</th>
              <th className="border border-green-600">maxCustomers</th>
              <th className="border border-green-600">AvgCookies</th>
            </tr>
          </thead>
          <tbody>
          {
              submittedlocation.map(item => {
                return(
                  <tr>
                    <td className="border border-blue-600 gap-y-4">{item.location}</td>
                    <td className="border border-blue-600">{item.minCustomer}</td>
                    <td className="border border-blue-600">{item.maxCustomer}</td>
                    <td className="border border-blue-600">{item.avgCookies}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </main>
    
      <footer className="items-center p-4 text-gray-100 bg-green-500 my-50">
        @2021
      </footer>
    </div>
  )
}