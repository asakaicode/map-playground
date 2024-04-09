'use client'

import { Button, Divider, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <h1>Map Playground</h1>
      <Divider />
      <Stack spacing={2} direction='row' >
        <Button variant='contained' color='primary' onClick={() => router.push('/deckgl')}>Deck.gl</Button>
        <Button variant='contained' color='primary'>Mapbox GL JS</Button>
        <Button variant='contained' color='primary'>Leaflet</Button>
      </Stack>
    </div> 
  )
}
