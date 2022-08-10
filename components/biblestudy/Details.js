import Player from "../Player"
import Body from "../sermons/Body"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";
import { useRouter } from "next/router";
import { getClientBibleStudyDetails } from "../../redux/features/client/bibleStudy";
import Loader from "../common/Loader"


const Details = () => {
    const [loading, setLoading] = useState(true)
    const { bibleStudy } = useSelector(state => state.clientBibleStudy)
    const dispatch = useDispatch()

    const router = useRouter()
    const { id } = router.query


    useEffect(() => {
        setLoading(true)
        dispatch(loadUser()).then(() => {
            dispatch(getClientBibleStudyDetails({ id })).then(() => {
                setLoading(false)
            })
        })
    }, [dispatch, id])
 
    return (
        <div className="!mb-20 min-h-screen h-full w-full space-y-5">
            {
                loading ?
                    <div className="mt-[100px]">
                        <Loader />
                    </div>
                    :
                    <>
                        <Player resource={bibleStudy} />
                        <Body resource={bibleStudy} />
                    </>
            }
        </div>
    )
}

export default Details
