import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import colors from "../../assets/colors";

const styles = {
    'subTitle': {
        width: '40%',
        height: '20rem',
        margin: '7vh 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'right',
        background: colors.DARK_BLUE,
        position: 'relative',
        // zIndex: '1',
    },
    'titleUp': {
        fontSize: '1rem',
        // fontWeight: 'bold',
        letterSpacing: '1px',
        textAlign: 'right',
        color: colors.GRAY_1,
        // marginRight: '2rem',
        position: 'absolute',
        zIndex: '1',
        right: '.5rem',
        transform: 'rotate(-5deg)',
    },
    'titleDown': {
        fontSize: '1.3rem',
        fontWeight: 'bolder',
        letterSpacing: '1px',
        textAlign: 'right',
        color: colors.LIGHT_1,
        position: 'absolute',
        right: '-5rem',
        bottom: '27%',
        zIndex: '4',
        transform: 'rotate(-5deg)',
    },

};

class SubTitle extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.subTitle}>
                <span className={classes.titleUp}>Ready to turn your <b><i>Ideas</i></b> to</span>
                <span className={classes.titleDown}><i>Reality</i> ! </span>
            </div>
        );
    }
}

export default withStyles(styles)(SubTitle);
