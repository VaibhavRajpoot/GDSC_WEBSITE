import React, {Suspense, useRef} from "react"
import {Canvas} from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import Screen from './Screen'
import Model from "./Model" 

function App() {
  const screen = useRef()
  const caption = useRef()
  const scroll = useRef()
  return (
    <>
      <Canvas shadows
      onCreated={(state) => state.events.connect(screen.current)}
      raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
      style={{'backgroundColor':'#041562'}}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Screen ref={screen} caption={caption} scroll={scroll} />
    </>
  );
}

export default App;