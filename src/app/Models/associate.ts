import { Trainer } from './trainer';

export class Associate {

    associateId: number;
    username: string;
    password: string;
    balance: number;
    fname: string;
    lname: string;
    trainerId: number;

    constructor(associateId: number, username: string, password: string, balance: number, fname: string, lname: string, trainerId: number) {
       this.associateId = associateId;
       this.username = username;
       this.password = password;
       this.balance = balance;
       this.fname = fname;
       this.lname = lname;
       this.trainerId = trainerId;
    }
}
