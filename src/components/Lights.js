import React from 'react';

function Lights(){
  return(
    <spotLight
      position={[5, 5, 5]}
      intensity={1}
      onUpdate={(self) => self.lookAt(0, 0, 0)}
    />
  );
}

export default Lights;