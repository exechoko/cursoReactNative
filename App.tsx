// packages
 import React from 'react';

//components
 import { Screen, Card } from "./src/components";

 export default function App() {

   return(
     <Screen>
      <Card
        age={16}
        name="Akira Toriyama"
        country="Japan"
        sex="male"
        points={0}
      />
      <Card
        age={33}
        name="Exequiel Marichal"
        country="Guatemala"
        sex="male"
        points={10}
      />
     </Screen>
  );
 }
