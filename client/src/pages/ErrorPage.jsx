import { useNavigate } from "react-router-dom";
import CustomizeButton from "../components/CustomizeButton";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="flex flex-col gap-10 items-center max-w-md">
          <div className="flex flex-col gap-6 items-center">
            <div className="font-bold text-7xl">404</div>
            <div className="text-xl">
              We seem to have run into a bit of a problem with this page. Please
              kindly reload.
            </div>
            <CustomizeButton
              variant="primary"
              text="Reload"
              onClick={() => navigate("/home")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
