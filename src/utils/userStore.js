import { create } from "zustand";
import { db } from "./firebase";
import { getDoc } from "firebase/firestore";

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ currentUser: null, isLoading: false });
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log(("Document Data:", docSnap.data()));
        set({ isLoading: false, currentUser: docSnap.data() });
      } else set({ currentUser: null, isLoading: false });
    } catch (error) {
      console.log(error);
      return set({ currentUser: null, isLoading: false });
    }
  },
}));
