import mongoose, { Model } from 'mongoose';
import { User } from '../interfaces';
const { Schema } = mongoose;

const Userschema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

const Users: Model<User | any> = mongoose.model('users', Userschema);

export {
    Users
};