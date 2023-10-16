import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthServices{
    client = new Client();
    account;
    
    constructor(){
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.ProjectId);
            this.account= new Account(this.client);

    }

    async createAccount({email,password,name}){
        try{
          const userAccount=  await this.account.create(ID.unique(), email,password,name);
            if(userAccount){
                //call another method
               return this.login({email,password});
            }else{
                return userAccount; 
            }
        } catch(error){
            console.log("Appwrite Service :: userAccount :: error",error);
        }
    }

    //method for login 
    async login({email,password}) {
        try {
            return await this.account.createEmailSession(email,password);
        } catch (error) {
            console.log(
                "Appwriteservice :: login :: error",error
            );
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
            console.log("arrwrite service :: getCuurentUser ::error ",error);
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service  :: logout:: error ",error);
        }
    }
}

const authServices = new AuthServices();

export default authServices;