import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Box, Paper, CircularProgress } from '@mui/material';
import { sendData, validate } from '../utils/api';
import AlertMessage from '../components/AlertMessage';

const FormPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        age: '',
        familySize: '',
        emissionFactor: '',
        energyUsage: '',
        transport: '',
        foodConsumption: '',
        waterUsage: '',
        waste: ''
    });

    const [errors, setErrors] = useState([]);
    const [alert, setAlert] = useState({ open: false, message: '', severity: 'info' });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handling Form Submission 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const validationOut = validate(formData);
        setErrors(validationOut.errors);

        if (validationOut.isValid) {
            try {
                await sendData(formData);  
                setAlert({ open: true, message: "Data sent successfully", severity: 'success' });
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            } catch (err) {
                setAlert({ open: true, message: "Failed to send data", severity: 'error' });
            }
        } else {
            setAlert({ open: true, message: validationOut.errors[0], severity: 'warning' });
        }
        setLoading(false);
    };
    const handleClose = () => {
        setAlert({ ...alert, open: false });
    };


    return (
        <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 7 }}>
            <Paper elevation={3} sx={{ padding: 4 }}>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        error={!!errors.name}
                        helperText={errors.name || ''}
                    />
                    <TextField
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        error={!!errors.phone}
                        helperText={errors.phone || ''}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={!!errors.email}
                        helperText={errors.email || ''}
                    />
                    <TextField
                        label="Age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        error={!!errors.age}
                        helperText={errors.age || 'Years'}  // Unit: years
                    />
                    <TextField
                        label="Family Size"
                        name="familySize"
                        value={formData.familySize}
                        onChange={handleInputChange}
                        error={!!errors.familySize}
                        helperText={errors.familySize || 'Number of family members'}
                    />
                    <TextField
                        label="Emission Factor"
                        name="emissionFactor"
                        value={formData.emissionFactor}
                        onChange={handleInputChange}
                        error={!!errors.emissionFactor}
                        helperText={errors.emissionFactor || 'Unit: kg of CO2 per kg'}
                    />
                    <TextField
                        label="Energy Usage"
                        name="energyUsage"
                        value={formData.energyUsage}
                        onChange={handleInputChange}
                        error={!!errors.energyUsage}
                        helperText={errors.energyUsage || 'Unit: kWh'}
                    />
                    <TextField
                        label="Distance Traveled"
                        name="transport"
                        value={formData.transport}
                        onChange={handleInputChange}
                        error={!!errors.transport}
                        helperText={errors.transport || 'Unit: km'}
                    />
                    <TextField
                        label="Food Consumption"
                        name="foodConsumption"
                        value={formData.foodConsumption}
                        onChange={handleInputChange}
                        error={!!errors.foodConsumption}
                        helperText={errors.foodConsumption || 'Unit: kg'}
                    />
                    <TextField
                        label="Water Usage"
                        name="waterUsage"
                        value={formData.waterUsage}
                        onChange={handleInputChange}
                        error={!!errors.waterUsage}
                        helperText={errors.waterUsage || 'Unit: liters'}
                    />
                    <TextField
                        label="Weekly Waste"
                        name="waste"
                        value={formData.waste}
                        onChange={handleInputChange}
                        error={!!errors.waste}
                        helperText={errors.waste || 'Unit: kg'}
                    />

                    <Button type="submit" variant="contained" disabled={loading}>
                        {loading ? (
                            <>
                                <CircularProgress size={20} color="inherit" sx={{ marginRight: 1 }} />
                                Submitting...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </Button>
                </Box>
            </Paper>
            <AlertMessage
                open={alert.open}
                message={alert.message}
                severity={alert.severity}
                onClose={handleClose}
            />
        </Container>
    );
};

export default FormPage;
