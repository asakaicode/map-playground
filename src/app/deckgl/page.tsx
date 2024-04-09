'use client'

import { DETOUR_1, DETOUR_2, DETOUR_3, NEAR_HIGASHI_NIHOMBASHI, NEAR_ME } from '@/modules/deckgl/helpers/consts'
import { generatePathLayer, generatePathLayerObject } from '@/modules/deckgl/helpers/layer'
import { colors } from '@mui/material'
import { DeckGL } from 'deck.gl'
import { Map } from 'react-map-gl'

const MAP_STYLE = 'mapbox://styles/asakaicode/cliim7tuf004l01r70clda6td'
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYXNha2FpY29kZSIsImEiOiJjbGQ0N3F4NG8wcTV0M3FqcjczZW9iY3A4In0.-pqoKHyEoBvT0-bmxa0a3A'

export default function DeckGLPage() {
  const coords = [NEAR_ME, DETOUR_1, DETOUR_2, DETOUR_3, NEAR_HIGASHI_NIHOMBASHI]
  const initialViewState = {
    longitude: NEAR_ME.lng,
    latitude: NEAR_ME.lat,
    zoom: 11,
  }
  const mainColor = colors.deepPurple.A700
  const pathLayerObject = generatePathLayerObject(mainColor, coords)
  const pathLayer = generatePathLayer([pathLayerObject])
  return (
    <>
      <DeckGL controller={true} layers={[pathLayer]}>
        <Map mapStyle={MAP_STYLE} mapboxAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    </>
  )
}