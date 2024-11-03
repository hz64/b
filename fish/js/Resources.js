var resourceLoadCompleted = false;
var resourcesToLoad = 0;
var resourcesLoaded = 0;

var imgMask;
var imgBowl;
var imgBowlShine;
var imgBowlGlow;
var imgBowlGlowMask;
var imgBowlShadow;
var imgFish;
var imgLogo;
var imgNeedle;

function LoadResources() {
    resourcesLoaded = 0;
    resourcesToLoad = 10;

    imgMask = new Image();
    imgMask.onload = ResourceLoadComplete;
    imgMask.src = "image/Mask.png";

    imgBowl = new Image();
    imgBowl.onload = ResourceLoadComplete;
    imgBowl.src = "image/Bowl.png";

    imgBowlShine = new Image();
    imgBowlShine.onload = ResourceLoadComplete;
    imgBowlShine.src = "image/BowlShine.png";

    imgBowlGlow = new Image();
    imgBowlGlow.onload = ResourceLoadComplete;
    imgBowlGlow.src = "image/BowlGlow.png";

    imgBowlGlowMask = new Image();
    imgBowlGlowMask.onload = ResourceLoadComplete;
    imgBowlGlowMask.src = "image/BowlGlowMask.png";

    imgFish = new Image();
    imgFish.onload = ResourceLoadComplete;
    imgFish.src = "image/FishStrip.png";

    imgBowlShadow = new Image();
    imgBowlShadow.onload = ResourceLoadComplete;
    imgBowlShadow.src = "image/BowlShadow.png";

    imgLogo = new Image();
    imgLogo.onload = ResourceLoadComplete;
    imgLogo.src = "image/Logo.png";

    imgGauge = new Image();
    imgGauge.onload = ResourceLoadComplete;
    imgGauge.src = "image/Gauge.png";

    imgNeedle = new Image();
    imgNeedle.onload = ResourceLoadComplete;
    imgNeedle.src = "image/Needle.png";
}


function ResourceLoadComplete() {
    resourcesLoaded++;
    if (resourcesLoaded == resourcesToLoad) {
        resourceLoadCompleted = true;
        setTimeout(FinishLoading, INTRODUCTION_DELAY);
    }
}