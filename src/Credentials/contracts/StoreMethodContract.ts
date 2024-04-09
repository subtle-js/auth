export interface StoreMethodContract<Credentials = any> {
    store(credentials: Credentials): void
}
