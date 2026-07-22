import {
    Box,
    Typography,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";

import { NavLink } from "react-router-dom";

const menus = [
    { name: "Dashboard", path: "/" },
    { name: "Suppliers", path: "/suppliers" },
    { name: "Manufacturing", path: "/manufacturing" },
    { name: "Forecast", path: "/forecast" },
    { name: "Procurement", path: "/procurement" },
    { name: "Warehouse", path: "/warehouse" },
    { name: "Financial", path: "/financial" },
    { name: "AI Insights", path: "/ai-insights" },
    { name: "Alerts", path: "/alerts" },
    { name: "Reports", path: "/reports" },
];

export default function Sidebar() {
    return (
        <Box
            sx={{
                width: 260,
                bgcolor: "#0F172A",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    SupplyOS
                </Typography>

                <Typography variant="body2">
                    Control Tower
                </Typography>
            </Box>

            <List>

                {menus.map((menu) => (

                    <NavLink
                        key={menu.path}
                        to={menu.path}
                        style={{ textDecoration: "none" }}
                    >
                        {({ isActive }) => (

                            <ListItemButton
                                sx={{
                                    mx: 1,
                                    mb: 1,
                                    borderRadius: 2,

                                    bgcolor: isActive
                                        ? "#2563EB"
                                        : "transparent",

                                    color: "white",

                                    "&:hover": {
                                        bgcolor: "#1E40AF",
                                    },
                                }}
                            >
                                <ListItemText primary={menu.name} />
                            </ListItemButton>

                        )}
                    </NavLink>

                ))}

            </List>
        </Box>
    );
}