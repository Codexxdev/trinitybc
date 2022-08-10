import Hero from "./Hero"
import Lists from "./Lists"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";
import { useRouter } from "next/router"
import { getClientEvents, getClientNews } from "../../redux/features/client/events";
import Loader from "../common/Loader"

const Events = () => {
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch()
    const router = useRouter()

    const { month, next } = router.query


    useEffect(() => {
        setLoading(true)
        dispatch(loadUser()).then(() => {
            dispatch(getClientEvents({ month, next })).then(() => {
                dispatch(getClientNews()).then(() => {
                    setLoading(false)
                })
            })
        })
    }, [dispatch, month, next])


    return (
        <div className="!mb-20 min-h-screen h-full w-full">
            <Hero />
            {
                loading ?
                    <div className="mt-20">
                        <Loader />
                    </div>
                    :
                    <>
                        <Lists />
                    </>
            }
        </div>
    )
}

export default Events
