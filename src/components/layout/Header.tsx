import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>

        <Button color="inherit" component={Link} to={ROUTES.HOME}>
          Home
        </Button>

        {/* <Button color="inherit" component={Link} to={ROUTES.FAVORITES}>
          Favorites
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
