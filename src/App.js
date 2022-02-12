import React, {Suspense, useRef} from "react"
import {Canvas, extend} from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import Screen from './Screen'
import Model from "./Model" 
import Scene from "./Scene"
extend({OrbitControls})

function App() {
  const screen = useRef()
  const caption = useRef()
  const scroll = useRef()
  return (
    <>
      <Canvas shadows
      onCreated={(state) => state.events.connect(screen.current)}
      raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
<<<<<<< HEAD
      style={{'backgroundColor':'#041562'}}>
=======
      style={{'backgroundColor':'#F8C7C8'}}
      camera={{ position: [10, 5, -5], fov: 75 }}>
>>>>>>> 81fe0ebc287009f96cf2ef0d715a12eeb6eb9ecc
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Scene/>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls autoRotate={true} minDistance={2}/>
      </Canvas>
      <Screen ref={screen} caption={caption} scroll={scroll} />
    </>
  );
}

export default App;