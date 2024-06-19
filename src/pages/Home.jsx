/* eslint-disable no-unused-vars */
import Navbar from '../component/Navbar'
import HomeMainSection from '../component/HomeMainSection'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTransaction } from '../feature/TransactionSlice'
import { setAmount } from '../feature/WalletSlice'
const Home = () =>
{
  const dispatch = useDispatch();
  const Name=useSelector((state)=>state.user.name)
  useEffect( () =>
  {
    if ( localStorage.getItem( `${ Name }transaction` ) )
    {
      dispatch( setTransaction( JSON.parse( localStorage.getItem( `${ Name }transaction` ) ) ) )
      dispatch(setAmount(JSON.parse( localStorage.getItem( `${ Name }wallet` ) )))
    }
  },[])
  return (
    <>
      <Navbar/>
      <HomeMainSection/>
    </>
  )
}

export default Home
