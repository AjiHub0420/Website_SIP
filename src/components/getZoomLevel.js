import { useState } from 'react';

const UseZoomLevel = ({ map }) => {
  const zoomLevel = useState(map.getZoom());

  return zoomLevel;
};

function ZoomLevelComponent() {
  const zoomLevel = UseZoomLevel();

  // Now you can use the zoomLevel in your component as needed
  console.log('Current Zoom Level:', zoomLevel);

  return null;
}

export default ZoomLevelComponent;