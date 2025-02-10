import * as yup from 'yup'

//For a new user
export interface INewUser {//For an unregistered user
    userName: string;
    email: string;
    password: string;
    address: string;
    dob: Date;
}
export const defaultNewUser: INewUser = {
    userName: '',
    email: '',
    password: '',
    address: '',
    dob: new Date()
}
export const newUserSchema = yup.object().shape({
    userName: yup.string().min(4).max(12).required(),
    email: yup.string().email().min(10).max(30).required(),
    password: yup.string().min(12).max(32).required(),
    address: yup.string().min(20).max(40).required(),
    dob: yup.date().required()
})

//Handle actual login types
export interface ILoginUser {
    userName: string;
    password: string;
}
export const defaultLoginUser: ILoginUser = {
    userName: '',
    password: ''
}

//Handle user session
export interface IUserPreferences {
    isDarkMode: boolean;
}
export interface IUserSession {
    userName: string;
    email: string;
    address: string;
    dob: Date;
    userPreferences: IUserPreferences
}
export const defaultUserSession: IUserSession = {
    userName: '',
    email: '',
    address: '',
    dob: new Date(),
    userPreferences: {isDarkMode: false}
}



/* 
export async function testUser(){
    let testObj: INewUser = {
        userName: 'sanyika2000',
        email: 'sanyika2000@gmail.com',
        password: 'verystrongpassword',
        address: '1000 Budapest Kamu utca 100',
        dob: new Date(2000, 1, 1)
    }
    newUserSchema.isValid(testObj).then(data => console.log(
        data
    ))
} */