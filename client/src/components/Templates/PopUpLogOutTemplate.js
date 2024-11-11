import PopUpRow from "../PopUp/PopUpRow";

export default function PopUpLogOutTemplate({ setIsVisible, handleSignOut }) {
  return (
    <div className="flex flex-col fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col bg-white p-8 rounded shadow-md text-center items-center gap-4">
        <PopUpRow
          text="Log Out From This Account?"
          setIsVisible={setIsVisible}
          handleAction={handleSignOut}
        />
      </div>
    </div>
  );
}
