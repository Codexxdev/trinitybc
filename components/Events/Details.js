import Body from './Body'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";
import { useRouter } from 'next/router';
import { getClientEventDetails } from '../../redux/features/client/event';
import Loader from "../common/Loader"


const Details = () => {

    const [loading, setLoading] = useState(true);

    const { event } = useSelector(state => state.clientEvent)

    const dispatch = useDispatch()
    const router = useRouter()
    
    const { id } = router.query 

    useEffect(() => {
        setLoading(true)
        dispatch(loadUser()).then(() => {
            dispatch(getClientEventDetails({ id })).then(() => {
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
                        <Body event={event} />
                    </>
            }
        </div>
    )
}

export default Details
