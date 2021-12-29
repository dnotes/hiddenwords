import { writable } from 'svelte-local-storage-store'
import { writable as writeableNoStore, derived } from 'svelte/store'

export const grid = writable('grid', false)
export const zen = writable('zen', true)
export const flute = writable('flute', true)
export const voice = writable('reading', true)
export const autoplay = writable('autoplay', true)
export const brightness = writable('brightness', 50)

export const muteFlute = derived(flute,v => !v)
export const muteVoice = derived(voice,v => !v)

export const paused = writeableNoStore(true)
export const showSettings = writeableNoStore(false)
export const showContents = writeableNoStore(false)

export const current = writable('current', {})
