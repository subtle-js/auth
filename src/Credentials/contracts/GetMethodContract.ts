export interface GetMethodContract<Credentials = any> {
    get(): Credentials | null
}
