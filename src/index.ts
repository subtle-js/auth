import { GenericAuth } from "./generic"

// Main export of the module
export { auth }

/**
 * The stub `SubtleAuth` class provides a set of methods to perform subtle authentication operations.
 * @internal
 */
class SubtleAuth {}

/**
 * The `Auth` class provides a set of methods to perform authentication operations.
 */
class Auth {
    /**
     * A read-only property returns a `SubtleAuth` which can then be used to perform subtle authentication operations.
     */
    public subtle = new SubtleAuth() as Readonly<SubtleAuth>

    /**
     * A read-only property returns a `GenericAuth` which can then be used to perform generic authentication operations.
     */
    public generic = new GenericAuth() as Readonly<GenericAuth>
}

/**
 * A read-only property returns an `Auth` which can then be used to perform authentication operations.
 */
const auth = new Auth()
