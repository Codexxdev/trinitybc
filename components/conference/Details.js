import { useEffect } from "react"
import { useState } from "react"
import Player from "../Player"
import Body from "../series/Body"
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";
import { useRouter } from 'next/router'
import { getClientConferenceDetails } from "../../redux/features/client/conference"
import Loader from "../common/Loader"


const Details = () => {

    const [current, setCurrent] = useState({})
    const [conference, setConference] = useState({})
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const router = useRouter()
    const { id, index } = router.query


    useEffect(() => {
        setLoading(true)
        dispatch(loadUser()).then(() => {
            dispatch(getClientConferenceDetails({ id })).then((res) => {
                setConference(res?.payload?.conference)
                setCurrent(res?.payload?.conference?.sermons[index || 0])
                setLoading(false)
            })
        })
    }, [dispatch, id, index])

    const changeCurrent = (index) => {
        setCurrent(conference.sermons[index])
        scrollToTop()
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const scrollToAll = () => {
        window.scrollTo({
            top: 1200,
            behavior: 'smooth'
        });
    };

    return (
        <div className={` !mb-20 min-h-screen h-full w-full`}>
            {
                loading ?
                    <div className="mt-[100px]">
                        <Loader />
                    </div>
                    :
                    <>
                        <Player resource={current} />
                        <Body series={conference} scrollToTop={scrollToTop} scrollToAll={scrollToAll}
                            current={current} changeCurrent={changeCurrent} />
                    </>
            }
            
        </div>
    )
}

export default Details
