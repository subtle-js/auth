export interface AssertMethodContract<Credentials = any> {
    assert(credentials: Credentials): boolean
}
