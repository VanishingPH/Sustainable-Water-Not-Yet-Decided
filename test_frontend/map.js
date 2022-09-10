import createGlobe from 'cobe'

const globe = createGlobe(canvas, options)

markers: [
    { location: [37.7595, -122.4367], size: 0.03 },
    { location: [40.7128, -74.006], size: 0.1 }
]

let currentPhi = 0

const globe = createGlobe(canvas, {
  onRender: (state) => {
    // Called on every animation frame.
    // `state` will be an empty object, return updated options.
    state.phi = currentPhi

    // Rotate the globe by 0.01 on every frame.
    currentPhi += 0.01
  },
})