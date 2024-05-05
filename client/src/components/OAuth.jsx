import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import {LoginSocialFacebook } from "reactjs-social-login"
import { FaFacebook } from "react-icons/fa";
// import {FacebookLoginButton } from "react-social-login-button"


export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async (resp) => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      // const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resp.data.name,
          email: resp.data.email,
          googlePhotoUrl: resp.data.picture.data.url,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      
      <LoginSocialFacebook 
    appId="433322819300792"
    onResolve={(res) => handleGoogleClick(res)}
    onReject={(err) => { console.log("Getting error", err) }}
    className="flex items-center justify-center bg-pink-500 text-white rounded-md py-2 px-4 shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
  >
    <FaFacebook className="w-6 h-6 mr-2" />
    Continue with Facebook
  </LoginSocialFacebook>

    {/* <Button type="button" gradientDuoTone="pinkToOrange" outline onClick={handleGoogleClick}>
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button> */}
    </>
  );
}




// import { Button } from "flowbite-react";
// import { AiFillGoogleCircle } from "react-icons/ai";
// import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
// import { app } from "../firebase";
// import { useDispatch } from "react-redux";
// import { signInSuccess } from "../redux/user/userSlice";
// import { useNavigate } from "react-router-dom";

// export default function OAuth() {
//   const auth = getAuth(app);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleGoogleClick = async () => {
//     const provider = new GoogleAuthProvider();
//     provider.setCustomParameters({ prompt: "select_account" });
//     try {
//       const resultsFromGoogle = await signInWithPopup(auth, provider);
//       const res = await fetch("/api/auth/google", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: resultsFromGoogle.user.displayName,
//           email: resultsFromGoogle.user.email,
//           googlePhotoUrl: resultsFromGoogle.user.photoURL,
//         }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         dispatch(signInSuccess(data));
//         navigate("/");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <Button type="button" gradientDuoTone="pinkToOrange" outline onClick={handleGoogleClick}>
//       <AiFillGoogleCircle className="w-6 h-6 mr-2" />
//       Continue with Google
//     </Button>
//   );
// }
