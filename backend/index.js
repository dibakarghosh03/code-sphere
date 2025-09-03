import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';
import contactRoute from './routes/contactRoute.js'
import roomRoute from './routes/roomRoute.js';
import messageRoute from './routes/messageRoute.js';
import codeRoute from './routes/codeRoute.js';

import { connectDB } from './config/database.js';
import { cloudinaryConfig } from './config/cloudinary.js';

import { initSocket } from './socket/socket.js';

import './jobs/cleanUpJob.js';      // Import your cron job to run on server start

dotenv.config();
connectDB();
cloudinaryConfig();

const PORT = process.env.PORT || 4000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true
    }
});

initSocket(io);

app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));

app.get('/', (req,res) => {
    res.send('Server is ready');
})

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/contact', contactRoute);
app.use('/room', roomRoute);
app.use('/message', messageRoute);
app.use('/code', codeRoute);

server.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`);
})