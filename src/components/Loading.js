import "../assets/scss/Loading.scss";
import Loader from "react-spinners/BarLoader";

function Loading() {
    return(
        <div className="container-loader">
            <Loader color="#a2ac6e" width={200} />
        </div>
    )
}

export default Loading;