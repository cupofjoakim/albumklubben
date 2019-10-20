(this.webpackJsonpalbumklubben=this.webpackJsonpalbumklubben||[]).push([[0],{32:function(e,t,a){e.exports=a(58)},43:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),u=a.n(c),l=a(5),o=a(11),i=a(2),s=a.n(i),m=a(6),f=a(9),p=a(10),d=a(16),b=a(13),v=a(17),w=a(28),h=a.n(w),g="2729fff6586466b0db95b377fc7597c3",k=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r="";return e&&(r="".concat(r,"?method=").concat(e)),t&&(r="".concat(r,"&album=").concat(encodeURIComponent(t))),a&&(r="".concat(r,"&artist=").concat(encodeURIComponent(a))),n&&(r="".concat(r,"&autocorrect=").concat(n)),"".concat(r,"&api_key=").concat(g,"&format=json")},E=function(e){var t=e.filter((function(e){return/^\d+$/.test(e.name)&&4===e.name.length}));return 0===t.length?null:t[0].name},y=function(e){var t=e.name,a=e.artist,n=e.url,r=e.image,c=e.tracks,u=e.tags;return{name:t,artist:a,urls:[{type:"lastfm",url:n}],tracks:c,tags:u.tag,year:E(u.tag),image:r.length>0?r[r.length-1]["#text"]:null}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return encodeURI("".concat(e.toLowerCase(),"-").concat(t.toLowerCase()))},O=function(e,t,a){sessionStorage.setItem(j(t,a),JSON.stringify(e))},x=function(e,t){var a=sessionStorage.getItem(j(e,t));return a?JSON.parse(a):null},N=function(){function e(){Object(f.a)(this,e)}return Object(p.a)(e,null,[{key:"getAlbumByNameAndArtist",value:function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&a){e.next=2;break}throw new Error("Both album and artist needs to be passed");case 2:if(!(n=x(t,a))){e.next=5;break}return e.abrupt("return",n);case 5:return r=k("album.getInfo",t,a),e.abrupt("return",fetch("https://ws.audioscrobbler.com/2.0/"+r).then(function(){var e=Object(m.a)(s.a.mark((function e(n){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.ok){e.next=2;break}throw new Error("Unable to get album data!");case 2:return e.next=4,n.json();case 4:if(!(r=e.sent).error){e.next=7;break}throw new Error("Unable to get album data, if the drive documented correct?");case 7:return c=y(r.album),O(c,t,a),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),C=r.a.createContext(),D=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={loaded:!1,albumData:null,loadAlbumData:function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.state.loaded&&a.setState({loaded:!1}),e.next=4,N.getAlbumByNameAndArtist(t.album,t.artist);case 4:(n=e.sent).urls.push({type:"spotify",url:t.spotifyUrl}),n.forWeek=t.week,a.setState({albumData:n},(function(){h()([n.image],{onSingleImageComplete:function(){a.updateLoadingProgress()}})}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"updateLoadingProgress",value:function(){this.setState({loaded:!0})}},{key:"render",value:function(){var e=this.props.children,t=this.state,a=t.albumData,n=t.loadAlbumData,c=t.loaded;return r.a.createElement(C.Provider,{value:{albumData:a,loaded:c,loadAlbumData:n}},e)}}]),t}(n.Component),S=C,R=function(e,t){return e["gsx$".concat(t)].$t},A=function(e){return e.feed.entry.filter((function(e){return e.gsx$week.$t})).map((function(e){return{week:+R(e,"week"),album:R(e,"album"),artist:R(e,"artist"),spotifyUrl:R(e,"spotify")}}))},I=function(){function e(){Object(f.a)(this,e)}return Object(p.a)(e,null,[{key:"getWeekRows",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://spreadsheets.google.com/feeds/list/1_7q9jusMZAvBBdk4cHoSg-LhjswU76k0XvGv1EC66u0/od6/public/values?alt=json").then(function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=2;break}throw new Error("Unable to get google spreadsheet!");case 2:return e.next=4,t.json();case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:return t=e.sent,e.abrupt("return",A(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),L=r.a.createContext(),U=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={weekRows:null},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getWeekRows();case 2:t=e.sent,this.setState({weekRows:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.children,t=this.state.weekRows;return r.a.createElement(L.Provider,{value:{weekRows:t}},e)}}]),t}(n.Component),B=L,T=a(15),W=function(e){var t=e.displayedWeek,a=e.weeks,n=a.indexOf(t),c=a[a.length-1]===t,u=n>0;return r.a.createElement(r.a.Fragment,null,u&&r.a.createElement(l.b,{className:"week-number--navigation right",to:"/week/".concat(a[n-1]),title:"Previous week"},r.a.createElement("span",null,"\u2190")),!c&&r.a.createElement(l.b,{className:"week-number--navigation left",to:"/week/".concat(a[n+1]),title:"Next week"},r.a.createElement("span",null,"\u2192")))},P=function(){var e=Object(n.useContext)(B).weekRows,t=Object(o.g)().id,a=Object(n.useState)(""),c=Object(T.a)(a,2),u=c[0],i=c[1];if(!e)return null;var s=e.filter((function(e){var t=e.week,a=e.artist,n=e.album;if(!u)return!0;var r=u.toLowerCase();return[t.toString(),n,a].some((function(e){return e.toLowerCase().includes(r)}))})),m=parseInt(t,10);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"week-number--nav-container"},r.a.createElement("div",{className:"week-number--list-header"},r.a.createElement("input",{className:"filter-input",onChange:function(e){var t=e.target.value;return i(t)},placeholder:"Filter albums"})),r.a.createElement("div",{className:"week-number--list"},s.map((function(e){var t=e.week,a=e.album,n=e.artist;return r.a.createElement(l.b,{key:"listnav-".concat(t),className:"week-number--list-item",to:"/week/".concat(t)},r.a.createElement("div",{className:"week-number--list-item--week"},r.a.createElement("span",null,t)),a," - ",n,t===m&&r.a.createElement("span",{className:"secondary-label"},"(Current week)"))})))),r.a.createElement(W,{displayedWeek:m,weeks:e.map((function(e){return e.week}))}))},z=(a(43),function(){var e=Object(n.useContext)(B).weekRows,t=Object(o.g)().id;if(!e||!t)return null;var a=parseInt(t,10);if(!e.filter((function(e){return e.week===a}))[0]){var c=e.map((function(e){return e.week})).sort((function(e,t){return e-t})).pop();return r.a.createElement(o.a,{to:"/week/".concat(c)})}return r.a.createElement("div",{className:"week-number"},r.a.createElement("div",{className:"week-number--current",title:"Now showing week ".concat(t)},t),r.a.createElement(P,null))}),$=a(14),F=(a(54),function(){var e=Object(n.useContext)(S),t=e.loaded,a=e.albumData,c=[];return t&&a.image&&c.push(r.a.createElement("div",{className:"backdrop",style:{backgroundImage:'url("'.concat(a.image,'")')}})),r.a.createElement($.CSSTransitionGroup,{transitionName:"opacity-anim",transitionEnterTimeout:100,transitionLeaveTimeout:300},c)}),M=function(e){var t=e.imageUrl;return r.a.createElement("div",{key:"art",className:"album-info--cover"},r.a.createElement("img",{alt:"album cover",src:t}))},J=a(31),G=function(e){var t=e.url,a=e.children,n=Object(J.a)(e,["url","children"]);return r.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer",href:t},n),a)};G.defaultProps={children:[]};var _=G,H=function(e){var t=e.tags;return 0===t.length?null:r.a.createElement("div",{className:"tags"},t.map((function(e){var t=e.name,a=e.url;return r.a.createElement(_,{key:t+a,className:"tag",url:a},"#",t)})))};H.defaultProps={tags:[]};var q=H,X=function(){return r.a.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{fill:"#1DB954",d:"M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"}))},Y=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"#D41E08",d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.664 15.889c-2.773 0-3.736-1.25-4.248-2.806l-.515-1.604c-.385-1.17-.834-2.084-2.244-2.084-.979 0-1.974.706-1.974 2.678 0 1.539.786 2.502 1.894 2.502 1.249 0 2.083-.931 2.083-.931l.515 1.396s-.866.85-2.679.85c-2.245-.001-3.496-1.316-3.496-3.754 0-2.534 1.251-4.025 3.607-4.025 2.133 0 3.208.77 3.881 2.854l.53 1.604c.385 1.171 1.058 2.021 2.678 2.021 1.091 0 1.668-.24 1.668-.834 0-.465-.273-.802-1.09-.994l-1.091-.256c-1.331-.321-1.861-1.01-1.861-2.101 0-1.748 1.412-2.293 2.854-2.293 1.638 0 2.63.593 2.759 2.037l-1.604.192c-.063-.69-.48-.979-1.251-.979-.706 0-1.138.321-1.138.866 0 .481.208.77.914.93l1.025.225c1.381.321 2.119.994 2.119 2.293 0 1.603-1.347 2.213-3.336 2.213z"}))},Z=function(e){switch(e.type){case"spotify":return r.a.createElement(X,null);case"lastfm":return r.a.createElement(Y,null);default:return null}},K=function(e){var t=e.type,a=e.url;return r.a.createElement(_,{className:"external-action",url:a},r.a.createElement(Z,{type:t}),function(e){switch(e){case"spotify":return"Listen on Spotify";case"lastfm":return"LastFm";default:return null}}(t))},Q=function(e){var t=e.albumData,a=t.name,n=t.year,c=t.artist,u=t.urls,l=t.tags,o=u.find((function(e){return"lastfm"===e.type})).url,i=o.substr(0,o.lastIndexOf("/"));return r.a.createElement("div",{key:"information",className:"album-info--meta"},r.a.createElement("h1",{className:"heading"},r.a.createElement(_,{url:o},a)),r.a.createElement("p",{className:"subheading"},r.a.createElement(_,{url:i},c)," ",r.a.createElement("span",{className:"year"},n)),r.a.createElement(q,{tags:l}),u.map((function(e){var t=e.type,a=e.url;return r.a.createElement(K,{key:t,type:t,url:a})})))},V=(a(55),function(){var e=Object(n.useContext)(B).weekRows,t=Object(n.useContext)(S),a=t.albumData,c=t.loaded,u=t.loadAlbumData,l=Object(n.useState)(!1),i=Object(T.a)(l,2),s=i[0],m=i[1],f=Object(o.g)().id;if(!e)return null;var p=e.filter((function(e){return e.week===parseInt(f,10)})).pop();if(!a||a.forWeek!==p.week)return u(p),null;c&&!s&&setTimeout((function(){return m(!0)}),200);var d=[];return c&&s&&(d.push(r.a.createElement(M,{key:a.image,imageUrl:a.image})),d.push(r.a.createElement(Q,{key:a,albumData:a}))),r.a.createElement("main",{className:"album-info"},r.a.createElement($.CSSTransitionGroup,{transitionName:"album-info--anim",transitionEnterTimeout:200*d.length+300,transitionLeaveTimeout:300},d))}),ee=(a(56),function(){return r.a.createElement("div",{className:"byline"},"A weekend hack by"," ",r.a.createElement("a",{href:"https://github.com/cupofjoakim",title:"cupofjoakims github profile"},"@cupofjoakim"," ",r.a.createElement("span",{role:"img","aria-label":"A waving hand"},"\ud83d\udc4b")))}),te=(a(57),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)});var ae=function(){return r.a.createElement(U,null,r.a.createElement(D,null,r.a.createElement(F,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement(l.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/week/:id"},r.a.createElement(z,null),r.a.createElement(V,null)),r.a.createElement(o.b,{path:"/"},r.a.createElement(o.a,{to:"/week/".concat(te())})))),r.a.createElement(ee,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.c580fec7.chunk.js.map