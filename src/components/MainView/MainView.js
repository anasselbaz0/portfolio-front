import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import colors from '../../assets/colors.js';
import MainTitle from './MainTitle';
import SubTitle from './SubTitle';
// import NavBar from "../Navbar";
// import scroll from '../../assets/images/scroll.svg'
import MainDown from "./MainDown";

const styles = {
    'mainView': {
        height: '100%',
        background: colors.DARK,
        color: colors.WHITE,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

};

class MainView extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.mainView}>
                <MainTitle />
                <SubTitle />
                <MainDown />
            </div>
        );
    }
}

export default withStyles(styles)(MainView);
