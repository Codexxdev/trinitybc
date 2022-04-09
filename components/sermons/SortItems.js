const SortItems = () => {
    return (
        <div className="flex ml-3 md:ml-5 mt-3 flex-col transition duration-500 ease-in-out space-y-5">
            <div className="topics flex-col space-y-2 text-sm">
                <h1 className="uppercase font-medium">sort by</h1>
                <div className="ml-4 flex-col space-y-2">
                    <div className="flex items-center space-x-1">
                        <div className="border cursor-pointer rounded w-4 h-4 border-primary-dark"></div>
                        <h1 className="capitalize font-light">Newest</h1>
                    </div>
                    <div className="flex items-center space-x-1">
                        <div className="border cursor-pointer rounded w-4 h-4 border-primary-dark"></div>
                        <h1 className="capitalize font-light">Oldest</h1>
                    </div>
                    <div className="flex items-center space-x-1">
                        <div className="border cursor-pointer rounded w-4 h-4 border-primary-dark"></div>
                        <h1 className="capitalize font-light">Alphabet</h1>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SortItems
