import {connect} from "react-redux";
import Watchlist from "../components/Watchlist/Watchlist";


const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist
    }
}


export default connect(mapStateToProps, null)(Watchlist)