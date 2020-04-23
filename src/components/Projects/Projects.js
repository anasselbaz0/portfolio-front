import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "../Divider";
import pr1 from '../../assets/images/project1.jpg';
import colors from "../../assets/colors";

const styles = {
    'projects': {
        // padding: '10vh 10vw',
        // // position: 'relative',
        // zIndex: '3',
        height: '100%',
        // position: 'absolute',
        // top: '50%',
        // left: '20%',
        // color: colors.WHITE,
    },
    'title': {
        margin: '2rem 0',
        fontFamily: 'Playfair Display',
        fontWeight: '800',
        fontSize: '3rem',
    },
    'listProjects': {
        margin: '2rem 0',
    },
    'listItem': {
        margin: '1rem 0',
    },
    'background': {
        padding: '5vh',
        height: '100%',
        position: 'relative',
        // // bottom: '0',
        // // width: '100%',
        // // height: '100%',

        // // zIndex: '10',

        // margin: '0',
        // padding: '0',

    },
    'backgroundText': {
        position: 'absolute',
        bottom: '50%',
        left: '50%',
        fontWeight: '900',
        fontSize: '70vw',
        lineHeight: '15vh',
        fontFamily: 'Playfair Display',
        // backgroundImage: `url(${ pr1 })`,
        // backgroundSize: 'cover',
        // height: '70vh'
        // '-webkitTextFillColor': 'transparent',
        // '-webkitBackgroundClip': 'text',
    }
};

class Projects extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.background}>
                <span className={classes.backgroundText}>P</span>
                <div className={classes.projects}>
                    {/*<div className={classes.content}>*/}
                    {/*    <div className={classes.title}>*/}
                    {/*        Personal Portfolio*/}
                    {/*    </div>*/}
                    {/*    <Divider widht="2rem" />*/}
                    {/*    <div className={classes.listProjects}>*/}
                    {/*        <div className={classes.listItem}>Personal Portfolio</div>*/}
                    {/*        <div className={classes.listItem}>Project 2</div>*/}
                    {/*        <div className={classes.listItem}>Project 3</div>*/}
                    {/*        <div className={classes.listItem}>Project 4</div>*/}
                    {/*        <div className={classes.listItem}>Project 5</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(Projects);
