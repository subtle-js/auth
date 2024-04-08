import type { AuthenticateMethodContract, LogoutMethodContract } from "./contracts"
export type { GenericAuthProvierInterface }

/**
 * The `GenericAuthProvierInterface` interface provides an standard set of methods to perform generic authentication operations.
 */
interface GenericAuthProvierInterface<Request, Response> extends AuthenticateMethodContract<Request, Response>, LogoutMethodContract { }
