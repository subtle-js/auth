export interface CredentialsContainerState<Credentials> {
    name: string
    credentials: Credentials | null
}

/**
 * The `CredentialsContainer` class provides a set of methods to store and retrieve credentials.
 * @todo This is currently a work in progress.
 */
export class CredentialsContainer<Credentials = any> {
    #state = {} as CredentialsContainerState<Credentials>

    constructor(name: string) {
        this.#state.name = name
        this.#state.credentials = null
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
