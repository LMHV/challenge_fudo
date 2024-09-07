interface RegisterData {
    id: number,
    fullName: string,
    email: string,
    created_at: string,
    updated_at: string,
}

export interface IRegisterUserResponse {
    account: RegisterData,
    token: string
}
