import React, { useState } from 'react';
import './Button.css';

export default function Button() {
  const [state, setState] = useState(0);
  return (
    <div className="shared-btn" onClick={() => setState((s) => s + 1)}>
      Click me: {state}
    </div>
  );
}
