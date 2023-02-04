import { writable } from 'svelte/store';

export var mouseLocation = writable({ x: 0, y: 0 });