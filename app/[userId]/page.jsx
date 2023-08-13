"use client";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import UserInfo from "../components/UserInfo"
import app from "../Shared/firebaseConfig";

const Profile = ({ params }) => {
  const db = getFirestore(app);
  const [userInfo,setUserInfo]=useState();

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
     
      setUserInfo(docSnap.data())
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return( <div>
    { userInfo ?
    <UserInfo userInfo={userInfo}/>
    : null}
    </div> );
};

export default Profile;
