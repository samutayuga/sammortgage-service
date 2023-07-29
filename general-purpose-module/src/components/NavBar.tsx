import { AppBar,Toolbar,Typography } from "@mui/material";
import {Container} from "@mui/system";

const navBar=()=>{
    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
            <Toolbar>
                <Typography variant="h5">
                    Sam Mortgage
                </Typography>
            </Toolbar>
            </Container>
        </AppBar>
    )
}

export default navBar;