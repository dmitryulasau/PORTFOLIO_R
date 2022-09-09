import React from "react";
import "./topbar.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Topbar() {
  return (
    <div className="topbar active">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            height: "70px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Toolbar>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#intro"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                // [breakpoints.down("xs")]: {
                //   fontSize: "3rem",
                // },
              }}
            >
              ULADA.
            </Typography>
            <SmartphoneIcon
              sx={{ display: { xs: "flex", md: "flex" }, mr: 1, ml: 4 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="callto:+16462383713"
              sx={{
                mr: 2,

                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              +1 646 238 3713
            </Typography>
            <EmailIcon
              sx={{ display: { xs: "flex", md: "flex" }, mr: 1, ml: 3 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="mailto:dmitrushok@gmail.com"
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              dmitrushok@gmail.com
            </Typography>
          </Toolbar>
          <Toolbar sx={{ flexGrow: 1, justifyContent: "flex-end" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon sx={{ fontSize: "40px" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
