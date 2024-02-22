import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Grid } from "@mui/material";
import { Link } from 'react-router-dom';

import WatchListButtons from "../Watchlist/WatchListButtons";
import RatingWidget from "../Rated/RatingWidget";
import {useSelector} from "react-redux";

export default function SingleMovieCard ({movie}) {
    const watchlist = useSelector(state => state.watchlist)
    const isMovieInWatchlist = watchlist.some(item => item.imdbID === movie.imdbID)

    return (
        <Grid item xs={2.4}>
            <Card sx={{maxWidth: 216}} >
                <Link to={`/title/${movie.imdbID}`}>
                <CardMedia
                    component="img"
                    alt={`${movie.Title}`}
                    height="312"
                    image={movie.Poster}
                />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="body1" component={Link} to={`/title/${movie.imdbID}`}>
                        {movie.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.Year}
                    </Typography>
                </CardContent>

                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <RatingWidget movie={movie}/>
                    <WatchListButtons movie={movie} isMovieInWatchlist={isMovieInWatchlist}/>
                </CardActions>
            </Card>
        </Grid>
    );
}