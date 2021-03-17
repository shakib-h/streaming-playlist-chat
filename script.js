var player = videojs('video', {
    autoplay: true,
    fluid: true,
    aspectRatio: '16:9'
}, function() {
    this.on('error', function(event) {
        //var time = this.currentTime();
        //if (this.error().code === 2) {
        //    this.error(null).pause().load().currentTime(time).play();
        //}
        if (this.error().code === 4) {
            player.playlist.next();
        }
    });
});

player.playlist([{
    name: 'Bip Bop',
    description: 'Explore the depths of our planet\'s oceans. ' +
        'Experience the stories that connect their world to ours. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
        'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
        'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
    duration: 45,
    sources: [{
        src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
        type: 'application/x-mpegURL'


    }, ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [{
        srcset: 'https://vjs.zencdn.net/v/oceans.png',
        type: 'image/jpeg',
        media: '(min-width: 400px;)'
    }, {
        src: 'https://vjs.zencdn.net/v/oceans.png'
    }]
}, {
    name: 'Disney\'s Oceans 2',
    description: 'Explore the depths of our planet\'s oceans. ' +
        'Experience the stories that connect their world to ours. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
        'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
        'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
    duration: 45,
    sources: [{
        src: 'http://vjs.zencdn.net/v/oceans.mp4?3',
        type: 'video/mp4'
    }, {
        src: 'http://vjs.zencdn.net/v/oceans.webm?3',
        type: 'video/webm'
    }, ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [{
        srcset: 'https://vjs.zencdn.net/v/oceans.png',
        type: 'image/jpeg',
        media: '(min-width: 400px;)'
    }, {
        src: 'https://vjs.zencdn.net/v/oceans.png'
    }]
}, {
    name: 'Disney\'s Oceans 3',
    description: 'Explore the depths of our planet\'s oceans. ' +
        'Experience the stories that connect their world to ours. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
        'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
        'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
    duration: 45,
    sources: [{
        src: 'https://www.youtube.com/playlist?list=PL9By_0jFDR8MVEuWlF4557eICwQnS7i3s',
        type: 'video/youtube'

    }, ],

    // you can use <picture> syntax to display responsive images
    thumbnail: [{
        srcset: 'https://vjs.zencdn.net/v/oceans.png',
        type: 'image/jpeg',
        media: '(min-width: 400px;)'
    }, {
        src: 'https://vjs.zencdn.net/v/oceans.png'
    }]
}, {
    name: 'Sintel (No Thumbnail)',
    description: 'The film follows a girl named Sintel who is searching for a baby dragon she calls Scales.',
    sources: [{
        src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
        type: 'video/mp4'
    }, {
        src: 'http://media.w3.org/2010/05/sintel/trailer.webm',
        type: 'video/webm'
    }, {
        src: 'http://media.w3.org/2010/05/sintel/trailer.ogv',
        type: 'video/ogg'
    }],
    thumbnail: [{
        srcset: 'https://media.w3.org/2010/05/sintel/poster.png',
        type: 'image/jpeg',
        media: '(min-width: 400px;)'
    }, {
        src: 'https://media.w3.org/2010/05/sintel/poster.png'
    }]
}, ]);

player.playlist.autoadvance(2);
player.playlistUi({
    horizontal: true
});