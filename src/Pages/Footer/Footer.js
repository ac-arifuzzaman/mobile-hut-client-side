import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <Box className="background"
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor="text.secondary"
            color="white"
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box className="header" borderBottom={1}>Help</Box>
                        <Box>
                            <Link className="decoration" to="/" color="inherit">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link className="decoration" to="/" color="inherit">
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link className="decoration" to="/" color="inherit">
                                Privacy
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box className="header" borderBottom={1}>Account</Box>
                        <Box>
                            <Link className="decoration" to="/login" color="inherit">
                                Login
                            </Link>
                        </Box>
                        <Box>
                            <Link className="decoration" to="/register" color="inherit">
                                Register
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box className="header" borderBottom={1}>Messages</Box>
                        <Box>
                            <Link className="decoration" to="/" color="inherit">
                                Backup
                            </Link>
                        </Box>
                        <Box>
                            <Link className="decoration" to="/" color="inherit">
                                History
                            </Link>
                        </Box>
                        <Box>
                            <Link className="decoration" to="/" color="inherit">
                                Roll
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" color="darkgrey" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                    mobile info &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;