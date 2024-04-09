const __PRIVATE_SYMBOL__ = Symbol('CredentialsContainer');

interface CredentialsContainerState<Credentials> {
    name: string
    credentials: Credentials | null
}

/**
 * The `CredentialsContainer` class provides a set of methods to store and retrieve credentials.
 * @todo This is currently a work in progress.
 */
export class CredentialsContainer<Credentials = any> {
    [__PRIVATE_SYMBOL__] = {} as CredentialsContainerState<Credentials>

    constructor(name: string) {
        this[__PRIVATE_SYMBOL__]['name'] = name
        this[__PRIVATE_SYMBOL__]['credentials'] = null
    }

    get() {
        return this[__PRIVATE_SYMBOL__]['credentials']
    }

    store(credentials: Credentials) {
        this[__PRIVATE_SYMBOL__]['credentials'] = credentials
    }

    remove() {
        this[__PRIVATE_SYMBOL__]['credentials'] = null
    }
}
