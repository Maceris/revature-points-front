import { Trainer } from './trainer';

export class Associate {

    a_id: number;
    username: string;
    password: string;
    balance: number;
    f_name: string;
    l_name: string;
    trainer: Trainer;

    constructor(a_id: number, username: string, password: string, balance: number, f_name: string, l_name: string, trainer: Trainer) {
       this.a_id = a_id;
       this.username = username;
       this.password = password;
       this.balance = balance;
       this.f_name = f_name;
       this.l_name = l_name;
       this.trainer = trainer;
    }
}
