import Navbar from './Navbar';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return { sidebar: state.sidebar };
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer;