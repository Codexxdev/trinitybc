import Player from "../Player"
import Body from "./Body"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";
import { useRouter } from "next/router"
import { getClientSermonDetails } from "../../redux/features/client/sermon";
import Loader from "../common/Loader"




const Sermon = () => {
    const [loading, setLoading] = useState(true)
    const [sermon, setSermon] = useState({})
    // const { sermon } = useSelector(state => state.clientSermon)

    const router = useRouter()
    const { id } = router.query

    const dispatch = useDispatch()
    useEffect(() => {
        setLoading(true)
        dispatch(loadUser()).then(() => {
            dispatch(getClientSermonDetails({ id })).then((res) => {
                setSermon(res.payload.sermon)
                setLoading(false)
            })
        })
    }, [id])

    return (
        <div className="!mb-20  w-full min-h-screen h-full space-y-5">
            {
                loading ?
                    <div className="mt-[100px]">
                        <Loader />
                    </div>
                    :
                    <>
                        <Player resource={sermon} />
                        <Body resource={sermon} />
                    </>
            }
        </div>
    )
}

export default Sermon
