(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(e,t,a){"use strict";a.r(t),function(e){var n=a(2),r=a(9),l=a(0),i=a.n(l),c=a(181),o=a.n(c),s=a(169),m=a(165),u=a(151),p=a.n(u),g=a(162),d=a(251);r.a.canUseDOM&&(e.hrtime=function(){return null});var h=[{title:i.a.createElement(i.a.Fragment,null,"Get Demo Instantly"),imageUrl:"img/gear.svg",description:i.a.createElement(i.a.Fragment,null,'Centralized place to get "open to use" Azure demos.')},{title:i.a.createElement(i.a.Fragment,null,"Accelerate Sales"),imageUrl:"img/eye.svg",description:i.a.createElement(i.a.Fragment,null,"The Idea come from our engagements - generate reusable Azure demos, accelerate Azure consumption.")},{title:i.a.createElement(i.a.Fragment,null,"Mission"),imageUrl:"img/puzzle.svg",description:i.a.createElement(i.a.Fragment,null,"Help our sales start conversation & engagement with cutting edge Azure demos.")},{title:i.a.createElement(i.a.Fragment,null,"Kubernetes DevOps Demo"),imageUrl:"img/more-options.svg",description:i.a.createElement(i.a.Fragment,null,"Ready to rock & roll - VIEW DEMOS!",i.a.createElement(d.a,null,i.a.createElement(g.a,{to:"./docs/kubernetes-devops/index"},"Go")))}];function f(e){var t=e.imageUrl,a=e.title,n=e.description,r=Object(m.a)(t);return i.a.createElement("div",{className:o()("col col--3",p.a.feature)},r&&i.a.createElement("div",{className:"text--center"},i.a.createElement("img",{className:p.a.featureImage,src:r,alt:a})),i.a.createElement("h3",null,a),i.a.createElement("p",null,n))}function E(e){return i.a.createElement("div",{className:p.a.homeContainer},i.a.createElement("img",{className:p.a.desktopOnly,src:Object(m.a)("img/hexagons/blue.svg"),style:{position:"absolute",left:"350px",top:"100px",height:"30px"}}),i.a.createElement("img",{className:p.a.desktopOnly,src:Object(m.a)("img/hexagons/pink.svg"),style:{position:"absolute",left:"100px",top:"200px",height:"150px"}}),i.a.createElement("img",{className:p.a.desktopOnly,src:Object(m.a)("img/hexagons/blue.svg"),style:{position:"absolute",left:"250px",top:"450px",height:"70px"}}),i.a.createElement("img",{className:p.a.desktopOnly,src:Object(m.a)("img/hexagons/pink.svg"),style:{position:"absolute",right:"300px",top:"150px",height:"70px"}}),i.a.createElement("img",{className:p.a.desktopOnly,src:Object(m.a)("img/hexagons/blue.svg"),style:{position:"absolute",right:"200px",top:"350px",height:"100px"}}),i.a.createElement("div",{className:p.a.homeSplashFade},i.a.createElement("div",{className:[p.a.wrapper,p.a.homeWrapper]},e.children)))}function v(){return i.a.createElement("div",{className:p.a.coverContainer},i.a.createElement("img",{src:Object(m.a)("img/cover.png"),className:p.a.cover}),i.a.createElement("h3",{className:p.a.projectTitle},"Azure Sales Demo Kit"),i.a.createElement("h4",{className:p.a.projectTitle},"Help our sales start conversation & engagement with cutting edge Azure demos."))}t.default=function(){return i.a.createElement(s.a,{title:"Azure Sales Demo Kit",description:""},i.a.createElement("header",null,i.a.createElement(E,null,i.a.createElement("div",{className:p.a.inner},i.a.createElement(v,null),i.a.createElement("div",{className:p.a.buttonsWrapper},i.a.createElement(d.a,null,i.a.createElement(g.a,{to:Object(m.a)("docs/welcome")},"View Demos")))))),i.a.createElement("main",null,h&&h.length&&i.a.createElement("section",{className:p.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},h.map((function(e,t){return i.a.createElement(f,Object(n.a)({key:t},e))})))))))}}.call(this,a(168))},168:function(e,t){var a,n,r=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(a===setTimeout)return setTimeout(e,0);if((a===l||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:l}catch(e){a=l}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var o,s=[],m=!1,u=-1;function p(){m&&o&&(m=!1,o.length?s=o.concat(s):u=-1,s.length&&g())}function g(){if(!m){var e=c(p);m=!0;for(var t=s.length;t;){for(o=s,s=[];++u<t;)o&&o[u].run();u=-1,t=s.length}o=null,m=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];s.push(new d(e,t)),1!==s.length||m||c(g)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},251:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(2),r=a(10),l=a(152),i=a.n(l),c=a(0),o=a.n(c),s=a(181),m=a.n(s),u=function(e){var t,a=e.mobileHide,l=Object(r.a)(e,["mobileHide"]);return o.a.createElement("button",Object(n.a)({},l,{className:m()((t={},t[i.a.buttonContained]=l.contained,t[i.a.button]=!l.contained,t[i.a.mobileHide]=!!a,t[l.className]=!0,t))}),l.children)}}}]);