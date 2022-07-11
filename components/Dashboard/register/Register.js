import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { getAdminEmails } from '../../../redux/features/emails';
import { getAdminRegisters } from '../../../redux/features/register';




const grid = [
    {
        topic: "mailing list",
        number: 0,
        path: "/emails",
        id: 1
    },
    {
        topic: "conference register",
        number: 0,
        path: "/conference",
        id: 2
    },
]


const Register = ({children}) => {
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        if (router.route === "/admin/events") {
            router.push("/admin/events/upcoming")
        }
        dispatch(getAdminEmails()).then((result) => {
            if (result.error) {
                console.log(result.error)
            } else {
                grid[0].number = result.payload.emails.length
            }
        })
        dispatch(getAdminRegisters()).then((result) => {
            if (result.error) {
                console.log(result.error)
            } else {
                grid[1].number = result.payload.registers.length
            }
        })
    }, [dispatch])


    return (
        <div className="flex w-full flex-col space-y-10 mb-3 p-4">
            <div className="flex justify-around items-center">
                {
                    grid.map(item => (
                        <div key={item.id}
                            onClick={() => router.push(`/admin/register${item.path}`)}
                            className={` ${router.pathname.includes(item.path) ? "bg-gray-800" : "bg-white"}
                        flex flex-col hover:scale-105 hover:shadow-2xl w-[180px] h-[90px] items-center shadow-lg cursor-pointer justify-center rounded-2xl `}>
                            <h1 className={`${router.pathname.includes(item.path) ? "text-gray-200" : "text-primary-dark"} uppercase font-medium text-xl`}>{item.number}</h1>
                            <h1 className={`uppercase !text-primary-light font-medium text-xs`}>{item.topic}</h1>
                        </div>
                    ))
                }
            </div>
            {children}
        </div>
    )
}

export default Register
