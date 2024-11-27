import { databases } from "./config";
import { ID } from "appwrite";

const db = {};

const collections = [
  {
    name: "posts",
    id: import.meta.env.VITE_COLLECTION_ID_POSTS,
    dbId: import.meta.env.VITE_DATABASE_ID,
  },
];

collections.forEach((collection) => {
  db[collection.name] = {
    create: async (payload, id = ID.unique()) => {
      return await databases.createDocument(
        collection.dbId,
        collection.id,
        id,
        payload,
      );
    },
    update: async (id, payload) => {
      return await databases.updateDocument(
        collection.dbId,
        collection.id,
        id,
        payload,
      );
    },
    delete: async (id) => {
      return await databases.deleteDocument(collection.dbId, collection.id, id);
    },
    get: async (id) => {
      return await databases.getDocument(collection.dbId, collection.id, id);
    },
    list: async (queries) => {
      return await databases.listDocuments(
        collection.dbId,
        collection.id,
        queries,
      );
    },
  };
});

export default db;