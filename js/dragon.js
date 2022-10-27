console.log('dragon')

let outputCanvas = document.getElementById("outputCanvas");
console.log(outputCanvas)

function doVid(){
    let movie = new etro.Movie({ canvas: outputCanvas })
    let layer = new etro.layer.Video({ startTime: 0, source: videoElement })  // the layer starts at 0s
    movie.addLayer(layer)
    movie.record({ frameRate: 24 })  // or just `play` if you don't need to save it
        .then(blob => {console.log(blob)}) 
}
