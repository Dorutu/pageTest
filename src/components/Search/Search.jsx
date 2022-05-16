import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {InputBase, Typography} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    searchSide : {
        backgroundColor: "white",
        width: "100%",
        height: 40,
        paddingTop: 15,
        paddingBottom: 15,
        display: "flex",
     //   gridTemplateColumns: "70% 5% 20% 5%",

    },

    search: {

        position: 'relative',
        border: "1px solid black",
        borderRadius: 32,
        backgroundColor: "#EBEFF1",
        '&:hover': {
            backgroundColor: "#F4F6F7",
        },

        width: "100%",
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#596D7C'
    },
    inputRoot: {
        color: '#000000',

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 55,
        paddingTop: 12,
        transition: theme.transitions.create('width'),
        width: '100%',
        color: 'black'
    },

    notification: {

        paddingTop: "4px",
        float: "right",
        [theme.breakpoints.down('md')] : {
            display: "none"
        }


    },

    avatar: {
        paddingRight: "0px",
        marginLeft: "48px",
        marginRight: "5px",
        marginTop: "5px",

    },

    avatarInfo:{
        display: "flex",
        paddingLeft: "25px",
        [theme.breakpoints.down('md')] : {
            display: "none"
        }

    },

    rightSideOfAvatar: {
        display: "grid",
        gridAutoFlow: "rows",
        [theme.breakpoints.down('md')] : {
            display: "none"
        }
    },

    nameText: {
        float: "right",
        fontWeight: 600,
        paddingTop: "4px"
    },

    jobTitleText: {
        float: "right",
        fontSize: 12,
        color:  "#8EA4B3"
    },

    dropDownMenu: {
        color: "#B8C6D0",
        [theme.breakpoints.down('md')] : {
            display: "none"
        }

    }

}));

export default function Search() {

    const classes = useStyles();

    return (

        <div className={classes.searchSide}>
            <Grid container >
            <Grid item lg={8} md={4} sm={12} xs={12}>
            <div className={classes.search} style={{ border: 1, height: "44px"}}>
                <div className={classes.searchIcon}><SearchIcon /></div>
                <InputBase
                    placeholder='Search for jobs'
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput ,
                    }}
                />
            </div>
            </Grid>
                <Grid item lg={0} md={1}>
            <div className={classes.notification}>
                <IconButton>
                    <Badge color="secondary" variant="dot">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </div>
                </Grid>
                <Grid item lg={2} md={1}>
            <div className={classes.avatarInfo}>
                <Avatar className={classes.avatar}>BD</Avatar>
                <div className={classes.rightSideOfAvatar}>
                    <Typography className={classes.nameText}>Bota Doru</Typography>
                    <Typography className={classes.jobTitleText}>Organization Manager</Typography>

                </div>

            </div>
                </Grid>

                <Grid item lg={0} md={1}>
            <div className={classes.dropDownMenu}>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
            </Grid>
            </Grid>
        </div>


    )
}