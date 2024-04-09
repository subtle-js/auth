export interface CredentialsContainerState<Credentials> {
    credentials: Credentials | null
}

/**
 * The `CredentialsContainer` class provides a set of methods to store and retrieve credentials.
 * @todo This is currently a work in progress.
 */
export class CredentialsContainer<Credentials = any> {
    #state: CredentialsContainerState<Credentials> = {
        credentials: null
    }

    constructor() {
        this.#state.credentials = null
    }

    assert(credentials: Credentials) {
        if (this.#state.credentials === null) {
            throw new Error('No credentials stored')
        }

        return this.#state.credentials === credentials
    }

    get() {
        return this.#state.credentials
    }

    store(credentials: Credentials) {
        this.#state.credentials = credentials
    }

    remove() {
        this.#state.credentials = null
    }
}
