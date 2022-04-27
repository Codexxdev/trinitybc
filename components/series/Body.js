import Image from "next/image"
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import CloseIcon from '@mui/icons-material/Close';

const Body = ({ series, changeCurrent, current, scrollToTop, scrollToAll }) => {
    return (
        <div className="container container lg:px-[2rem]  ">

            <div className="flex flex-col justify-center items-center space-y-3 mb-3">
                <h1
                    // onClick={() => scrollToAll()}
                    className="text-xs lg:hidden uppercase bg-gray-800 text-white px-5 py-2 lg:py-0"><a href="#all">View All from this series</a></h1>
                <h1 className="text-xs text-center lg:text-left font-light uppercase">9th Febuary 2022</h1>
                <h1 className="text-xl md:text-3xl font-medium text-center lg:text-left uppercase">{current.title}</h1>

                <div>
                    <div className="flex items-center space-x-2 justify-center lg:justify-start">
                        <h1 className=" ">Scripture:</h1>
                        <h1 className="capitalize ">{current.scripture}</h1>
                    </div>
                    <div className="flex items-center space-x-2 justify-center lg:justify-start">
                        <h1 className=" ">Speaker:</h1>
                        <h1 className="capitalize ">{current.preacher}</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-5 ">

                {/* first grid */}
                <div className="lg:col-span-7 px-2 md:px-0">
                    <div className="flex flex-col space-y-3 w-full">
                       

                        <div className="flex flex-col !mt-10 space-y-3">
                            <div className="flex items-center space-x-1">
                                <span className="w-3 h-[2.5px] bg-primary-dark"></span>
                                <h1 className="text-sm lg:text-base font-medium uppercase">About the message</h1>
                            </div>
                            <p className="md:text-lg md:leading-8 font-light text-justify px-1">
                                We call it serious joy not only because it coexists in the same heart, at the same time, with the gravity of reverence and the groaning of sin, but also because it is not peripheral but central — serious in the sense of centrally important. It is not the negligible caboose at the end of the train, but belongs to the very fuel that runs the engine. And when I say centrally important, I mean central to God’s very being — central to God’s ultimate purpose in creating the world — and therefore also central to God-glorifying Christian living.
                            </p>
                        </div>
                        <div className="flex flex-col w-full space-y-4 !mt-10">
                            <div className="flex items-center space-x-1">
                                <span className="w-3 h-[2.5px] bg-primary-dark"></span>
                                <h1 className="text-sm lg:text-base font-medium uppercase">About the Speaker</h1>
                            </div>
                            <div className="items-center">
                                <div className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] rounded-full float-left mr-2  relative ">
                                    <Image src="/img/eleazar.jpg"
                                        className="object-cover rounded-full w-full h-full "
                                        layout="fill"
                                        blurDataURL="data:..."
                                        placeholder="blur"
                                        alt="logo" />
                                </div>
                                <p className="text-base md:leading-8 font-light text-justify px-1">We call it serious joy not only because it coexists in the same heart, at the same time, with the gravity of reverence and the groaning of sin, but also because it is not peripheral but central — serious in the sense of centrally important. It is not the negligible caboose at the end of the train, but belongs to the very fuel that runs the engine.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* second grid */}
                <div id="all" className={` lg:col-span-5 h-full  lg:h-[500px]   px-0 md:px-2 pt-3 bg-gray-200 overflow-y-auto overscroll-contain`}>
                    <div className="flex flex-col  md:mt-5 !space-y-3  ">
                        <h1 className="text-center text-sm uppercase">Part of a Series</h1>
                        <h1 className="text-center uppercase">the ancient path</h1>
                            {
                                series.map((list, index) => (
                                    <div
                                        onClick={() => changeCurrent(index)}
                                        key={list.id} className={`${current.id === list.id ? "bg-gray-800 text-gray-200" : "lg:hover:bg-gray-300 lg:hover:text-gray-800"} flex py-3 cursor-pointer  items-center justify-between space-x-2 px-2 border-b border-b-primary-black/10`}>
                                        <div className="flex flex-col space-y-2">
                                            <div className="flex space-x-3">
                                                <GraphicEqIcon className="text-[orange] !text-base" />
                                                <OndemandVideoIcon className="text-[red]/80 !text-base" />
                                                <h1 className="text-xs font-light uppercase">| 9th Feb 2022</h1>
                                            </div>
                                            <h1 className=" text-base md:text-lg capitalize ">{`${index + 1}. ${list.title} `}</h1>
                                            <h1 className="font-light text-sm ">{list.scripture}</h1>
                                            <div className="flex items-center !mt-3 space-x-2">
                                                <div className="h-[25px] w-[25px] rounded-full relative">
                                                    <Image src="/img/eleazar.jpg"
                                                        className="object-cover w-full h-full rounded-full"
                                                        layout="fill"
                                                        blurDataURL="data:..."
                                                        placeholder="blur"
                                                        alt="logo" />
                                                </div>
                                                <h1 className="text-sm  font-light capitalize">{list.preacher}</h1>
                                            </div>
                                        </div>
                                        <div className="w-[70px] h-[75px] rounded-lg  relative">
                                            <Image src="/img/sermons.jpg"
                                                className="object-cover rounded-lg w-full h-full "
                                                layout="fill"
                                                blurDataURL="data:..."
                                                placeholder="blur"
                                                alt="logo" />
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Body