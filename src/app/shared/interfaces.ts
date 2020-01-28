export interface IProject {
    id: number;
    banner: string;
    name: string;
    description: string;
    desc: string;
    clientName: String;
    industry: ICompany;
    type: IUser;
    region: string;
    date: string;
}

export interface ICompany {
    id: number;
    name: string;
    desc: string;
    img: string;
    showOnHomePage: boolean;
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    position: string;
}

export interface news {
    id: number;
    title: string;
    date: string;
    brief: string;
    desc: string;
}

