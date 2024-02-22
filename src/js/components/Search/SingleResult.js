import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import RatingWidget from "../Movie/RatingWidget";
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {useDispatch} from "react-redux";
import {addToWatchlist} from "../../redux/actions";
import AddToWatchlistButton from "../Movie/AddToWatchlistButton";

export default function SingleResult ({result}) {
    return (
        <Grid item xs={2.4}>
            <Card sx={{maxWidth: 216}} >
                <Link to={`/title/${result.imdbID}`}>
                <CardMedia
                    component="img"
                    alt={`${result.Title}`}
                    height="312"
                    image={result.Poster}
                />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="body1" component={Link} to={`/title/${result.imdbID}`}>
                        {result.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {result.Year}
                    </Typography>
                </CardContent>

                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <RatingWidget/>
                    <AddToWatchlistButton/>

                </CardActions>
            </Card>
        </Grid>
    );
}