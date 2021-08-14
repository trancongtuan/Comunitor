import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { AppState } from "redux/store";
import { readRecord } from "./utils/localStorageService";

const Home: React.FC = () => {
  const router = useRouter();
  const auth = useSelector((state: AppState) => state.auth.token);
  useEffect(() => {
    if (!readRecord('accessToken')) {
      router.push({ pathname: "auth/Login" });
    } else {
      router.push({pathname: "dashboard"})
    }
  }, []);

  return <div></div>;
};

export default Home;
