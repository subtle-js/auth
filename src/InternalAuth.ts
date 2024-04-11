import { SubtleAuth } from "./SubtleAuth"
import { __SUBTLEJS_AUTH_NAME, __SUBTLEJS_AUTH_VERSION } from "./package"

export class InternalAuth {
    private readonly __SUBTLEJS_PKG_NAME: string = __SUBTLEJS_AUTH_NAME
    private readonly __SUBTLEJS_PKG_VERSION: string = __SUBTLEJS_AUTH_VERSION

    /**
     * A read-only property returns a `SubtleAuth` which can then be used to perform subtle authentication operations.
     */
    public readonly subtle = new SubtleAuth() as Readonly<SubtleAuth>
}
