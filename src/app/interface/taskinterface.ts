export interface UserCred{
    username:string,
    email:string,
    password?:string,
}

export interface ApiResponce{
    message:string,
    error:{
        message:string
    },
    token:string
}

export interface TaskType{
    task:string
    status:string
    id:string
}