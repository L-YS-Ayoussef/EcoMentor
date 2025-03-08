import React, { useEffect, useState } from 'react';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, CircularProgress, Box } from '@mui/material';
import { fetchData } from '../utils/api';
import PasswordPopup from '../components/Dialog';
import AlertMessage from '../components/AlertMessage';

const DashboardPage = () => {
    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(false);  
    const [showPasswordPopup, setShowPasswordPopup] = useState(true);  
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({ open: false, message: '', severity: 'info' });

    // Handle Password Submission
    const handlePasswordSubmit = async (enteredPassword) => {
        setLoading(true);  
        setPassword(enteredPassword); 

        try {
            const response = await fetchData(enteredPassword);  // Fetch data based on the password entered by the admin

            if (response.status === 401) {
                setAlert({ open: true, message: "Unauthorized access. Please check the password.", severity: 'error' });
            } else {
                setShowPasswordPopup(false); 
                const data = await response.json();
                setUsersData(data);  
                setAlert({ open: true, message: "Data fetched successfully", severity: 'success' });
            }
        } catch (error) {
            console.error('Failed to fetch data', error);
            setAlert({ open: true, message: "An error occurred while fetching the data. Please try again.", severity: 'error' });
        } finally {
            setLoading(false);  
        }
    };
    const handleClose = () => {
        setAlert({ ...alert, open: false });
    };

    return (
        <>
            <PasswordPopup
                open={showPasswordPopup}
                onPasswordSubmit={handlePasswordSubmit}  
                loading={loading}
            />

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <CircularProgress />
                </Box>
            ) : (
                usersData && usersData.length > 0 && (
                    <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 7}}>
                        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
                            User Data
                        </Typography>
                        <Paper elevation={3} sx={{ padding: 4 }}>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Phone</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Age</TableCell>
                                            <TableCell>Family Size</TableCell>
                                            <TableCell>Carbon Footprint from Energy</TableCell>
                                            <TableCell>Carbon Footprint from Distance Travelled</TableCell>
                                            <TableCell>Water Consumption</TableCell>
                                            <TableCell>Carbon Footprint from Food</TableCell>
                                            <TableCell>Carbon Footprint Reduction</TableCell>
                                            <TableCell>Join Date</TableCell>
                                            <TableCell>Last Updated</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {usersData.map((user, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{user.name}</TableCell>
                                                <TableCell>{user.phone}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>{user.age}</TableCell>
                                                <TableCell>{user.familySize}</TableCell>
                                                <TableCell>{user.carbonPrintEnergy}</TableCell>
                                                <TableCell>{user.carbonPrintTransport}</TableCell>
                                                <TableCell>{user.waterUsageQu}</TableCell>
                                                <TableCell>{user.carbonPrintFood}</TableCell>
                                                <TableCell>{user.carbonPrintReduction}</TableCell>
                                                <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                                                <TableCell>{new Date(user.updatedAt).toLocaleDateString()}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Container>
                )
            )}

            <AlertMessage
                open={alert.open}
                message={alert.message}
                severity={alert.severity}
                onClose={handleClose}
            />
        </>
    );
};

export default DashboardPage;
