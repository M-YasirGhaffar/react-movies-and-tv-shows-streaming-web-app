import React from 'react'
import { useNavigate } from 'react-router'

function BackButton() {
  const navigate = useNavigate();

  return (
    <>
      <button className='fixed right-[1rem] bottom-[1rem] z-[0] transition-all delay-200 text-gray-200 rounded-full text-xl 
         text-center bg-cyan-800 w-10 h-10
         hover:bg-cyan-600' onClick={() => { navigate('/') }}>
        <i className="fa-solid fa-house"></i>
      </button>
    </>
  )
}

export default BackButton;