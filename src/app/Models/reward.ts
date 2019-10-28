export class Reward {
    
    r_id: number;
    name: string;
    price: number;
    stock: number;

    constructor(r_id:number, name:string, price:number, stock:number) {
        this.r_id = r_id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}