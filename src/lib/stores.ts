import { writable } from 'svelte-local-storage-store'

export const grid = writable('grid', false)
export const zen = writable('zen', false)
export const flute = writable('flute', true)
export const reading = writable('reading', true)
export const autoscroll = writable('autoscroll', true)
export const brightness = writable('brightness', 50)

export const showSettings = writable('showSettings', false)
export const showContents = writable('showContents', false)

export const current = writable('current', {})
