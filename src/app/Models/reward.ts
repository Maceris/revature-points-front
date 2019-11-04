export class Reward {
    
    rewardId: number;
    name: string;
    price: number;
    stock: number;

    constructor(rewardId:number, name:string, price:number, stock:number) {
        this.rewardId = rewardId;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}