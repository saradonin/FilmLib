import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import RatingWidget from "../Movie/RatingWidget";

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

                <CardActions>
                    <RatingWidget/>

                    <Button size="small">To watch</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}