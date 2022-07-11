import React from 'react'

const accounts = [
  {
    name: 'Trinity Baptist Church',
    bank: 'Guranty Trust Bank',
    accNumber: '0451509869',
    header: 'Offering Account',
    id: 1
  },
  {
    name: 'TBCA/Building Project',
    bank: 'Guranty Trust Bank',
    accNumber: '0626019696',
    header: 'Building Project Account',
    id: 2
  },
  {
    name: 'TBCA/Internship',
    bank: 'Guranty Trust Bank',
    accNumber: '0626215979',
    header: 'Internship Account',
    id: 3
  }
]

const Give = () => {
  return (
      <div className="w-full min-h-screen space-y-8 mb-12">
        <div className="bg-gradient-to-r from-primary-dark to-primary-light text-[white] pt-[100px]  md:pt-[68px] ">
            <div className="container px-2 md:px-0 lg:px-[2rem] pb-16 pt-10 md:pb-36 md:pt-28  flex flex-col items-center justify-center space-y-5">
                <h1 className="text-xl md:text-3xl text-center uppercase font-medium">Give to tbca</h1>
          <h2 className="text-sm md:text-base max-w-screen-md mx-auto font-light text-center">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." (2 Corinthians 9:7)
                </h2>
            </div>
        </div>
      <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto space-y-10 px-2">
        <h1 className='text-2xl text-center font-semibold uppercase my-5'>Account Numbers</h1>

        <div className=" grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-0">
          {
            accounts.map(({ id, name, header, accNumber, bank}) => (
              <div key={id} className="flex flex-col space-y-4 bg-gray-700 rounded-md text-gray-300 p-5">
                <h1 className='uppercase font-medium text-gray-50  text-center'>{header}</h1>
                <div className="flex flex-col items-center space-y-3">
                  <h1 className='font-semibold uppercase'>Name</h1>
                  <h2 className=''> {name}</h2>
                  <h1 className='font-semibold uppercase'>Bank</h1>
                  <h2 className=''> {bank}</h2>
                  <h1 className='font-semibold uppercase'>Acc Number</h1>
                  <h2 className=''> {accNumber}</h2>
                </div>
              </div>
            ))
          }
        </div>

              
      </div>
    </div>
  )
}

export default Give