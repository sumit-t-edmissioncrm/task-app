import SignIn from "@/components/auth/sign-in";
import SignUp from "@/components/auth/sign-up";
import CommonButton from "@/components/common-button";
import { useState } from "react";

function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <>
      <div>
        {/* <h3 className="text-3xl font-bold">Welcome</h3> */}
        {isLoginView ? <SignIn /> : <SignUp />}
        <div className="flex justify-center mt-5">
          <CommonButton
            type={"button"}
            onClick={() => setIsLoginView(!isLoginView)}
            buttonText={isLoginView ? "Switch to Sign Up" : "Switch to Sign In"}
          />
        </div>
      </div>
    </>
  );
}

export default AuthPage;
