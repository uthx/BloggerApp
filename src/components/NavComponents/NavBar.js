import React, { useContext } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";

import MoreIcon from "@material-ui/icons/MoreVert";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { Link } from "react-router-dom";

import { BlogContextReciever } from "../../blogContext/blogContext";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
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
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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
    // vertical padding + font size from searchIcon
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
    textDecoration: "none", //changes
  },
  linkStylesMobile: {
    color: "black",
    textDecoration: "none",
    outline: 0,
  },
}));

export default function PrimarySearchAppBar() {
  const {
    likeContext,
    dislikeContext,
    limitContext,
    searchContext,
  } = useContext(BlogContextReciever);
  const [like] = likeContext;
  const [dislike] = dislikeContext;
  const [setLimit] = limitContext;
  const [searchId, setSearchId] = searchContext;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // const [searchId, setSearchId] = useState("");

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

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
      <MenuItem>
        <Link to="/liked-posts" className={classes.linkStylesMobile}>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={like.length} color="secondary">
              <ThumbUpIcon />
            </Badge>
          </IconButton>
          <span>Liked Posts</span>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/disliked-posts" className={classes.linkStylesMobile}>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={dislike.length} color="secondary">
              <ThumbDownIcon />
            </Badge>
          </IconButton>
          <span>Disliked Posts</span>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/create-new-post" className={classes.linkStylesMobile}>
          <IconButton aria-label="Create new post" color="inherit">
            <NoteAddIcon />
          </IconButton>
          <span>Create New Posts</span>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      {/* <Router> */}
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none", outline: 0 }}
          >
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              onClick={() => setLimit(0)}
            >
              Blogger
            </Typography>
          </Link>
          <Link to={`/search-posts/${searchId}`} style={{ color: "#FFF" }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search by ID"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={(e) => setSearchId(e.target.value)}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/liked-posts" style={{ color: "#FFF" }}>
              <IconButton aria-label="show all liked posts" color="inherit">
                <Badge badgeContent={like.length} color="secondary">
                  <ThumbUpIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/disliked-posts" style={{ color: "#FFF" }}>
              <IconButton aria-label="show all disliked posts" color="inherit">
                <Badge badgeContent={dislike.length} color="secondary">
                  <ThumbDownIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/create-new-post" style={{ color: "#FFF" }}>
              <IconButton aria-label="Create new post" color="inherit">
                <NoteAddIcon />
              </IconButton>
            </Link>
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
      {renderMenu}
    </div>
  );
}
