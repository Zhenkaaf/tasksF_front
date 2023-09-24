import s from "./content.module.css";
import { DrawerHeader, Main } from "../materialUI/Mui";
type MainProps = {
  open: boolean;
};
/////////////////////////////////////////////////////
const Content = ({ open }: MainProps) => {
  console.log("rerender");
  return (
    <div>
      <Main
        className={s.custom}
        open={open}
      >
        <DrawerHeader />

        <div
          className={`${s.buttonContainer} ${
            open ? s.buttonContainerOpen : s.buttonContainerClosed
          }`}
        >
          <div
            style={{
              margin: "10px",
              overflowY: "auto",
              minWidth: "200px",
              maxWidth: "200px",
            }}
          >
            <h1 style={{ backgroundColor: "purple" }}>SDfzsdfzs</h1>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>
              SDFzds sfgs sdf szDfgdfdf sddddd ssssssssss ssssssssssfgs dsdfs df
            </p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>
              SDFzds sfgs sddddddddddddd ddddddddddddddtt dtdgdf df sdfs df
            </p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
          </div>
          <div
            style={{
              margin: "10px",
              overflowY: "auto",
              minWidth: "200px",
              maxWidth: "200px",
            }}
          >
            <h1 style={{ backgroundColor: "purple" }}>SDfzsdfzs</h1>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>
              SDFzds sfgs sdf szDfgdfdf sddddd ssssssssss ssssssssssfgs dsdfs df
            </p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
          </div>
          <div
            style={{
              margin: "10px",
              overflowY: "auto",
              minWidth: "200px",
              maxWidth: "200px",
            }}
          >
            <h1 style={{ backgroundColor: "purple" }}>SDfzsdfzs</h1>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>
              SDFzds sfgs sdf szDfgdfdf sddddd ssssssssss ssssssssssfgs dsdfs df
            </p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
          </div>
          <div
            style={{
              margin: "10px",
              overflowY: "auto",
              minWidth: "200px",
              maxWidth: "200px",
            }}
          >
            <h1 style={{ backgroundColor: "purple" }}>SDfzsdfzs</h1>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>

            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
          </div>
          <div
            style={{
              margin: "10px",
              overflowY: "auto",
              minWidth: "200px",
              maxWidth: "200px",
            }}
          >
            <h1 style={{ backgroundColor: "purple" }}>SDfzsdfzs</h1>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>

            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>
              SDFzds sfgs sddddddddddddd ddddddddddddddtt dtdgdf df sdfs df
            </p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
          </div>
          <div
            style={{
              margin: "10px",
              overflowY: "auto",
              minWidth: "200px",
              maxWidth: "200px",
            }}
          >
            <h1 style={{ backgroundColor: "purple" }}>SDfzsdfzs</h1>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>

            <p style={{ backgroundColor: "yellow" }}>
              SDFzds sfgs sddddddddddddd ddddddddddddddtt dtdgdf df sdfs df
            </p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
          </div>
          <div
            style={{
              margin: "10px",
              overflowY: "auto",
              minWidth: "200px",
              maxWidth: "200px",
            }}
          >
            <h1 style={{ backgroundColor: "purple" }}>SDfzsdfzs</h1>

            <p style={{ backgroundColor: "yellow" }}>
              SDFzds sfgs sddddddddddddd ddddddddddddddtt dtdgdf df sdfs df
            </p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
          </div>
          <div
            style={{
              margin: "10px",
              overflowY: "auto",
              minWidth: "200px",
              maxWidth: "200px",
            }}
          >
            <h1 style={{ backgroundColor: "purple" }}>SDfzsdfzs</h1>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>
              SDFzds sfgs sdf szDfgdfdf sddddd ssssssssss ssssssssssfgs dsdfs df
            </p>
          </div>
          <div
            style={{
              margin: "10px",
              overflowY: "auto",
              minWidth: "200px",
              maxWidth: "200px",
            }}
          >
            <h1 style={{ backgroundColor: "purple" }}>SDfzsdfzs</h1>

            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>

            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>
              SDFzds sfgs sddddddddddddd ddddddddddddddtt dtdgdf df sdfs df
            </p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
            <p style={{ backgroundColor: "yellow" }}>SDFzds sfgs sdf sdfs df</p>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Content;
