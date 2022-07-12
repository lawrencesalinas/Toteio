import axios from "axios";
import { useSelector } from "react-redux";

function PayButton({ orderItems, email }) {
    const user = useSelector((state) => state.auth)

    const handleCheckout = () => {
        axios.post('http://localhost:8000/api/payments', {
            email,
            orderItems,
            userId: user.id
        }).then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url
            }
        })
            .catch((err) => console.log(err.message))
    }
    return (
        <>
            <button className="signupbtn" onClick={handleCheckout}>Check Out</button>
        </>
    )
}

export default PayButton