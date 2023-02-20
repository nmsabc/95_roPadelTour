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

import { AuthContext } from "../../helpers/AuthContext";

import { useNavigate } from "react-router-dom";

//used to truncate the username in the menu
var ld = require("lodash");

function PadelAppBar() {
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

  const handleAddPadelEvent = () => {
    console.log("clicked on handleAddPadelEvent ...");
    navigate("/CreatePadelEvent")
  };
  const handleAddPadelChampionship = () => {
    console.log("clicked on handleAddPadelChampionship ...");
  };
  const handleSavePadelGameInfo = () => {
    console.log("clicked on handlePassPadelPlayerChange ...");
    navigate("/SavePadelGameInfo")
  };
  const handlePadelPlayerSettings = () => {
    console.log("clicked on handlePadelPlayerSettings ...");
  };
  const handleAddPadelPlayerAccount = () => {
    console.log("clicked on handleAddPadelPlayerAccount ...");
  };
  const handleAddSponsor = () => {
    console.log("clicked on handleAddSponsor ...");
  };

  return (
    <React.Fragment>
     
        <Tooltip title="Padel Pages">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
          Padel
          </IconButton>
        </Tooltip>
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
        <MenuItem onClick={handleAddPadelEvent}>
          <Avatar /> Add Padel Event
        </MenuItem>
        <MenuItem onClick={handleAddPadelChampionship}>
          <Avatar /> Add Padel Championship
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleSavePadelGameInfo}>
          <Avatar /> Save Padel Game Info
        </MenuItem>
        <Divider />
        <MenuItem onClick={handlePadelPlayerSettings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Padel Player Settings
        </MenuItem>{" "}
        <Divider />
        <MenuItem onClick={handleAddPadelPlayerAccount}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add Padel Player account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleAddSponsor}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Add Sponsor
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
export default PadelAppBar;
