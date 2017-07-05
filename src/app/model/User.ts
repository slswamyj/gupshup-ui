export class User {

  constructor(
    public userName: string,
    public firstName: string,
    public lastName: string,
    public password: string,
    public gender: string,
    public dob: string,
    public emailId: string,
    public contactNo: string,
    public profilePhoto: string,
    public followingCount: number,
    public following:User[]
    ) { }
} 