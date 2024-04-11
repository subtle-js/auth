import { GenericAuthProviderInterface } from "./interfaces"

export class DefineGenericAuthProvider<Request, Response> implements GenericAuthProviderInterface<Request, Response> {
    constructor(private definition: Partial<GenericAuthProviderInterface<Request, Response>>) {
        // ...
    }
    
    async getProviderInfo() {
        if (!this.definition.getProviderInfo) {
            return Promise.reject(new Error('[CustomGenericAuthProvider]: GetProviderInfo method is not implemented.'))
        }
        return this.definition.getProviderInfo()
    }

    async authenticate(credentials: Request): Promise<Response> {
        if (!this.definition.authenticate) {
            return Promise.reject(new Error('[CustomGenericAuthProvider]: Authenticate method is not implemented.'))
        }
        return Promise.resolve(this.definition.authenticate(credentials))
    }

    async logout(token?: string): Promise<void> {
        if (!this.definition.logout) {
            return Promise.reject(new Error('[CustomGenericAuthProvider]: Logout method is not implemented.'))
        }
        return Promise.resolve(this.definition.logout(token))
    }
}
