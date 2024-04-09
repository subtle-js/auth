import { InternalAuth } from "./InternalAuth"
import { Credentials } from "./Credentials/Credentials"
import { GenericAuth } from "./GenericAuth/GenericAuth"

/**
 * The `Auth` class provides a set of methods to perform authentication operations.
 */
export class Auth extends InternalAuth {
    /**
     * A read-only property returns a `Credentials` which can then be used to perform store or retrive operations.
     */
    public credentials = new Credentials() as Readonly<Credentials>

    /**
     * A read-only property returns a `GenericAuth` which can then be used to perform generic authentication operations.
     */
    public generic = new GenericAuth() as Readonly<GenericAuth>
}
