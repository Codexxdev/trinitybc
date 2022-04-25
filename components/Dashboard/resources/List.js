import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const lists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const List = () => {
    return (
        <div className="space-y-5">
            <div className="flex justify-center">
                <button className=" flex items-center justidy-center hover:scale-105 hover:shadow-2xl
                bg-primary-light rounded-md shadow-md text-gray-100 px-4 py-2">
                    <h1 className=" uppercase text-sm">Add New Sermon</h1>
                    <AddIcon />
                </button>
            </div>
            <table className="min-w-full table-auto border-collapse ">
                <thead className="bg-gray-900 text-gray-200 ">
                    <tr className="">
                        <th scope="col" className="text-sm font-medium uppercase px-6 py-4 text-left">
                            Id
                        </th>
                        <th scope="col" className="text-sm font-medium uppercase px-6 py-4 text-left">
                            Title
                        </th>
                        <th scope="col" className="text-sm font-medium uppercase px-6 py-4 text-left">
                            Preacher
                        </th>
                        <th scope="col" className="text-sm font-medium uppercase px-6 py-4 text-left">
                            Date
                        </th>
                        <th scope="col" className="text-sm font-medium uppercase px-6 py-4 text-left">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white  ">
                    {
                        lists.map(item => (
                            <tr key={item} className={` transition duration-300 ease-in-out border-b border-b-gray-200`}>

                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                                    <h1>6207035bd6c2f8ae167b3a8d</h1>
                                </td>
                                <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                    <h1>Our Dependence on God</h1>
                                </td>
                                <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                    <h1>Damilare Sobanjo</h1>
                                </td>
                                <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                    <h1>Feb. 13th, 2022</h1>
                                </td>
                                <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
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

export default List