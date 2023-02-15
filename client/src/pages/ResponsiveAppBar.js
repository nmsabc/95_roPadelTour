import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { AuthContext } from "../helpers/AuthContext";

import { useNavigate } from "react-router-dom";

//used to truncate the username in the menu
var ld = require("lodash");


function ResponsiveAppBar() {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    setAnchorEl(null);
    navigate("/userprofile");
  };

  const handleMyAccount = () => {
    setAnchorEl(null);
    navigate("/myaccount");
  };
  const handleAddAccount = () => {
    setAnchorEl(null);
    navigate("/signup");
  };

  const handleSettings = () => {
    setAnchorEl(null);
    navigate("/usersettings");
  };

  const handleSingOut = () => {
    setAnchorEl(null);
    navigate("/signout");
  };

  const handlePassChange = () => {
    setAnchorEl(null);
    navigate("/forgotpassword");
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
      <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              {ld.truncate(authState.username, { length: 1, omission: "" })}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>{authState.username}</MenuItem>
        <Divider />
        <MenuItem onClick={handleProfile}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleMyAccount}>
          <Avatar /> My account
        </MenuItem>
        
        <Divider />
        <MenuItem onClick={handlePassChange}>
          <Avatar /> Change Password
        </MenuItem>
        
        <Divider />
        <MenuItem onClick={handleSettings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>{" "}
        <Divider />
        <MenuItem onClick={handleAddAccount}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleSingOut} >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
export default ResponsiveAppBar;
