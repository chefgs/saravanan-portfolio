import { ObjectId } from 'mongodb';

export interface ContactMessage {
  _id?: ObjectId;
  name: string;
  gmail: string;
  mobile: string;
  message: string;
}
