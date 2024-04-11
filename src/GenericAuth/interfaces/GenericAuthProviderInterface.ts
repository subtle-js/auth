import type { AuthProviderContract } from '../../contracts/AuthProviderContract'
import type { AuthenticateMethodContract, LogoutMethodContract } from "../contracts"

/**
 * The `GenericAuthProvierInterface` interface provides an standard set of methods to perform generic authentication operations.
 */
export interface GenericAuthProviderInterface<Request, Response> extends AuthenticateMethodContract<Request, Response>, LogoutMethodContract, AuthProviderContract { }
