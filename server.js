require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;

const connect = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        // Do not exit the process here; keep the server running so nodemon
        // doesn't crash. Connection issues should be handled separately
        // (e.g., fix the MONGODB_URI or ensure network/DNS access).
    }
};

connect();

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
