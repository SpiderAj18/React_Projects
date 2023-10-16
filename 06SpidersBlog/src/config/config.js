const config = {
    appWriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    ProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    DatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketId : String(import.meta.env.VITE_APPWRITE_BUCKETID_ID),
}
export default config;