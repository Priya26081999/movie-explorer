import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
  Container,
  Box,
} from "@mui/material";
import {
  fetchMoviesRequest,
  selectAllMovies,
  selectMoviesLoading,
} from "../redux/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
 import { useNavigate } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Home = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectAllMovies);
  const loading = useAppSelector(selectMoviesLoading);
  const navigate = useNavigate();

 


  useEffect(() => {
    dispatch(fetchMoviesRequest());
  }, [dispatch]);

  if (loading) {
    return (
      <Container sx={{ textAlign: "center", marginTop: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

  // return (
    // <Container sx={{ marginTop: 4,}}>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexWrap: "wrap",
    //        gap: 3,
    //        alignItems:"start",
    //       justifyContent: "start",
    //     }}
    //   >
    //     {movies.map((movie) => (
    //       <Card
    //         key={movie.id}
    //         sx={{
    //           width: '300',
    //           borderRadius: 3,
    //           boxShadow: 4,
    //           transition: "0.3s",
    //           backgroundColor: "#1e1e2f",
    //           color: "#fff",
    //           "&:hover": {
    //             transform: "scale(1.05)",
    //             boxShadow: 8,
    //           },
    //         }}
    //       >
    //         <CardMedia
    //           component="img"
    //           height="300"
    //           image={`${IMAGE_BASE_URL}${movie.poster_path}`}
    //           alt={movie.title}
    //         />

    //         <CardContent>
    //           <Typography variant="h6" gutterBottom>
    //             {movie.title}
    //           </Typography>

    //           <Typography variant="body2" sx={{ color: "#ccc" }}>
    //             {movie.overview.slice(0, 100)}...
    //           </Typography>

    //           <Button
    //             variant="contained"
    //             fullWidth
    //             sx={{
    //               marginTop: 2,
    //               backgroundColor: "#ff3d00",
    //               "&:hover": {
    //                 backgroundColor: "#ff6e40",
    //               },
    //             }}
    //           >
    //             View Details
    //           </Button>
    //         </CardContent>
    //       </Card>
    //     ))}
    //   </Box>
    // </Container>







    return (
  <Container
    maxWidth={false}
    disableGutters
    sx={{
      marginTop: 4,
      // paddingX: 3, // small side spacing
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
      }}
    >
      {movies.map((movie) => (
        <Card
          key={movie.id}
          sx={{
            flex: "1 1 250px",   // responsive width
            maxWidth: '380px',
            borderRadius: 3,
            paddiing:4,
            boxShadow: 4,
            transition: "0.3s",
            backgroundColor: "#1e1e2f",
            color: "#fff",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: 8,
            },
          }}
        >
          <CardMedia
            component="img"
            height="350"
            image={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />

          <CardContent>
            <Typography variant="h6" gutterBottom>
              {movie.title}
            </Typography>

            <Typography variant="body2" sx={{ color: "#ccc" }}>
              {movie.overview.slice(0, 100)}...
            </Typography>

            <Button
              variant="contained"
              onClick={() => navigate(`/movie/${movie.id}`)}
              fullWidth
              sx={{
                marginTop: 2,
                backgroundColor: "#ff3d00",
                "&:hover": {
                  backgroundColor: "#ff6e40",
                },
              }}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Container>
);


};

export default Home;
