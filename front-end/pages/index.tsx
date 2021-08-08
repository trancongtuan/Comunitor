import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { AppState } from "redux/store";
const Home: React.FC = () => {
  const router = useRouter();
  const auth = useSelector((state: AppState) => state.auth.token);
  useEffect(() => {
    if (!auth) {
      router.push({ pathname: "auth/Login" });
    }
  }, []);

  return <div></div>;
};

export default Home;
