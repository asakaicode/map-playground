'use client'

import { DeckGL, MapView } from "deck.gl"

export default function DeckGLPage() {
  return (
    <>
      <DeckGL>
        <MapView controller={true} />
      </DeckGL>
    </>
  )
}