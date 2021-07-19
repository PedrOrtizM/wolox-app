export interface ICountry {
    name: string;
    flag: string;
    capital: string;
}

export interface IEventSearch {
    name: string;
    province: string;
}

export interface IUser {
    name: string;
    last_name: string;
    country: string;
    province: string;
    mail: string;
    phone: string;
    password: string;
    passwordConfirm?: string;
}