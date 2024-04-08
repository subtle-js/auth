import type { AuthenticateMethodContract, LogoutMethodContract } from "./contracts"
import type { GenericAuthProvierInterface } from "./interfaces"

export { GenericAuth }

/**
 * The `SubtleGenericAuth` class provides a set of methods to perform generic authentication operations.
 */
class SubtleGenericAuth {
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

/**
 * The `GenericAuth` class provides a set of methods to perform generic authentication operations.
 */
class GenericAuth {
    /**
     * A read-only property returns a `SubtleGenericAuth` which can then be used to perform generic authentication operations.
     */
    public subtle = new SubtleGenericAuth as Readonly<SubtleGenericAuth>

    /**
     * Define a new generic authentication provider.
     * @param definition 
     * @returns GenericAuthProvierInterface
     */
    public defineGenericAuthProvider<Request, Response>(definition: Partial<GenericAuthProvierInterface<Request, Response>>) {
        return new class CustomGenericAuthProvider implements GenericAuthProvierInterface<Request, Response> {
            async authenticate(credentials: Request): Promise<Response> {
                if (!definition.authenticate) {
                    return Promise.reject(new Error('[CustomGenericAuthProvider]: Authenticate method is not implemented.'))
                }
                return Promise.resolve(definition.authenticate(credentials))
            }
            async logout(token?: string): Promise<void> {
                if (!definition.logout) {
                    return Promise.reject(new Error('[CustomGenericAuthProvider]: Logout method is not implemented.'))
                }
                return Promise.resolve(definition.logout(token))
            }
        }
    }
}
