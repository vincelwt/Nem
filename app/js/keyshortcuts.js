/*** General controls ***/

Mousetrap.bind('down', function(e) {
  if (g.selected != null && g.selected+1 < trackList.length) {

    var el = document.querySelectorAll("[index='"+g.selected+"']")[0];
    var distance_bottom = window.innerHeight - el.getBoundingClientRect().bottom

    el.classList.remove("selected");
    g.selected++;
    document.querySelectorAll("[index='"+g.selected+"']")[0].classList.add("selected");

    if (distance_bottom > 50) e.preventDefault();

  }
});

Mousetrap.bind('up', function(e) {
  if (g.selected != null && g.selected > 0) {

    var el = document.querySelectorAll("[index='"+g.selected+"']")[0];
    var distance_top = el.getBoundingClientRect().top

    el.classList.remove("selected");
    g.selected--;
    document.querySelectorAll("[index='"+g.selected+"']")[0].classList.add("selected");

    if (distance_top > 50) e.preventDefault();

  }
});

Mousetrap.bind('left', function(e) {
  if (settings.layout = "coverflow")
    try { coverflow('coverflow').left() } catch (e) {};
});

Mousetrap.bind('right', function(e) {
  if (settings.layout = "coverflow")
    try { coverflow('coverflow').right() } catch (e) {};
});

Mousetrap.bind('enter', function(e) {
  if (g.selected != null) {
    playByIndex(g.selected);
    e.preventDefault();
  }
});

Mousetrap.bind('mod+f', function(e) {
  getById("search").focus();
});

//// Dark mode

Mousetrap.bind('mod+d', function(e) {

  if (getById('app').classList.contains('dark')) {
    settings.dark = false;
    removeClass('app', 'dark');
  } else {
    settings.dark = true;
    addClass('app', 'dark');
  }
  conf.set("settings", settings);

});

//// Arc mode

Mousetrap.bind('mod+a', function(e) {

  if (getById('app').classList.contains('arc')) {
    settings.dark = false;
    removeClass('app', 'arc');
  } else {
    settings.dark = true;
    addClass('app', 'arc');
  }
  conf.set("settings", settings);

});

/*** Player controls ***/

Mousetrap.bind('space', function(e) {
  playPause();
  e.preventDefault();
});

Mousetrap.bind('l', function(e) {
  FavPlaying();
  e.preventDefault();
});

Mousetrap.bind(['mod+right','n'], function(e) {
  nextTrack();
  e.preventDefault();
});

Mousetrap.bind(['mod+left','p'], function(e) {
  prevTrack();
  e.preventDefault();
});

/* ctrl+q to add files on playlist */
Mousetrap.bind(['mod+q','q'],function(e){
  if (g.selected != null) {
  playingTrackList.splice(g.playing.indexPlaying+1, 0, trackList[g.selected]);
  updateTrackListIndexes();
    e.preventDefault();
  }
})

/*** Toggle developper tools  **/

Mousetrap.bind('mod+alt+i', function(e) {
  require('electron').remote.getCurrentWindow().toggleDevTools();
  e.preventDefault();
});
