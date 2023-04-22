export default class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public login: string;
    
    constructor(data: any) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.login = data.login;
    }
}