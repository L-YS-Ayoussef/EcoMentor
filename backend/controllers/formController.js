const User = require('../models/User');

exports.submitForm = async (req, res) => {
    try {
        const { name, phone, email, age, familySize, emissionFactor, energyUsage, transport, foodConsumption, waterUsage, waste } = req.body;
        
        // Calculate carbon print values
        const carbonPrintEnergy = emissionFactor * energyUsage;
        const carbonPrintTransport = emissionFactor * transport;
        const waterUsageQu = familySize * waterUsage;
        const carbonPrintReduction = emissionFactor * waste;
        const carbonPrintFood = emissionFactor * foodConsumption;

        let user = await User.findOne({ email });

        // If user exists, update their details
        if (user) {
            user.name = name;
            user.phone = phone;
            user.age = age;
            user.familySize = familySize;
            user.carbonPrintEnergy = carbonPrintEnergy;
            user.carbonPrintTransport = carbonPrintTransport;
            user.waterUsageQu = waterUsageQu;
            user.carbonPrintReduction = carbonPrintReduction;
            user.carbonPrintFood = carbonPrintFood;

            await user.save();
            res.status(200).json({ message: 'User updated successfully', user });
        } else {
            // If user doesn't exist, create a new one
            const newUser = new User({
                name,
                phone,
                email,
                age,
                familySize,
                carbonPrintEnergy,
                carbonPrintTransport,
                waterUsageQu,
                carbonPrintReduction,
                carbonPrintFood
            });

            await newUser.save();
            res.status(201).json({ message: 'Form submitted successfully', user: newUser });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to submit form', error: err.message });
    }
};
