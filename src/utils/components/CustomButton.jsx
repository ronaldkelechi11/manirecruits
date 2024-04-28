
// eslint-disable-next-line react/prop-types
const CustomButton = ({ text, onClicked, ...props }) => {
    return (
        <button type="submit" {...props} onClick={onClicked}
            className="bg-primary text-white rounded-lg h-16 font-kanit uppercase">
            {text}
        </button>
    )
}

export default CustomButton
