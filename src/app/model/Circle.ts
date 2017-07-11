import { User } from './User';

export class Circle {

  constructor(
    public circleName: string,
    public keywords: string[],
    public circleDescription: string,
    public circleCreatedBy?: string,
    public circleCreatedDate?: string,
    public circleMembers?: User[]
    ) { }
} 
