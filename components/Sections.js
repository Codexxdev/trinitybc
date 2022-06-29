import Image from "next/image"
import { useRouter } from 'next/router'
import { useSelector } from "react-redux"
import parse from 'html-react-parser';
import { useState, useEffect } from "react";


const Sections = () => {
    const [body, setBody] = useState('')
    const router = useRouter()
    const { news } = useSelector(state => state.clientEvent)


    useEffect(() => {
        parser(news.body)
    }, [news])

    const truncate = (des) => {
        if (des.length >= 350) {
            return des.substr(0, 350) + "..."
        } else {
            return des
        }
    }

    const parser = (html) => {
        const short = truncate(html)
        setBody(parse(short)) 
    }



    return (
        <div className="!mt-10 pb-10">
            <div className="container lg:px-[2rem] space-y-10 md:space-y-20">
                <div className="grid lg:gap-20 gap-5 grid-cols-1 md:grid-cols-2 items-center">
                    <div>
                        <div className="w-full h-[300px] md:h-[500px] relative">
                            <Image src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651306706/Global/mission_c2loub.jpg"
                                className="object-cover w-full h-full"
                                layout="fill"
                                blurDataURL="data:..."
                                placeholder="blur"
                                alt="logo" />
                        </div>
                    </div>
                    <div className="flex flex-col px-2 md:px-0 space-y-2">
                        <h1 className="uppercase font-medium text-xl md:text-2xl">Our Mission & Vision</h1>
                        <p className="text-left font-light">
                            We exist to glorify God by being gospel centred and driven; faithfully worshiping God joyfully, Evangelising sinners, Equipping the saints, Planting Churches, and promoting Biblical worldview.
                            To be a People zealous for God’s Holiness and Glory in a Joyful and loving society.
                        </p>
                        <div className=" flex  !mt-10 mb-5">
                            <h1
                                onClick={() => router.push('/about')}
                                className="uppercase text-sm md:text-base
                            max-w-[230px] md:max-w-[300px] px-3 py-2
                            bg-primary-light text-[white] cursor-pointer hover:scale-105 hover:shadow-xl rounded-md
                               ">Read about Tbca</h1>
                        </div>
                    </div>
                </div>
                <div className="grid lg:gap-20 gap-5 grid-cols-1 md:grid-cols-2 items-center">
                    <div className="order-first md:order-last">
                        <div className="w-full h-[300px] md:h-[500px] relative">
                            <Image src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651306708/Global/give_vj04h7.jpg"
                                className="object-cover w-full h-full"
                                layout="fill"
                                blurDataURL="data:..."
                                placeholder="blur"
                                alt="logo" />
                        </div>
                    </div>
                    <div className="flex flex-col px-2 md:px-0 space-y-2">
                        <h1 className="uppercase text-primary-light">News</h1>
                        <h1 className="uppercase font-medium text-xl md:text-2xl">{news.title}</h1>
                        <p className="text-left font-light">
                            {body && body}
                        </p>
                        <div className="flex !mt-10 space-x-3  ">
                            <h1
                                onClick={() => router.push(`/events/news/${news._id}`)}
                                className="uppercase text-sm md:text-base  px-5 py-2 text-center
                            bg-primary-light text-[white] cursor-pointer hover:scale-105 hover:shadow-xl rounded-md ">Read More</h1>
                            <h1
                                onClick={()=> router.push('/give')}
                                className="uppercase text-sm md:text-base  px-5 py-2 text-center rounded-md
                            bg-primary-dark text-[white] cursor-pointer hover:scale-105 hover:shadow-xl">Give</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Sections
