import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { AuthContext } from "../helpers/AuthContext";

import { useNavigate } from "react-router-dom";
import { object } from "yup";

//used to truncate the username in the menu
var ld = require("lodash");

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ObjectMapper() {
  const objectMap = (obj, fn) =>
    Object.fromEntries(
      Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)])
    );
  const settings_actions_lst = {
    Profile: "/signin",
    Account: "/signin",
    Dashboard: "/signin",
    Logout: "/signin",
  };
  const set_act = objectMap(settings_actions_lst, (v) => v * 2);
}

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

  const addAccountClick = () => {
    setAnchorEl(null);
    navigate("/signup");
  };

  const singOutClick = () => {
    setAnchorEl(null);
    navigate("/signout");
  };

  const settings_actions_raw = [
    { id: 1, entry: "a_SignIn", link: "/signin" },
    { id: 2, entry: "a_Account", link: "/createUser" },
    { id: 3, entry: "a_Dashboard", link: "/post" },
    { id: 4, entry: "a_Logout", link: "/signout" },
  ];

  let dd = Object.fromEntries(
    settings_actions_raw.map((x) => [x.entry, x.link])
  );

  let dd_k = Object.keys(dd);
  let dd_v = Object.values(dd);
  let dd_e = Object.entries(dd);

  // console.log("dd...", dd_k, dd_v, dd_e);
  // dd_e.forEach((en) => console.log(typeof en[0], "calls", en[1]));

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
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>{" "}
        <Divider />
        <MenuItem onClick={addAccountClick}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <Divider />
        <MenuItem onClick={singOutClick}>
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
