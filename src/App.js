import "./App.css";
import {
  LandingPage,
  SignInPage,
  SignUpPage,
  ForgotPage,
  NotePage,
  ArchivePage,
  LabelPage, 
  TrashPage} from "./pages/index";
  import { ProfilePage } from "./pages/profile-page/profile-page";
import {Routes,Route} from "react-router-dom";
import { PrivateRoute } from "./helpers/require-auth";
import {
  ToastContainer,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorPage } from "./pages/error-page/error-page";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/forgotpassword" element={<ForgotPage/>}/>
        <Route path="/notes" element={
            <PrivateRoute>
              <NotePage/>
            </PrivateRoute>
          }/>
        <Route path = "/archive"element ={
            <PrivateRoute>
              <ArchivePage/>
            </PrivateRoute>
          }/>
        <Route path="/label"element={<LabelPage/>}/>
        <Route path="/trash"element={<TrashPage/>}/>
        <Route path="/profile"element={<ProfilePage/>}/>
        <Route path="*"element={<ErrorPage/>}/>
      </Routes>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        position ="top-right"
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
export default App;
