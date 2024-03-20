import React from 'react';
import { useMediaQuery } from 'react-responsive';

function MyComponent() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  return (
    <div>
      {isDesktopOrLaptop ? <DesktopComponent /> : <MobileComponent />}
    </div>
  );
}

export default MyComponent;