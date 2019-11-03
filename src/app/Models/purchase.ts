import { Associate } from './associate';
import { Reward } from './reward';

export class Purchase {
    
    purchaseId: number;
    associateId: Associate;
    time: number;
    rewardId: Reward;

    constructor(purchaseId:number, associateId:Associate, time:number, rewardId:Reward) {
        this.purchaseId = purchaseId;
        this.associateId = associateId;
        this.time = time;
        this.rewardId = rewardId;
    }
}