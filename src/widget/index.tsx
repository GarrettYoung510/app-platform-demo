import { init, UiAppEventType } from "@datadog/ui-apps-sdk";

import "./widget.css";
import "typeface-roboto";
import "milligram";
import { useEffect, useState } from "react";

const client = init ({ debug: true });

function Widget() {
  const [name, setName] = useState("Datadog user");
  const [metric, setMetric] = useState("system.cpu.idle");
  const [broadcastClickCount, setBroadcastClickCount] = useState(0);

  // console.log(client)

  useEffect(() => {
    client.getContext().then(c => {
      setName(c.app.currentUser.handle);
      setMetric(c.widget?.definition.options?.metric);
    })

    client.events.on(
      UiAppEventType.DASHBOARD_CUSTOM_WIDGET_OPTIONS_CHANGE,
      ({ metric }) => {
        setMetric(metric);
      }
    );

    client.events.onCustom('modal_button_click', setBroadcastClickCount)
  }, []);

  const onOpenSidePanel = (args:any) => {  
    client.sidePanel.open(
      {
        willCloseOnEsc: true,
        width: "50%",
        source: "panel",
        key: "custom-side-panel",
        hideCloseButton: false,
      },
      { metric }
    )
  }

  return (
    <div className='widget-container'>
      <section>
        <h2 className='title-main'>onTheFly</h2>
        <p>Demo guidance when you're in a pinch</p>
        {/* <p>Your favorite metric is: <strong>{metric}</strong></p> */}
        <button className="button-main button-color" onClick={onOpenSidePanel}>Logs</button>
        {/* <p>The red button in the modal has been clicked: <strong>{broadcastClickCount}</strong> time(s)</p> */}
      </section>
    </div>
  );
}

export default Widget;
