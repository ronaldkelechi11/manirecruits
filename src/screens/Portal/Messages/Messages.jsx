import ScrollToLeft from '../../../utils/animations/ScrollToLeft'
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
        {
            firstname: 'John',
            lastname: 'Doe',
            title: "Software Developer"
        },
    ]
    return (
        <div className="w-screen h-screen bg-primary">
            <div className="h-20 w-full text-white font-kanit text-3xl p-3 flex flex-col justify-center border-b-grey border-2 border-t-0 border-l-0 border-r-0 fixed top-0 bg-primary">Messages</div>

            <div className="flex flex-col w-full h-full pt-20">
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
