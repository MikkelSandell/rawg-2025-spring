const getCroppedImageUrl = (url: string) =>{
    return url.replace("media/games", "media/crop/600/400/games")
};

export default getCroppedImageUrl;