'use client'
import {useState} from 'react'
import {useSearchParams } from 'next/navigation'
import React from 'react'
const page = () => {     
      const params = useSearchParams();
      const [name,setName]=useState('');
      const [email,setEmail]=useState('');
      const [phone,setPhone]=useState('');
      const [error,setError]=useState('');
      const [lodding,setLodding]=useState(false);
      const [success,setSuccess]=useState(false);
      const [error_msg,setErrorMsg]=useState(false);
      const [plan,setPlan] =useState(params.get('plan'))      
      const handleSubmit =async (e)=>{
            e.preventDefault();
            setError('')
            console.log(phone)
            if(!name){
              setError({
                  name:"name is required"
              })
              return 
            }
            if(!email){
                  setError({
                        email:"email is required"
                  })
                  return 
            }
            if(!phone){
                  setError({
                        phone:"phone is required"
                  })
                  return 
            }
            if(phone.length != 14){
                  setError({
                        phone:"phone must be like 009639********"
                  })
                  return 
            }
            if(!plan){
                  setError({
                        plan:"plan is requried"
                  })
                  return 
            }
            const object  = {
                  name:name,
                  email:email,
                  phone:phone,
                  plan:plan==1?"Personal":plan==2?"Pro":plan==3?"small bussiness":''
            }
            setLodding(true)
            const res = await fetch('api/send-mail',{
                  method:"POST",
                  body:JSON.stringify(object),
                  headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                      },
            });
            const data = await res.json();
            setLodding(false);
            if(res.status == 200){
                  setSuccess(true)
                  setTimeout(()=>{
                        setSuccess(false)
                  },3000)
            }else{
                  setErrorMsg(true)
                  setTimeout(()=>{
                        setErrorMsg(false)
                  },3000)
            }
      }
  return (
    <div>
      {
            lodding?<div className="fixed top-[80px] bg-white p-[10px] w-[200px] shadow-md border-b-2 border-green-500 right-5 ">Sending....</div>:''
      }
      {
            success?<div className="fixed top-[80px] bg-white p-[10px] w-[200px] shadow-md border-b-2 border-green-500 right-5 ">Sent Successfuly</div>:''
      }
      
      {
            error_msg?<div className="fixed top-[80px] bg-white p-[10px] w-[200px] shadow-md border-b-2 border-red-500 right-5 ">Fail to send try again</div>:''
      }
      <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
             we will send email for you after 24h
             if you need custom plan call our on
            </p>

            <div className="mt-8">
            <a href="#" className="text-2xl font-bold text-pink-600"> 011-354-2021 </a>

            <address className="mt-2 not-italic">Syria-damascus</address>
            </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form  className="space-y-4">
            <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                  className="w-full rounded-lg custom-border border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  onChange={(v)=>setName(v.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  />
                  {
                        error.name?<label className='text-sm text-red-500'>{error.name}</label>:""
                  }
            </div>

            <div className="grid grid-cols-1  gap-4 sm:grid-cols-2">
                  <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                  className="w-full rounded-lg custom-border border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  onChange={(v)=>setEmail(v.target.value)}
                  name="email"
                  id="email"
                  />
                  {
                        error.email?<label className='text-sm text-red-500'>{error.email}</label>:""
                  }
                  </div>

                  <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input
                  className="w-full rounded-lg custom-border border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  onChange={(v)=>setPhone(v.target.value)}
                  name="phone"
                  id="phone"
                  />
                  {
                        error.phone?<label className='text-sm text-red-500'>{error.phone}</label>:""
                  }
                  </div>
            </div>

            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div onClick={()=>setPlan(1)}>
                  <label
                  htmlFor="Option1"
                  className="block w-full cursor-pointer  rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-pink-900 has-[:checked]:bg-pink-900 has-[:checked]:text-white"
                  tabIndex="0"
                  >
                  <input className="sr-only" id="Option1" type="radio" value={1}  checked={plan==1} tabIndex="-1" name="package" />
                  <span className="text-sm"> Personal </span>
                  </label>
                  </div>

                  <div onClick={()=>setPlan(2)}>
                  <label
                  htmlFor="Option2"
                  className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-pink-900 has-[:checked]:bg-pink-900 has-[:checked]:text-white"
                  tabIndex="0"
                  >
                  <input className="sr-only" id="Option2" type="radio"  value={2} checked={plan==2} tabIndex="-1" name="package" />

                  <span className="text-sm">  Pro </span>
                  </label>
                  </div>

                  <div onClick={()=>setPlan(3)}>
                  <label
                  htmlFor="Option3"
                  className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-pink-900 has-[:checked]:bg-pink-900 has-[:checked]:text-white"
                  tabIndex="0"
                  >
                  <input className="sr-only"  id="Option3" type="radio" value={3} checked={plan==3} tabIndex="-1" name="package" />
                  <span className="text-sm"> Samll Bussniess </span>
                  </label>
                  </div>
                  {
                        error.plan?<label className='text-sm text-red-500'>{error.plan}</label>:""
                  }
            </div>
            <div className="mt-4">
                  <button
                  type="button"
                  onClick={(e)=>handleSubmit(e)}
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                  place order
                  </button>
            </div>
            </form>
            </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default page
