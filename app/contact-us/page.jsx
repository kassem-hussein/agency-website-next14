'use client'
import {useState} from 'react'
const page = () => {
  const [name,setName]=useState('');
      const [email,setEmail]=useState('');
      const [phone,setPhone]=useState('');
      const [message,setMessage]=useState('');
      const [error,setError]=useState('');
      const [lodding,setLodding]=useState(false);
      const [success,setSuccess]=useState(false);
      const [error_msg,setErrorMsg]=useState(false);
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
        if(!message){
              setError({
                    message:"message is requried"
              })
              return 
        }
        const object  = {
              name:name,
              email:email,
              phone:phone,
              message:message
        }
        setLodding(true)
        const res = await fetch('api/send-message',{
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
        <div className="text-center text-2xl mt-[80px] font-semibold">Contact US</div>
        <div className=" w-[100%] md:w-[70%] gap-x-2  gap-y-1 mx-auto flex  items-center flex-wrap justify-center md:justify-between mt-5">
          <div className="w-[90%] md:w-[40%] flex flex-col p-5 rounded-md  jusify-center">
            <div className="text-lg font-semibold mb-2 text-pink-900">
              Socail Creator Company
            </div>
            <ul>
              <li className="mb-1 text-lg">📞011-354-2021</li>
              <li className="mb-1 text-lg">✉socail.creator@gmail.com</li>
              <li className="mb-1 text-lg">📍Syria-damascis</li>
            </ul>
          </div>
          <form action="" className="w-[90%] sm:w-[50%] space-y-4 p-5 mt-7  shadow-md border  border-gray-50">
            
              <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                    className="w-full rounded-lg custom-border border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    onChange={(v)=>setName(v.target.value)}
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
                    name="email"
                    onChange={(v)=>setEmail(v.target.value)}
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
                    name="phone"
                    onChange={(v)=>setPhone(v.target.value)}
                    id="phone"
                    
                    />
                    </div>
                    {
                      error.phone?<label className='text-sm text-red-500'>{error.phone}</label>:""
                    }
              </div>
              <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <textarea
                    className="w-full resize-none  rounded-lg custom-border border-gray-200 p-3 text-sm"
                    placeholder="message"
                    type="text"
                    rows={8}
                    onChange={(v)=>setMessage(v.target.value)}
                    name="message"
                    id="name"
                    ></textarea>
                    {
                        error.message?<label className='text-sm text-red-500'>{error.message}</label>:""
                    }
              </div>
              <button onClick={(e)=>handleSubmit(e)} type="button" className="bg-pink-900 p-3 rounded-sm hover:bg-pink-600 text-white w-full">
                send
              </button>
          </form>      
        </div>
    </div>
  )
}

export default page
