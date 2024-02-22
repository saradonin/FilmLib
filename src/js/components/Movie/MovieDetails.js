import React, {useEffect, useState} from "react";
import {getMovieById} from "../../api/movies";
import {List, ListItem, ListItemText} from "@mui/material";
import {useParams} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import RatingWidget from "../Rated/RatingWidget";
import WatchListButtons from "../Watchlist/WatchListButtons";
import {useSelector} from "react-redux";

export default function MovieDetails () {
    const [movie, setMovie] = useState({})
    const {movieId} = useParams()

    const watchlist = useSelector(state => state.watchlist)
    const isMovieInWatchlist = watchlist.some(item => item.imdbID === movie.imdbID)

    useEffect(() => {
        const fetchMovie = async () => {
            const newMovie = await getMovieById(movieId)
            setMovie(newMovie)
        }
        fetchMovie()
    }, [movieId]);


    return (
        <Box sx={{ margin: 5}}>
            <Box>
                <Typography gutterBottom variant="h4" component="div">
                    {movie.Title}
                </Typography>
            </Box>
            <Box>
                <Card sx={{ display: 'flex', maxWidth: '90%', maxHeight: 600 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 240, height: 360 }} // Adjust image width as needed
                        image={movie.Poster}
                        alt={`${movie.Title}`}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <CardContent>
                                <List >
                                    <ListItem>
                                        <ListItemText>Year: {movie.Year}</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>Director: {movie.Director}</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>{movie.Plot}</ListItemText>
                                    </ListItem>
                                </List>
                        </CardContent>
                        <CardActions>
                            <RatingWidget movie={movie}/>
                            <WatchListButtons movie={movie} isMovieInWatchlist={isMovieInWatchlist}/>
                        </CardActions>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}
