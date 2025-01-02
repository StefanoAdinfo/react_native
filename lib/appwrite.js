import SignIn from "@/app/(auth)/sign-in";
import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aora",
  projectId: "6775d210003393f90e74",
  databaseId: "6775d351002611506b26",
  userCollationId: "6775d3a8000c21a85713",
  videoCollationId: "6775d3cb000cc9fb3713",
  storageId: "6775d589003713a6f897",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function createUser({ email, password, username }) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username);
    await signIn({ email, password });
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollationId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function signIn({ email, password }) {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
