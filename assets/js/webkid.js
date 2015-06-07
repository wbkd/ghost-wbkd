$(function() {

  function renderSite(data) {
    data = $.xml2json(data);
    var posts = data.channel.item;
    
    renderLatestArticles(posts);
    renderTagList(posts);
  }

  function renderLatestArticles(posts) {

    var $parent = $('.sidebox.latest-articles .sidebox-content');
    if(!$parent) {return};

    for(var i = 0; i < 5; i++) {
      var p = posts[i];
      $parent.append('<p>' + p.title + '</p>');
    }

  }

  function renderTagList(posts) {

    var $parent = $('#taglist');
    var tags = [];

    if(!$parent) {return;}

    posts.forEach(function(p,i) {

      if($.isArray(p.category)) {
        p.category.forEach(function(t,j) {

          if(tags.indexOf(t) < 0) {
            tags.push(t);
          }

        });
      }

    });

    tags.forEach(function(t,i) {
      var $li = $('<li/>');
      var $a = $('<a/>');
      $a.attr('href', '/tag/' + t.replace(' ', '-'));
      $a.html(t);
      $li.append($a);
      $parent.append($li);
    });

  }

  $.ajax({
    dataType: 'xml',
    url: '/rss',
    type: 'GET'
  }).success(renderSite);

});