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

function validateUserId(userId) {
  const regex = /^[a-zA-Z0-9._-]{1,36}$/;
  if (!regex.test(userId)) {
    throw new Error("Invalid user ID format");
  }
}

export async function createUser({ email, password, username }) {
  try {
    const userId = ID.unique();
    validateUserId(userId); // Assicura che l'ID sia valido
    console.log("Generated User ID:", userId);

    const existingUser = await account.get(email).catch(() => null);

    if (existingUser) {
      console.log("User already exists:", existingUser);
      throw new Error("A user with this email already exists.");
    }

    const newAccount = await account.create(userId, email, password, username);
    if (!newAccount) throw new Error("Failed to create user");

    const avatarUrl = avatars.getInitials(username);
    const session = await signIn({ email, password }); // Passa solo email e password

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

    return { newAccount, session, newUser };
  } catch (error) {
    console.error("Error during user creation:", error.message);
    throw new Error(error.message);
  }
}

export async function signIn({ email, password }) {
  try {
    console.log("Signing in with email:", email); // Non serve loggare userId
    const session = await account.createSession(email, password); // Usa solo email e password
    console.log("Signed in successfully:", session);
    // return session;
  } catch (error) {
    console.error("Error during sign-in:", error.message);
    throw new Error(error.message);
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
