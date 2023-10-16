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
            return await this.databases.createDocument(
                config.DatabaseId,
                config.collectionId,
                slug,{
                    title,content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch(error){
            console.log("Appwrite service :: createPost :: error",error);
        }
    }

    //update post 
    async updatePost(slug,{title,  content,featuredImage ,status}){
        try {
            return await this.databases.updateDocument(
                config.DatabaseId,
                config.collectionId,
                slug,{
                    title,
                    content,
                    featuredImage,status,
                }
            )
        } catch (error) {
            console.log("aapwrite :: updatepost :: error",error);
        }
    }

    //delete document 
    async deletePost({slug}){
        try {
            return await this.databases.deleteDocument(
                config.DatabaseId,
                config.collectionId,
                slug
            )
        } catch (error) {
            console.log("appwrite service :: delete doc :: error",error);
            return false;
        }

    }
}

const service = new DatabaseService();

export default service;