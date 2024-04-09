import { AssertMethodContract } from "./contracts/AssertMethodContract"
import { GetMethodContract } from "./contracts/GetMethodContract"
import { StoreMethodContract } from "./contracts/StoreMethodContract"
import { RemoveMethodContract } from "./contracts/RemoveMethodContract"

export class SubtleCredentials {
    assert<Credentials>(container: AssertMethodContract, credentials: Credentials) {
        return container.assert(credentials)
    }

    get<Credentials>(container: GetMethodContract<Credentials>) {
        return container.get()
    }

    store<Credentials>(container: StoreMethodContract<Credentials>, credentials: Credentials) {
        return container.store(credentials)
    }

    remove(container: RemoveMethodContract) {
        return container.remove()
    }
}
