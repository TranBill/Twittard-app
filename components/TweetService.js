function getMediaData(attachments, mediaIncludes) {
 if (attachments){
   return mediaIncludes.media.filter(mediaItem => {
        if (attachments.media_keys.includes(mediaItem.media_key)) {
            return true;
        }
        return false;
    });
    }
    return[]

}

export {getMediaData};