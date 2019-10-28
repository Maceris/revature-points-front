import { Associate } from './associate';
import { Reward } from './reward';

export class Purchase {
    
    p_id: number;
    associate: Associate;
    p_time: number;
    reward: Reward;

    constructor(p_id:number, associate:Associate, p_time:number, reward:Reward) {
        this.p_id = p_id;
        this.associate = associate;
        this.p_time = p_time;
        this.reward = reward;
    }
}