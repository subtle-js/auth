import type { AuthenticateMethodContract } from "./contracts/AuthenticateMethodContract"
import type { LogoutMethodContract } from "./contracts/LogoutMethodContract"

/**
 * The `SubtleGenericAuth` class provides a set of methods to perform generic authentication operations.
 */
export class SubtleGenericAuth {
    /**
     * Authenticate a user with the given credentials.
     * @param provider 
     * @param credentials 
     * @returns 
     */
    async authenticate<Request, Response>(provider: AuthenticateMethodContract<Request, Response>, credentials: Request) {
        return provider.authenticate(credentials)
    }

    /**
     * Logout a user with the given token.
     * @param provider
     * @param token 
     * @returns 
     */
    async logout(provider: LogoutMethodContract, token?: string) {
        return provider.logout(token)
    }
}
