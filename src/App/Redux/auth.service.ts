import { auth, db } from "../../../Firebase.js";
import {
    ref,
    push,
    set,
    update,
    get,
    DatabaseReference,
    DataSnapshot,
    Database,
} from "firebase/database";
import { ArticlePostType } from "../utils/Types.js";

const getCurrentDateTime = () => {
    const now = new Date();

    const year = now.getFullYear(); // Retrieves the full year (e.g., 2024)
    const month = now.getMonth() + 1; // Retrieves the month (0-11), adding 1 to make it 1-12
    const date = now.getDate(); // Retrieves the day of the month (1-31)
    const hours = now.getHours(); // Retrieves the hour (0-23)
    const minutes = now.getMinutes(); // Retrieves the minutes (0-59)
    const seconds = now.getSeconds(); // Retrieves the seconds (0-59)

    // Formatting the date and time as strings
    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return {
        year,
        month,
        date,
        time: formattedTime,
        formattedDateTime: `${formattedDate} ${formattedTime}`
    };
}

export class AuthService {
    async pushPost(posts: ArticlePostType) {
        const newDocRef = push(ref(db, `data`));
        const currentDateTime = getCurrentDateTime();
        set(newDocRef, {
            data: posts,
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

    }

}

export const authService = new AuthService()