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
                    fontWeight="bold"
                >
                    Supply Chain Control Tower
                </Typography>

                <Box flex={1} />

                <Avatar>
                    A
                </Avatar>

            </Toolbar>
        </AppBar>
    );
}