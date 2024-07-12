function compressVideo(frames) {
    for(let i=0; i<frames.length; i++){
      if(frames[i]==frames[i+1]){
          frames.splice(i,1)
      }
  }
  return frames.length
}