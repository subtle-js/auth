
import { DefineGenericAuthProvider } from "./DefineGenericAuthProvider"
import type { GenericAuthProviderInterface } from "./interfaces/GenericAuthProviderInterface"
import { SubtleGenericAuth } from "./SubtleGenericAuth"

/**
 * The `GenericAuth` class provides a set of methods to perform generic authentication operations.
 */
export class GenericAuth {
    /**
     * A read-only property returns a `SubtleGenericAuth` which can then be used to perform generic authentication operations.
     */
    public readonly subtle = new SubtleGenericAuth() as Readonly<SubtleGenericAuth>

    /**
     * Define a new generic authentication provider.
     * @param definition 
     * @returns GenericAuthProvierInterface
     */
    public defineGenericAuthProvider<Request, Response>(definition: Partial<GenericAuthProviderInterface<Request, Response>>): GenericAuthProviderInterface<Request, Response> {
        return new DefineGenericAuthProvider(definition)
    }
}
