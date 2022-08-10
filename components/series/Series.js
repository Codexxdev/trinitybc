import Hero from "./Hero"
import List from "./List"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";
import { useRouter } from "next/router";
import { getClientSeries, getSeriesFilters } from "../../redux/features/client/series";
import Loader from "../common/Loader"

const Series = () => {

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const router = useRouter()

    const { topic, preacher, page, sort, scripture } = router.query


    useEffect(() => {
        setLoading(true)
        dispatch(loadUser()).then(() => {
            dispatch(getClientSeries({ topic, preacher, page, sort, scripture })).then(() => {
                dispatch(getSeriesFilters()).then(() => {
                    setLoading(false)
                })
            })
        })
    }, [dispatch, topic, preacher, page, sort, scripture])

    return (
        <div className="!mb-20  w-full">
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

export default Series
