import React from "react";
import { NavLink } from 'react-router-dom';
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Button, Popper, Grow, Paper, ClickAwayListener, MenuList } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import OxusCare from "./oxusCare.js";
import logo from "../../assets/logo-big.png";

const useStyles = makeStyles((theme) => ({
  navmenu: {
    marginRight: theme.spacing(2),
    color: "#ddd",
    textDecoration: "none",
  },
  loginButton: {
    border: "2px solid #ffffff",
    borderRadius: "20px",
    padding: "6px 16px",
    color: "#ffffff",
    textTransform: "none",
    fontWeight: "bold",
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#3f51b5",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
      transform: "scale(1.05)",
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // eslint-disable-next-line no-template-curly-in-string
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  homeDropdown: {
    position: "relative",
    display: "inline-block",
  },
  dropdownMenu: {
    backgroundColor: "#212121",
    minWidth: "200px",
    zIndex: 1000,
    borderRadius: "8px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.5)",
    border: "2px solid #C8C8C8", // Gris clair pour le cadre (#C8C8C8)
    overflow: "hidden",
  },
  dropdownItem: {
    color: "#ffffff",
    padding: "10px 16px",
    textDecoration: "none",
    display: "block",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    "&:hover": {
      backgroundColor: "#C8C8C8", // Gris clair au survol
      color: "#212121", // Texte foncé sur fond clair pour meilleure lisibilité
    },
    "&:last-child": {
      borderBottom: "none",
    },
  },
  menuDivider: {
    height: "1px",
    margin: "0",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [openCare, setOpenCare] = React.useState(false);
  const [homeMenuOpen, setHomeMenuOpen] = React.useState(false);
  const homeMenuRef = React.useRef(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleHomeMenuEnter = () => {
    setHomeMenuOpen(true);
  };

  const handleHomeMenuLeave = () => {
    setHomeMenuOpen(false);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <NavLink underline="none" to="/">
        <MenuItem><p>Home</p></MenuItem>
      </NavLink>
      <NavLink underline="none" to="/search">
        <MenuItem><p>Recherche</p></MenuItem>
      </NavLink>
      <NavLink underline="none" to="/brands">
        <MenuItem><p>Marques</p></MenuItem>
      </NavLink>
      <NavLink underline="none" to="/dealers">
        <MenuItem><p>Concessionnaires</p></MenuItem>
      </NavLink>
      <NavLink underline="none" to="/comparator">
        <MenuItem><p>Comparateur</p></MenuItem>
      </NavLink>
      <NavLink underline="none" to="/Inventory">
        <MenuItem><p>Inventory</p></MenuItem>
      </NavLink>
      <NavLink underline="none" to="/About">
        <MenuItem><p>About</p></MenuItem>
      </NavLink>
      <NavLink underline="none" to="/Contact">
        <MenuItem><p>Contact</p></MenuItem>
      </NavLink>
      <NavLink underline="none" to="/agency-services">
        <MenuItem><p>Agency Services</p></MenuItem>
      </NavLink>
      <NavLink underline="none" to="/login">
        <MenuItem><p>Login</p></MenuItem>
      </NavLink>
      <NavLink underline="none" onClick={() => setOpenCare(true)} to="#">
        <MenuItem><p>AutoVault Car Care</p></MenuItem>
      </NavLink>
      <MenuItem>
        <SearchIcon />
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar>
        <Toolbar>
          <NavLink to="/">
            <Typography variant="h6" noWrap>
              <img src={logo} height="80" alt="OXUS" />
            </Typography>
          </NavLink>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography className={classes.navmenu}>
              <div 
                className={classes.homeDropdown}
                onMouseEnter={handleHomeMenuEnter}
                onMouseLeave={handleHomeMenuLeave}
                ref={homeMenuRef}
              >
                <NavLink className={classes.navmenu} to="/">
                  Home
                </NavLink>
                <Popper
                  open={homeMenuOpen}
                  anchorEl={homeMenuRef.current}
                  role={undefined}
                  transition
                  disablePortal
                  placement="bottom-start"
                >
                  {({ TransitionProps }) => (
                    <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: 'top left' }}
                    >
                      <Paper className={classes.dropdownMenu}>
                        <ClickAwayListener onClickAway={handleHomeMenuLeave}>
                          <MenuList autoFocusItem={homeMenuOpen}>
                            <NavLink className={classes.dropdownItem} to="/search">
                              <MenuItem>Recherche</MenuItem>
                            </NavLink>
                            <NavLink className={classes.dropdownItem} to="/brands">
                              <MenuItem>Marques</MenuItem>
                            </NavLink>
                            <NavLink className={classes.dropdownItem} to="/dealers">
                              <MenuItem>Concessionnaires</MenuItem>
                            </NavLink>
                            <NavLink className={classes.dropdownItem} to="/comparator">
                              <MenuItem>Comparateur</MenuItem>
                            </NavLink>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
              <NavLink className={classes.navmenu} to="/Inventory"> Inventory </NavLink>
              <NavLink className={classes.navmenu} to="/About"> About </NavLink>
              <NavLink className={classes.navmenu} to="/Contact"> Contact </NavLink>
              <NavLink className={classes.navmenu} to="/agency-services"> Agency Services </NavLink>
              <NavLink className={classes.navmenu} to="/security">My Account </NavLink>

              <NavLink className={`${classes.navmenu} ${classes.loginButton}`} to="/login"> Login </NavLink>
              <Button className={classes.navmenu} onClick={() => setOpenCare(true)}> AutoVault Car Care </Button>
              <NavLink className={classes.navmenu} to="/Inventory"> <SearchIcon /> </NavLink>
            </Typography>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <OxusCare openCare={openCare} setOpenCare={setOpenCare} />
    </div>
  );
}