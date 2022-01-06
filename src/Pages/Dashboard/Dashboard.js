// import React from 'react';
// import Header from '../Header/Header';
// import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
// import ManageProducts from '../Admin/ManageProducts/ManageProducts';
// import MyOrder from '../OrdeNow/MyOrder';

// const Dashboard = () => {
//     return (
//         <div>
//             <Header></Header>
//             <h2>This is Dashboard</h2>
//             <MyOrder></MyOrder>
//             <ManageAllOrders></ManageAllOrders>
//             <ManageProducts></ManageProducts>

//         </div>
//     );
// };

// export default Dashboard;

// // import MailIcon from "@mui/icons-material/Mail";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Button } from "@mui/material";
// // import InboxIcon from "@mui/icons-material/MoveToInbox";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// // import ListItem from "@mui/material/ListItem";
// // import ListItemIcon from "@mui/material/ListItemIcon";
// // import ListItemText from "@mui/material/ListItemText";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import PropTypes from "prop-types";
// import * as React from "react";
// import { Link, NavLink } from "react-router-dom";
// // import MakeAdmin from './MakeAdmin/MakeAdmin';

// const drawerWidth = 240;

// function Dashboard(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <List>
//         {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))} */}
//       </List>
//       <Box>
//         <NavLink sx={{ color: "black" }} to="/home">
//           <Button sx={{ marginY: 1 }} variant="contained">
//             Home
//           </Button>
//         </NavLink>
//         <Divider />
//         <NavLink sx={{ color: "black" }} to="/home">
//           <Button sx={{ marginY: 1 }} variant="contained">
//             Home
//           </Button>
//         </NavLink>
//         <Divider />
//         <NavLink sx={{ color: "black" }} to="/home">
//           <Button sx={{ marginY: 1 }} variant="contained">
//             MakeAdmin
//           </Button>
//         </NavLink>
//         <Link>
//           <Button sx={{ marginY: 1 }} variant="contained">
//             makeadmin
//           </Button>
//         </Link>
//       </Box>
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     // <>
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppBar
//           position="fixed"
//           sx={{
//             width: { sm: `calc(100% - ${drawerWidth}px)` },
//             ml: { sm: `${drawerWidth}px` },
//           }}
//         >
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: "none" } }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap component="div">
//               Mobile Corner
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Box
//           component="nav"
//           sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//           aria-label="mailbox folders"
//         >
//           {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//           <Drawer
//             container={container}
//             variant="temporary"
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//             sx={{
//               display: { xs: "block", sm: "none" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//           <Drawer
//             variant="permanent"
//             sx={{
//               display: { xs: "none", sm: "block" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//             open
//           >
//             {drawer}
//           </Drawer>
//         </Box>
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             p: 3,
//             width: { sm: `calc(100% - ${drawerWidth}px)` },
//           }}
//         >
//           <Toolbar />
//         </Box>
//       </Box>
//       {/* <Routes>
//         <Route path="MakeAdmin" element={MakeAdmin}/>
//       </Routes> */}
//     // </>
//   );
// }

// Dashboard.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Dashboard;

import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import MakeAdmin from "./MakeAdmin";



const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <NavLink sx={{ color: "black" }} to="/home">
        <Button sx={{ textTransform: "capitalize" }} variant="text">
          Home
        </Button>
      </NavLink>
      <Divider />
      <NavLink sx={{ color: "black" }} to="/dashboard">
        <Button sx={{ textTransform: "capitalize" }} variant="text">
          Dashboard
        </Button>
      </NavLink>
      <Divider />
      <NavLink sx={{ color: "black" }} to="/dashboard/makeAdmin">
        <Button sx={{ textTransform: "capitalize" }} variant="text">
          MakeAdmin
        </Button>
      </NavLink>
      <Divider />
      <NavLink sx={{ color: "black" }} to="/addproduct">
        <Button sx={{ textTransform: "capitalize" }} variant="text">
          Addproduct
        </Button>
      </NavLink>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Mobile Corner
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
        </Box>
      </Box>
      <Routes>
        <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>} />
      </Routes>
    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
