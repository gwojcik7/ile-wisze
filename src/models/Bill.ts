import User from "./User";

export default class Bill {
    public id: number;
    public user: User;
    public recipient: User;
    public reason: string;
    public price: number;
    public dateAdd: Date;

    constructor(data: any) {
        this.id = data.id;
        this.user = new User(data.user);
        this.recipient = new User(data.recipient);
        this.reason = data.reason;
        this.price = data.price;
        this.dateAdd = new Date(data.dateAdd);
    }
}
