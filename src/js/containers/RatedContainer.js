import {connect} from "react-redux";
import Rated from "../components/Rated/Rated";


const mapStateToProps = (state) => {
    return {
        rated: state.rated
    }
}


export default connect(mapStateToProps, null)(Rated)