(this.webpackJsonpsibm=this.webpackJsonpsibm||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e){e.exports=JSON.parse('[{"url":"https://skribbl.io","image":"https://skribbl.io/res/logo.gif","name":"Skribbl","tags":["drawing","words","multiplayer"]},{"url":"https://scattergoriesonline.net/new-game.xhtml","image":"https://cf.geekdo-images.com/eIL4hvMb7ZPgizc7BZOh-g__opengraph/img/ZmLOFkUY_mlRqGp0S7WFkMTHEk8=/fit-in/1200x630/filters:strip_icc()/pic4994410.jpg","name":"Scattergories","tags":["words","multiplayer","fast-paced"]},{"url":"https://rocketcrab.com","image":"https://raw.githubusercontent.com/tannerkrewson/rocketcrab/2411dc0e5700930186dccc91085fec5966daeb9d/public/rocketcrab-logo-text.svg","name":"RocketCrab","tags":["drawing","words","multiplayer"]}]')},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),i=(n(12),n(2)),o=n(3),l=n(5),g=n(4),m=(n(13),n(0)),u=function(e){Object(l.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).getTags=function(){return console.log("Hello"),console.log(e.props.game.tags),e.props.game.tags.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[e," "]})}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[this.props.game.name,Object(m.jsx)("div",{children:Object(m.jsx)("a",{href:this.props.game.url,children:Object(m.jsx)("img",{src:this.props.game.image,className:"game-img"})})}),Object(m.jsx)("div",{children:"What is this game?"}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:this.getTags()})})]})}}]),n}(c.a.Component),h=n(15),p=function(e){Object(l.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).gamesDisplay=function(){return Object(m.jsx)(u,{game:e.state.currentGame})},e.clickedButton=function(){var t=e.state.gamePos===h.length-1?0:e.state.gamePos+1;e.setState({gamePos:t,currentGame:h[t]})},h.sort((function(){return.5-Math.random()})),e.state={gamePos:0,currentGame:h[0],games:h},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("h1",{children:"S.I.B.M."}),Object(m.jsx)("h4",{children:"For Super Import Business Meeting use only"}),this.gamesDisplay(),Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:this.clickedButton,children:"Next"})})]})})}}]),n}(r.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.f1673df6.chunk.js.map