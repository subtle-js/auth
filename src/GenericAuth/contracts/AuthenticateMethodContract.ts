/**
 * The `AuthenticateMethodContract` contract provides a standard interface to perform authentication operation.
 */
export interface AuthenticateMethodContract<Request, Response> {
    authenticate: (credentials: Request) => Promise<Response>
}
