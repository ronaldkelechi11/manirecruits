

const ErrorCard = ({ text, error }) => {

    return (
        <div
            className="text-center font-kanit text-danger fixed bottom-10 left-0 right-0    p-3">
            {error &&
                <p className="border border-danger rounded-xl p-3">{text}</p>
            }
        </div>
    )
}

export default ErrorCard
