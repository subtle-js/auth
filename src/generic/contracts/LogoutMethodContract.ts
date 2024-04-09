/**
 * The `LogoutMethodContract` contract provides a standard interface to perform logout operation.
 */
export interface LogoutMethodContract {
    logout(token?: string): Promise<void>
}
