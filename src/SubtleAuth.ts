import { CredentialsContainer } from "./CredentialsContainer/CredentialsContainer";

/**
 * The stub `SubtleAuth` class provides a set of methods to perform subtle authentication operations.
 */
export class SubtleAuth {
    /**
     * Create a new instance of `CredentialsContainer` class.
     * @param type 
     * @returns 
     */
    createCredentialsContainer<Credentials>(name: string) {
        return new class CustomCredentialsContainer extends CredentialsContainer<Credentials> {}(name)
    }
}
