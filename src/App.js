import "./App.css";
import {
  LandingPage,
  SignInPage,
  SignUpPage,
  ForgotPage,
  NotePage,
  ArchivePage,
  LabelPage } from "./pages/index";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/forgotpassword" element={<ForgotPage/>}/>
        <Route path="/notes" element={<NotePage/>}/>
        <Route path = "/archive"element = {<ArchivePage/>}/>
        <Route path="/label"element={<LabelPage/>}/>
      </Routes>
    </div>
  );
}
export default App;
