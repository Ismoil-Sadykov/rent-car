import logo from "../assets/Logo (3).png";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/homePage" },
    { label: "Vehicles", path: "/vehiclePage" },
    { label: "About Us", path: "/aboutUsPage" },
    { label: "Contact Us", path: "/contactUsPage" },
  ];

  return (
    <header className="p-5 flex items-center justify-between">
      <img src={logo} alt="logo" className="h-[40px]" />
      <div className="hidden md:flex gap-[32px]">
        <Link to="/homePage">
          <button className="text-[18px] font-semibold cursor-pointer">
            Home
          </button>
        </Link>
        <Link to="/vehiclePage">
          <button className="text-[18px] font-semibold cursor-pointer">
            Vehicle
          </button>
        </Link>
        <button className="text-[18px] font-semibold cursor-pointer">
          Details
        </button>
        <Link to="/aboutUsPage">
          <button className="text-[18px] font-semibold cursor-pointer">
            About Us
          </button>
        </Link>
        <Link to="/contactUsPage">
          <button className="text-[18px] font-semibold cursor-pointer">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex gap-[12px] items-center">
          <button className="text-white bg-[#5937E0] w-[40px] h-[40px] rounded-full">
            <LocalPhoneIcon />
          </button>
          <div>
            <p className="text-[16px]">Need help?</p>
            <p className="text-[16px] font-semibold">+996 247-1680</p>
          </div>
        </div>
        <div className="md:hidden block">
          <IconButton
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className="w-[260px] p-6">
            <List>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.label}
                  onClick={() => setOpen(false)}
                >
                  <Link to={item.path} className="w-full">
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
            <div className="mt-6 flex items-center gap-3">
              <button className="text-white bg-[#5937E0] w-[40px] h-[40px] rounded-full">
                <LocalPhoneIcon />
              </button>
              <div>
                <p className="text-[14px]">Need help?</p>
                <p className="text-[16px] font-semibold">+996 247-1680</p>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
}
