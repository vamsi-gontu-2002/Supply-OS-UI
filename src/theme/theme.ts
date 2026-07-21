import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const theme = createTheme({

    palette:{

        mode:"light",

        primary:{
            main:colors.primary
        },

        secondary:{
            main:colors.secondary
        },

        success:{
            main:colors.success
        },

        warning:{
            main:colors.warning
        },

        error:{
            main:colors.error
        },

        background:{
            default:colors.background,
            paper:colors.paper
        }

    },

    typography:{

        fontFamily:"Inter, sans-serif",

        h4:{
            fontWeight:700
        },

        h5:{
            fontWeight:700
        },

        h6:{
            fontWeight:700
        },

        button:{
            textTransform:"none",
            fontWeight:600
        }

    },

    shape:{
        borderRadius:12
    }

});

export default theme;