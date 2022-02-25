import { useState } from 'react';

export function Button() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((val) => val + 1)}>{count}</button>;
}
