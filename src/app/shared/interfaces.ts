export interface IProject {
    id: number;
    name: string;
    country: string;
    date: string;
    desc: string;
    showOnHomePage: boolean;
    company: ICompany;
    user: IUser;
    about: string;
    uxDesc: string;
    uxDesign: string;
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

