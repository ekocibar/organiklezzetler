(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,n){e.exports=n.p+"static/media/olive.d38b8483.jpg"},25:function(e,a,n){e.exports=n.p+"static/media/honey.30948c99.jpeg"},26:function(e,a,n){e.exports=n.p+"static/media/sarma.26b8ee04.jpg"},28:function(e,a,n){},41:function(e,a,n){e.exports=n.p+"static/media/healty-square.1eaef504.jpg"},45:function(e,a,n){e.exports=n(65)},65:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),i=n(24),r=n.n(i),m=n(8),c=n(9),o=n(11),s=n(10),d=n(12),k=n(16),u=(n(28),n(20)),y=n(30),b=n(23),g=n(78),h=n(76),E=n(77),p=n(70),v=n(6),z=n(25),O=n.n(z),f=n(22),x=n.n(f),j=n(26),S=n.n(j),I=n(39),T=n(66),N=n(67),w=n(68),A=n(69),B=[{src:x.a,altText:"SO\u011eUK SIKIM ZEYT\u0130NYA\u011eI",caption:"Saglikli dogal muhtesem zeytinyagi"},{src:O.a,altText:"B\u0130NG\xd6L BALI",caption:"Saglikli dogal muhtesem bingol bali"},{src:S.a,altText:"TOKAT ASMA YAPRA\u011eI",caption:"Saglikli dogal muhtesem sarma yapragi"}],C=function(e){function a(e){var n;return Object(m.a)(this,a),(n=Object(o.a)(this,Object(s.a)(a).call(this,e))).state={activeIndex:0},n.next=n.next.bind(Object(v.a)(n)),n.previous=n.previous.bind(Object(v.a)(n)),n.goToIndex=n.goToIndex.bind(Object(v.a)(n)),n.onExiting=n.onExiting.bind(Object(v.a)(n)),n.onExited=n.onExited.bind(Object(v.a)(n)),n}return Object(d.a)(a,e),Object(c.a)(a,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===B.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?B.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,a=this.state.activeIndex,n=B.map(function(a){return l.a.createElement(I.a,{onExiting:e.onExiting,onExited:e.onExited,key:a.src},l.a.createElement("img",{src:a.src,alt:a.altText,className:"fullWidth"}),l.a.createElement(T.a,{captionText:a.caption,captionHeader:a.altText}))});return l.a.createElement(N.a,{activeIndex:a,next:this.next,previous:this.previous},l.a.createElement(w.a,{items:B,activeIndex:a,onClickHandler:this.goToIndex}),n,l.a.createElement(A.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),l.a.createElement(A.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),a}(t.Component),K=n(41),Y=n.n(K),L=n(71),D=n(72),H=n(73),U=n(74),G=n(75),Z=function(e,a,n){return l.a.createElement(p.a,{lg:"4",xs:"12",sm:"6",className:"cards"},l.a.createElement(L.a,null,l.a.createElement(D.a,{top:!0,width:"100%",src:e,alt:"foto"}),l.a.createElement(H.a,null,l.a.createElement(U.a,null,a),l.a.createElement(G.a,null,n))))},R=function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"details-heading"},"URUNLER"),l.a.createElement(h.a,null,l.a.createElement(E.a,null,Z(O.a,"Bingol Bali","D\xfcnyan\u0131n en k\xf6kl\xfc ve prestijli organizasyonlar\u0131ndan olan 45. Apimondia Uluslararas\u0131 Ar\u0131c\u0131l\u0131k Kongresi\u2019nde Bing\xf6l Bal\u0131 120 \xdclke 600 yar\u0131\u015fmac\u0131 aras\u0131nda d\xfcnya 2.\u2019si oldu..  "),Z(S.a,"Tokat Sarma Yapragi","Tokat\u2019 \xf6zg\xfc bu yapra\u011f\u0131n tad\u0131 kendine has ek\u015fili\u011fi ile di\u011fer yaprak \xe7e\u015fitlerinden \xe7ok daha farkl\u0131d\u0131r. Narince cinsine d\xe2hil olan beyaz \xfcz\xfcm ba\u011flar\u0131ndan \xf6zenle toplanan bu asma yapraklar\u0131, dilimsiz, yumu\u015fak ve ince olmas\u0131ndan dolay\u0131 \xe7ok fazla tercih edilmektedir."),Z(x.a,"Soguk S\u0131k\u0131m Zeytinyagi","So\u011fuk s\u0131k\u0131m zeytinya\u011f\u0131, zeytinin i\xe7eri\u011finde yer alan faydal\u0131 vitamin ve minerallerin en az kay\u0131pla ya\u011fa d\xf6n\xfc\u015ft\xfcr\xfclmesini sa\u011flayan y\xf6ntemin ad\u0131d\u0131r. So\u011fuk s\u0131k\u0131m tekni\u011fi ile \xe7\u0131kar\u0131lan ya\u011f, \xf6zellikle erken hasat d\xf6nemi denilen Ekim-Kas\u0131m aylar\u0131 aral\u0131\u011f\u0131nda toplanan zeytinlerin 20-24 santigrat derecenin alt\u0131nda, \u201cso\u011fuk s\u0131k\u0131m\u201d ad\u0131 verilen teknikle s\u0131k\u0131lmas\u0131yla elde edilir."),Z(x.a,"Soguk S\u0131k\u0131m Zeytinyagi","So\u011fuk s\u0131k\u0131m zeytinya\u011f\u0131, zeytinin i\xe7eri\u011finde yer alan faydal\u0131 vitamin ve minerallerin en az kay\u0131pla ya\u011fa d\xf6n\xfc\u015ft\xfcr\xfclmesini sa\u011flayan y\xf6ntemin ad\u0131d\u0131r. So\u011fuk s\u0131k\u0131m tekni\u011fi ile \xe7\u0131kar\u0131lan ya\u011f, \xf6zellikle erken hasat d\xf6nemi denilen Ekim-Kas\u0131m aylar\u0131 aral\u0131\u011f\u0131nda toplanan zeytinlerin 20-24 santigrat derecenin alt\u0131nda, \u201cso\u011fuk s\u0131k\u0131m\u201d ad\u0131 verilen teknikle s\u0131k\u0131lmas\u0131yla elde edilir."),Z(Y.a,"Gezen Tavuk Yumurtasi","Serbest gezen tavuklar \xf6zg\xfcrd\xfcr. Do\u011fan\u0131n sundu\u011fu do\u011fal besinlerle beslenen, do\u011fada serbest dola\u015fan ve do\u011fas\u0131na uygun \u015fartlarda ya\u015fayan, do\u011fal d\xf6llenme y\xf6ntemleri ile \xfcreyen tavuklardan elde edilen yumurtalard\u0131r. Do\u011fal besinlerle beslendi\u011fi i\xe7in; sa\u011fl\u0131kl\u0131d\u0131r, besin de\u011feri y\xfcksektir ve di\u011fer yumurtalara g\xf6re daha lezzetlidir."),Z(x.a,"Soguk S\u0131k\u0131m Zeytinyagi","So\u011fuk s\u0131k\u0131m zeytinya\u011f\u0131, zeytinin i\xe7eri\u011finde yer alan faydal\u0131 vitamin ve minerallerin en az kay\u0131pla ya\u011fa d\xf6n\xfc\u015ft\xfcr\xfclmesini sa\u011flayan y\xf6ntemin ad\u0131d\u0131r. So\u011fuk s\u0131k\u0131m tekni\u011fi ile \xe7\u0131kar\u0131lan ya\u011f, \xf6zellikle erken hasat d\xf6nemi denilen Ekim-Kas\u0131m aylar\u0131 aral\u0131\u011f\u0131nda toplanan zeytinlerin 20-24 santigrat derecenin alt\u0131nda, \u201cso\u011fuk s\u0131k\u0131m\u201d ad\u0131 verilen teknikle s\u0131k\u0131lmas\u0131yla elde edilir."))))}}]),a}(t.Component),M=function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g.a,{className:"heading"},l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement("h1",null,"Organik Lezzetler"),l.a.createElement("h2",null,"Do\u011fal Ya\u015fam, Sa\u011fl\u0131kl\u0131 Ya\u015fam"))))),l.a.createElement(R,null),l.a.createElement(C,null),l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,{xs:"12",sm:"4",className:"info"},l.a.createElement(u.a,{icon:y.a,size:"4x"}),l.a.createElement("h6",null,"%100 Dogal urunler"),l.a.createElement("p",null,"Do\u011fadan evinize")),l.a.createElement(p.a,{xs:"12",sm:"4",className:"info"},l.a.createElement(u.a,{icon:y.b,size:"4x"}),l.a.createElement("h6",null,"HIZLI TESL\u0130MAT"),l.a.createElement("p",null,"Siparisleriniz ozenle adresinize teslim edilir.")),l.a.createElement(p.a,{xs:"12",sm:"4",className:"info"},l.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=905432631150",target:"1"},l.a.createElement(u.a,{icon:b.c,size:"4x"})),l.a.createElement("h6",null,"TELEFONDA S\u0130PAR\u0130\u015e"),l.a.createElement("p",null,"0543 263 11 50",l.a.createElement("br",null),"Yukar\u0131daki butona t\u0131klay\u0131p an\u0131nda Whatsapp'dan bize ula\u015fabilirsiniz.")))))}}]),a}(t.Component),W=function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"details-heading"},"NEDEN ORGANIK"),l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement("p",null,"\u0130lk \xe7a\u011flarda insanl\u0131k i\xe7in beslenme kavram\u0131, avlanarak elde etti\u011fi g\u0131da t\xfcrevlerinden \xf6teye gitmiyordu. Fakat ilerleyen y\xfczy\u0131llarda insano\u011flu g\xfcn ge\xe7tik\xe7e her konuda oldu\u011fu gibi g\u0131da konusunda da evrim ge\xe7irerek bilin\xe7lendi. Buna ba\u011fl\u0131 olarak insan\u0131n ya\u015famsal haritas\u0131ndaki ya\u015fam s\xfcresi, hangi hastal\u0131klara meyilli olabilece\u011fi gibi konular\u0131n b\xfcy\xfck oranda beslenme \u015fekline g\xf6re belirlendi\u011fi anla\u015f\u0131ld\u0131. \u2018K\u0131sacas\u0131 can bo\u011fazdan gelirken yine bo\u011fazdan gidiyor\u2019 kavram\u0131 gereken yere oturmu\u015f oldu. \xc7a\u011f\u0131m\u0131zda her y\u0131l besinler \xfczerinde d\xfczenli olarak yap\u0131lan ara\u015ft\u0131rmalar s\xfcrd\xfcr\xfcl\xfcyor. Ve yap\u0131lan bu ara\u015ft\u0131rmalar b\xfcy\xfck oranda g\xf6steriyor ki; organik \xfcr\xfcnler di\u011ferlerine g\xf6re \xe7ok daha de\u011ferli, zengin ve besin de\u011ferleri de \xe7ok y\xfcksek g\u0131da t\xfcrevleridir. Ayr\u0131ca organik besinler, vitaminleri \xe7ok daha etkin bir \u015fekilde almam\u0131z\u0131 sa\u011flamaktad\u0131r.",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("p",null,l.a.createElement("strong",null,"Organik G\u0131da T\xfcrevleri Nas\u0131l Yeti\u015ftiriliyor?")),l.a.createElement("p",null,"\xd6ncelikle bir \xfcr\xfcn\xfcn organik olabilmesi i\xe7in do\u011fal tohumlarla nat\xfcrel ortamlarda yeti\u015fmi\u015f ve s\xfcrecini bu do\u011fall\u0131kta tamamlam\u0131\u015f olmas\u0131 gerekiyor. Yani bu da b\xfcy\xfck bir emek demek\u2026 \xd6rne\u011fin zehirli kimyasallar, b\xf6cek ila\xe7lar\u0131, bitki \xf6ld\xfcr\xfcc\xfcleri, antibiyotik katk\u0131lar\u0131, b\xfcy\xfcme hormonlar\u0131 verilmi\u015f besinler asla organik g\u0131da grubuna girmiyor. Bu tarz katk\u0131l\u0131 g\u0131dalar, v\xfccudumuz taraf\u0131ndan tan\u0131mlanam\u0131yor ve yabanc\u0131 madde olarak alg\u0131lanarak toksin y\xfckl\xfc serbest radikallere d\xf6n\xfc\u015f\xfcyor. Sonras\u0131nda da kanserli h\xfccreler olarak geri d\xf6n\xfc\u015f\xfcm sa\u011fl\u0131yor. G\u0131da \xfcr\xfcnlerindeki kimyasal kullan\u0131m\u0131 her insan i\xe7in y\xfcksek dozda tehlike bar\u0131nd\u0131r\u0131rken, \xf6zellikle de \xe7ocuklar i\xe7in patlay\u0131c\u0131 bir bombaya d\xf6n\xfc\u015f\xfcr. Bu y\xfczden \xe7ocu\u011funuz varsa asla organik olmayan g\u0131da t\xfcrevlerinden t\xfcketmemelisiniz. Organik tar\u0131mc\u0131lar, do\u011fal g\xfcbre ve do\u011fal \xfcretim b\xf6cek ila\xe7lar\u0131yla maksimum g\xfcvenli y\xf6ntemlerde \xfcr\xfcn yeti\u015ftirirler. Bu y\xfczden Organik g\u0131dalar ne t\xfcketene, ne de \xe7evreye zarar vermez. Organik \xfcr\xfcnlerin raf \xf6mr\xfc k\u0131sad\u0131r ama hi\xe7bir zarar i\xe7ermedikleri gibi vitamin ve mineral de\u011ferleri de \xe7ok y\xfcksektir. Yapay hi\xe7bir katk\u0131 i\xe7ermeyen organik g\u0131dalar, katk\u0131l\u0131 \xfcr\xfcnler gibi raflarda aylarca bekletilmedi\u011finden mutlaka \xe7ok daha taze ve lezzetli olmaktad\u0131r. Organik G\u0131dalar Her Zaman \xc7ok Daha Sa\u011fl\u0131kl\u0131 Ve Lezizdir"),l.a.createElement("p",null,"Katk\u0131l\u0131 g\u0131da \xfcr\xfcnleri, koruyuculu ve kimyasal y\xfckl\xfc oldu\u011fundan vir\xfcs ve bakterilere kar\u015f\u0131 ba\u011f\u0131\u015f\u0131kl\u0131k sistemimizi y\u0131kmaya programl\u0131d\u0131r. Oysaki organik g\u0131dalar, besin kaynakl\u0131 yararl\u0131 bakterilerle y\xfckl\xfcd\xfcr ve her zaman metabolizmay\u0131 canl\u0131 ayr\u0131ca faaliyette tutar. Organik \xfcr\xfcnler, her zaman i\xe7in yapay katk\u0131l\u0131 \xfcr\xfcnlerden daha lezzetlidir. Koku, tat, tazelik, aroma, lezzet bak\u0131m\u0131ndan hi\xe7bir zaman katk\u0131l\u0131 g\u0131da \xfcr\xfcnleriyle k\u0131yaslanamaz. T\xfcm bunlar\u0131n yan\u0131 s\u0131ra organik besinler, katk\u0131 i\xe7ermediklerinden kilo al\u0131m\u0131 ve ya\u011f olu\u015fumu a\xe7\u0131s\u0131ndan v\xfccut i\xe7in \xe7ok daha dengeli bir tablo \xe7izer. Katk\u0131l\u0131 g\u0131da \xfcr\xfcnleri; mide \u015fi\u015fkinlikleri, mide yanmas\u0131, mide rahats\u0131zl\u0131klar\u0131 ya da a\u015f\u0131r\u0131 ya\u011flanma gibi obeziteye y\xf6nelik sonu\xe7lar yarat\u0131rken, organik besin kaynaklar\u0131 her zaman metabolizma dostu ve dengeli bir besin zinciri olu\u015fturur. Sonu\xe7 olarak antepbahcem.com %100 organik g\u0131da \xe7e\u015fitleri, paran\u0131z\u0131n hakk\u0131n\u0131 kuru\u015fu kuru\u015funa misliyle geri d\xf6nd\xfcrecek olan sa\u011fl\u0131k ve \u015fifa kaynaklar\u0131d\u0131r.")))))}}]),a}(t.Component),_=function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"details-heading"},"ILETISIM"),l.a.createElement(h.a,{className:"contact-container"},l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement("p",null,"Telefon : 0543 263 11 50"),l.a.createElement("p",null,"email : organiklezzetler@gmail.com"),l.a.createElement("p",null,"instagram : https://www.instagram.com/_organiklezzetler_/")))))}}]),a}(t.Component),P=function(){return l.a.createElement(k.c,null,l.a.createElement(k.a,{exact:!0,path:"/",component:M}),l.a.createElement(k.a,{path:"/Urunler",component:R}),l.a.createElement(k.a,{path:"/Hakkinda",component:W}),l.a.createElement(k.a,{path:"/Irtibat",component:_}))},F=n(15),J=n(79),V=n(80),q=n(81),$=n(82),Q=n(83),X=n(84),ee=n(85),ae=function(e){function a(e){var n;return Object(m.a)(this,a),(n=Object(o.a)(this,Object(s.a)(a).call(this,e))).toggle=n.toggle.bind(Object(v.a)(n)),n.state={isOpen:!1},n}return Object(d.a)(a,e),Object(c.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(J.a,{color:"light",light:!0,expand:"md"},l.a.createElement(V.a,{to:"/",tag:F.b},"Organik Lezzetler"),l.a.createElement(q.a,{onClick:this.toggle}),l.a.createElement($.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(Q.a,{className:"ml-auto",navbar:!0},l.a.createElement(X.a,null,l.a.createElement(ee.a,{to:"/Irtibat",tag:F.b},"Irtibat")),l.a.createElement(X.a,null,l.a.createElement(ee.a,{to:"/Urunler",tag:F.b},"Urunler")),l.a.createElement(X.a,null,l.a.createElement(ee.a,{to:"/Hakkinda",tag:F.b},"Neden Organik?"))))))}}]),a}(t.Component),ne=function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(g.a,{className:"bottom"},l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement("a",{href:"https://www.instagram.com/_organiklezzetler_",target:"1"},l.a.createElement(u.a,{icon:b.a,size:"2x"})),l.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=905432631150",target:"1"},l.a.createElement(u.a,{icon:b.b,size:"2x",className:"green"})))),l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement("p",null,"T\xfcm Haklar\u0131 Sakl\u0131d\u0131r ",l.a.createElement("br",null),"kocibar \xa9 2019 ")))))}}]),a}(t.Component),te=function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(ae,null),l.a.createElement(P,null),l.a.createElement(ne,null))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(64);r.a.render(l.a.createElement(F.a,null,l.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.05a96cb1.chunk.js.map