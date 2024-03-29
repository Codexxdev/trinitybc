import Filter from "../sermons/Filter"
import Image from "next/image"
import { useState } from "react"
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { format } from 'date-fns'
import blur from '../common/blur'
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { getClientMinisters } from "../../redux/features/client/ministers";
import { Pagination } from "../common/Pagination";


const defaultImage = "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651307276/Global/bible_beofqt.jpg"

const List = () => {
    const [fitlerToggle, setFilterToggle] = useState(false)
    const [sortToggle, setSortToggle] = useState(false)

    const { bibleStudies, totalItems, resPerPage, topics, preachers, scriptures } = useSelector(state => state.clientBibleStudies)
    const dispatch = useDispatch()
    const router = useRouter()

    const page = Number(router.query.page) || 1

    useEffect(() => {
        dispatch(getClientMinisters())
    }, [bibleStudies])

    return (
        <div className={` md:mt-10`} >
            <div className="container md:px-0 lg:px-[2rem]">
                <h1 className="hidden lg:block uppercase text-center lg:text-left text-sm font-light mb-5">
                    {`${totalItems > 1 ? totalItems + " Results" : totalItems + " Result"} - Page ${page}`}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-20 ">
                    <h1 className="lg:hidden text-center uppercase text-xs font-light ">
                        {`${totalItems > 1 ? totalItems + " Results" : totalItems + " Result"} - Page ${page}`}
                    </h1>
                    <div className="lg:col-span-7">
                        <div className="flex flex-col mt-2 md:mt-5 space-y-3">
                            {
                                bibleStudies?.map(bibleStudy => (
                                    <Link href={`/resources/biblestudy/${bibleStudy._id}`} key={bibleStudy._id} >
                                        <a>
                                            <div className="flex py-3 hover:bg-secondary-one/20 cursor-pointer items-center space-x-2 px-3 border-b border-b-primary-black/10">
                                                <div className="flex flex-col w-full space-y-2">
                                                    <div className="flex space-x-1">
                                                        <GraphicEqIcon className="text-[orange] !text-base" />
                                                        <OndemandVideoIcon className="text-[red]/80 !text-base" />
                                                        <h1 className="text-xs font-light uppercase">{'|  ' + format(new Date(bibleStudy.date), 'do MMM yyyy')}</h1>
                                                    </div>
                                                    <h1 className=" text-base md:text-lg capitalize ">{bibleStudy.title}</h1>
                                                    <h1 className="font-light capitalize text-sm ">{`${bibleStudy.book} ${bibleStudy.chapter}:${bibleStudy.verse}`}</h1>
                                                    <div className="flex items-center !mt-3 space-x-2">
                                                        <div className="h-[25px] w-[25px] rounded-full relative">
                                                            <Image src={bibleStudy.preacher.imageUrl.url}
                                                                className="object-cover w-full h-full rounded-full"
                                                                layout="fill"
                                                                blurDataURL={blur}
                                                                placeholder="blur"
                                                                priority
                                                                alt="logo" />
                                                        </div>
                                                        <h1 className="text-sm  font-light">{bibleStudy.preacher?.name}</h1>
                                                    </div>
                                                </div>
                                                <div className="w-[80px] h-[75px] rounded-lg  relative">
                                                    <Image src={bibleStudy?.imageUrl?.url ? bibleStudy.imageUrl.url : defaultImage}
                                                        className="object-cover rounded-lg w-full h-full "
                                                        layout="fill"
                                                        blurDataURL={blur}
                                                        placeholder="blur"
                                                        priority
                                                        alt="logo" />
                                                </div>

                                            </div>
                                        </a>
                                    </Link>
                                ))
                            }
                        </div>
                        {
                            totalItems > resPerPage &&
                            <div className="flex !my-10 w-full items-center justify-center">
                                <Pagination
                                    resPerPage={resPerPage}
                                    page={page}
                                    totalItems={totalItems}
                                />
                            </div>
                        }
                    </div>
                    <div className=" lg:col-span-5 lg:!mt-10 order-first lg:order-last">
                        <Filter
                            topics={topics}
                            preachers={preachers}
                            scriptures={scriptures}
                            fitlerToggle={fitlerToggle}
                            setFilterToggle={setFilterToggle}
                            sortToggle={sortToggle}
                            setSortToggle={setSortToggle} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
