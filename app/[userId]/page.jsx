"use client";
import { doc, getFirestore } from "firebase/firestore";
import React, { useEffect } from "react";
import app from "../shared/firebaseConfig";

const Profile = ({ params }) => {
  const db = getFirestore(app);

  useEffect(() => {
    console.log(params.userId.replace("%40", "@"));
    if (params) {
      getUserInfo(params.userId.replace("%40", "@"));
    }
  }, [params]);

  const getUserInfo = async (email) => {
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserInfo(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return <div>Profile 47.46</div>;
};

export default Profile;
