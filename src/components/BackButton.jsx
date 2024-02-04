import React from 'react'
import { useNavigate } from 'react-router'

function BackButton() {
  const navigate = useNavigate();

  return (
    <>
        <button className=' rounded-xl text-xl p-2 px-6 flex justify-center items-center mx-8 my-4 bg-cyan-800 hover:bg-cyan-600' onClick={()=> {navigate('/')}}>
        <i className="mr-2 fa-solid fa-arrow-left"></i>Back
        </button>
    </>
  )
}

export default BackButton;