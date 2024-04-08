export {
    AuthenticateMethodContract,
    LogoutMethodContract,
}

/**
 * The `AuthenticateMethodContract` contract provides a standard interface to perform authentication operation.
 */
interface AuthenticateMethodContract<Request, Response> {
    authenticate: (credentials: Request) => Promise<Response>
}

/**
 * The `LogoutMethodContract` contract provides a standard interface to perform logout operation.
 */
interface LogoutMethodContract {
    logout(token?: string): Promise<void>
}
