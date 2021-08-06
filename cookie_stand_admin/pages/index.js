import Head from '../components/head'
import Header from '../components/header'
import Form from '../components/main'
import Table from '../components/table'
import Footer from '../components/footer'
import Login from '../components/loginForm'
import { useState } from 'react'
import axios from 'axios';


const baseUrl='https://cookie-stand-api.herokuapp.com/';
const tokenUrl = baseUrl + '/api/token/';



export default function Home() {
  const [totalPerHour, setTotalPerHour] = useState(0);
  const [cookieStands, setCookieStands] = useState([])
  const [isLogin, setIsLogin] = useState(false) // Extra
  
  async function saveInfo(e){
    e.preventDefault();
    const loginInfo = {
        username : e.target.username.value ,
        password : e.target.password.value,
      };
      getData(loginInfo)
    }

  async function login(loginInfo) {
    return axios.post(`${baseUrl}api/token/`, loginInfo);
  }

  async function fetchStands(loginInfo) {
    try{
    const tokenResponse = await login(loginInfo)
    const { refresh, access: token } = tokenResponse.data;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await axios.get(`${baseUrl}api/v1/cookie_stands/`, config);
    setIsLogin(true)
    return response.data;
  }catch(error){
    console.log(error)
  }
    
  }

  async function getData(loginInfo) {
    setCookieStands(await fetchStands(loginInfo));
  }

  if (isLogin){
  
  return (
    <div>
    <Head title ="Cookies Stand Admin"/>
    <Header title ="Cookies Stand Admin"/>
    <Form cookieStands={cookieStands} setCookies={setCookieStands} totalPerHour={totalPerHour} setTotalPerHour={setTotalPerHour}  />
    <Table stands={[cookieStands, totalPerHour]}/>
    <Footer cookieStandArr={cookieStands}/>
  </div>
  )}else{
    return(
      <Login saveInfo ={saveInfo} />
    )
  }
}