import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import Player from "../Player"
import Body from "./Body"
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";
import { useRouter } from 'next/router'
import { getClientSeriesDetails } from "../../redux/features/client/seriesDetails"
import Loader from "../common/Loader"



const Details = () => {
    const [series, setSeries] = useState({})
    const [current, setCurrent] = useState({})
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const router = useRouter()
    const { index, id } = router.query

    useEffect(() => {
       setLoading(true)
        dispatch(loadUser()).then(() => {
            dispatch(getClientSeriesDetails({ id })).then((res) => {
                setSeries(res.payload?.series)
                setCurrent(res.payload?.series?.sermons[index || 0])
                setLoading(false)
            })
        })
    }, [dispatch, id, index])


    
    const changeCurrent = (index) => {
        setCurrent(series.sermons[index])
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
                        <Body series={series} scrollToTop={scrollToTop} scrollToAll={scrollToAll}
                            current={current} changeCurrent={changeCurrent} />
                    </>
            }
            
        </div>
    )
}

export default Details
