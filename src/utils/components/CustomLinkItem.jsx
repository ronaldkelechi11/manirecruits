import { ArrowRight2 } from "@iconsans/react/linear"
import { Link } from "react-router-dom"

function CustomLinkItem({ text, description, href }) {
    return (
        <Link to={href} className="w-full min-h-[72] bg-slate-100 rounded-lg flex flex-row">
            <div className="w-[80%] h-full flex flex-col p-3 ">
                <p className='font-kanit text-xl'>{text}</p>
                <p className='text-sm text-slate-600'>{description}</p>
            </div>
            <div className="w-[20%] flex justify-center items-center text-4xl">
                <ArrowRight2 />
            </div>
        </Link>
    )
}

export default CustomLinkItem