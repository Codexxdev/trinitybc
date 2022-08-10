import Image from "next/image"
import { ministersData, statements } from './data'
import blur from '../common/blur'





const Body = () => {
    return (
        <div>
            <div className="container lg:px-[2rem] space-y-5">
                <h1 className="text-center text-sm uppercase font-medium"> on this page</h1>
                <div className=" max-w-screen-sm mx-auto space-y-5  md:px-0 ">
                    <div className="flex pb-5 !flex-nowrap !overflow-x-auto whitespace-nowrap space-x-4 w-full justify-between px-4 ">
                        <a href="#history" className="uppercase font-medium  text-xs cursor-pointer text-primary-light">Church history</a>
                        <a href="#statement" className="uppercase font-medium  text-xs cursor-pointer text-primary-light">What we teach/Believe</a>
                        <a href="#mission" className="uppercase font-medium  text-xs cursor-pointer text-primary-light">Vision statement</a>
                        <a href="#leadership" className="uppercase font-medium  text-xs cursor-pointer text-primary-light">Leadership</a>
                        <a href="#contact" className="uppercase font-medium  text-xs cursor-pointer text-primary-light">contact</a>
                    </div>

                </div>


                <div id="history" className="max-w-screen-md mx-auto py-5 ">
                    <div className="flex flex-col  space-y-4">
                        <h1 className="text-center text-2xl uppercase font-medium ">Our History</h1>
                        <div className="w-full h-[300px] md:h-[400px] relative">
                            <Image src="/img/church.jpg"
                                className=" w-full h-full"
                                layout="fill"
                                objectFit="cover"
                                blurDataURL={blur}
                                placeholder="blur"
                                priority
                                alt="logo" />
                        </div>
                        <p className=" font-light leading-relaxed px-3 md:px-5">Trinity Baptist Church was birthed on the 9th of December 2018, this follows the ordination of the Missionary Pastor Peter Joshua Abutu on he 4th of March, the same year by the leadership of the sending Church, Kabwata Baptist Church, Lusaka Zambia. About eight persons gathered in Pastor Abutu’s living room on the 3rd of June 2018 for prayer and Bible study signalling the beginning of the work.In that meeting, intentions, missions and visions for the work were shared and prayers offered.We continued meeting every Sunday evening till the first Sunday morning service on the 9th of December 2018 at the Arcade. TBCA now worship and operates from a rented facility at no 4 Juba street Suncity Estate Abuja-FCT, Nigeria. </p>
                    </div>
                </div>

                <div>

                </div>


            </div>
            <div className="bg-gray-600 text-white py-20" id="statement">
                <div  className="max-w-screen-md mx-auto">
                    <div className="flex flex-col justify-center   space-y-3">
                        <h1 className="text-center text-2xl uppercase font-medium">Statement of faith</h1>
                        <p className="pb-14 leading-relaxed text-sm text-center px-2 md:px-5" >TBCA is Reformed Baptist Church and does subscribes to the 1689 2nd London Baptist confessions of faith.
                            We agree with T4G Affirmations and Denials
                            We agree with 9Marks</p>
                    </div>
                    <div className="flex flex-col space-y-5 px-3 md:px-5">
                        {
                            statements.map(statement => (
                                <div key={statement.id} className="flex flex-col space-y-2">
                                    <h1 className="font-medium ">{ statement.topic }</h1>
                                    <p className="font-light text-sm ">{ statement.text}</p>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <div className="py-10" id="mission">
                <div className="container lg:px-[2rem]">
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 items-center">
                        <div>
                            <div className="w-full h-[300px] md:h-[500px] relative">
                                <Image src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651306706/Global/mission_c2loub.jpg"
                                    className="object-cover w-full h-full"
                                    layout="fill"
                                    blurDataURL={blur}
                                    placeholder="blur"
                                    alt="logo" />
                            </div>
                        </div>
                        <div className="flex flex-col px-3 md:px-0 space-y-2">
                            <h1 className="uppercase font-medium text-center md:text-left text-xl md:text-2xl">Our Mission</h1>
                            <p className="text-center md:text-left font-light">
                                We exist to glorify God by being gospel centred and driven; faithfully worshiping God joyfully, Evangelising sinners, Equipping the saints, Planting Churches, and promoting Biblical worldview.
                            </p>
                            <h1 className="uppercase !mt-8 font-medium text-center md:text-left text-xl md:text-2xl">Our Vision</h1>
                            <p className="text-center md:text-left font-light">
                                To be a People zealous for God’s Holiness and Glory in a Joyful and loving society.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-5 " id="leadership">
                <div className="max-w-screen-md mx-auto px-3 md:px-0 space-y-10">
                    <h1 className="text-xl md:text-2xl font-medium text-center uppercase">Leadership</h1>
                    <div className="grid gap-5 grid-cols-2 justify-center items-center md:grid-cols-3 lg:grid-cols-4">
                        {
                            ministersData.map(leader => (
                                <div key={leader.id} className="flex flex-col space-y-2 shadow-xl">
                                    <div className="w-full mx-auto h-[200px]  relative">
                                        <Image src={leader.image}
                                            className="object-cover w-full h-full"
                                            layout="fill"
                                            blurDataURL={blur}
                                            placeholder="blur"
                                            alt="logo" />
                                    </div>
                                    <div className="py-3 px-2 flex flex-col space-y-2">
                                        <h1 className="text-center text-xs font-medium uppercase">{leader.name}</h1>
                                        <h2 className="text-center text-xs capitalize">{leader.role}</h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="container lg-:px-[2rem] py-10 space-y-5" id="contact">
                <div className="flex flex-col space-y-8">
                    <h1 className="text-xl md:text-2xl font-medium uppercase text-center">Contact</h1>
                    <div className="max-w-screen-lg mx-auto mt- grid grid-cols-1 gap-7 md:grid-cols-2">
                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center space-x-4">
                            <h1 className="uppercase font-medium text-primary-dark">Contact us via</h1>
                            <div className="flex flex-col items-center md:items-start space-y-2">
                                <h1 className="text-sm "><span className="font-medium uppercase">Email:</span> trinitybaptistchurchabuja@gmail.com </h1>
                                <h1 className="text-sm "><span className="font-medium uppercase">Phone:</span> 0903 888 1689 </h1>
                                <h1 className="text-sm space-x-1 ">
                                    <span className="font-medium uppercase">Social Media:</span>
                                    <span><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjRl_ewhPH4AhWFwYUKHW7fBTQQ9zB6BAg2EAU&url=https%3A%2F%2Fwww.facebook.com%2FTrinityAbuja%2F&usg=AOvVaw3QTaeA8X43LW2QfQufo2os" target="_blank" rel="noreferrer">Facebook,</a></span> 
                                    <span><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjRl_ewhPH4AhWFwYUKHW7fBTQQ9zB6BAg2EAc&url=https%3A%2F%2Fwww.instagram.com%2Ftrinityabuja_%2F&usg=AOvVaw2gaudocp3es_is4bTSFRo3" target="_blank" rel="noreferrer">Instagram</a></span>
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center space-x-4">
                            <h1 className="uppercase font-medium text-primary-dark">Services</h1>
                            <div className="flex flex-col space-y-2">
                                <div className="flex flex-col items-center md:items-start space-y-1">
                                    <h1 className="text-primary-light text-center md:text-left uppercase font-medium">Lord's day services</h1>
                                    <h1 className="text-sm "><span className="font-medium uppercase">Sunday school:</span> 9:00AM - 10:30AM</h1>
                                    <h1 className="text-sm "><span className="font-medium uppercase">Morning Service:</span> 10:00AM - 11:30AM</h1>
                                    <h1 className="text-sm "><span className="font-medium uppercase">Evening Service:</span> 4:00PM - 5:30PM</h1>
                                </div>
                                <h1 className="text-sm text-center md:text-start "><span className="font-medium uppercase text-primary-light">Tuesday Bible Study:</span> 6:00PM - 7:30PM</h1>
                                <h1 className="text-sm  text-center md:text-start"><span className="font-medium uppercase text-primary-light">Friday Prayer Meeting:</span> 6:00PM - 7:30PM</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="uppercase text-center font-medium text-primary-dark">church Address</h1>
                <div className="w-full rounded-2xl h-[400px]  md:h-[500px] relative">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.811014338845!2d7.431193214786354!3d8.98953089354829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b4579802d1f%3A0x95fb206cd5ea74f5!2sTrinity%20Baptist%20Church%2C%20Abuja!5e0!3m2!1sen!2sng!4v1650270096555!5m2!1sen!2sng"
                        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex sm:hidden flex-col px-2 py-5 w-full space-y-1 bg-[white]">
                    <h1 className="text-primary-dark font-medium  uppercase text-lg !mb-3">Address</h1>
                    <h1>Trinity Baptist Church</h1>
                    <h1>House 4, Juba Streat</h1>
                    <h1>Suncity Estate, Galadimawa</h1>
                    <h1>Abuja, F.C.T</h1>
                </div>
            </div>
        </div>

    )
}

export default Body


