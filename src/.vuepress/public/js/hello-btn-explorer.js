const Ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))h(d);new MutationObserver(d=>{for(const c of d)if(c.type==="childList")for(const b of c.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&h(b)}).observe(document,{childList:!0,subtree:!0});function o(d){const c={};return d.integrity&&(c.integrity=d.integrity),d.referrerpolicy&&(c.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?c.credentials="include":d.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function h(d){if(d.ep)return;d.ep=!0;const c=o(d);fetch(d.href,c)}};Ze();function oe(){}function $e(e){return e()}function Be(){return Object.create(null)}function ne(e){e.forEach($e)}function Qe(e){return typeof e=="function"}function et(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function tt(e){return Object.keys(e).length===0}function n(e,t){e.appendChild(t)}function R(e,t,o){e.insertBefore(t,o||null)}function G(e){e.parentNode.removeChild(e)}function pe(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function s(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function k(){return H(" ")}function re(e,t,o,h){return e.addEventListener(t,o,h),()=>e.removeEventListener(t,o,h)}function a(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function ot(e){return Array.from(e.childNodes)}function lt(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function T(e,t,o,h){o===null?e.style.removeProperty(t):e.style.setProperty(t,o,h?"important":"")}function u(e,t,o){e.classList[o?"add":"remove"](t)}function nt(e){const t={};for(const o of e)t[o.name]=o.value;return t}let Ce;function le(e){Ce=e}const te=[],Ie=[],ke=[],Ve=[],rt=Promise.resolve();let _e=!1;function at(){_e||(_e=!0,rt.then(Xe))}function ye(e){ke.push(e)}const ve=new Set;let me=0;function Xe(){const e=Ce;do{for(;me<te.length;){const t=te[me];me++,le(t),it(t.$$)}for(le(null),te.length=0,me=0;Ie.length;)Ie.pop()();for(let t=0;t<ke.length;t+=1){const o=ke[t];ve.has(o)||(ve.add(o),o())}ke.length=0}while(te.length);for(;Ve.length;)Ve.pop()();_e=!1,ve.clear(),le(e)}function it(e){if(e.fragment!==null){e.update(),ne(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ye)}}const ht=new Set;function st(e,t){e&&e.i&&(ht.delete(e),e.i(t))}function ct(e,t,o,h){const{fragment:d,on_mount:c,on_destroy:b,after_update:p}=e.$$;d&&d.m(t,o),h||ye(()=>{const m=c.map($e).filter(Qe);b?b.push(...m):ne(m),e.$$.on_mount=[]}),p.forEach(ye)}function dt(e,t){const o=e.$$;o.fragment!==null&&(ne(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function bt(e,t){e.$$.dirty[0]===-1&&(te.push(e),at(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ft(e,t,o,h,d,c,b,p=[-1]){const m=Ce;le(e);const i=e.$$={fragment:null,ctx:null,props:c,update:oe,not_equal:d,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:Be(),dirty:p,skip_bound:!1,root:t.target||m.$$.root};b&&b(i.root);let f=!1;if(i.ctx=o?o(e,t.props||{},($,C,...S)=>{const g=S.length?S[0]:C;return i.ctx&&d(i.ctx[$],i.ctx[$]=g)&&(!i.skip_bound&&i.bound[$]&&i.bound[$](g),f&&bt(e,$)),C}):[],i.update(),f=!0,ne(i.before_update),i.fragment=h?h(i.ctx):!1,t.target){if(t.hydrate){const $=ot(t.target);i.fragment&&i.fragment.l($),$.forEach(G)}else i.fragment&&i.fragment.c();t.intro&&st(e.$$.fragment),ct(e,t.target,t.anchor,t.customElement),Xe()}le(m)}let Ye;typeof HTMLElement=="function"&&(Ye=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map($e).filter(Qe);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(e,t,o){this[e]=o}disconnectedCallback(){ne(this.$$.on_disconnect)}$destroy(){dt(this,1),this.$destroy=oe}$on(e,t){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(t),()=>{const h=o.indexOf(t);h!==-1&&o.splice(h,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});function qe(e,t,o){const h=e.slice();return h[11]=t[o],h}function Fe(e,t,o){const h=e.slice();return h[14]=t[o],h}function Re(e,t,o){const h=e.slice();return h[14]=t[o],h}function Ge(e,t,o){const h=e.slice();return h[19]=t[o],h}function Ke(e){let t,o,h=e[19]+"",d,c,b,p;function m(){return e[6](e[19])}return{c(){t=s("li"),o=s("button"),d=H(h),c=k(),a(o,"class","tab px-4 py-1 border-none"),u(o,"selected",e[0].color===e[19]),a(t,"class","rounded-sm text-charcoal"),u(t,"bg-charcoal",e[0].color===e[19]),u(t,"text-white",e[0].color===e[19])},m(i,f){R(i,t,f),n(t,o),n(o,d),n(t,c),b||(p=re(o,"click",m),b=!0)},p(i,f){e=i,f&17&&u(o,"selected",e[0].color===e[19]),f&17&&u(t,"bg-charcoal",e[0].color===e[19]),f&17&&u(t,"text-white",e[0].color===e[19])},d(i){i&&G(t),b=!1,p()}}}function Ue(e){let t,o,h=e[14]+"",d,c,b,p;function m(){return e[7](e[14])}return{c(){t=s("li"),o=s("button"),d=H(h),c=k(),a(o,"class","tab px-4 py-1 border-none"),u(o,"selected",e[0].theme===e[14]),a(t,"class","rounded-sm text-charcoal"),u(t,"bg-charcoal",e[0].theme===e[14]),u(t,"text-white",e[0].theme===e[14])},m(i,f){R(i,t,f),n(t,o),n(o,d),n(t,c),b||(p=re(o,"click",m),b=!0)},p(i,f){e=i,f&17&&u(o,"selected",e[0].theme===e[14]),f&17&&u(t,"bg-charcoal",e[0].theme===e[14]),f&17&&u(t,"text-white",e[0].theme===e[14])},d(i){i&&G(t),b=!1,p()}}}function We(e){let t,o,h=e[14]+"",d,c,b,p;function m(){return e[8](e[14])}return{c(){t=s("li"),o=s("button"),d=H(h),c=k(),a(o,"class","tab px-4 py-1 border-none"),u(o,"selected",e[0].theme===e[14]),a(t,"class","rounded-sm text-charcoal"),u(t,"bg-charcoal",e[0].theme===e[14]),u(t,"text-white",e[0].theme===e[14])},m(i,f){R(i,t,f),n(t,o),n(o,d),n(t,c),b||(p=re(o,"click",m),b=!0)},p(i,f){e=i,f&17&&u(o,"selected",e[0].theme===e[14]),f&17&&u(t,"bg-charcoal",e[0].theme===e[14]),f&17&&u(t,"text-white",e[0].theme===e[14])},d(i){i&&G(t),b=!1,p()}}}function Je(e){let t,o,h=e[11]+"",d,c,b,p;function m(){return e[9](e[11])}return{c(){t=s("li"),o=s("button"),d=H(h),c=k(),a(o,"class","tab px-4 py-1 border-none"),u(o,"selected",e[0].hover===e[11]),a(t,"class","rounded-sm text-charcoal"),u(t,"bg-charcoal",e[0].hover===e[11]),u(t,"text-white",e[0].hover===e[11])},m(i,f){R(i,t,f),n(t,o),n(o,d),n(t,c),b||(p=re(o,"click",m),b=!0)},p(i,f){e=i,f&17&&u(o,"selected",e[0].hover===e[11]),f&17&&u(t,"bg-charcoal",e[0].hover===e[11]),f&17&&u(t,"text-white",e[0].hover===e[11])},d(i){i&&G(t),b=!1,p()}}}function gt(e){let t,o,h,d,c,b,p,m,i,f,$,C,S,g,L,Le,A,ze,D,ae,Te,K,Ee,U,N,W,J,He,ie,Me,Q,X,je,he,Ae,P,M,z,j,se,Se,ce,O,de,be,we,fe,ge,Ne,Y,Z,ee,Oe,ue,De,B,xe,Pe,I=e[4].colors,w=[];for(let r=0;r<I.length;r+=1)w[r]=Ke(Ge(e,I,r));let V=e[4].ignoreTheme,x=[];for(let r=0;r<V.length;r+=1)x[r]=Ue(Re(e,V,r));let q=e[4].themeAware,v=[];for(let r=0;r<q.length;r+=1)v[r]=We(Fe(e,q,r));let F=e[4].hovers,_=[];for(let r=0;r<F.length;r+=1)_[r]=Je(qe(e,F,r));return{c(){t=s("div"),o=s("nav"),h=s("div"),d=s("span"),d.textContent="Color",c=k(),b=s("ul");for(let r=0;r<w.length;r+=1)w[r].c();p=k(),m=s("div"),i=s("div"),f=s("span"),f.textContent="Theme Ignore",$=k(),C=s("ul");for(let r=0;r<x.length;r+=1)x[r].c();S=k(),g=s("div"),L=s("span"),L.textContent="Theme Aware",Le=k(),A=s("ul");for(let r=0;r<v.length;r+=1)v[r].c();ze=k(),D=s("div"),ae=s("span"),ae.textContent="Hover",Te=k(),K=s("ul");for(let r=0;r<_.length;r+=1)_[r].c();Ee=k(),U=s("main"),N=s("div"),W=s("div"),J=s("button"),He=H("\u014D\xA0\xA0\xA0Continue with Hell\u014D"),Me=k(),Q=s("div"),X=s("button"),je=H("\u014D\xA0\xA0\xA0Continue with Hell\u014D"),Ae=k(),P=s("section"),M=s("pre"),z=s("code"),j=s("span"),se=s("span"),se.innerHTML='<span class="token punctuation">&lt;</span>button',Se=H(" "),ce=s("span"),ce.textContent="class",O=s("span"),de=s("span"),de.textContent="=",be=s("span"),be.textContent='"',we=H(e[3]),fe=s("span"),fe.textContent='"',ge=s("span"),ge.textContent=">",Ne=H(`
    \u014D`),Y=s("span"),Y.textContent="&nbsp;",Z=s("span"),Z.textContent="&nbsp;",ee=s("span"),ee.textContent="&nbsp;",Oe=H(`Continue with Hell\u014D
  `),ue=s("span"),ue.innerHTML='<span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span>',De=k(),B=s("button"),B.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" data-v-0e230456=""><path fill="none" d="M0 0h24v24H0z" data-v-0e230456=""></path><path fill="white" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" data-v-0e230456=""></path></svg>',this.c=oe,a(d,"class","label mb-2 font-medium"),a(b,"class","inline-flex space-x-1 border border-charcoal p-0.5 rounded-sm"),a(h,"class","inline-flex flex-col items-center"),a(f,"class","label mb-2 font-medium"),a(C,"class","inline-flex space-x-1 rounded-sm p-0.5"),T(C,"border-left","1px solid #303030"),T(C,"border-top","1px solid #303030"),T(C,"border-bottom","1px solid #303030"),a(i,"class","inline-flex flex-col items-center"),a(L,"class","label mb-2 font-medium"),a(A,"class","inline-flex space-x-1 rounded-l-sm rounded-sm p-0.5 -ml-2"),T(A,"border-right","1px solid #303030"),T(A,"border-top","1px solid #303030"),T(A,"border-bottom","1px solid #303030"),a(g,"class","inline-flex flex-col items-center"),a(ae,"class","label mb-2 font-medium"),a(K,"class","inline-flex space-x-1 border border-charcoal rounded-sm p-0.5"),a(D,"class","inline-flex flex-col items-center"),a(o,"class","w-full py-3 flex items-center justify-around"),T(o,"background","#c1c1c1"),a(J,"class",ie=`${e[3]} ${e[2]}`),a(W,"id","light-mode"),a(W,"class","w-1/2 bg-white border border-dashed border-black h-44 flex items-center justify-center"),a(X,"class",he=`${e[3]} ${e[2]}`),a(Q,"id","dark-mode"),a(Q,"class","w-1/2 bg-dark h-44 border border-dashed border-white flex items-center justify-center"),a(N,"id","preview-container"),a(N,"class","flex"),a(se,"class","token tag"),a(ce,"class","token attr-name"),a(de,"class","token punctuation attr-equals"),a(be,"class","token punctuation"),a(fe,"class","token punctuation"),a(O,"class","token attr-value"),a(ge,"class","token punctuation"),a(j,"class","token tag"),T(j,"margin-left","18px"),a(Y,"class","token entity named-entity"),a(Y,"title","\xA0"),a(Z,"class","token entity named-entity"),a(Z,"title","\xA0"),a(ee,"class","token entity named-entity"),a(ee,"title","\xA0"),a(ue,"class","token tag"),a(z,"class","language-markup"),u(z,"flash",e[1]),a(M,"class","language-markup"),a(M,"tabindex","0"),T(M,"margin-top","0px"),T(M,"padding-left","5px"),T(M,"font-weight","600"),T(M,"font-size","0.85em"),a(B,"id","copy-btn"),a(B,"class","absolute top-3 right-3 opacity-60"),a(P,"class","relative -mt-2"),a(t,"id","hello-btn-explorer")},m(r,y){R(r,t,y),n(t,o),n(o,h),n(h,d),n(h,c),n(h,b);for(let l=0;l<w.length;l+=1)w[l].m(b,null);n(o,p),n(o,m),n(m,i),n(i,f),n(i,$),n(i,C);for(let l=0;l<x.length;l+=1)x[l].m(C,null);n(m,S),n(m,g),n(g,L),n(g,Le),n(g,A);for(let l=0;l<v.length;l+=1)v[l].m(A,null);n(o,ze),n(o,D),n(D,ae),n(D,Te),n(D,K);for(let l=0;l<_.length;l+=1)_[l].m(K,null);n(t,Ee),n(t,U),n(U,N),n(N,W),n(W,J),n(J,He),n(N,Me),n(N,Q),n(Q,X),n(X,je),n(U,Ae),n(U,P),n(P,M),n(M,z),n(z,j),n(j,se),n(j,Se),n(j,ce),n(j,O),n(O,de),n(O,be),n(O,we),n(O,fe),n(j,ge),n(z,Ne),n(z,Y),n(z,Z),n(z,ee),n(z,Oe),n(z,ue),n(P,De),n(P,B),xe||(Pe=re(B,"click",e[5]),xe=!0)},p(r,[y]){if(y&17){I=r[4].colors;let l;for(l=0;l<I.length;l+=1){const E=Ge(r,I,l);w[l]?w[l].p(E,y):(w[l]=Ke(E),w[l].c(),w[l].m(b,null))}for(;l<w.length;l+=1)w[l].d(1);w.length=I.length}if(y&17){V=r[4].ignoreTheme;let l;for(l=0;l<V.length;l+=1){const E=Re(r,V,l);x[l]?x[l].p(E,y):(x[l]=Ue(E),x[l].c(),x[l].m(C,null))}for(;l<x.length;l+=1)x[l].d(1);x.length=V.length}if(y&17){q=r[4].themeAware;let l;for(l=0;l<q.length;l+=1){const E=Fe(r,q,l);v[l]?v[l].p(E,y):(v[l]=We(E),v[l].c(),v[l].m(A,null))}for(;l<v.length;l+=1)v[l].d(1);v.length=q.length}if(y&17){F=r[4].hovers;let l;for(l=0;l<F.length;l+=1){const E=qe(r,F,l);_[l]?_[l].p(E,y):(_[l]=Je(E),_[l].c(),_[l].m(K,null))}for(;l<_.length;l+=1)_[l].d(1);_.length=F.length}y&12&&ie!==(ie=`${r[3]} ${r[2]}`)&&a(J,"class",ie),y&12&&he!==(he=`${r[3]} ${r[2]}`)&&a(X,"class",he),y&8&&lt(we,r[3]),y&2&&u(z,"flash",r[1])},i:oe,o:oe,d(r){r&&G(t),pe(w,r),pe(x,r),pe(v,r),pe(_,r),xe=!1,Pe()}}}function ut(e,t,o){let h;const d={colors:["Black","White"],ignoreTheme:["Light","Dark"],themeAware:["Invert","Static"],hovers:["Default","Glow","Flare","None"]},c={color:"Black",theme:"Light",hover:"Default"};let b=!1,p;const m=g=>{let L=`hello-btn-${g.color.toLowerCase()}-`;switch(g.theme){case"Light":L+="on-light";break;case"Dark":L+="on-dark";break;case"Invert":L+="and-invert";break;case"Static":L+="and-static";break}return g.hover==="Default"?o(2,p=L+"-force"):o(2,p=`hello-btn-hover-${g.hover.toLowerCase()}-force`),setTimeout(()=>{o(2,p=null)},250),g.hover!=="Default"&&(L+=` hello-btn-hover-${g.hover.toLowerCase()}`),L},i=async()=>{o(1,b=!0);const g=`
<button class="${h}">
  \u014D&nbsp;&nbsp;&nbsp;Continue with Hell\u014D
</button>
    `;await navigator.clipboard.writeText(g),setTimeout(()=>{o(1,b=!1)},500)},f=g=>o(0,c.color=g,c),$=g=>o(0,c.theme=g,c),C=g=>o(0,c.theme=g,c),S=g=>o(0,c.hover=g,c);return e.$$.update=()=>{e.$$.dirty&1&&o(3,h=m(c))},[c,b,p,h,d,i,f,$,C,S]}class pt extends Ye{constructor(t){super(),this.shadowRoot.innerHTML=`<style>@import url("https://cdn.hello.coop/css/hello-button.css");#dark-mode .hello-btn-black-and-static{background:rgb(48,48,48);color:rgba(212,212,212);box-shadow:0 0 0 2px rgb(88,88,88)}#dark-mode .hello-btn-white-and-static{background:rgba(212,212,212);color:rgba(48,48,48);box-shadow:0 0 0 1px rgba(212,212,212)}#light-mode .hello-btn-black-and-static{background:rgb(48,48,48);color:white;box-shadow:0 0 0 1px rgb(48,48,48)}#light-mode .hello-btn-white-and-static{background:white;color:rgba(48,48,48);box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-invert{background:rgba(212,212,212);color:rgb(48,48,48);box-shadow:0 0 0 1px rgb(212,212,212)}#dark-mode .hello-btn-white-and-invert{background:rgba(48,48,48);color:rgba(212,212,212);box-shadow:0 0 0 2px rgba(88,88,88)}#light-mode .hello-btn-black-and-invert{background:rgb(48,48,48);color:white;box-shadow:0 0 0 1px rgb(48,48,48)}#light-mode .hello-btn-white-and-invert{background:white;color:rgba(48,48,48);box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-invert:hover{box-shadow:0 0 0 2px rgb(212,212,212)}#dark-mode .hello-btn-white-and-invert:hover{box-shadow:0 0 0 3px rgba(88,88,88)}#light-mode .hello-btn-black-and-invert:hover{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-white-and-invert:hover{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#light-mode .hello-btn-black-and-static.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#light-mode .hello-btn-white-and-static.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-glow:hover{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#dark-mode .hello-btn-black-and-static:hover{box-shadow:0 0 0 3px rgb(88,88,88)}#dark-mode .hello-btn-white-and-static:hover{box-shadow:0 0 0 2px rgba(212,212,212)}#light-mode .hello-btn-black-and-static:hover{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-white-and-static:hover{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(212,212,212)}#light-mode .hello-btn-black-and-static.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-flare:hover{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-flare:hover{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-white-and-static.hello-btn-hover-flare:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-flare:hover{box-shadow:0 0 0 2px rgb(212,212,212)}#dark-mode .hello-btn-black-and-invert:after{background:rgb(212,212,212)}#light-mode .hello-btn-black-and-invert:after{background:rgb(48,48,48)}#light-mode .hello-btn-black-and-static:after{background:rgb(48,48,48)}#dark-mode .hello-btn-black-and-static:after{background:rgb(48,48,48)}#light-mode .hello-btn-white-and-static:after{background:white}#light-mode .hello-btn-white-and-invert:after{background:white}#dark-mode .hello-btn-white-and-invert:after{background:rgb(48,48,48)}#dark-mode .hello-btn-white-and-static:after{background:rgb(212,212,212)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(212,212,212)}#light-mode .hello-btn-black-and-static.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-none:hover{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-none:hover{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-white-and-static.hello-btn-hover-none:hover{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-none:hover{box-shadow:0 0 0 2px rgb(212,212,212)}.text-charcoal{color:#303030}.bg-charcoal{background-color:#303030}.border-charcoal{border:1px solid #303030}.text-white{color:white}.selected{color:white !important}.bg-dark{background-color:#151515}.bg-code{background-color:#282c34
  }.flash{animation:flash-animation 0.5s ease-in-out}@keyframes flash-animation{0%{opacity:1}50%{opacity:0.5}100%{opacity:1}}.hello-btn-black-on-light.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128, 0.7)}.hello-btn-white-on-light.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128, 0.7)}.hello-btn-black-on-dark.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128, 0.7)}.hello-btn-white-on-dark.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#light-mode .hello-btn-black-and-static.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#light-mode .hello-btn-white-and-static.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(128,128,128,0.7)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-glow-force{box-shadow:0 0 3px 3px rgba(212,212,212,0.7)}#dark-mode .hello-btn-black-and-invert-force{box-shadow:0 0 0 2px rgb(212,212,212)}#dark-mode .hello-btn-white-and-invert-force{box-shadow:0 0 0 2px rgba(88,88,88)}#light-mode .hello-btn-black-and-invert-force{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-white-and-invert-force{box-shadow:0 0 0 2px rgb(88,88,88)}#dark-mode .hello-btn-black-and-static-force{box-shadow:0 0 0 3px rgb(88,88,88)}#dark-mode .hello-btn-white-and-static-force{box-shadow:0 0 0 1px rgba(212,212,212)}#light-mode .hello-btn-black-and-static-force{box-shadow:0 0 0 2px rgb(48,48,48)}#light-mode .hello-btn-white-and-static-force{box-shadow:0 0 0 2px rgb(48,48,48)}.hello-btn-black-on-light-force{box-shadow:0 0 0 2px rgb(30,30,30)}.hello-btn-white-on-light-force{box-shadow:0 0 0 2px rgb(30,30,30)}.hello-btn-black-on-dark-force{box-shadow:0 0 0 3px rgb(88,88,88)}.hello-btn-white-on-dark-force{box-shadow:0 0 0 3px rgb(212,212,212)}.hello-btn-hover-flare-force{position:relative;z-index:0}.hello-btn-black-on-dark.hello-btn-hover-flare-force{box-shadow:0 0 0 2px rgb(88,88,88)}.hello-btn-white-on-dark.hello-btn-hover-flare-force{box-shadow:0 0 0 2px rgb(212,212,212)}.hello-btn-black-on-light.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}.hello-btn-white-on-light.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#light-mode .hello-btn-black-and-invert.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-black-and-invert.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(212,212,212)}#light-mode .hello-btn-black-and-static.hello-btn-hover-flare-force{box-shadow:0 0 0 2px rgb(48,48,48)}#dark-mode .hello-btn-black-and-static.hello-btn-hover-flare-force{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-white-and-invert.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-invert.hello-btn-hover-flare-force{box-shadow:0 0 0 2px rgb(88,88,88)}#light-mode .hello-btn-white-and-static.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(48,48,48)}#dark-mode .hello-btn-white-and-static.hello-btn-hover-flare-force{box-shadow:0 0 0 1px rgb(212,212,212)}.hello-btn-hover-flare-force:before{content:"";background:linear-gradient( 45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000 );position:absolute;top:-2px;left:-2px;background-size:400%;z-index:-1;filter:blur(5px);width:calc(100% + 4px);height:calc(100% + 4px);animation:flare-animation 20s linear infinite;opacity:0;transition:opacity 0.3s ease-in-out;border-radius:0.4rem}.hello-btn-hover-flare-force:before{opacity:1}.hello-btn-hover-flare-dark-force:after{z-index:-1;content:"";position:absolute;width:100%;height:100%;background:#303030;left:0;top:0;border-radius:0.4rem}.hello-btn-hover-flare-force:after{z-index:-1;content:"";position:absolute;width:100%;height:100%;left:0;top:0;border-radius:0.4rem}.hello-btn-black-on-light-force:after{background:#303030}.hello-btn-black-on-dark-force:after{background:#303030}.hello-btn-white-on-light-force:after{background:white}.hello-btn-white-on-dark-force:after{background:rgb(212,212,212)}#dark-mode .hello-btn-black-and-invert:after{background:rgb(212,212,212)}#light-mode .hello-btn-black-and-invert:after{background:rgb(48,48,48)}#light-mode .hello-btn-black-and-static:after{background:rgb(48,48,48)}#dark-mode .hello-btn-black-and-static:after{background:rgb(48,48,48)}#light-mode .hello-btn-white-and-static:after{background:white}#light-mode .hello-btn-white-and-invert:after{background:white}#dark-mode .hello-btn-white-and-invert:after{background:rgb(48,48,48)}#dark-mode .hello-btn-white-and-static:after{background:rgb(212,212,212)}.flex{display:flex}.inline-flex{display:inline-flex}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-around{justify-content:space-around}.justify-center{justify-content:center}.px-4{padding-left:0.6rem;padding-right:0.66rem
    }.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.p-0\\.5{padding:0.125rem}.w-full{width:100%}.w-1\\/2{width:50%}.bg-white{background:white}.h-44{height:11rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.mb-2{margin-bottom:0.5rem}ul{margin:0;padding:0}ul li{margin:0;padding:0;list-style:none}.absolute{position:absolute}.relative{position:relative}.top-3{top:0.75rem}.right-3{right:0.75rem}.opacity-60{opacity:0.6}.opacity-100{opacity:1}#hello-btn-explorer{font-family:sans-serif;min-width:640px}.rounded-sm{border-radius:.125rem
    }.font-medium{font-weight:500}.-ml-2{margin-left:-0.5rem}#copy-btn{background:transparent;border:none;cursor:pointer}#copy-btn:hover{opacity:1}.label{font-size:0.88rem;font-weight:500;color:black}.tab{font-size:0.92rem;background:transparent;border:none;cursor:pointer;color:#303030}#light-mode{border:1px dashed #303030}#dark-mode{border:1px dashed white}@media(max-width: 768px){#preview-container{flex-direction:column}#light-mode,#dark-mode{width:100%}}code[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}</style>`,ft(this,{target:this.shadowRoot,props:nt(this.attributes),customElement:!0},ut,gt,et,{},null),t&&t.target&&R(t.target,this,t.anchor)}}customElements.define("hello-btn-explorer",pt);
