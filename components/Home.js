import Address from "./Address"
import Hero from "./Hero"
import Latest from "./Latest"
import Sections from "./Sections"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/features/currentUser";
import { getClientLatest } from "../redux/features/client/latest"
import { getClientEvents, getClientServices } from "../redux/features/client/events"
import { getClientNewsDetails } from "../redux/features/client/event"
import Loader from './common/Loader'


const Home = () => {
    const [loading, setLoading] = useState(true)
    const { latest } = useSelector(state => state.latest)
    const { events, services, defaultEvent, defaultService } = useSelector(state => state.clientEvents)
    const { news } = useSelector(state => state.clientEvent)




    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser()).then(() => {
            dispatch(getClientLatest()).then(() => {
                dispatch(getClientEvents({})).then(() => {
                    dispatch(getClientServices()).then(() => {
                        dispatch(getClientNewsDetails({ id: "6292622db3edd1e66f7d159a" })).then(() => {
                            setLoading(false)
                        })
                    })
                })
            })
        })
        
    }, [dispatch])


    
    return (
        <div className="mt-[60px] h-full  min-h-screen  !mb-20 sm:mt-20 lg:mt-24 w-full">
            {
                loading
                    ?
                    <div className="mt-20">
                        <Loader />
                    </div>
                    
                    :
                    <>
                        
                        <Hero
                            events={events}
                            services={services}
                            defaultEvent={defaultEvent}
                            defaultService={defaultService}
                        />

                        <Latest latest={latest} />
                        
                        <Sections news={news} />

                        <Address />  
                    </>
           }
        </div>
    )
}

export default Home
