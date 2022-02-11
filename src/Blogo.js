/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Blogo.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.arm_R_Cylinder011.geometry} material={nodes.arm_R_Cylinder011.material} />
      <mesh geometry={nodes.leg_L_Cylinder006.geometry} material={nodes.leg_L_Cylinder006.material} />
      <mesh geometry={nodes.head_Sphere.geometry} material={nodes.head_Sphere.material} />
      <mesh geometry={nodes.arm_L_Cylinder003.geometry} material={nodes.arm_L_Cylinder003.material} />
      <mesh geometry={nodes.eye_L_Cylinder013.geometry} material={nodes.eye_L_Cylinder013.material} />
      <mesh geometry={nodes.ant_R_Cylinder012.geometry} material={nodes.ant_R_Cylinder012.material} />
      <mesh geometry={nodes.body_Cylinder005.geometry} material={nodes.body_Cylinder005.material} />
      <mesh geometry={nodes.leg_R_Cylinder010.geometry} material={nodes.leg_R_Cylinder010.material} />
      <mesh geometry={nodes.ant_L_Cylinder008.geometry} material={nodes.ant_L_Cylinder008.material} />
      <mesh geometry={nodes.eye_R_Cylinder014.geometry} material={nodes.eye_R_Cylinder014.material} />
    </group>
  )
}

useGLTF.preload('/Blogo.glb')