import React, { Component } from 'react'
import colors from '../assets/colors'
import { withStyles } from '@material-ui/styles'

const styles = {
    'navigationContainer': {
        background: colors.DARK,
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    'navigation': {
        width: '2rem',
        height: '10rem',
        borderRadius: '.8rem',
        background: 'white',
        margin: '0 .5rem 4rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
};

class Navigation extends Component {

// eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.navigationContainer}>
                <div className={classes.navigation}>
                    <img src="../assets/images/circle_gray.svg" alt=""/>
                    <img src="../assets/images/circle_gray.svg" alt=""/>
                    <img src="../assets/images/circle_gray.svg" alt=""/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Navigation)
