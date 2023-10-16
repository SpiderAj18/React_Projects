import config from "../config/config";
import { Client,Account,ID, Databases } from "appwrite";

export class DatabaseService{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appWriteUrl)
        .setProject(config.ProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage ( this.client);

    }
    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument
        }
    }
}

const service = new DatabaseService();

export default service;