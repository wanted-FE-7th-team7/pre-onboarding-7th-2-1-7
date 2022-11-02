// @flow

import { useEffect } from 'react';

export function DetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>hello</div>;
}
