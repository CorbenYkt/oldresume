import { Container } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { padding } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
        padding: 4,
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function Coins(data) {
    return (
        <Container>
            
            {/* <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell>
                                <img src='https://cdn-icons-png.flaticon.com/32/1490/1490904.png'></img>
                            </StyledTableCell>
                            <StyledTableCell align="left">USDRUB</StyledTableCell>
                            <StyledTableCell align="right">{data.currencies.USDRUB}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                        <StyledTableCell>
                                <img src='https://cdn-icons-png.flaticon.com/32/1490/1490901.png'></img>
                            </StyledTableCell>
                            <StyledTableCell align="left">EURRUB</StyledTableCell>
                            <StyledTableCell align="right">{data.currencies.EURRUB}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                <img src='https://cdn-icons-png.flaticon.com/32/1490/1490896.png'></img>
                            </StyledTableCell>
                            <StyledTableCell align="left">RUBKZT</StyledTableCell>
                            <StyledTableCell align="right">{data.currencies.RUBKZT}</StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                <img src='https://cdn-icons-png.flaticon.com/32/1490/1490896.png'></img>
                            </StyledTableCell>
                            <StyledTableCell align="left">USDKZT</StyledTableCell>
                            <StyledTableCell align="right">{data.currencies.USDKZT}</StyledTableCell>
                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer> */}
            <br></br>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: '100%' }} >
                    <TableBody>
                        {data.coins.map((coin, i = 0) => (
                            <StyledTableRow key={coin.id}>
                                <StyledTableCell align="left">
                                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <img src={coin.icon} />
                                            </Avatar>
                                        </ListItemAvatar>
                                        {coin.name}
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="right">{Math.round(coin.price)}({coin.priceChange1d})</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}