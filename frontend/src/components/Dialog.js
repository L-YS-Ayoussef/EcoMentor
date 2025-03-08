import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, Box, CircularProgress } from '@mui/material';

const PasswordPopup = ({ open, onPasswordSubmit, loading }) => {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        onPasswordSubmit(password);  
    };

    return (
        <Dialog
            open={open}
            onClose={(event, reason) => {
                if (reason !== 'backdropClick') {
                    // Prevent closing when clicking outside
                }
            }}
        >
            <DialogTitle>Enter Password</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2 }}>
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : 'Enter'}
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default PasswordPopup;
