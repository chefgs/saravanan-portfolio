import { ObjectId } from 'mongodb';

export interface Subscriber {
    _id?: ObjectId;
    email: string;
    createdAt: Date;
}
