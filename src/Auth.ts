import { InternalAuth } from "./InternalAuth"
import { GenericAuth } from "./GenericAuth/GenericAuth"

/**
 * The `Auth` class provides a set of methods to perform authentication operations.
 */
export class Auth extends InternalAuth {
    /**
     * A read-only property returns a `GenericAuth` which can then be used to perform generic authentication operations.
     */
    public generic = new GenericAuth() as Readonly<GenericAuth>
}
