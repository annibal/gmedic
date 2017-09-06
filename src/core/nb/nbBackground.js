
import app from 'core/main/main.js'
import Unsplash, { toJson } from 'unsplash-js';
import gmedic from '../../../gmedic.config.js';

const nbBackgroundChangeTimeout = gmedic.NB_BACKGROUND_CHANGE_TIMEOUT;
const nbBackgroundCacheKey = gmedic.NB_BACKGROUND_CACHE_KEY;
const nbBackgroundProvider = gmedic.NB_BACKGROUND_IMAGE_PROVIDER;
const nbBackgroundVerbose = gmedic.NB_BACKGROUND_VERBOSE;

const nbBackgroundUnsplashQuery = gmedic.UNSPLASH_RANDOM_IMAGE_QUERY;

app.service('nbBackground',[
  '$interval',
  '$rootScope',
  function(
    $interval,
    $rootScope,
  ) {
    this.nbBackgroundChangeTimeout = (parseInt(nbBackgroundChangeTimeout) || 3600)*1000;
    this.nbBackgroundCacheKey = nbBackgroundCacheKey || 'nb_background__last_image_data';
    this.backgroundProvider = (nbBackgroundProvider || 'unsplash').toLowerCase();
    this.verbose = !!nbBackgroundVerbose;
    this.checkIntervalId = null;
    this.backgroundProviders = {
      PROVIDER_UNSPLASH:'unsplash',
    }
    this.backgroundData = {
      loadedTimestamp:new Date().getTime(),
      url:'',
      host:{
        name:'',
        url:''
      },
      author:{
        name:'',
        url:''
      }
    }

    this.imageAPI = {};

    this.v = function() {
      if (console && console.log && this.verbose === true) {
        console.log("<<< nbBackground >>>", ...arguments);
      }
    }

    this.init = function() {
      this.v("Initializing nbBackground")
      this.getCachedData();
      this.instantializeImageAPI();
      this.doCheckThenRenew();

      this.v("Setting up listener 'setInterval' to constantly check if needs new image, interval at 80% of nbBackgroundChangeTimeout, which is "+this.nbBackgroundChangeTimeout+ ". interval id availabled as this.checkIntervalId");
      this.checkIntervalId = $interval(this.doCheckThenRenew, this.nbBackgroundChangeTimeout*0.8);
    }

    this.doCheckThenRenew = function() {
      if (this.isCurrentImageDeprecated()) {
        this.loadNewImageData();
        // $rootScope.$apply();
      }
    }

    this.instantializeImageAPI = function() {
      this.v("Creating instance of API Object to obtain images")
      this.v("Provider is: ",this.backgroundProvider);

      if (this.backgroundProvider == this.backgroundProviders.PROVIDER_UNSPLASH) {
        return this.instantializeUnsplashAPI()
      }

      throw new Error("Image API provider \""+this.backgroundProvider+"\" not supported, failed to initialize API Object");
    }
    this.loadNewImageData = function() {
      this.v("Requesting to our provider a new image")
      this.v("Provider is: ",this.backgroundProvider);

      if (this.backgroundProvider == this.backgroundProviders.PROVIDER_UNSPLASH) {
        return this.loadNewImageDataUnsplash()
      }

      throw new Error("Image API provider \""+this.backgroundProvider+"\" not supported, couldn't load image");
    }

    this.getCachedData = function() {
      this.v("Loading cached data from last served image");

      if (typeof Storage != 'null') {
        this.v("Local Storage is available, attempting to get data at ["+this.nbBackgroundCacheKey+"]");

        var dataStr = localStorage.getItem(this.nbBackgroundCacheKey);
        this.v("DataStr",dataStr);

        if (dataStr != null) {
          this.backgroundData = JSON.parse(dataStr);
          this.v("Accomplished obtaining of cached data", this.backgroundData)
        }
      } else {
        if (console && console.error) {
          console.error("No Local Storage available, will not save current image data")
        }
      }
    }
    this.isCurrentImageDeprecated = function() {
      this.v("Verifying if current image was served before "+this.nbBackgroundChangeTimeout+" milliseconds")
      this.v("Current timestamp: "+new Date().getTime());

      var r = (
        (this.backgroundData.loadedTimestamp + this.nbBackgroundChangeTimeout < new Date().getTime())
        || (this.backgroundData.url == null)
        || (this.backgroundData.url == '')
      )

      this.v(r ? ("Image is deprecated, was served at "+this.backgroundData.loadedTimestamp) : "Image is active")
      return r;
    }
    this.cacheCurrentImageData = function() {
      this.v("Saving new iamge data on cache");

      if (typeof Storage != 'null') {
        this.v("Local storage is available, registering data as string to ["+this.nbBackgroundCacheKey+"]");

        var dataStr = JSON.stringify(this.backgroundData)
        this.v("DataStr",dataStr);

        localStorage.setItem(this.nbBackgroundCacheKey,dataStr)
      } else {
        if (console && console.error) {
          console.error("No Local Storage available, will not save current image data")
        }
      }
    }

    // UNSPLASH
    this.instantializeUnsplashAPI = function() {
      this.imageAPI = new Unsplash({
        applicationId: gmedic.UNSPLASH_APPLICATION_ID,
        secret: gmedic.UNSPLASH_SECRET_ID,
      });
    }
    this.loadNewImageDataUnsplash = function() {
      var utmStuff = 'utm_source=GMedic&utm_medium=referral&utm_campaign=api-credit'

      this.imageAPI.photos.getRandomPhoto(
        { query:(nbBackgroundUnsplashQuery || 'landscape') }
      ).then(toJson).then(json => {

        this.v("From unsplash: "+json,this)
        this.backgroundData = {
          loadedTimestamp:new Date().getTime(),
          url:json.urls.regular+'&'+utmStuff,
          host:{
            name:'Unsplash',
            url:'https://unsplash.com/?'+utmStuff
          },
          author:{
            name:json.user.name,
            url:'https://unsplash.com/@'+json.user.username+'?'+utmStuff
          },
          meta:{
            likes:json.likes,
            views:json.views,
            exif:json.exif,
            location:json.location,
            download:json.links.download+'?'+utmStuff
          }
        }
        this.cacheCurrentImageData();

      })
    }

  }
])
