import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

export default function AppLayout() {
    return (
        <Box display="flex" height="100vh">
            <Sidebar />

            <Box flex={1} display="flex" flexDirection="column">
                <Navbar />

                <Box
                    sx={{
                        flex: 1,
                        overflow: "auto",
                        background: "#F5F7FB",
                        p: 3,
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}