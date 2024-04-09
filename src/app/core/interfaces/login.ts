export interface LoginDataInterface {
    email: string
    password: string
}

export interface LoginAuthInterface {
    email:string
    password:string
    code: number
}

export interface LoginResponseInterface {
    access_token: string
    msg: string
}

export interface tokenResponseInterface {
    
        id: number
        name: string
        email: string
        email_verified_at: string
        status: number
        created_at: string
        updated_at: string
    
}