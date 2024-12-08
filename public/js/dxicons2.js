//variables
var imagesPath = "img/svg/"; //path to the images
var delayBetweenIcons = .1; //stagger the animation of each iccon (in seconds)
var useRollover = true; //have an animation on rollover
var hoverScale = 1.05; //how much does the icon grow on rollover 
var speed = 1; //speed up or slow down the animations (1 being normal speed)
var playOnStart = true; //play animations on page load
//if you want to give your icons links, add them in order in this array. 
var iconLinks = ["#"];
//var iconLinks = ["http://aprendagames.com",,,"http://aprendagames.com"];//In this example, only the first and fourth have a link. 
//--------------------------NO NEED TO EDIT BELOW THIS LING--------------------------//
var tls = []; //array to hold each of the animations
var tlsIdle = [];
var tlsRollover = [];
var tlsReverse = [];
var tlsActive = [];
var iconNames = [];
var iconStyles = [];
var thisIcons = [];
var allIconsF = [];
//on page load
window.addEventListener('load', function() {
});
function load() {
    var socialMediaIconNames = [
        "addthisIcon",
        "amazonIcon",
        "beboIcon",
        "behanceIcon",
        "bloggerIcon",
        "deliciousIcon",
        "deviantartIcon",
        "diggIcon",
        "dribbleIcon",
        "dropboxIcon",
        "evernoteIcon",
        "facebookIcon",
        "flickrIcon",
        "forrstIcon",
        "githubIcon",
        "googleIcon",
        "groovesharkIcon",
        "instagramIcon",
        "kickstarterIcon",
        "lastfmIcon",
        "linkedinIcon",
        "myspaceIcon",
        "mysteryIcon",
        "picassaIcon",
        "pinterestIcon",
        "quoraIcon",
        "rssIcon",
        "sharethisIcon",
        "skypeIcon",
        "soundcloudIcon",
        "stumbleuponIcon",
        "technoratiIcon",
        "tumblrIcon",
        "twitterIcon",
        "vimeoIcon",
        "wikipediaIcon",
        "wordpressIcon",
        "xingIcon",
        "yahooIcon",
        "youtubeIcon",
        "zerplyIcon",
        "clearNightIcon",
        "lightningIcon",
        "mostlyCloudyIcon",
        "partlyCloudyIcon",
        "partlyCloudyNightIcon",
        "rainyIcon",
        "showersIcon",
        "snowShowersIcon",
        "snowyIcon",
        "sunnyIcon",
        "sunnyShowersIcon",
        "thermometerColdIcon",
        "thermometerHotIcon",
        "thundershowersIcon",
        "windyIcon",
        "windySunnyIcon"
    ];
    //var socialMediaIconNames = ["chrome"];
    iconNames = iconNames.concat(socialMediaIconNames);
    var browserIconNames = [
        "chromeIcon",
        "explorerIcon",
        "firefoxIcon",
        "operaIcon",
        "safariIcon"
    ];
    //var browserIconNames = ["chrome"];
    iconNames = iconNames.concat(browserIconNames);
    window.iconNames = [...new Set(iconNames)];
    [].slice.call(document.querySelectorAll('.browsericon')).forEach(function(elem, index) {
        var thisS = Snap(elem);
        //determine which svg to load
        for (var i = 0; i < iconNames.length; i++) {
            tlsActive[i] = false;
            if (elem.classList.contains(iconNames[i])) {
                var toLoad = iconNames[i];
                if (!window['appended_' + toLoad]) { 
                    Snap.load(imagesPath + toLoad + ".svg", function(f) {
                        window['appended_' + toLoad] = thisS.append(f);
                        window['appended_' + toLoad].attr({ visibility: 'hidden' });
                        determineIcon(index, toLoad, window['appended_' + toLoad], elem);
                        setTimeout(function() {
                        }, 1);
                    });
                } 
else {
                }
            };
        };
    });
}
function makeVisible(appended, vis) {
    if (typeof appended !== 'undefined') {
        appended.attr({ visibility: vis }); //this is because safari shows them for exactly 1 frame
    }
}
var currentWaypoints = 0;
function playWhenVisible(iconNum) {
    if (typeof tls[iconNum] !== 'undefined') {
        currentWaypoints++;
        //console.fine(iconNum)
        setTimeout(function() {
            ////console.debug('icone:' +  JSON.stringify(JSON.decycle(tls[iconNum])));
            tls[iconNum].play();
            currentWaypoints = 0;
        }, delayBetweenIcons * 1000 * currentWaypoints);
    }
}
//determine which icon is being loaded
function determineIcon(index, toLoad, f, elem) {
    allIconsF[index] = f;
    setTimeout(function() {
        var thisIcon = f.select("." + toLoad).node;
        thisIcons[index] = thisIcon;
        iconStyles[index] = thisIcon.style;
        //play the icon-specific animation
        window[toLoad](index, f, thisIcon);
        //stop them if they're not supposed to play right now
        //if(!playOnStart)
        // bozo
        // tls[index].stop();
        //tlsRollover[index].stop();
        //if there are rollovers, add them to each icon
        if (useRollover && iconLinks[index]) {
            /*thisIcon.addEventListener( 'click', function() {
            	if(tlsActive[index]){
            		window.location.href = iconLinks[index];
            	}
            })
            iconStyles[index].cursor =  "var(--cursor-pointer)";*/
            /*
            			thisIcon.addEventListener( 'mouseenter', function() {
            				if(tlsActive[index]){
            					TweenLite.to(thisIcon, .5, {scale:hoverScale, transformOrigin:"50% 50%", ease:Elastic.easeOut});
            					if(tlsRollover[index])
            						tlsRollover[index].restart();
            				}
            			});
            			thisIcon.addEventListener( 'mouseleave', function() {
            				if(tlsActive[index]){
            					TweenLite.to(thisIcon, .5, {scale:1, transformOrigin:"50% 50%", ease:Elastic.easeOut});
            					if(tlsRollover[index])
            						tlsRollover[index].restart();
            				}
            			});*/
        }
        setTimeout(function() {
            makeVisible(f, f.visibility);
        }, 30);
        /*var waypoint = new Waypoint({
          element: elem,
          handler: function() {
           	var thisWaypoint = parseInt(this.key.replace("waypoint-", ""));
           	//console.fine(thisWaypoint)
           	//restartIcons([i])
           	playWhenVisible(thisWaypoint);
          },
          offset: 'bottom-in-view'
        })*/
    }, delayBetweenIcons * 1000 * index)
}
//animation is complete
function animationComplete(index, isActive) {
    tlsActive[index] = isActive;
    if (isActive) {
        if (tlsIdle[index])
            tlsIdle[index].play();
    } 
else {
        if (tlsIdle[index])
            tlsIdle[index].pause();
    }
}
//start the icons over
function restartIcons(iconToRestart) {
    for (var j = 0; j < iconToRestart.length; j++) {
        makeVisible(allIconsF[iconToRestart[j]], "hidden");
    };
    (function myLoop(i) {
        setTimeout(function() {
            makeVisible(allIconsF[iconToRestart[iconToRestart.length - i]], "visible");
            if (typeof tls[iconToRestart[iconToRestart.length - i]] !== 'undefined') {
                tls[iconToRestart[iconToRestart.length - i]].restart();
            }
            if (--i) myLoop(i);
        }, delayBetweenIcons * 1000)
    })(iconToRestart.length);
}
//start the icons over
function playIcons(iconToTweenIn) {
    for (var i = 0; i < iconToTweenIn.length; i++) {
        tls[iconToTweenIn[i]].play();
    };
}
//make the icons animate in reverse, making them dissappear
function reverseIcons(iconsToReverse) {
    for (var i = 0; i < iconsToReverse.length; i++) {
        try {
            if (tls[iconsToReverse[i]]) {
                tls[iconsToReverse[i]].reversed(!tls[iconsToReverse[i]].reversed());
            } 
else {
                console.error('o elemento ' + tls[iconsToReverse[i]] + ' nao existe.');
            }
        } catch (erroReverse) {
            console.error('erro ao realizar reverse do elemento ' + i);
        }
    };
}
//if there's an idle state, play it 
function toIdle(iconsToIdle) {
    for (var i = 0; i < iconsToIdle.length; i++) {
        if (tlsIdle[iconsToIdle[i]])
            tlsIdle[iconsToIdle[i]].play();
    };
}
