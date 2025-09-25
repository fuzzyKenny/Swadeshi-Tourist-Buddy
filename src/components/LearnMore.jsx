import { useNavigate } from "react-router-dom";

const LearnMore = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-amber-50">
        <h1>Learn More Page.</h1>
        <p
          onClick={() => {
            navigate("/");
          }}
        >
          Go back
        </p>
      </div>
    </>
  );
};

export default LearnMore;
