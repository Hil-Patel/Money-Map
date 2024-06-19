/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import IncomeSection from './IncomeSection'
import ExpenseSection from './ExpenseSection'
import { useDispatch } from 'react-redux'
import { loggedIn } from '../feature/LoginSlice'

const HomeMainSection = () =>
{
  // const dispatch = useDispatch();
  // useEffect( () =>
  // {
  //   dispatch(loggedIn())
  // },[])
  return (
    <>
    <div className='Home-main'>

      <IncomeSection/>
      <ExpenseSection/>
    </div>
    </>
  )
}

export default HomeMainSection
