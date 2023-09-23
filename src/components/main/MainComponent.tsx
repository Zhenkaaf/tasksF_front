import { DrawerHeader, Main } from "../../materialUI/Mui";
type MainProps = {
  open: boolean;
};
/////////////////////////////////////////////////////
const MainComponent = ({ open }: MainProps) => {
  return (
    <div style={{ backgroundColor: "yellow", height: "50px" }}>
      <Main open={open}>
        <DrawerHeader />
        <button style={{ padding: "50px" }}>BUTTOM</button>
        <button style={{ padding: "50px" }}>BUTTOM</button>
        <button style={{ padding: "50px" }}>BUTTOM</button>
        <button style={{ padding: "50px" }}>BUTTOM</button>
        <button style={{ padding: "50px" }}>BUTTOM</button>
        <button style={{ padding: "50px" }}>BUTTOM</button>
      </Main>
    </div>
  );
};

export default MainComponent;
