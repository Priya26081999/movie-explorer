import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Chip, CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  fetchMovieDetailsRequest,
  selectSelectedMovie,
  selectMoviesLoading,
} from "../redux/slices/movieSlice";


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movie = useAppSelector(selectSelectedMovie);
  const loading = useAppSelector(selectMoviesLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetailsRequest());
    }
  }, [dispatch, id]);

  if (loading || !movie) {
    return (
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

//   return (
//     <Container maxWidth="lg" sx={{ mt: 5 }}>
//       <Box sx={{ display: "flex", gap: 4 }}>
//         <img
//           src={`${IMAGE_BASE_URL}${movie.poster_path}`}
//           alt={movie.title}
//           style={{ width: 300, borderRadius: 10 }}
//         />

//         <Box>
//           <Typography variant="h4" gutterBottom>
//             {movie.title}
//           </Typography>

//           <Typography variant="body1" sx={{ mb: 2 }}>
//             {movie.overview}
//           </Typography>

//           <Typography variant="subtitle1" sx={{ mb: 1 }}>
//             ⭐ Rating: {movie.vote_average}
//           </Typography>

//           <Typography variant="subtitle1" sx={{ mb: 2 }}>
//             Language: {movie.original_language.toUpperCase()}
//           </Typography>

//           <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
//             {movie.genres.map((genre) => (
//               <Chip key={genre.id} label={genre.name} />
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default MovieDetails;






return (
  <Container
    maxWidth={false}
    sx={{
      mt: 5,
      px: { xs: 2, md: 6 },
      color: "#fff",
    }}
  >
    <Box
      sx={{
        display: "flex",
        gap: 6,
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        background: "linear-gradient(135deg, #1e1e2f, #2c2c54)",
        p: 4,
        borderRadius: 4,
        boxShadow: 6,
      }}
    >
      <Box
        component="img"
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        sx={{
          width: { xs: "100%", md: 320 },
          borderRadius: 3,
          boxShadow: 8,
          transition: "0.4s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />

      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(90deg, #ff3d00, #ff9800)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {movie.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.7,
            color: "#ddd",
          }}
        >
          {movie.overview}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mb: 1,
            fontWeight: 600,
            color: "#ffcc00",
          }}
        >
          ⭐ Rating: {movie.vote_average}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mb: 3,
            fontWeight: 500,
            color: "#90caf9",
          }}
        >
          🌐 Language: {movie.original_language.toUpperCase()}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          {movie.genres.map((genre) => (
            <Chip
              key={genre.id}
              label={genre.name}
              sx={{
                backgroundColor: "#ff3d00",
                color: "#fff",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: "#ff6e40",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  </Container>
);
};

export default MovieDetails;

