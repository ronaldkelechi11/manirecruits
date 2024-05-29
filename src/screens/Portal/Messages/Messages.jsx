import BottomNavBar from '../../../utils/components/BottomNavBar'
import MessageComponent from '../../../utils/components/MessageComponent'

const Messages = () => {
    const users = [
        {
            firstname: 'John',
            lastname: 'Doe',
            title: "Software Developer"
        },
        {
            firstname: 'Dave',
            lastname: 'Rapid',
            title: "Software Developer"
        },
        {
            firstname: 'John',
            lastname: 'Doe',
            title: "Software Developer"
        },
        {
            firstname: 'John',
            lastname: 'Doe',
            title: "Software Developer"
        },
        {
            firstname: 'John',
            lastname: 'Doe',
            title: "Software Developer"
        },
        {
            firstname: 'John',
            lastname: 'Doe',
            title: "Software Developer"
        },
        {
            firstname: 'John',
            lastname: 'Doe',
            title: "Software Developer"
        },
        {
            firstname: 'John',
            lastname: 'Doe',
            title: "Software Developer"
        },
    ]
    return (
        <div className="w-screen h-screen bg-white">
            <div className="h-20 w-full text-black font-kanit text-3xl p-3 flex flex-col justify-center border-b-grey border-2 border-t-0 border-l-0 border-r-0 fixed top-0">Messages</div>

            <div className="flex flex-col w-full h-full pt-20">
                {/* No messages */}
                {

                }

                {/* User message list */}
                {
                    users.map(user => {
                        return (<MessageComponent key={users.indexOf(user)} user_firstname={user.firstname} user_lastname={user.lastname} user_title={user.title} />)
                    })

                }
            </div>
            <BottomNavBar />
        </div>
    )
}

export default Messages
