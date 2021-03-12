import { init } from "@datadog/ui-apps-sdk";

import "./widget.css";
import "typeface-roboto";
import "milligram";

const client = init ({ debug: true });

function Widget() {
  const onOpenSidePanel = (args:any) => {  
    client.sidePanel.open(
      {
        willCloseOnEsc: true,
        width: "50%",
        source: "panel",
        key: "custom-side-panel",
        hideCloseButton: false,
      }
    )
  }

  return (
    <div className='widget-container'>
      <section>
        <h2 className='title-main'>onTheFly</h2>
        <p>Demo guidance when you're in a pinch</p>
        <button className="button-main button-color" onClick={onOpenSidePanel}>Logs</button>
      </section>
    </div>
  );
}

export default Widget;
