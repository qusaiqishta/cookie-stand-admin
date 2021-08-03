// import Head from 'next/head'
// import Link from 'next/link'
import Header from '../components/header.js';
import Head from '../components/head.js';
import Footer from '../components/footer.js';
import Table from '../components/table.js';
import Form from '../components/main.js'


import { useState } from 'react';



export default function Home() {
  


    const [cookieStands, setCookieStands] = useState([]);
    const [totalPerHour, setTotalPerHour] = useState(0);
    

    
    
    
    return (
      <div>
      <Head title='Cookie Stand Admin'/>
      <Header title='Cookie Stand Admin'/>
      <Footer cookieStandArr={cookieStands}/>
      <Form cookieStands={cookieStands} setCookieStands={setCookieStands} totalPerHour={totalPerHour} setTotalPerHour={setTotalPerHour}  />
      <Table stands={[cookieStands, totalPerHour]}/>
      </div>   
      )}