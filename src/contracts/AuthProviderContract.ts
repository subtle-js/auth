import { AuthProviderInfo } from "../internal/AuthProviderInfo";

export interface AuthProviderContract {
    getProviderInfo(): Promise<AuthProviderInfo>
}
