import { ThreeElements } from '@react-three/fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {
        mesh: ThreeElements['mesh']
        boxGeometry: ThreeElements['boxGeometry']
        meshStandardMaterial: ThreeElements['meshStandardMaterial']
        ambientLight: ThreeElements['ambientLight']
        pointLight: ThreeElements['pointLight']
        spotLight: ThreeElements['spotLight']
        sphereGeometry: ThreeElements['sphereGeometry']
    }
  }
}
