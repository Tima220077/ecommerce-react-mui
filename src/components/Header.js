import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import StoreIcon from '@mui/icons-material/Store';


import { useSelector } from "react-redux";

const pages = ["Home", "Products", "About"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // Placeholder for the number of items in the cart
  //TODO: change
  const cartItemCount = useSelector((state) => state); //change

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#2E3B55",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo Section */}
          <StoreIcon    
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#E6A23C",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#E6A23C", // Gold color for logo
              textDecoration: "none",
              mx: "auto", // Center logo
            }}
          >
            AMIT
          </Typography>

          {/* Mobile Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#2E3B55",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiMenuItem-root": {
                  color: "#E6A23C", // Gold color for menu items
                  fontWeight: 700,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={page == "Home" ? "/" : `/${page.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "#E6A23C" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Center Logo for Mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#E6A23C", // Gold color for smaller screens
              textDecoration: "none",
              mx: "auto", // Center logo
            }}
          >
            AMIT
          </Typography>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={page == "Home" ? "/" : `/${page.toLowerCase()}`}
                sx={{
                  my: 2,
                  color: "#E6A23C",
                  display: "block",
                  fontWeight: 700,
                  px: 3,
                  ":hover": { color: "#FFFFFF" },
                }}
              >
                {page}

              </Button>
            ))}
          </Box>

          {/* Cart and User Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Cart Icon */}
            <Tooltip title="View Cart">
              <IconButton
                size="large"
                sx={{
                  color: "#E6A23C",
                  ":hover": {
                    color: "#FFFFFF",
                  },
                }}
                href="/cart"
              >
                <Badge
                  badgeContent={cartItemCount}
                  color="primary"
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#E6A23C",
                      color: "#2E3B55",
                      fontWeight: 700,
                    },
                  }}
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            {/* User Icon */}
            <Tooltip title="Open settings">
              <IconButton
                size="large"
                aria-label="user account settings"
                aria-controls="account-menu"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                sx={{
                  color: "#E6A23C",
                  ":hover": {
                    color: "#FFFFFF",
                  },
                }}
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
