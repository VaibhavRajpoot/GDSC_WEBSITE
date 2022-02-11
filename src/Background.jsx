import React, { Suspense } from 'react';
import {Canvas, extend} from 'react-three-fiber'
import { OrbitControls, Stars} from '@react-three/drei';
import Scene from './Scene';
extend({OrbitControls})

export default function Background(){
    return(
        <Canvas style={{background:'white'}} camera={{ position: [0,0,10], fov: 70}}>
            <Suspense fallback = {null} >
                <Scene/>
            </Suspense>
            <directionalLight intensity={0.5}/>
            <ambientLight intensity={0.2}/>
            <OrbitControls/>
        </Canvas>
    )
}