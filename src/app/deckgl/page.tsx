'use client'

import { DeckGL } from "deck.gl"
import { Map } from "react-map-gl"

const MAP_STYLE = 'mapbox://styles/asakaicode/cliim7tuf004l01r70clda6td'
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYXNha2FpY29kZSIsImEiOiJjbGQ0N3F4NG8wcTV0M3FqcjczZW9iY3A4In0.-pqoKHyEoBvT0-bmxa0a3A'

export default function DeckGLPage() {
  return (
    <>
      <DeckGL controller={true}>
        <Map mapStyle={MAP_STYLE} mapboxAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    </>
  )
}