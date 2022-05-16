import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Avatar from '@material-ui/core/Avatar';
import {IconButton, Typography} from "@material-ui/core";
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbDown from '@material-ui/icons/ThumbDownTwoTone';
import Favorite from '@material-ui/icons/FavoriteTwoTone';

const useStyles = makeStyles({
    candidateCard: {
        width: "287px",
        height: "234px",
        backgroundColor: "white",
        borderRadius: "16px",
        marginTop: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",

    },
    candidateCardBellow: {
        backgroundColor: "white",
        height: "40px",
        display: "flex",
        gridTemplateColumns: "33.33% 33.33% 33.33%",
        alignContent: "center",
        justifyContent: "center",
        columnGap: "5px",
        paddingTop: "5px",


        borderRadius: "16px",
    //    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)"

    },

    avatarDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: "10px",
    },

    avatarCandidate:{
        height: 70,
        width: 70,
    },

    nameDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "10px"
    },
    candidateName: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        letterSpacing: "0.15px"
    },

    jobDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "5px"
    },

    candidateJob: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        letterSpacing: "0.1px",
        fontSize: "13px",
        color: "#8EA4B3"
    },
    cityDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "10px"

    },
    candidateCity: {
        color: "#5E798D",
        backgroundColor: "#EBEFF1",
        borderRadius: "64px",
        width: "91px",
        height: "22px",
        textAlign: "center",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px"
    },

    candidateCardBellowDiv: {
        paddingTop: "10px",

    },

    candidateRate: {
        boxSizing: "border-box",
        position: "static",
        width: "28px",
        height: "28px",
        left: "19.8px",
        top: "0px",
        background: "linear-gradient(180deg, #94CEE0 0%, #4C29FF 0.01%, #6142FF 50.21%, #765BFF 100%)",
        border: "1px solid #441FFF",
        borderRadius: "6px",
        transform: "rotate(45deg)",
        flex: "none",
        order: 0,
        flexGrow: 0,
        margin:" 0px 8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },

    candidateRateGradient: {
        position: "inherit",
        width: "19.8px",
        height: "19.8px",
        left: "19.8px",
        top: "5.8px",
        background: "linear-gradient(2.12deg, #421DFF 1.4%, #7B61FF 94.51%)",
        borderRadius: "4px",
        transform: "rotate(2deg)",
        justifyContent: "center"
    },

    candidateRateText: {
        position: "absolute",
        width: "20px",
        height: "20px",
        paddingLeft: "1px",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "143%",
        transform: "rotate(-45deg)",
        textAlign: "center",
        letterSpacing: "0.17px",
        color: "#F4F6F7",
        mixBlendMode: "normal"
    },

    candidateHourlyRate: {
        backgroundColor: "rgba(5, 180, 165, 0.12)",
        borderRadius: "42px",
        width: "75px",
        height: "23px",
        textAlign: "center",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "13px",
        lineHeight: "18px",
        letterSpacing: "0.16",
        color: "#4ab56e",
        display: "flex",
        alignItems: "center",
        padding: "4px 4px",
        justifyContent: "center",
        fontColor: '#089A8E',

    },

    candidateAvailable: {
        backgroundColor: "rgba(0, 133, 255, 0.08)",
        borderRadius: "42px",
        width: "105px",
        height: "23px",
        textAlign: "center",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "13px",
        lineHeight: "18px",
        letterSpacing: "0.16",
        color: "#0085FF",
        display: "flex",
        alignItems: "center",
        padding: "4px 4px",
        justifyContent: "center"
    },

    thumbButton: {
        backgroundColor: "white",
        color: "white",
        borderRadius: "6px",
        border: "1px solid #DAE1E6"
    },
    thumbButtonIcon: {
        color: "#4E6474"
    },
    heartIcon: {
        backgroundColor: "white",
        color: "white",
        borderRadius: "6px",
        border: "1px solid #DAE1E6"
    },
    heartIconButton: {
        color: "#4E6474",
      //  fill: "white"
    }

})

export default function CandidateCard(props) {

    const classes = useStyles();



    return (
        <div className={classes.candidateCard}> {/* Grid item lg=4 */}
            <div className={classes.avatarDiv}>
               <IconButton className={classes.thumbButton}>
                   <ThumbDown className={classes.thumbButtonIcon} />
               </IconButton>
                <Avatar className={classes.avatarCandidate}/>
              <IconButton className={classes.heartIcon} >
                  <Favorite className={classes.heartIconButton}/>
              </IconButton>
                
            </div>
            <div className={classes.nameDiv}>
                <Typography className={classes.candidateName}>{props.name}</Typography>
            </div>
           <div className={classes.jobDiv}>
               <Typography className={classes.candidateJob}>{props.job}</Typography>
           </div>
           <div className={classes.cityDiv}>
               <Typography className={classes.candidateCity}>{props.city}</Typography>
           </div>
            <div className={classes.candidateCardBellowDiv}>
                <div className={classes.candidateCardBellow}>
                    <div className={classes.candidateRate}>
                        <div className={classes.candidateRateGradient}>
                            <Typography className={classes.candidateRateText}>{props.rate}</Typography>
                        </div>

                    </div>
                    <Typography className={classes.candidateHourlyRate}>{props.hourlyRate}</Typography>
                    <Typography className={classes.candidateAvailable}>{props.available}</Typography>
                </div>

            </div>

        </div>
    )
}