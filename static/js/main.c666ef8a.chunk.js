(this.webpackJsonpchurrros=this.webpackJsonpchurrros||[]).push([[0],[,,,,,,,,,,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},,function(n,e,t){"use strict";t.r(e);var o=t(1),r=t.n(o),i=t(3),c=t.n(i),a=(t(13),t(14),t(4)),s=t(5),u=t(8),l=t(7),d=t(6),p=t.n(d),m=document.createElement("div");m.id="pointer-dot";var f=document.createElement("div");f.id="pointer-ring",document.body.insertBefore(m,document.body.children[0]),document.body.insertBefore(f,document.body.children[0]);var b=-100,g=-100,v=-100,y=-100,h=!1,j=function(n){window.onmousemove=function(n){b=n.clientX,g=n.clientY},window.onmousedown=function(n){h=!0},window.onmouseup=function(n){h=!1};var e=function(n,e,t){return(1-t)*n+t*e};window.trace=e;var t=function(e){var t={pointerColor:"#750c7e",ringSize:15,ringClickSize:(n.ringSize||15)-5};return void 0===n[e]?t[e]:n[e]};requestAnimationFrame((function n(){v=e(v,b,.2),y=e(y,g,.2),document.querySelector(".p-action-click:hover")?(m.style.borderColor=t("pointerColor"),!0):(m.style.borderColor="crimson",!1),f.style.borderColor=t("pointerColor"),f.style.padding=h?t("ringClickSize")+"px":t("ringSize")+"px",m.style.transform="translate(".concat(b,"px, ").concat(g,"px)"),f.style.transform="translate(".concat(v-t(h?"ringClickSize":"ringSize"),"px, ").concat(y-t(h?"ringClickSize":"ringSize"),"px)"),requestAnimationFrame(n)}))},S=(t(15),t(16),t(0)),C=function(n){Object(u.a)(t,n);var e=Object(l.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var n={strings:["LEE JU HAE'S WORKS"],typeSpeed:100,backSpeed:50,loop:!0,loopCount:1/0,backDelay:2e3};this.typed=new p.a(this.el,n),j({pointerColor:"#222",ringSize:15,ringClickSize:10})}},{key:"render",value:function(){var n=this;return Object(S.jsxs)("div",{className:"layer",children:[Object(S.jsx)("span",{className:"content",ref:function(e){n.el=e}}),Object(S.jsx)("span",{className:"blank"})]})}}]),t}(r.a.Component);var k=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(C,{})})},x=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),o(n),r(n),i(n),c(n)}))};c.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(k,{})}),document.getElementById("root")),x()}],[[18,1,2]]]);
//# sourceMappingURL=main.c666ef8a.chunk.js.map