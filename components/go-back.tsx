import { useRouter } from "next/router";
import ArrowLeft from "../assets/svg/arrow-left";

const GoBack = () => {
  const router = useRouter();

  return router.pathname !== "/" ? (
    <button
      className="col-start-3 row-start-1 rounded-full w-[60px] h-[60px] bg-independence m-3 justify-self-end shadow-md shadow-independence"
      onClick={() => router.back()}
    >
      <ArrowLeft />
    </button>
  ) : null;
};

export default GoBack;
