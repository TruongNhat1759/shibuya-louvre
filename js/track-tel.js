window.isMobile=navigator.userAgent.match(/(?:iphone|ipod|android.*mobile)/i),window.gaEventTrackLimit=2e3,document.addEventListener("click",function(e){if(window.isMobile&&window.ga&&e.target)for(var t=e.target;t;){if("a"==t.tagName.toLowerCase()){var i=t.getAttribute("href")||"";if(i.match(/^tel\:(.*)$/)){e.preventDefault();var a,n=RegExp.$1,r=!1,o=function(){if(r)return!1;r=!0,location.href=i},g=t.getAttribute("id");if(g)a="#"+g;else{var l=4,d=t.parentElement;for(a="a";l--&&d;){if(d.getAttribute("id")){a="#"+d.getAttribute("id")+" "+a;break}a=d.tagName.toLowerCase()+" "+a,d=d.parentElement}}var c="telto-"+n.replace(/\-/g,"");ga("send","event","Tel",c,a,{hitCallback:o,nonInteraction:!0}),setTimeout(o,window.gaEventTrackLimit)}break}t=t.parentElement}});