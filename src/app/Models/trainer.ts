export class Trainer {
    
    t_id: number;
    username: string;
    password: string;
    f_name: string;
    l_name: string;

    constructor(t_id: number, username: string, password: string, f_name: string, l_name: string) {
       this.t_id = t_id;
       this.username = username;
       this.password = password;
       this.f_name = f_name;
       this.l_name = l_name;
    }
}