import React, { useEffect, useState } from 'react'
import { forecast } from '../libs/axios/weather'

export default function Selection(direccion) {
    const [forecastData, setForecastData] = useState([])
    useEffect(() => {
        forecast()
          .then((rs) => setForecastData(rs.data))
          .catch(error =>
            console.log(error))
      }, [])
    return (
        <div className="w-screen lg:w-[65%] h-full bg-slate-950 flex flex-col items-center">
            <header className="w-[70%] h-16  text-white flex justify-end mt-5">
                <ul className="flex items-center justify-center gap-x-2">
                    <li className=' text-xl font-medium rounded-full  w-10 h-10 flex items-center justify-center bg-white text-black'>°C</li>
                    <li className=' text-xl font-medium rounded-full  w-10 h-10 flex items-center justify-center bg-white text-black'>°F</li>
                </ul>
            </header>
            <div className="w-4/5 md:w-1/2 h-4/5 gap-y-2 lg:gap-y-0 flex-wrap lg:flex-nowrap lg:w-[70%] lg:h-1/5  text-white flex justify-center gap-x-2 mt-2">
                <article className="flex flex-col w-29 h-38  items-center justify-center lg:w-30 lg:h-34 bg-[#1e213a] text-white">
                    <h2 className="text-lg">Tomorrow</h2>
                    <img className="h-16 w-20 pe-4" src='/weatherapp/weather/10n.png' alt="" />
                    <h2 className="text-sm text-white mt-4  ">21 <span className="opacity-50">°C</span></h2>
                </article>

                <article className="flex flex-col w-29 h-38  items-center justify-center lg:w-30 lg:h-34 bg-[#1e213a] text-white">
                    <h2 className="text-lg">Tomorrow</h2>
                    <img className="h-16 w-20 pe-4" src='/weatherapp/weather/10n.png' alt="" />
                    <h2 className="text-sm text-white mt-4  ">21 <span className="opacity-50">°C</span></h2>
                </article>

                <article className="flex flex-col w-29 h-38  items-center justify-center lg:w-30 lg:h-34 bg-[#1e213a] text-white">
                    <h2 className="text-lg">Tomorrow</h2>
                    <img className="h-16 w-20 pe-4" src='/weatherapp/weather/10n.png' alt="" />
                    <h2 className="text-sm text-white mt-4">21 <span className="opacity-50">°C</span></h2>
                </article>

                <article className="flex flex-col w-29 h-38  items-center justify-center lg:w-30 lg:h-34 bg-[#1e213a] text-white">
                    <h2 className="text-lg">Tomorrow</h2>
                    <img className="h-16 w-20 pe-4" src='/weatherapp/weather/10n.png' alt="" />
                    <h2 className="text-sm text-white mt-4  ">21 <span className="opacity-50">°C</span></h2>
                </article>

                <article className="flex flex-col w-29 h-38  items-center justify-center lg:w-30 lg:h-34 bg-[#1e213a] text-white">
                    <h2 className="text-lg">Tomorrow</h2>
                    <img className="h-16 w-20 pe-4" src='/weatherapp/weather/10n.png' alt="" />
                    <h2 className="text-sm text-white mt-4  ">21 <span className="opacity-50">°C</span></h2>
                </article>
            </div>
            <section className="w-full h-91 flex justify-center items-center bg-slate-950" >
                <div className='w-[70%] h-full  grid grid-rows-10 grid-cols-12 gap-3'>
                    <h2 className="text-2xl text-white mb-2 mt-5 w-full h-8 grid-rows-10">Todays Hightlights</h2>
                    <div className="min-h-screen w-full flex flex-col  items-center justify-center gap-2 absolute left-0 md:flex md:shrink-0 md:h-full md:w-450">
                        <div className='flex gap-2'>
                            <article className=" bg-[#1e213a] flex flex-col items-center w-50 justify-center">
                                <h2 className='mt-2 text-white font-medium'>Wind Status</h2>
                                <h2 className='mt-6 text-white font-medium text-4xl lg:text-6xl flex items-center'>0.75<span className='text-white font-medium text-3xl ps-2'>ms </span></h2>
                                <div className='flex justify-center items-center mt-6 gap-x-4'>
                                    <img className='bg-gray-500 rounded-full w-8 h-8 p-1' src="/weatherapp/navigation.svg" alt="" />
                                    <h2 className='text-white font-bold text-2xl ps-1'>S</h2>
                                </div>
                            </article>

                            <article className=" bg-[#1e213a] flex flex-col items-center w-50 justify-center">

                                <h2 className='mt-2 text-white font-medium'>Humidity</h2>
                                <h2 className='mt-6 text-white font-medium text-4xl lg:text-6xl flex items-center'>90
                                    <span className='text-white font-medium text-3xl ps-2'>%</span>
                                </h2>

                                <div className='flex gap-x-6 lg:gap-x-16  text-gray-500 font-medium'>
                                    <h2>0</h2>
                                    <h2>50</h2>
                                    <h2>100</h2>
                                </div>

                                <div className='flex mt-2 gap-x-4 h-2 bg-white w-[70%] rounded-full'>
                                    <div className=' h-full bg-yellow-300 rounded-full' ></div>
                                </div>
                                <h2 className='ms-20 text-white '>%</h2>
                            </article>
                        </div>
                        <div className='flex gap-2'>
                            <article className=" bg-[#1e213a] flex flex-col items-center w-50 h-40 justify-center">
                                <h2 className='font-medium text-white mt-2 text-center'>Visibility</h2>
                                <h2 className='mt-6 text-white font-medium text-4xl lg:text-6xl flex items-center gap-x-2'>10.00<span className='text-3xl'>km</span></h2>
                            </article>
                            <article className=" bg-[#1e213a] flex flex-col items-center w-50 h-40 justify-center">
                                <h2 className='font-medium text-white mt-2 text-center'>Air Pressure</h2>
                                <h2 className='mt-6 text-white font-medium text-4xl lg:text-6xl flex items-center gap-x-2'>1010<span className='text-3xl'>mb</span></h2>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
