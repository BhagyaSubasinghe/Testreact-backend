const app=require('./app');
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
const cors = require('cors');
const { getUsers } = require('./controller');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://bhagyaSubasinghe:Chukki2002@cluster0.pixmnee.mongodb.net/?appName=Cluster0'
const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const connect = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

connect();
