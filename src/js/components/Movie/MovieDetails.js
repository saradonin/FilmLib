import React from "react";
import { List, ListItem, ListItemText, Card, CardActions, CardContent, CardMedia, Typography, Box } from "@mui/material";
import RatingWidget from "../Rated/RatingWidget";
import WatchListButtons from "../Watchlist/WatchListButtons";


export default function MovieDetails({ movie, isMovieInWatchlist }) {
    return (
        <Box sx={{ margin: 5 }}>
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
                            <RatingWidget movie={movie} />
                            <WatchListButtons movie={movie} isMovieInWatchlist={isMovieInWatchlist} />
                        </CardActions>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}
