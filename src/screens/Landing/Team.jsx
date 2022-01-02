

const Team = () => {
    return (
        <div className="w-screen bg-white flex flex-col gap-3 p-5">

            <p className="text-primary text-5xl capitalize font-kanit">Our Team</p>


            <div className="flex flex-col w-full gap-3">

                <div className="w-full min-h-[50vh] flex flex-col border-2 border-gray-200 rounded-md">
                    <div className="h-[70%] w-full bg-white"></div>
                    <div className="h-[30%] w-full bg-danger"></div>
                </div>


            </div>

        </div>
    )
}

export default Team
