import React from "react";
import { Card, CardActions, CardMedia, Typography, Box, Table, TableBody, TableRow, TableCell } from "@mui/material";
import RatingWidget from "../Rated/RatingWidget";
import WatchListButtons from "../Watchlist/WatchListButtons";
import { NO_IMAGE_URL } from "./constants";


export default function MovieDetails({ movie, isMovieInWatchlist }) {

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', maxHeight: 600, padding: 2, margin: 3 }}>
            <Box>
                <Typography gutterBottom variant="h4" component="div">
                    {movie.Title}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                <Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 240, height: 360 }}
                        image={movie.Poster !== "N/A" ? movie.Poster : NO_IMAGE_URL}
                        alt={`${movie.Title}`}
                    />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

                    <Table sx={{ minWidth: 360, marginLeft: 1 }} aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">Year:</TableCell>
                                <TableCell align="left">{movie.Year}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Genre:</TableCell>
                                <TableCell align="left">{movie.Genre}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Director:</TableCell>
                                <TableCell align="left">{movie.Director}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Writer:</TableCell>
                                <TableCell align="left">{movie.Writer}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Cast:</TableCell>
                                <TableCell align="left">{movie.Actors}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Plot:</TableCell>
                                <TableCell align="left">{movie.Plot}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                        <RatingWidget movie={movie} />
                        <WatchListButtons movie={movie} isMovieInWatchlist={isMovieInWatchlist} />
                    </CardActions>
                </Box>
            </Box>
        </Card>
    )
}
