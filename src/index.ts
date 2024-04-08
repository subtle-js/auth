import { GenericAuth } from "./generic"
import { __SUBTLEJS_AUTH_NAME, __SUBTLEJS_AUTH_VERSION } from "./package"

// Main export of the module
export { auth }

/**
 * The stub `SubtleAuth` class provides a set of methods to perform subtle authentication operations.
 * @internal
 */
class SubtleAuth {}

class InternalAuth {
    readonly __SUBTLEJS_AUTH_NAME = __SUBTLEJS_AUTH_NAME
    readonly __SUBTLEJS_AUTH_VERSION = __SUBTLEJS_AUTH_VERSION
}

/**
 * The `Auth` class provides a set of methods to perform authentication operations.
 */
class Auth extends InternalAuth {
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
