import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const About: React.FC = () => {
  return (
    // <Card variant="outlined"></Card>
    // <div className="aboutcontainer" style={{margin:"auto"} }>
    <Card
      sx={{ maxWidth: 500, borderRadius: "23px" }}
      style={{ margin: "auto", alignItems: "center", verticalAlign: "middle" }}
    >
      <CardMedia
        component="img"
        height="140"
        width="200"
        image="https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png"
        alt="logoMeetUp"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">צור קשר</Button>
        {/*<Button size="small">Learn More</Button>*/}
      </CardActions>
    </Card>
    // </div>
  );
};
export default About;
