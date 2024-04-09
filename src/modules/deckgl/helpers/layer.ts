import { PathLayer } from "deck.gl"
import { ulid } from "ulid"

interface PathLayerObject {
  color: string
  path: [number, number][]
}

export const generatePathLayerObject = (color: string, coords: {lat: number, lng: number}[]): PathLayerObject => {
  return {
    color,
    path: coords.map(coord => [coord.lng, coord.lat])
  }
}

export const generatePathLayer = (pathLayerObjects: PathLayerObject[]) => {
  const randomId = ulid()
  return new PathLayer({
    id: `path-layer-${randomId}`,
    data: pathLayerObjects,
    getPath: d => d.path,
    getColor: d => d.color,
    getWidth: 100,
  })
}