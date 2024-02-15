import React, { useState } from 'react'

const Naveber = () => {
  
  // const[pos,setPos]= useState();

  let reate = '700PX';
  let pot = 1;
  const bar = document.getElementById('bar');
  bar.style.left = '200px';
  bar.style.top = '-300px';
  const posi =()=>{
    if (pot == 1) {
      bar.style.left = '200px'
      bar.style.top = '-300px';
      pot++;
    }else{
      bar.style.top = '60px';
      bar.style.left= '10px'
      pot--;
    }
    
  }

  return (
    <div className='w-full bg-neutral-700 h-11'>
      <nav className='flex justify-between px-6 content-center py-1 text-2xl'>
        <div className='text-yellow-50'><a href="/">logo</a></div>
        <div 
        onClick={posi}
        className=' text-yellow-50 cursor-pointer active:scale-105'>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
      <div 
      id='bar'
      className='absolute m-6 ease-in-out duration-200 text-2xl rounded-lg w-[200px] h-[auto] bg-slate-600'>
        
        <i className="fa-solid fa-house w-full py-5 ml-[89px] text-yellow-50 active:scale-105"></i>

        <i className="fa-solid fa-cart-shopping w-full py-5 ml-[89px] text-yellow-50 active:scale-105"></i>

        <i class="fa-solid fa-screwdriver-wrench w-full py-5 ml-[89px] text-yellow-50 active:scale-105"></i>
        
        <i className="fa-solid fa-user w-full py-5 ml-[89px] text-yellow-50 active:scale-105"></i>
      </div>
    </div>
  )
}

export default Naveber