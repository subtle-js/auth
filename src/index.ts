import { Auth } from "./Auth";

/**
 * A read-only property returns an `Auth` which can then be used to perform authentication operations.
 */
export const auth = new Auth()
