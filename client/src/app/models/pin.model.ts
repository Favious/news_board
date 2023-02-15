export interface Pin{
    _id: string;
    contactInfo: any;
    content: string;
    duration: number;
    createdAt: Date;
    position: {x: number, y: number};
}
