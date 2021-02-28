import React from 'react'
import {Card, CardHeader, CardContent, CardMedia, CardActionArea, Typography, Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        margin: theme.spacing(3)
    },
    cardMedia: {
        maxWidth: '75px',
        height: '75px',
        justify: 'flex-end'
    }
}))

const ParkingLotCard = (props) => {
    const classes = useStyles();
    const review = props.data.review_count;
    const rating = props.data.rating;

    function calculateScore (review, rating ) {
        const score = ( props.data.review_count * props.data.rating ) / (props.data.review_count + 1)
        return score
    };
    
    return (
        <>
            <Card className={classes.card}>
                
                <CardContent>
                    <Box className={classes.cardMedia}>
                        <img src={props.data.image_url} alt="text" />
                    </Box>
                    <Typography variant="h6">{props.data.name}</Typography>
                    <Typography variant="subtitle1">{props.data.location.display_address[0]}</Typography>
                    <Typography variant="subtitle1">{props.data.location.display_address[1]}</Typography>
                    <Typography variant="subtitle1">Rating: {props.data.rating}</Typography>
                    <Typography variant="subtitle1">Number of Reviews: {props.data.review_count}</Typography>
                    <Typography variant="subtitle1">Weighted Score: {calculateScore(review, rating).toFixed(3)}</Typography>
                    <Typography variant="subtitle1"><a href={props.data.url}>Visit Link</a></Typography>
                </CardContent>
                
            </Card>
        </>
    )
}

export default ParkingLotCard;

// address, an image if available, star rating, review count, and link to the Yelp page.