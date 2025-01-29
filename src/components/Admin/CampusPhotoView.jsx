import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  CircularProgress,
  Button,
  Card,
  CardMedia,
  CardActions,
} from "@mui/material";
import axios from "axios";

const CampusPhotoView = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch campus images from the API
    axios
      .get("https://namami-infotech.com/AmritGi/get_campus_image.php")
      .then((response) => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setError("Error fetching photos");
        setLoading(false);
      });
  }, []);

  const deletePhoto = (photoId) => {
    axios
      .delete("https://namami-infotech.com/AmritGi/delete_campus_image.php", {
        data: { id: photoId },
      })
      .then(() => {
        setPhotos((prevPhotos) =>
          prevPhotos.filter((photo) => photo.id !== photoId)
        );
      })
      .catch((error) => {
        console.error("Error deleting photo:", error);
        setError("Error deleting photo");
      });
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center">
        {error}
      </Typography>
    );
  }

  if (photos.length === 0) {
    return (
      <Typography variant="h6" align="center">
        No photos available.
      </Typography>
    );
  }

  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Campus Photo Gallery
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={photo.photo_url}
                alt="Campus Photo"
                style={{ borderRadius: "10px" }}
              />
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => deletePhoto(photo.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CampusPhotoView;
