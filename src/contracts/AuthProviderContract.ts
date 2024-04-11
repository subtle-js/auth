interface AuthProviderInfo {
    name: string
    type: string
    metadata: Record<any, any>
}

export interface AuthProviderContract {
    getProviderInfo(): Promise<AuthProviderInfo>
}
