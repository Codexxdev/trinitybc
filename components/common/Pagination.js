import React from 'react'
import { useRouter } from 'next/router'

const Pagination = ({ resPerPage, page, totalItems }) => {
    const lastPage = Math.ceil(totalItems / resPerPage)
    const nextPage = page + 1
    const prevPage = page - 1
    const hasNextPage = resPerPage * page < totalItems
    const hasPrevPage = page > 1

    const router = useRouter()


  return (
      <div className="flex border text-primary-light rounded-r-full rounded-l-full text-xs md:text-sm font-medium border-primary-light">
          <button
              onClick={() => {
                  router.push(`/resources/sermons?page=${prevPage}`)
              }}
              disabled={!hasPrevPage}
              className="px-3 uppercase hover:bg-primary-light/10 py-1 border-r border-primary-light/60">
              Prev
          </button>
          {
              page !== 1 && prevPage !== 1 &&
              <h1 onClick={() => router.push(`/resources/sermons?page=1`) }
                  className={` px-4 cursor-pointer hover:bg-primary-light/10 py-1 border-r border-primary-light/60`}>
                    1
                </h1> 
          }
          {
              hasPrevPage &&
              <h1 onClick={() => router.push(`/resources/sermons?page=${prevPage}`) }
                  className='px-4 py-1 cursor-pointer hover:bg-primary-light/10 border-r border-primary-light/60'>
                    {prevPage}
                </h1>
          }
                <h1 onClick={() => router.push(`/resources/sermons?page=${page}`)} 
                    className='px-4 py-1 cursor-pointer bg-primary-light text-white border-r border-primary-light/60'>
                    {page}
                </h1>
          {
              hasNextPage &&
                <h1 onClick={() => router.push(`/resources/sermons?page=${nextPage}`) }
                    className={`border-r px-4 py-1 cursor-pointer hover:bg-primary-light/10  border-primary-light/60`}>
                      {nextPage}
                </h1>
          }
          {
              lastPage !== page && nextPage !== lastPage &&
                <h1    onClick={() => router.push(`/resources/sermons?page=${lastPage}`) }
                      className='px-4 py-1 cursor-pointer border-r border-primary-light/60 hover:bg-primary-light/10 '>
                  {lastPage}
                </h1>
          }
          <button
              onClick={() => {
                  router.push(`/resources/sermons?page=${nextPage
}`)
              }}
              disabled={!hasNextPage}
              className="px-3 uppercase  cursor-pointer hover:bg-primary-light/10 py-1 border-primary-light/60">
              Next
          </button>
         
    </div>
  )
}

export default Pagination