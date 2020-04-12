(this.webpackJsonpcorona_app=this.webpackJsonpcorona_app||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__2OH_L",card:"Cards_card__3aAJN",infected:"Cards_infected__1HSgr",recovered:"Cards_recovered__1mCUZ",deaths:"Cards_deaths__1ge3G"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(6),s=a.n(u),i=a(9),l=a(73),d=a(74),p=a(83),m=a(84),f=a(31),v=a(44),h=a(32),b=a.n(h),E="https://covid19.mathdro.id/api",y=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E,t&&(a="".concat(E,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(E,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=a(76),_=a.n(C),O=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)({}),d=Object(f.a)(l,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=a?r.a.createElement(v.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,b=p[0]?r.a.createElement(v.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:_.a.container},u?h:b)},w=a(228),j=a(227),D=a(77),k=a.n(D),S=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(f.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,x();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(w.a,{className:k.a.formControl},r.a.createElement(j.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},N=a(224),I=a(229),A=a(225),V=a(226),B=a(33),U=a.n(B),H=a(34),J=a.n(H),G=a(13),L=a.n(G),P=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:L.a.container},r.a.createElement(N.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(N.a,{item:!0,xs:12,md:3,component:I.a,className:J()(L.a.card,L.a.infected)},r.a.createElement(A.a,null,r.a.createElement(V.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(V.a,{variant:"h5",component:"h2"},r.a.createElement(U.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(V.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(V.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19."))),r.a.createElement(N.a,{item:!0,xs:12,md:3,component:I.a,className:J()(L.a.card,L.a.recovered)},r.a.createElement(A.a,null,r.a.createElement(V.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(V.a,{variant:"h5",component:"h2"},r.a.createElement(U.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(V.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(V.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19."))),r.a.createElement(N.a,{item:!0,xs:12,md:3,component:I.a,className:J()(L.a.card,L.a.deaths)},r.a.createElement(A.a,null,r.a.createElement(V.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(V.a,{variant:"h5",component:"h2"},r.a.createElement(U.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(V.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(V.a,{variant:"body2",component:"p"},"Number of deaths caused by COVID-19."))))):"Loading..."},R=a(46),K=a.n(R),M=a(82),T=a.n(M),W=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:K.a.container},r.a.createElement("img",{className:K.a.image,src:T.a,alt:"COVID-19"}),r.a.createElement(P,{data:t}),r.a.createElement(S,{handleCountryChange:this.handleCountryChange}),r.a.createElement(O,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(W,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__cdWaa",image:"App_image__2DAOc"}},76:function(e,t,a){e.exports={container:"Chart_container__1K3ra"}},77:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2mHnT"}},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.12be7458.chunk.js.map