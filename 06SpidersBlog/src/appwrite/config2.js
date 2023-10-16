import config from "../config/config";
import { Client,Account,ID, Databases, Query } from "appwrite";

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
     async getPost(slug){
        try{
            return await this.databases.getDocument(
                config.DatabaseId,
                config.collectionId,
                slug
            )

        }catch(error){
            console.log("Appwrite service::getPost:: error",error)
            return false;
        }
    }

     async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.DatabaseId,
                config.collectionId,
                queries,
                
            )
                
            
        } catch (error) {
            console.log("appwrite service :: getPosts :: error",error);
        }
     }

     //file upload service
     async uploadFile(file){
        try {
           return await this.bucket.createFile(
            config.bucketId,
            ID.unique(),
            file
           )               
        } catch (error) {
            console.log("appwrite :: uploadfile:: error",error);
            return false;
        }
     }

     async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                config.bucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile:: error",error);
            return false
        }
     }

     getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.bucketId,
            fileId
        )
     }
}

const service = new DatabaseService();

export default service;