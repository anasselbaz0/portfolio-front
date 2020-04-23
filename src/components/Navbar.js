import React, {Component} from 'react';
import menuIcon from "../assets/images/menu.svg";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "./Divider";
import colors from "../assets/colors";
import Logo from "./Logo";
import {Link} from 'react-router-dom';

const styles = {
    'navbarContainer': {
        // color: colors.LIGHT_1,

        height: '10vh'
    },
    'navbar': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        height: '100%'
    },
    'links': {

    },
    'link': {
        marginRight: '1rem',
        padding: '.5rem 1rem',
        fontWeight: '600',
        borderRadius: '3px',
        cursor: 'pointer',
        zIndex: '2',
        '&:hover': {
            background: 'rgba(255, 255, 255, .05)',
        }
    }
};

class Navbar extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.navbarContainer}>
                <div className={classes.navbar}>
                    <Logo />
                    <div className={classes.links}>
                        <Link to='/projects'>
                            <span className={classes.link}> Projects </span>
                        </Link>
                        <Link to='/about'>
                            <span className={classes.link}> About </span>
                        </Link>
                        <Link to='/contact'>
                            <span className={classes.link}> Contact me </span>
                        </Link>
                    </div>
                    <img className="icon clickable hidden" src={menuIcon} alt="Menu"/>

                </div>
                <Divider background={colors.GRAY_1} />
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);
