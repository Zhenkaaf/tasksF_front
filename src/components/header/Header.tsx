import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

type HeaderProps = {
  setOpen: (open: boolean) => void;
  open: boolean;
};
///////////////////////////////////////////////////////////////////////
const Header = ({ setOpen, open }: HeaderProps) => {
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ backgroundColor: "green" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
        >
          TasksF
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Header;
