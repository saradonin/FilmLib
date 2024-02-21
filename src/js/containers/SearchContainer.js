import {Search} from "../components/Search/Search";
import {connect} from "react-redux";
import {setSearchResults} from "../redux/actions";



const mapStateToProps = (state) => {
    return {
        results: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (results) => dispatch(setSearchResults(results))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)