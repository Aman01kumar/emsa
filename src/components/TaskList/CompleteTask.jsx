import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[400px] p-5 bg-blue-400 rounded-xl '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 test-m px-3 py-1 rounded '>{data.category}</h3>
                <h4 className='text-lg'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-3xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-lg mt-2 font-semibold'>
            {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-m'>Complete</button>

            </div>

        </div>
  )
}

export default CompleteTask
