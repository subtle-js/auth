import { AssertMethodContract } from "../contracts/AssertMethodContract";
import { GetMethodContract } from "../contracts/GetMethodContract";
import { RemoveMethodContract } from "../contracts/RemoveMethodContract";
import { StoreMethodContract } from "../contracts/StoreMethodContract";

export interface CredentialsContainerInterface<Credentials = any> extends AssertMethodContract<Credentials>, GetMethodContract<Credentials>, RemoveMethodContract, StoreMethodContract<Credentials>{
    
}
