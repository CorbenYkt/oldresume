import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} columnGap={'1em'} fontSize={'1rem'} paddingTop={2} paddingBottom={2} >
            <Link to="/" className="navLink">Me</Link>
            <Link to='/gallery' className="navLink">Gallery</Link>
            {/* <Link to='/currency' className="navLink">Currency</Link> */}
            <Link to='/contacts' className="navLink">Contacts</Link>
            {/* <Link to="/meteo">Meteo</Link> */}
            {/* <Link to="/coins">Coins</Link> */}
            {/* <Link to="/homeworks">Homeworks</Link>
            <Link to="/ChatPage">ChatGPT</Link> */}
        </Box >
    )
}
export default navbar;