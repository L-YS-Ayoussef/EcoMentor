import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';

const AboutPage = () => {
    return (
        <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 7 }}>
            <Paper elevation={3} sx={{ padding: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'left' }}>
                    Innovative Project Idea: "EcoMentor" AI Application for Environmental Education
                </Typography>

                <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
                    Description:
                </Typography>
                <Typography sx={{ textAlign: 'left' }}>
                    Developing an application that uses artificial intelligence to provide personalized guidance on how to live sustainably and reduce environmental footprints.
                </Typography>

                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
                        Features:
                    </Typography>
                    <ul>
                        <li><strong>Personal Environmental Advisor</strong>: Provides personalized tips based on user habits like energy consumption and waste.</li>
                        <li><strong>Carbon Footprint Assessment</strong>: Helps calculate carbon footprint and suggests ways to reduce it.</li>
                        <li><strong>Interactive Learning</strong>: Offers interactive content such as games and educational videos.</li>
                        <li><strong>Community Challenges</strong>: Organizes challenges among users to reduce their environmental impact.</li>
                        <li><strong>Rewards System</strong>: Virtual rewards for users who achieve sustainability goals.</li>
                        <li><strong>Analytics and Reports</strong>: Periodic reports on user progress.</li>
                    </ul>
                </Box>

                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
                        Practical Application:
                    </Typography>
                    <ul>
                        <li>Developed using Python, TensorFlow, and React Native.</li>
                        <li>Collaborating with schools to promote environmental awareness.</li>
                        <li>Collecting and analyzing data to improve strategies.</li>
                    </ul>
                </Box>

                <Typography sx={{ textAlign: 'left', marginTop: 2 }}>
                    "EcoMentor" will help raise individual awareness of their environmental impact and encourage sustainable behaviors interactively and enjoyably.
                </Typography>

                <Box sx={{ marginTop: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
                        Guidelines for Sustainable Living:
                    </Typography>
                    <ul>
                        <li>Reduce Energy Consumption: Use LED lights and unplug unused devices.</li>
                        <li>Minimize Waste: Encourage recycling.</li>
                        <li>Water: Reduce water usage.</li>
                        <li>Sustainable Transport: Use public transportation or bicycles.</li>
                        <li>Sustainable Food: Eat local and seasonal foods.</li>
                        <li>Conscious Shopping: Buy sustainable products.</li>
                        <li>Education and Awareness: Provide environmental articles or videos.</li>
                        <li>Daily Challenges: Challenges like "Meat-Free Day."</li>
                        <li>Urban Farming: Tips for growing plants at home.</li>
                        <li>Community Involvement: Encourage joining environmental groups.</li>
                    </ul>
                </Box>

                <Typography sx={{ textAlign: 'left', marginTop: 2 }}>
                    These guidelines can be part of the app’s content to make the information easy to understand and apply by users.
                </Typography>
            </Paper>
        </Container>
    );
};

export default AboutPage;
