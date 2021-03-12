import { init } from "@datadog/ui-apps-sdk";
import { useState, useEffect } from 'react';

const client = init ({ debug: true });

function SidePanel() {

  const [args, setArgs] = useState<any>();

  
  useEffect(() => {
    client.getContext().then(({ args }) => setArgs(args));
  }, [setArgs])

  const testMethod = () => {
    console.log('test');
    client.location.goTo('/infrastructure/map');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <p>Demo Points </p>
      <ul>
        <li>
          This
        </li>
        <li>
          That
        </li>
        <li>
          Something else
        </li>
        <li>
          Another thing
        </li>
      </ul>
      <button onClick={testMethod}>Go To</button>
    </div>
  );
}

export default SidePanel;
