import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LearnMore = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen gap-4 bg-amber-50">
        <h1>Learn More Page.</h1>
        <div className="flex cursor-pointer hover:border-b border-black">
          <p
            onClick={() => {
              navigate("/");
            }}
          >
            Go back
          </p>
          <ArrowRight />
        </div>
      </div>
    </>
  );
};

export default LearnMore;
