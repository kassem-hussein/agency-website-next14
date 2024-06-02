import React from 'react'
export const metadata={
      "title":"About"
}
const page = () => {
  return (
    <div>
            <div className='mt-[80px] px-8'>
                  <div className="text-center  text-2xl font-semibold">About</div>
                  <div className='flex items-center flex-wrap-reverse mt-4'>
                      <div className=' w-full md:w-[70%]'>
                        <h3 className="text-3xl font-bold sm:text-4xl my-4">Socail Creator Company</h3>
                        <p className='w-full md:w-[70%] text-gray-700'>Socail media solution comapny provid many users a time to create another task and make all socail media tasks from writing to puslished and marketing.it make all things to don't loss your time </p>
                      </div> 
                      <div className='w-full md:w-[30%] rounded-lg overflow-clip'>
                              <img
                                                alt=""
                                                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                className="inset-0 h-full w-full object-cover"
                                          />
                      </div> 
                  </div>
            </div>
    </div>
  )
}

export default page
