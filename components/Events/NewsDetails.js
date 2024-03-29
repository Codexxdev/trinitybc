import Body from './Body'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";
import { format } from 'date-fns'
import blur from '../common/blur'
import Loader from '../common/Loader'
import Image from 'next/image'
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import { getClientNewsDetails } from '../../redux/features/client/event';

const NewsDetails = () => {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState(null);

    const dispatch = useDispatch()

    const router = useRouter()

    const { id } = router.query

    useEffect(() => {
        setLoading(true)
        dispatch(loadUser()).then(() => {
            dispatch(getClientNewsDetails({ id })).then((res) => {
                setNews(res.payload.news)
                setLoading(false)
            })

        })
    }, [dispatch, id])


    return (
            
        <div className="!mb-20  w-full min-h-screen h-full space-y-5">
            {
                loading || !news ?
                    <div className="mt-[100px]">
                        < Loader />
                    </div>
                  :
                <>
                <div className="bg-[#eee]/60 sm:!pt-20 !pt-[60px] !mb-3  !pb-5">
                    <div className="max-w-screen-sm mx-auto ">
                        <div className="flex flex-col space-y-3 w-full">
                            <div className="w-full h-[250px] sm:h-[300px] relative">
                                <Image src={news?.imageUrl?.url}
                                    className="object-cover w-full h-full"
                                    layout="fill"
                                    blurDataURL={blur}
                                    placeholder="blur"
                                    priority
                                    alt="logo" />
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-center">
                                <h1 className="text-xs uppercase">News</h1>
                                <h1 className="text-xl md:text-3xl font-medium uppercase">{news.title}</h1>
                                <h1 className="text-sm capitalize">{format(new Date(news.updatedAt), 'MMMM do yyyy')}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-sm mx-auto mt-2 space-y-8 ">
                    <div className="flex flex-col space-y-2 px-2">
                        <div className="output font-light text-justify">
                            {parse(news.body)}
                        </div>
                    </div>
                    </div>
                </>
            }
        </div>
  )
}

export default NewsDetails