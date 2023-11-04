import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <body className="">
        <div className="">
          <div className=" bg-slate-400 h-[600px] w-[500px] ml-[400px] mt-[50px] rounded-[10px]">
          <div className=" bg-amber-100 h-[130px] w-[500px] rounded-t-[10px] flex flex-row">
            <div className="h-[0.1rem] w-[0.1rem] bg-slate-700"></div>
          <img
          className="h-[5.5rem] w-[5.5rem]  ml-[0.7rem] mt-[0.9rem] rounded-[0.2rem]"
          src="line.jpg"
          alt="instagram"
        />
        <div className="">
          <p className="ml-[0.3rem] mt-[0.6rem]">Dr. Aryan Singh</p>
          <p className="ml-[0.3rem]">Surgeon +28 Years Exp.</p>
          <p className="ml-[0.3rem]">Lokmanya Nagar +Galaxy Hospital +Change Clinic</p>
          <p className="ml-[0.3rem]">Consultation Fee: $400</p>
        </div>
          </div>
          <div className=" bg-slate-300 h-[45px] w-[500px] flex flex-row">
            <div className=" bg-slate-300 flex flex-row h-[45px] w-[80px] ml-[10px]">
              <p className=" mt-[2px] text-[26px]">11</p>
              <div className="">
                <p className="ml-[7px] mt-[6px] text-[13px]">Mon</p>
                <p className="ml-[7px] mt-[-5px] text-[13px]">Sep</p>
              </div>
            </div>
            <div className=" bg-slate-300 flex flex-row h-[45px] w-[80px] ml-[20px]">
              <p className=" mt-[2px] text-[26px]">11</p>
              <div className="">
                <p className="ml-[7px] mt-[6px] text-[13px]">Mon</p>
                <p className="ml-[7px] mt-[-5px] text-[13px]">Sep</p>
              </div>
            </div>
            <div className=" bg-slate-300 flex flex-row h-[45px] w-[80px] ml-[20px]">
              <p className=" mt-[2px] text-[26px]">11</p>
              <div className="">
                <p className="ml-[7px] mt-[6px] text-[13px]">Mon</p>
                <p className="ml-[7px] mt-[-5px] text-[13px]">Sep</p>
              </div>
            </div>
            <div className=" bg-slate-300 flex flex-row h-[45px] w-[80px] ml-[20px]">
              <p className=" mt-[2px] text-[26px]">11</p>
              <div className="">
                <p className="ml-[7px] mt-[6px] text-[13px]">Mon</p>
                <p className="ml-[7px] mt-[-5px] text-[13px]">Sep</p>
              </div>
            </div>
          </div>
          <div className=" bg-slate-200 h-[425px] w-[500px] rounded-b-[10px] ">
            <p className="pt-[15px] ml-[10px]">Morning</p>
            <div className="">
            <button className=" h-[50px] w-[100px] ml-[10px] rounded-[10px] mt-[10px] text-green-700 hover:pointer hover:bg-green-400 bg-slate-100">
            <p className="">11:00AM</p>
            </button>
            <button className=" h-[50px] w-[100px] ml-[20px] rounded-[10px] mt-[10px] text-green-700 hover:pointer hover:bg-green-400 bg-slate-100">
            <p className="">11:00AM</p>
            </button>
            <button className=" h-[50px] w-[100px] ml-[20px] rounded-[10px] mt-[10px] text-green-700 hover:pointer hover:bg-green-400 bg-slate-100">
            <p className="">11:00AM</p>
            </button>
            <button className=" h-[50px] w-[100px] ml-[20px] rounded-[10px] mt-[10px] text-green-700 hover:pointer hover:bg-green-400 bg-slate-100">
              <p className="">11:00AM</p>
            </button>
            </div>
            <p className=" ml-[10px] mt-[20px]"> Afternoon</p>
            <div className="">
            <button className=" h-[50px] w-[100px] ml-[10px] rounded-[10px] mt-[10px] text-green-700 hover:pointer hover:bg-green-400 bg-slate-100">
            <p className="">11:00AM</p>
            </button>
            <button className=" h-[50px] w-[100px] ml-[20px] rounded-[10px] mt-[10px] text-green-700 hover:pointer hover:bg-green-400 bg-slate-100">
            <p className="">11:00AM</p>
            </button>
            <button className=" h-[50px] w-[100px] ml-[20px] rounded-[10px] mt-[10px] text-green-700 hover:pointer hover:bg-green-400 bg-slate-100">
            <p className="">11:00AM</p>
            </button>
            <button className=" h-[50px] w-[100px] ml-[20px] rounded-[10px] mt-[10px] text-green-700 hover:pointer hover:bg-green-400 bg-slate-100">
            <p className="">11:00AM</p>
            </button>
            </div>
            <div className="">
            <button className=" h-[50px] w-[100px] ml-[10px] rounded-[10px] mt-[10px] text-green-700 hover:pointer hover:bg-green-400 bg-slate-100">
            <p className="">11:00AM</p>
            </button>
            <button className=" h-[50px] w-[100px] ml-[20px] rounded-[10px] mt-[10px] text-green-700 hover:pointer hover:bg-green-400 bg-slate-100">
            <p className="">11:00AM</p>
            </button>
            <button className=" h-[50px] w-[100px] ml-[20px] rounded-[10px] mt-[10px] text-green-700 hover:pointer hover:bg-green-400 bg-slate-100">
            <p className="">11:00AM</p>
            </button>
            <button className=" h-[50px] w-[100px] ml-[20px] rounded-[10px] mt-[10px] text-green-700 hover:pointer hover:bg-green-400 bg-slate-100">
            <p className="">11:00AM</p>
            </button>
            </div>
            <button className=" h-[35px] w-[300px] ml-[100px] rounded-[5px] mt-[110px] text-white hover:pointer hover:bg-green-400 bg-green-500">
            <p className="">Book Appointments</p>
            </button>
          </div>
          
          </div>
        </div>
      </body>
    </>
  )
}

export default App