import { writable } from 'svelte-local-storage-store'
import { writable as writableNoStore, derived } from 'svelte/store'

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

export const paused = writableNoStore(true)
export const position = writableNoStore(0)
export const duration = writableNoStore(1)

// See above
export const flutePaused = {...derived(paused, v => v), set:()=>{}}
export const flutePosition = {...derived(position, v => v), set:()=>{}}

export const nextTimeout = writableNoStore(null)

export const showSettings = writableNoStore(false)
export const showContents = writableNoStore(false)

export const current = writable('current', {})

export const launching = writableNoStore(true)
export const skipSplash = writable('skipSplash', false)