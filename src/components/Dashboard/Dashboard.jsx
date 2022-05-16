import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
import Candidates from "../Candidates/Candidates";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
   dashboard: {
        display: "flex",
        width: "100vw",
        height: "100vh",
    },

    dashboardContainer: {
        backgroundColor: "#E5E5E5",

    },


}));

export default function Dashboard() {

    const classes = useStyles();

    return (
        <div className={classes.dashboard}>
                <Sidebar/>
            <div className={classes.dashboardContainer}>
                <Search/>
                <Candidates/>
            </div>
        </div>
    )
}

// <Grid item sm={3} className={classes.right}>