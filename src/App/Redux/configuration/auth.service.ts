import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";

const generateUniqueId = (): string => {
    return Math.random().toString(36).substr(2, 9);
};

const getCurrentUserPromise = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        const unsuscribe = auth.onAuthStateChanged((user) => {
            unsuscribe();
            if (user) {
                resolve(user);
            } else {
                reject(new Error("No user is currently signed in"));
            }
        });
    });
};

export class AuthService {
    async getCurrentUser(): Promise<any> {
        return getCurrentUserPromise();
    }

    async handleUserRegistration(userData: any): Promise<any> {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                userData.email,
                userData.password,
            );
            const user = userCredential.user;
            const systemsOneAccount: any = {
                user: {
                    primaryInformation: {
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        email: userData.email,
                        isUserLoggedIn: true,
                        userId: user.uid,
                        affiliate: "ekene"
                    },
                    secondaryInformation: {
                        userReferenceId: user.uid + generateUniqueId(),
                    },
                    locationAndTime: {
                        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                        locale: navigator.language,
                        location: "",
                    },
                },
            };

            // Standard Firestore v9/v10 root document path reference syntax
            const userDocData = doc(db, "users", user.uid);

            await setDoc(userDocData, systemsOneAccount);
            const userSnapshot = await getDoc(userDocData);

            if (userSnapshot.exists()) {
                const getUserData = userSnapshot.data();
                const dataForRedux = getUserData?.user?.primaryInformation;
                console.log(dataForRedux)
            }
        } catch (error) {
            console.error("Error during user registration:", error);
            throw error;
        }
    }

    async updateUserInformation(updateData: Partial<any>): Promise<void> {
        try {
            const currentUser = await this.getCurrentUser();
            const userId = currentUser.uid;
            const userDoc = doc(db, "users", userId);
            const userSnapShot = await getDoc(userDoc);
            if (!userSnapShot.exists()) throw new Error("user not found");
            const currentData = userSnapShot.data();

            // Pull out fields that must live at the document root —
            // every read path (handleGoogleAuth, hydrateUser, AuthListener)
            // checks profileComplete at the top level, not nested under
            // user.secondaryInformation
            const { profileComplete, ...restOfUpdate } = updateData;

            const updatePrimaryInfo = {
                ...currentData.user.secondaryInformation,
                ...restOfUpdate,
            };

            const writePayload: Record<string, any> = {
                "user.diagnostics": updatePrimaryInfo,
            };

            if (profileComplete !== undefined) {
                writePayload.profileComplete = profileComplete;
            }

            await updateDoc(userDoc, writePayload);

            //   store.dispatch(
            //     setUser({
            //       ...updatePrimaryInfo,
            //       ...(profileComplete !== undefined ? { profileComplete } : {}),
            //     }),
            //   );
        } catch (error) {
            console.error("Error updating primary information:", error);
            throw error;
        }
    }
}

export const authServiceMain = new AuthService();