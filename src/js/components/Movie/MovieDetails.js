import React from "react";
import { List, ListItem, ListItemText, Card, CardActions, CardContent, CardMedia, Typography, Box, Grid } from "@mui/material";
import RatingWidget from "../Rated/RatingWidget";
import WatchListButtons from "../Watchlist/WatchListButtons";


export default function MovieDetails({ movie, isMovieInWatchlist }) {
    return (
            <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: '90%', maxHeight: 600, padding: 2 , margin: 2}}>
                <Box>
                    <Typography gutterBottom variant="h4" component="div">
                        {movie.Title}
                    </Typography>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'row', }}>
                    <Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 240, height: 360 }}
                            image={movie.Poster}
                            alt={`${movie.Title}`}
                        />
                    </Box>

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
                                    <ListItemText primary={`Writer: ${movie.Writer}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={`Cast: ${movie.Actors}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Plot: " secondary={movie.Plot} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Awards: " secondary={movie.Awards} />
                                </ListItem>
                            </List>
                        </CardContent>

                        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                            <RatingWidget movie={movie} />
                            <WatchListButtons movie={movie} isMovieInWatchlist={isMovieInWatchlist} />
                        </CardActions>
                    </Box>
                </Box>
            </Card>
    )
}
