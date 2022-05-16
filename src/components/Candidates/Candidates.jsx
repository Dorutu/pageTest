import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CandidateCard from "./CandidateCard";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    candidates: {
        backgroundColor: "#E5E5E5",
        width: "100%",

    },
    headerCandidates: {
        backgroundColor: "#E5E5E5",
        width: "100%",
        height: 60
    },

    headerText: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontSize: 25,
        fontWeight: 500,
        paddingTop: 15,
        paddingLeft: 25
    },

    candidatesCards: {
        backgroundColor: "#E5E5E5",
        height: "100%",
        paddingLeft: "20px",
        paddingRight: "20px",

    //    display: "grid",
    //    gridTemplateColumns: "25% 25% 25% 25%",

    }
})

export default function Candidates() {

    const classes = useStyles();

    return (
        <div className={classes.candidates}>
            <div className={classes.headerCandidates}>
                <div className={classes.headerText}>
                    Candidates nearby
                </div>
            </div>

            <div className={classes.candidatesCards}>
                <Grid container  >
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CandidateCard name="James Vaccaro" job="Specialist in General Medicine" city="Stockholm" rate={10} hourlyRate="Kr60.00/5" available="Available Now"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CandidateCard name="Zarah Rosales" job="Specialist in General Medicine" city="Stockholm" rate={1} hourlyRate="Kr60.00/5" available="Available Now"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CandidateCard name="Ronnie Fitzgerald" job="Specialist in General Medicine" city="Stockholm" rate={10} hourlyRate="Kr60.00/5" available="Available Now"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CandidateCard name="Dante Irvine" job="Specialist in General Medicine" city="Stockholm" rate={10} hourlyRate="Kr60.00/5" available="Available Now"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CandidateCard name="Deniz Hook" job="Specialist in General Medicine" city="Stockholm" rate={1} hourlyRate="Kr60.00/5" available="Available Now"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CandidateCard name="Christy Hume" job="Specialist in General Medicine" city="Stockholm" rate={10} hourlyRate="Kr60.00/5" available="Available Now"/>
                    </Grid>


                </Grid>
            </div>

        </div>
    )
}