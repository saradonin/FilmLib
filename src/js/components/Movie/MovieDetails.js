import React, { useEffect, useState } from "react";
import { getMovieById } from "../../api/movies";
import { List, ListItem, ListItemText, Card, CardActions, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import RatingWidget from "../Rated/RatingWidget";
import WatchListButtons from "../Watchlist/WatchListButtons";
import { useSelector } from "react-redux";


export default function MovieDetails () {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})

    const watchlist = useSelector(state => state.watchlist)
    const isMovieInWatchlist = watchlist.some(item => item.imdbID === movieId)

    const rated = useSelector(state => state.rated)
    const isMovieRated = (movieId) => {
        return rated.some(item => item.imdbID === movieId);
    }


    // TODO rating not saving
    useEffect(() => {
        const fetchMovie = async () => {
            const fetchedMovie = await getMovieById(movieId);
            const ratedMovie = rated.find(item => item.imdbID === movieId);
            const newMovie = ratedMovie ? { ...fetchedMovie, userRating: ratedMovie.userRating } : fetchedMovie;
            setMovie(newMovie);
        };
        fetchMovie();
    }, [movieId, rated]);
    


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
                        sx={{ width: 240, height: 360 }}
                        image={movie.Poster}
                        alt={`${movie.Title}`}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <CardContent>
                            <List>
                                <ListItem>
                                    <ListItemText primary={`Year: ${movie.Year}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Genre: ${movie.Genre}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Director: ${movie.Director}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Cast: ${movie.Actors}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Plot: " secondary={movie.Plot} />
                                </ListItem>
                            </List>
                        </CardContent>
                        <CardActions>
                            <RatingWidget movie={isMovieRated(movieId) ? rated.find(item => item.imdbID === movieId) : movie}/>
                            <WatchListButtons movie={movie} isMovieInWatchlist={isMovieInWatchlist}/>
                        </CardActions>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}
