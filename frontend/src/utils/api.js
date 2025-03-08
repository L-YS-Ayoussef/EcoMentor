export const sendData = async (data) => {
    const response = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const fetchData = async (enteredPassword) => {
    const response = await fetch(`http://localhost:5000/api/dashboard?pass=${enteredPassword}`);
    return response;
};

export const validate = (formData) => {
    let tempErrors = [];

    if (!formData.name) tempErrors.push("Name is required");

    if (!formData.phone) tempErrors.push("Phone number is required");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
        tempErrors.push("Email is required");
    } else if (!emailRegex.test(formData.email)) {
        tempErrors.push("Please enter a valid email address");
    }

    if (!formData.age || isNaN(formData.age) || formData.age <= 0) {
        tempErrors.push("Please enter a valid age");
    }

    if (!formData.familySize || isNaN(formData.familySize) || formData.familySize <= 0) {
        tempErrors.push("Please enter a valid family size");
    }

    if (!formData.emissionFactor || isNaN(formData.emissionFactor) || formData.emissionFactor <= 0) {
        tempErrors.push("Please enter a valid emission factor");
    }

    if (!formData.energyUsage || isNaN(formData.energyUsage) || formData.energyUsage <= 0) {
        tempErrors.push("Please enter a valid energy usage");
    }

    if (!formData.transport || isNaN(formData.transport) || formData.transport <= 0) {
        tempErrors.push("Please enter a valid transport distance");
    }

    if (!formData.foodConsumption || isNaN(formData.foodConsumption) || formData.foodConsumption <= 0) {
        tempErrors.push("Please enter a valid food consumption");
    }

    if (!formData.waterUsage || isNaN(formData.waterUsage) || formData.waterUsage <= 0) {
        tempErrors.push("Please enter a valid water usage");
    }

    if (!formData.waste || isNaN(formData.waste) || formData.waste <= 0) {
        tempErrors.push("Please enter a valid weekly waste");
    }

    return {
        isValid: Object.keys(tempErrors).length === 0,
        errors: tempErrors
    }
};

