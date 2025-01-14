import React from 'react'
import Header from '../others/header'
import TasklistNumbers from '../others/TasklistNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header changeUser = {props.changeUser} data = {props.data} />
      <TasklistNumbers data = {props.data} />
      <TaskList data = {props.data} />
    </div>
  )
}

export default EmployeeDashboard
