!function($){var t={embedLoaded:!0,assetsLocation:"",cssLocation:"",fontsLocation:"",jsLocation:"http://www.rathemes.com/promedical/js/",selectorTemplate:"div.revslider[data-alias={alias}]"},e=[],s=[],n=function(e){t=$.extend(t,e)},o=function(t,e,s,n){var o=void 0===n||n?t.replace(/([.*+?^$|(){}\[\]])/gm,"\\$1"):t;return s.replace(new RegExp("("+o+")","g"),e)},a=function(e,n){void 0!==n.styles&&(t.assetsLocation.length&&(n.styles=o('"'+n.locations.assets,'"'+t.assetsLocation,n.styles)),t.cssLocation.length&&(n.styles=o('"'+n.locations.css,'"'+t.cssLocation,n.styles)),t.fontsLocation.length&&(n.styles=o('"'+n.locations.fonts,'"'+t.fontsLocation,n.styles)),$("head").append(n.styles)),void 0!==n.assets&&$.each(n.assets,function(e,a){var c=a;t.cssLocation.length&&-1==c.indexOf(n.locations.fonts)&&(c=o(n.locations.css,t.cssLocation,c)),t.fontsLocation.length&&(c=o(n.locations.fonts,t.fontsLocation,c)),-1==s.indexOf(c)&&(s.push(c),$('link[href="'+c+'"]').length||(console.log("add",c),$("head").append('<link rel="stylesheet" href="'+c+'" type="text/css" />')))}),$(e).length&&void 0!==n.content&&(t.assetsLocation.length&&(n.content=o('"'+n.locations.assets,'"'+t.assetsLocation,n.content)),t.cssLocation.length&&(n.content=o('"'+n.locations.css,'"'+t.cssLocation,n.content)),t.fontsLocation.length&&(n.content=o('"'+n.locations.fonts,'"'+t.fontsLocation,n.content)),t.jsLocation.length&&(n.content=o('"'+n.locations.js,'"'+t.jsLocation,n.content),n.content=o("jsFileLocation(?:.*),",'jsFileLocation:"'+t.jsLocation+'",',n.content,!1)),$(e).html(n.content))};$.fn.embedRevslider=function(o){var c="",i={};switch(0==arguments.length?c="init":1==arguments.length?(c="init",i=arguments[0]):(c=arguments[0],i=arguments[1]),c){case"init":if(n(i),"undefined"!=typeof punchgs&&s.push("jquery.themepunch.tools.min.js"),void 0!==jQuery().revolution&&s.push("jquery.themepunch.revolution.min.js"),void 0!==document.styleSheets)for(var l=0;l<document.styleSheets.length;l++)if(document.styleSheets[l].href&&-1!=document.styleSheets[l].href.indexOf("settings.css")){s.push("settings.css");break}t.embedLoaded&&$.each(e,function(e,s){a(t.selectorTemplate.replace("{alias}",s.alias),s)});break;case"load":var h=JSON.parse(i);if(void 0!==h.alias){var r=!1;$.each(e,function(t,s){s.alias==h.alias&&(e[t]=h,r=!0)}),r||e.push(h)}break;case"embed":a(this,JSON.parse(i));break;case"options":n(i);break}return this}}(jQuery);