import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const lists = [1, 2, 3, 4, 5,]


const Upcoming = () => {
    return (
        <div className="space-y-5">
            <div className="flex justify-center">
                <button className=" flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl
                bg-primary-light rounded-md shadow-md text-gray-100 px-4 py-2">
                    <h1 className=" uppercase text-sm">Add Upcoming Event</h1>
                    <AddIcon />
                </button>
            </div>
            <table className="w-full ">
                <thead className="bg-gray-800 text-gray-200 ">
                    <tr className="">
                        <th scope="col" className="text-sm font-medium uppercase px-4 py-4 text-left">
                            #
                        </th>
                        <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                            Title
                        </th>
                        <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                            Speakers
                        </th>
                        <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                            Date
                        </th>
                        <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white  ">
                    {
                        lists.map((item, index) => (
                            <tr key={item} className={` transition duration-300 ease-in-out border-b border-b-gray-200`}>

                                <td className="px-4 py-4 whitespace-nowrap text-sm  ">
                                    <h1>{index + 1}</h1>
                                </td>
                                <td className="text-sm px-3 py-4 whitespace-nowrap">
                                    <h1 className="capitalize">The New life</h1>
                                </td>
                                <td className="text-sm px-3 py-4 whitespace-nowrap">
                                    <div className="flex flex-col space-y-2">
                                        <h1>Eleazar Maduka</h1>
                                        <h1>Oche Chidi</h1>
                                        <h1>Osinachi Victor</h1>
                                    </div>
                                </td>
                                <td className="text-sm px-3 py-4 whitespace-nowrap">
                                    <h1 className="capitalize">July 11th, 2022</h1>
                                </td>
                                <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                                    <div className="flex space-x-2 items-center">
                                        <div className="flex justify-center items-center cursor-pointer hover:bg-primary-dark bg-primary-dark/90 w-7 h-7 rounded-full">
                                            <EditIcon className="!text-white !text-base" />
                                        </div>
                                        <div className="flex justify-center items-center cursor-pointer hover:bg-red-600 bg-red-600/90 w-7 h-7 rounded-full">
                                            <DeleteIcon className="!text-white !text-base" />
                                        </div>
                                    </div>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Upcoming
