import CustomizeButton from "../CustomizeButton";

export default function PopUpRow({ text, setIsVisible, handleAction }) {
  return (
    <div className="flex flex-col">
      <div className="font-semibold">{text}</div>
      <div className="flex justify-center gap-4 mt-4">
        <CustomizeButton
          text="Cancel"
          onClick={() => setIsVisible(false)}
          variant="secondary"
          className="px-4 py-2 text-black"
        />
        <CustomizeButton
          text="Confirm"
          onClick={handleAction}
          variant="primary"
          className="px-4 py-2"
        />
      </div>
    </div>
  );
}
