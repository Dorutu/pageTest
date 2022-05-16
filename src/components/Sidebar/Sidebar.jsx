import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    sidebar : {
        backgroundColor: "white",
        height: "100%",
        width: "17%",
        display: "block",
         // [theme.breakpoints.down('sm')] : {
         //     display: "none"
         // }
    },


}))

export default function Sidebar() {

    const classes = useStyles();

    return (
        <div className={classes.sidebar}>Sidebar</div>
    )
}