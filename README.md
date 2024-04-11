# @subtle-js/auth

The `Auth` interface provides a set of methods to perform authentication operations.


## Example

```typescript
import { auth } from '@subtle-js/auth';

// Example userpass request
interface UserPassCredentialsRequest {
    username: string;
    password: string;
}

// Example userpass response
interface UserPassCredentialsResponse {
    token: string;
}

// Define a userpass provider using generic auth provider
const userpassAuthProvider = auth.generic.defineGenericAuthProvider<UserPassCredentialsRequest, UserPassCredentialsResponse>({
    async authenticate(credentials) {
        // Perform authentication and return the authenticated response
    },
    async logout(token) {
        // Perform logout
    }
})

// Using the userpass provider
const response = await auth.generic.subtle.authenticate(userpassAuthProvider, { username: 'user', password: 'pass' })
console.log(response) // { token: 'abcdefghijklmnopqrstuvwxyz' }
```
