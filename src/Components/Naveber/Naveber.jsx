import React, { useState } from 'react'

const Naveber = () => {

  return (
    <div className='w-full bg-[#64698c] py-4 h-[80px] shadow-lg shadow-slate-50 content-center'>
      <nav className=' flex justify-between px-8'>
        <div>
          {/* <img src="" alt="#" /> */} <i className="text-white cursor-pointer fa-brands fa-pied-piper text-4xl"></i>
        </div>
        <div className=' xl:text-1xl xl:mt-[12px] text-white xl:bg-transparent xl:w-0 xl:h-0 xl:rounded-none xl:relative xl:right-0 xl:-left-24 xl:bottom-0 bg-white w-10 h-10 rounded-3xl fixed right-6 bottom-10 '>
          <ul className=' xl:flex xl:items-center xl:space-x-10 xl:w-0 xl:mt-0 xl:h-6 xl:ml-0 w-[150px] h-[50px] absolute mt-[-180px] -ml-[20px]'>
            <li 
            className=' hover:text-black hover:scale-95 active:scale-105 duration-200 py-2'>
              <a href='#'>Home</a>
            </li>
            <li className=' hover:text-black hover:scale-95 active:scale-105 duration-200 py-2'>
              <a href='#'>About</a>
            </li>
            <li className='hover:text-black hover:scale-95 active:scale-105 duration-200 py-2'>
              <a href='#'>Contact</a>
            </li>
            <li className='hover:text-black hover:scale-95 active:scale-105 duration-200 py-2'>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <button  className='border border-cyan-50 h-[50px] w-[100px] text-white hover:text-black rounded-xl hover:bg-[#7f85b3] ease-in duration-200 hover:border-none ' >Hire Me</button>
        </div>
      </nav>

    </div>
  )
}

export default Naveber