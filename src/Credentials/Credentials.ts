import { CredentialsContainer } from "./CredentialsContainer";
import { SubtleCredentials } from "./SubtleCredentials";

export class Credentials {
    public readonly subtle = new SubtleCredentials() as Readonly<SubtleCredentials>

    /**
     * Create a new instance of `CredentialsContainer` class.
     * @param type 
     * @returns 
     */
    public createCredentialsContainer<Credentials>() {
        return new CredentialsContainer<Credentials>()
    }
}
