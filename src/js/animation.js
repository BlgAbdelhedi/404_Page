let drop = document.getElementsByClassName('drop')

function reverseRepeat(tl) {
  tl.reverse(0);
}
function complete(tl) {
  tl.restart();
}

var tl = new TimelineMax({
  onReverseComplete:reverseRepeat,
  onReverseCompleteParams:['{self}'],
  onComplete:complete,
  onCompleteParams:['{self}']
});

tl.to(drop, 3, {top: "800px", ease:Linear.easeNone});
