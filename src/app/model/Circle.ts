import { Member } from './Member';

export class Circle {

  constructor(
    public circleName: string,
    public keywords: string[],
    public circleDescription: string,
    public circleId?:string,
    public circleCreatedBy?: string,
    public circleCreatedDate?: string,
    public circleMembers?: Member[]
    ) { }
} 
