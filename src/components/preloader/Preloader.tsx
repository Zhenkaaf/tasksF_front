import { Vortex } from "react-loader-spinner";
import s from "./preloader.module.css";
import { useSelector } from "react-redux";
import { isLoadingState } from "../../selectors/allSelectors";
//////////////////////////////////////////////////////////////////////
const Preloader = () => {
  const isLoading = useSelector(isLoadingState);
  return (
    <div className={isLoading ? s.overlay : ""}>
      <Vortex
        visible={isLoading}
        height={200}
        width={200}
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};

export default Preloader;
