// controllers

const login = async (req, res) => {
    res.send('Fake Login/Register/Signup'); // normally there will be a difference between logging in vs registering
};

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100); // random number between 0 and 99
    res.status(200).json({ 
        msg: `Hello, John Doe`, 
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}` 
    });
};

module.exports = { 
    login, 
    dashboard 
};