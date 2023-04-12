export default class User {
    public id: number;
    public login: string;
    
    constructor(data: any) {
        this.id = data.id;
        this.login = data.login;
    }
}