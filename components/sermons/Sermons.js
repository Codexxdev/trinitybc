import Hero from "./Hero"
import List from "./List"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";
import { getClientSermons, getSermonFilters } from "../../redux/features/client/sermons";
import Loader from "../common/Loader"

const Sermons = () => {

    const [loading, setLoading] = useState(true);

    const router = useRouter()
    const dispatch = useDispatch()

    const { topic, preacher, page, sort, scripture } = router.query

    useEffect(() => {
        setLoading(true)
        dispatch(loadUser()).then(() => {
            dispatch(getClientSermons({ page, sort, topic, preacher, scripture })).then(() => {
                dispatch(getSermonFilters()).then(() => {
                    setLoading(false)
                })
            })
        })
    }, [dispatch, topic, preacher, page, sort, scripture])

    return (
        <div className="!mb-20  w-full h-full min-h-screen">
            <Hero />
            {
                loading ?
                    <div className="mt-20">
                        <Loader />
                    </div>
                    :
                    <>
                        <List />
                    </>
            }
           
        </div>
    )
}

export default Sermons
