import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function NavListDrawer({ navArrayLinks, NavLink, setOpen }) {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navArrayLinks.map((item) => (
            <ListItem 
              disablePadding 
              key={item.title}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemButton 
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
