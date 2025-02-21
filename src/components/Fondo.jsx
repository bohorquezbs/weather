import React, { useEffect, useState } from 'react'
import { current } from '../libs/axios/weather'

export function Modal({ closeModal }) {

  return (

    <section className="w-screen h-screen max-h-screen bg-[#1E213A] absolute top-0 left-0 md:w-[30vw] md:min-w-[380px]" style={{ zIndex: 99 }}>
      <nav className="w-full h-24 flex items-end justify-around">
        <span onClick={closeModal} className="absolute right-10 top-6 cursor-pointer">
          <img width="25" className=" hover:w-7 hover:h-7" src="./weatherapp/close.svg" alt="close icon" />
        </span>
        <div className="flex items-center w-[55%] max-w-[268px] h-9 bg-transparent border border-[#E7E7EB]  font-medium text-base text-[#616475]">
          <img alt="Search Icon" width="24" className="  mx-2" src="/weatherapp/search.svg" />
          <input className="bg-transparent outline-none w-[233px] h-8 pr-1 " placeholder="search location" type="text" />
        </div>
        <button className=" w-20 h-9 bg-[#3C47E9] px-1 font-semibold text-base text-[#E7E7EB] hover:text-[#def341]">Search</button>
      </nav>
      <ul className="flex flex-col items-center w-full h-fit mt-80px pb-5">
        <li className="flex justify-between w-[70%] max-w-367px h-14   pl-2 text-base font-medium cursor-pointer text-[#E7E7EB] hover:border border-[#616475] mt-6  hover:after:bg-arrow-bg hover:after:bg-contain hover:after:bg-no-repeat hover:after:p-2 hover:after:mt-5 hover:after:mr-5">
          <p className="flex items-center text-lg ml-2">Milan,IT</p>
        </li>
        <li className="flex justify-between w-[70%] max-w-367px h-14   pl-2 text-base font-medium cursor-pointer text-[#E7E7EB] hover:border border-[#616475] mt-6  hover:after:bg-arrow-bg hover:after:bg-contain hover:after:bg-no-repeat hover:after:p-2 hover:after:mt-5 hover:after:mr-5">
          <p className="flex items-center text-lg ml-2">Milan,US</p>
        </li>
        <li className="flex justify-between w-[70%] max-w-367px h-14   pl-2 text-base font-medium cursor-pointer text-[#E7E7EB] hover:border border-[#616475] mt-6  hover:after:bg-arrow-bg hover:after:bg-contain hover:after:bg-no-repeat hover:after:p-2 hover:after:mt-5 hover:after:mr-5">
          <p className="flex items-center text-lg ml-2">Milan,CA</p>
        </li>
      </ul>
    </section>
  )
}


export function Fondo() {
  
  useEffect(() => {
    current()
      .then((rs) => console.log(rs))
      .catch(error =>
        console.log(error))
  }, [])
  
  
  const [isOpen, SetIsOpen] = useState(false);
  const openModal = () => { SetIsOpen(true) }
  const closeModal = () => { SetIsOpen(false) }
  return (
    <>
      <aside className="w-screen lg:w-[35%] h-screen bg-[#1e213a] flex flex-col items-center">
        <header className=" flex justify-a items-end h-16 gap-x-10">
          <input onClick={openModal} className=" w-44 h-9 bg-[#6E707A] text-[#E7E7EB] cursor-pointer text-center right-4" type="button" value="Search for Places" />
          <div className=" flex items-center justify-center w-10 h-10 bg-[#ffffff33] rounded-full cursor-pointer">
            <img src="./weatherapp/location.svg" alt="location icon" width={25} />
          </div>
        </header>
        {isOpen && <Modal closeModal={closeModal} />}
        <section className="w-full h-3/5 relative flex flex-col justify-center items-center">
          <div className="w-[120%] h-4/5 mt-2 opacity-40 absolute bottom-24 right-0 bg-[url('/weatherapp/others/Cloud-background.png')]"></div>
          <img className=" flex  h-60 w-52 mt-45 mb-24" src='./weatherapp/weather/10d.png' alt="" />
          <h2 className="text-white font-medium text-6xl text-center mt-1 ">25<span className='text-6xl'> °C </span></h2>
          <h2 className='text-2xl text-[#a09fb1] font-bold text-center mt-4 '>clear sky</h2>
          <h2 className='text-md text-[#818683]  text-center mt-4'>Today , mon feb 17 2025</h2>
          <div className='text-md text-[#818683] font-bold text-center mt-2 gap-x-2 flex items-center justify-center'>
            <img className="w-6 h-6" src="/weatherapp/location_on.svg" alt="" />
            <h2 className=''>Milagro</h2>
          </div>
        </section>
      </aside >
    </>
  )
}
