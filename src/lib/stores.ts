import { writable } from 'svelte-local-storage-store'
import { writable as writeableNoStore, derived } from 'svelte/store'

export const grid = writable('grid', false)
export const zen = writable('zen', true)
export const flute = writable('flute', true)
export const voice = writable('reading', true)
export const autoplay = writable('autoplay', true)
export const brightness = writable('brightness', 50)

// Muting is set by the $flute and $voice variables above,
// and these derived stores are provided for binding to the <audio> elements,
// but <audio[muted]> is a two-way binding, so we need a .set function to avoid an error.
// It doesn't actually have to set anything though, because we don't control the <audio>
// elements except with the custom buttons for $flute and $voice.
export const muteFlute = {...derived(flute,v => !v), set:()=>{}}
export const muteVoice = {...derived(voice,v => !v), set:()=>{}}

export const paused = writeableNoStore(true)
export const position = writeableNoStore(0)
export const duration = writeableNoStore(1)

// See above
export const flutePaused = {...derived(paused, v => v), set:()=>{}}
export const flutePosition = {...derived(position, v => v), set:()=>{}}

export const nextTimeout = writeableNoStore(null)

export const showSettings = writeableNoStore(false)
export const showContents = writeableNoStore(false)

export const current = writable('current', {})
