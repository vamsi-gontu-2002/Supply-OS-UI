import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Avatar,
} from "@mui/material";

export default function Navbar() {
    return (
        <AppBar
            position="static"
            color="inherit"
            elevation={1}
        >
            <Toolbar>

                <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                >
                    Supply Chain Control Tower
                </Typography>

                <Box sx={{ flex: 1 }} />

                <Avatar>
                    A
                </Avatar>

            </Toolbar>
        </AppBar>
    );
}