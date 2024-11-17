import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PopUpLogOutTemplate from "../Templates/PopUpLogOutTemplate";
import { auth } from "../../utils/firebase";
import { SearchBar } from "../Templates/SearchBar";
import { signOut } from "firebase/auth";

export default function NavigationBar() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleSignOut = async (e) => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex w-full h-[90px] bg-[#0B0606] items-center justify-between shadow-md px-12 py-10">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/logo2.png"
            alt="LOGO"
            className="h-16 w-16 border border-black rounded-[24px] cursor-pointer"
            onClick={() => navigate("/home")}
          />
        </div>

        <SearchBar
          name="search"
          placeholder="Search..."
          // value={searchPhrase}
          // onChange={handleSearchPhraseStateChange}
        />

        <div className="flex gap-10 items-center">
          <div className="flex gap-16">
            <button className="hover:bg-zinc-600 rounded-lg">
              <img src="/acc.svg" alt="ACC" className="h-8 w-8" />
            </button>
          </div>

          <div className="flex gap-10">
            <button
              className="hover:bg-zinc-600 rounded-lg"
              onClick={() => setIsVisible(true)}
            >
              <img src="/logout.svg" alt="SYS" className="h-8 w-8" />
            </button>
          </div>
        </div>

        {isVisible && (
          <PopUpLogOutTemplate
            setIsVisible={setIsVisible}
            handleSignOut={handleSignOut}
          />
        )}
      </div>
    </div>
  );
}
