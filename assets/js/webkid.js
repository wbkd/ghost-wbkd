function setColorsFilter() {
  var invertedPercent = Cookies.get("invertedPercent");
  if (invertedPercent === undefined) {
    invertedPercent = "0%";
  }
  $("body").css("filter", "invert(" + invertedPercent + ")");
}

function invert() {
  var inverted = Cookies.get("invertColors");
  if (inverted == "0%") inverted = "100%"
  else inverted = "0%";
  Cookies.set("invertColors", inverted);
  setColorsFilter();
}

$(function() {
  setColorsFilter();

  var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  function renderSite(data) {
    data = $.xml2json(data);
    var posts = data.channel.item;
   
    renderLatestArticles(posts);
  }

  function renderLatestArticles(posts) {
    var $parent = $('.sidebox.latest-articles .sidebox-content');
    if(!$parent) {return};

    for(var i = 0; i < Math.min(posts.length, 5); i++) {
      var p = posts[i];
      var date = new Date(p.pubDate);
      var dateStr = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
      var $a = $('<a href="' + p.link + '"><div class="date">' + dateStr + '</div><div>' + p.title + '</div></a>');
      if(i == 4) {
        $a.addClass('last');
      }
      $parent.append($a);
    }
    
    $parent.removeClass('loading');
  }

  $.ajax({
    dataType: 'xml',
    url: '/rss',
    type: 'GET'
  }).success(renderSite);

});
