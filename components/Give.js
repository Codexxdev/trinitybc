import React from 'react'

const Give = () => {
  return (
      <div className="w-full min-h-screen space-y-4 mb-8">
          <div className="bg-gradient-to-r from-primary-dark to-primary-light text-[white] pt-[100px]  md:pt-[68px] ">
              <div className="container px-2 md:px-0 lg:px-[2rem] pb-16 pt-10 md:pb-36 md:pt-28  flex flex-col items-center justify-center space-y-5">
                  <h1 className="text-xl md:text-3xl text-center uppercase font-medium">Give to tbca</h1>
                  <h2 className="text-sm md:text-base capitalize max-w-lg mx-auto font-light text-center">
                  </h2>
              </div>
          </div>
          <div className="max-w-screen-md space-y-5 mx-auto px-2">
              <h1 className='text-2xl text-center font-semibold uppercase my-5'>Account Numbers</h1>
              <div className='space-y-2 flex flex-col items-center justify-center'>
                <h2 className='text-lg uppercase font-medium text-primary-dark'>Offering Account</h2>
                <h2 className=''><span className='font-semibold'>Name:</span> Trinity Baptist Chrurch</h2>
                <h2 className=''><span className='font-semibold'>Bank:</span> Guranty Trust Bank</h2>
                <h2 className=''><span className='font-semibold'>Acc Number:</span> 0451509869</h2>
              </div>
              <div className='space-y-2 flex flex-col items-center justify-center'>
                <h2 className='text-lg uppercase font-medium text-primary-dark'>Building Project Account</h2>
                <h2 className=''><span className='font-semibold'>Name:</span> TBCA/Building Project</h2>
                <h2 className=''><span className='font-semibold'>Bank:</span> Guranty Trust Bank</h2>
                <h2 className=''><span className='font-semibold'>Acc Number:</span> 0626019696</h2>
              </div>
              <div className='space-y-2 flex flex-col items-center justify-center'>
                <h2 className='text-lg uppercase font-medium text-primary-dark'>Internship Account</h2>
                  <h2 className=''><span className='font-semibold'>Name:</span> TBCA/Internship</h2>
                <h2 className=''><span className='font-semibold'>Bank:</span> Guranty Trust Bank</h2>
                <h2 className=''><span className='font-semibold'>Acc Number:</span> 0626215979</h2>
              </div>
              
          </div>
      </div>
  )
}

export default Give