(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const a of c)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(c){const a={};return c.integrity&&(a.integrity=c.integrity),c.referrerPolicy&&(a.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?a.credentials="include":c.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(c){if(c.ep)return;c.ep=!0;const a=n(c);fetch(c.href,a)}})();let t,s,m=!1,F=new Date;F.setHours(0,0,0,0);let N=Date.now()-F.getTime(),R={},z,i,B=0;const O=1e3/30;let L=0;const x=3;let X=[],_=[];const K=`#version 300 es
in vec4 a_position;
in vec2 a_texcoord;
out vec2 vUv;

void main() {
    vUv = a_texcoord;
    gl_Position = a_position;
}`,Z=`#version 300 es
precision lowp float;
in vec2 vUv;
uniform sampler2D texture1;
uniform float time, noiseamount, speed, viewportHeight, pixelRatio, aspectRatio, scrollY;
out vec4 fragColor;

#define NUM_OCTAVES 2
#define PI 3.14159265359
const vec2 offset = vec2(-0.014, -0.02);
const float ior = 1.39;

float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u * u * (3.0 - 2.0 * u);

    float a = rand(ip);
    float b = rand(ip + vec2(1.0, 0.0));
    float c = rand(ip + vec2(0.0, 1.0));
    float d = rand(ip + vec2(1.0, 1.0));

    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    mat2 rot = mat2(cos(0.7), sin(0.4), -sin(0.5), cos(0.5));

    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

vec2 computeSurface(float strength, float scale, vec2 uv, float timeOffset) {
    vec2 fbmInput = scale * uv + timeOffset;
    float fbm_1 = fbm(fbmInput * 2.1);
    float fbm_2 = fbm(fbmInput * 3.0);
    return strength * vec2(mix(-0.2, 0.4, fbm_1), mix(-0.4, 0.4, fbm_2));
}

float calculateGrain(vec2 uv, float time) {
    float x = (uv.x * 40.0 + time * 2.0) * (uv.y + 5.0) * mix(abs(sin(time * 0.203)) / time, 0.205, 0.4);
    return mod((mod(x, 13.0) + 11.0) * (mod(x, 71.0) + 1.0), 0.01) - 0.05;
}
void main() {
    vec2 uv = vUv;
    uv.y -= scrollY / viewportHeight;
    uv = (uv - 0.5) * vec2(aspectRatio, 1.0) + 0.5 + offset;  
    float retime = time / 5.0;

    float normalizedViewportY = gl_FragCoord.y / (viewportHeight * pixelRatio);
    float distortionAreaSize = 0.17;
    float sumSmoothStep = smoothstep(0.0, distortionAreaSize, normalizedViewportY) + smoothstep(1.0 - distortionAreaSize, 1.0, normalizedViewportY);
    float distortionFactor = -sumSmoothStep;

    float waveFactor = 0.2 * sin(retime) + 1.4;
    float waveDistortion = fbm(uv * 1.3 * distortionFactor * waveFactor) * distortionFactor * (sin(retime) + 1.0) * 0.3;
    uv.y += waveDistortion;

    float textureValue = texture(texture1, uv).r;
    float grain = calculateGrain(uv, time) * 0.7;
    float grainedTexture = textureValue - grain * 200.0;

    float strength = 3.0 + (sin(retime) * cos(retime + PI)) + (sin(retime) + 1.0) * 0.3;
    float scale = cos(retime * 3.0 + PI) + 2.8;
    float timeOffset = cos(retime) + 10.5;
    vec2 surface1 = computeSurface(strength, scale, vec2(grainedTexture), timeOffset);

    uv += refract(vec2(0.0), surface1, 1.0 / ior);
    
    float finalValue = 1.0 - texture(texture1, uv).r;
    fragColor = vec4(finalValue);
}`;function j(e,o,n){return e*(1-n)+o*n}function J(){const e=document.querySelectorAll("#logo circle, #logo path");_=Array.from(e).map(o=>o.getAttribute("style").match(/fill: ([^;]+)/)[1])}function Y(e,o){const n=document.getElementById("connectionPath");n.clientWidth;const r=n.clientHeight,a=document.getElementById("logo").getBoundingClientRect(),d=a.left+a.width/2,y=(o-x/2+.5)*10,A=d+y,w=0,h=d+y,U=r,l=[],D=5,M=150*(1+Math.sin(e*Math.PI)),C=1.5+e*2;for(let p=0;p<D;p++){const u=p/(D-1),v=e*Math.PI*2+o*Math.PI/x,P=Math.sin(u*Math.PI*C+v)*M,S=Math.cos(u*Math.PI*(C*1.5)+v)*(M*.5),q=j(A,h,u)+P*.5,$=j(w,U,u)+P+S;l.push({x:q,y:$})}l[0].y=w,l[l.length-1].y=U;let T=`M ${l[0].x},${l[0].y}`;for(let p=0;p<l.length-1;p++){const u=l[p],v=l[p+1],P=(u.x+v.x)/2,S=(u.y+v.y)/2;T+=` Q ${u.x},${u.y} ${P},${S}`}const W=l[l.length-1];T+=` L ${W.x},${W.y}`;let g=X[o];g||(g=document.createElementNS("http://www.w3.org/2000/svg","path"),X[o]=g,n.appendChild(g)),g.setAttribute("d",T),g.setAttribute("stroke",_[o%_.length])}function Q(){z=document.createElement("canvas"),z.width=2e3,z.height=2e3,i=z.getContext("2d"),i.fillStyle="white",i.fillRect(0,0,2e3,2e3),i.fillStyle="black",i.beginPath(),i.arc(1373.47,587.35,149.09,0,2*Math.PI),i.fill(),i.beginPath(),i.arc(981.4,587.35,149.09,0,2*Math.PI),i.fill(),i.beginPath(),i.arc(589.33,1023.71,98.4,0,2*Math.PI),i.fill(),i.beginPath(),i.arc(981.4,1023.71,98.4,0,2*Math.PI),i.fill(),i.beginPath(),i.arc(1373.47,1023.71,98.4,0,2*Math.PI),i.fill();const e="M522.23,1310.98c-8.79,5.66-17.14,12.27-24.83,19.96-7.69,7.69-14.3,16.04-19.96,24.83l80.59,80.59-80.59,80.59c5.66,8.79,12.27,17.14,19.96,24.83,7.69,7.69,16.04,14.3,24.83,19.96l80.59-80.59,80.59,80.59c8.79-5.66,17.14-12.27,24.83-19.96,7.69-7.69,14.3-16.04,19.96-24.83l-80.59-80.59,80.59-80.59c-5.66-8.79-12.27-17.14-19.96-24.83-7.69-7.69-16.04-14.3-24.83-19.96l-80.59,80.59-80.59-80.59Z",o=new Path2D(e);return i.fill(o),i.beginPath(),i.arc(1386.96,1436.36,98.4,0,2*Math.PI),i.fill(),i.beginPath(),i.arc(994.89,1436.36,98.4,0,2*Math.PI),i.fill(),i}function H(e,o,n){const r=e.createShader(o);return e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error("Shader compilation error:",e.getShaderInfoLog(r)),e.deleteShader(r),null)}function ee(e,o,n){const r=e.createProgram();return e.attachShader(r,o),e.attachShader(r,n),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)?r:(console.error("Program linking error:",e.getProgramInfoLog(r)),e.deleteProgram(r),null)}function te(e,o){const n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),n}function f(e,o,n,r,c){R[n]||(e.useProgram(o),R[n]=e.getUniformLocation(o,n));const a=R[n];if(a===null)return;switch(e.getParameter(e.CURRENT_PROGRAM)!==o&&e.useProgram(o),c){case"1f":e.uniform1f(a,r);break;case"1i":e.uniform1i(a,r);break;case"2f":e.uniform2f(a,r[0],r[1]);break;case"3f":e.uniform3f(a,r[0],r[1],r[2]);break}}function oe(){const e=document.createElement("canvas");if(document.body.insertBefore(e,document.body.firstChild),t=e.getContext("webgl2",{alpha:!0,antialias:!1}),!t){console.error("WebGL2 not supported");return}const o=H(t,t.VERTEX_SHADER,K),n=H(t,t.FRAGMENT_SHADER,Z);if(!o||!n||(s=ee(t,o,n),!s))return;Q();const r=te(t,z),c=new Float32Array([-1,-1,1,-1,-1,1,1,1]),a=new Float32Array([0,0,1,0,0,1,1,1]),d=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,c,t.STATIC_DRAW);const y=t.getAttribLocation(s,"a_position");t.enableVertexAttribArray(y),t.vertexAttribPointer(y,2,t.FLOAT,!1,0,0);const A=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,A),t.bufferData(t.ARRAY_BUFFER,a,t.STATIC_DRAW);const w=t.getAttribLocation(s,"a_texcoord");t.enableVertexAttribArray(w),t.vertexAttribPointer(w,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,r),t.useProgram(s),f(t,s,"texture1",0,"1i"),f(t,s,"noiseamount",40,"1f"),f(t,s,"speed",1,"1f"),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA);const h=document.getElementById("connectionPath");h.style.position="fixed",h.style.top="0",h.style.left="0",h.style.pointerEvents="none",h.style.zIndex="1",I(),window.addEventListener("resize",I),window.addEventListener("scroll",V),m=!0,b()}function I(){if(!t||!s)return;const e=t.canvas,o=Math.floor(e.clientWidth*window.devicePixelRatio),n=Math.floor(e.clientHeight*window.devicePixelRatio);(e.width!==o||e.height!==n)&&(e.width=o,e.height=n,t.viewport(0,0,o,n)),e.style.width="100%",e.style.height="100vh",t.useProgram(s),f(t,s,"viewportHeight",e.clientHeight,"1f"),f(t,s,"pixelRatio",window.devicePixelRatio,"1f"),f(t,s,"aspectRatio",e.clientWidth/e.clientHeight,"1f");for(let r=0;r<x;r++)Y(L,r)}function V(){if(!t||!s)return;t.useProgram(s),f(t,s,"scrollY",window.scrollY,"1f");let e=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight);const n=j(L,e,.1);for(let r=0;r<x;r++)Y(n,r);L=n}function b(e=0){if(!m)return;const o=e-B;if(o<O){requestAnimationFrame(b);return}B=e-o%O,N=Date.now()-F.getTime(),t.useProgram(s),f(t,s,"time",N/1e3,"1f"),t.drawArrays(t.TRIANGLE_STRIP,0,4),requestAnimationFrame(b)}function ne(){if(!t)return;window.removeEventListener("resize",I),window.removeEventListener("scroll",V),t.useProgram(null),t.deleteProgram(s),s=null;const e=t.canvas;e.parentNode.removeChild(e),t=null,m=!1}function E(){if(m)return;oe(),J(),document.querySelectorAll("#logo circle, #logo path, #logo-vertical path, #logo-vertical circle").forEach(o=>{}),document.body.classList.remove("hidden")}"fonts"in document?document.fonts.ready.then(()=>{E(),document.body.classList.remove("hidden")}):document.addEventListener("DOMContentLoaded",()=>{E(),document.body.classList.remove("hidden")});document.addEventListener("visibilitychange",()=>{document.hidden?m=!1:t&&s?(m=!0,b()):E()});window.addEventListener("pagehide",ne);window.addEventListener("beforeunload",e=>{});document.addEventListener("visibilitychange",()=>{document.hidden?m=!1:t&&s?(m=!0,b()):E()});const k={"title-23x2":{pl:"23×2<br>Fundacja — Na Styku Psychologii<br>i Sztuki",en:"23×2<br>Foundation — At the Intersection of Psychology<br>and Art"},"paragraph-chromosomes":{pl:"W genomie każdego człowieka znajdują się <strong>23 pary chromosomów</strong> — to biologiczny fundament naszej różnorodności i jedności zarazem. Podobnie jak te 46 chromosomów tworzy kompletny kod genetyczny, tak połączenie <strong>psychologii i sztuki</strong> otwiera pełniejszą perspektywę rozumienia ludzkiego doświadczenia. Fundacja 23×2, utworzona w 2021 roku, działa właśnie na tym <strong>przecięciu</strong>, gdzie empiryczne podejście spotyka się z artystyczną ekspresją.",en:"Within the genome of every human being are <strong>23 pairs of chromosomes</strong> — the biological foundation of our diversity and unity. Just as these 46 chromosomes form a complete genetic code, so too does the combination of <strong>psychology and art</strong> open a fuller perspective on understanding the human experience. The 23×2 Foundation, established in 2021, operates at this <strong>intersection</strong>, where empirical approach meets artistic expression."},"title-assumptions":{pl:"Założenia<br>i kierunki działań",en:"Assumptions<br>and<br>Directions of Action"},"paragraph-goal":{pl:"Naszym celem jest tworzenie przestrzeni, gdzie metody naukowe i artystyczne wzajemnie się uzupełniają i wzmacniają. Koncentrujemy się na trzech głównych obszarach:",en:"Our goal is to create a space where scientific and artistic methods complement and reinforce each other. We focus on three main areas:"},"paragraph-research":{pl:"<strong>Innowacyjne metody badawcze</strong><br> — łączymy zaawansowane techniki analizy danych z artystycznymi formami ekspresji, tworząc nowe sposoby rozumienia i przedstawiania ludzkiego doświadczenia.",en:"<strong>Innovative research methods</strong><br> — We combine advanced data analysis techniques with artistic forms of expression, creating new ways of understanding and presenting human experience."},"paragraph-support":{pl:"<strong>Wsparcie projektów interdyscyplinarnych</strong><br> — pomagamy artystom i naukowcom w realizacji przedsięwzięć, które przekraczają tradycyjne granice swoich dziedzin, ze szczególnym uwzględnieniem projektów wykorzystujących nowoczesne technologie.",en:"<strong>Supporting interdisciplinary projects</strong><br> — We help artists and scientists in the implementation of projects that transcend the traditional boundaries of their fields, with particular emphasis on projects using modern technologies."},"paragraph-tools":{pl:"<strong>Rozwój narzędzi terapeutycznych</strong><br> — pracujemy nad nowatorskimi metodami wsparcia psychologicznego, gdzie sztuka i technologia służą lepszemu zrozumieniu siebie.",en:"<strong>Development of therapeutic tools</strong><br> — We are working on innovative methods of psychological support, where art and technology serve a better understanding of oneself."},"title-perspectives":{pl:"Perspektywy rozwoju",en:"Development Perspectives"},"paragraph-focus":{pl:"Skupiamy się na projektach wykorzystujących uczenie maszynowe do analizy procesów twórczych oraz na budowaniu przestrzeni do eksploracji własnych doświadczeń psychologicznych.",en:"We focus on projects using machine learning to analyze creative processes and on building spaces to explore one's own psychological experiences."},"paragraph-designing":{pl:"ᵃ⁄ Projektujemy narzędzia przekładające dane psychologiczne na niekonwencjonalne formy wyrazu artystycznego,",en:"ᵃ⁄ We design tools that translate psychological data into unconventional forms of artistic expression,"},"paragraph-supporting":{pl:"ᵇ⁄ wspieramy projekty łączące tradycyjne sposoby ekspresji z nowoczesnymi metodami analizy danych,",en:"ᵇ⁄ we support projects combining traditional forms of expression with modern data analysis methods,"},"paragraph-creating":{pl:"ᶜ⁄ tworzymy aplikacje do spersonalizowanej eksploracji własnych wzorców psychologicznych.",en:"ᶜ⁄ we create applications for personalized exploration of one's own psychological patterns."},"paragraph-invitation":{pl:"Zapraszamy do współpracy <strong>artystów, badaczy i innowatorów</strong>, którzy wierzą w potencjał łączenia różnych perspektyw poznawczych.",en:"We invite <strong>artists, researchers and innovators</strong> who believe in the potential of combining different cognitive perspectives to cooperate with us."},"title-contact":{pl:"Kontakt",en:"Contact"},"title-phone":{pl:"tel.&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>",en:"phone &thinsp;+48&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>"},"bank-account":{pl:"konto bankowe numer<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>",en:"bank account number<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>"},"footer-label":{pl:"23×2 Fundacja © 2024",en:"23×2 Foundation © 2024"},"footer-description":{pl:"Strona nie przetwarza danych osobowy ani nie używa ciasteczek,<br>korzysta z odnawialnych źródeł energii.",en:"This website does not process personal data or use cookies,<br>and is powered by renewable energy sources."}};function re(e,o){const n=e.dataset.translate;n&&k[n]&&k[n][o]&&(e.innerHTML=k[n][o])}function G(e){e==="en"?window.location.search.includes("en")||history.replaceState(null,"","?en"):history.replaceState(null,"","/"),document.querySelectorAll("[data-translate]").forEach((n,r)=>{setTimeout(()=>{n.style.opacity=0,setTimeout(()=>{re(n,e),n.style.opacity=1},600)},r*100)}),document.documentElement.lang=e==="pl"?"pl-PL":"en-US",document.querySelectorAll(".language-switcher a").forEach(n=>{n.classList.toggle("active",n.dataset.lang===e)})}function ie(){const e=new URLSearchParams(window.location.search);let o="pl";e.toString()==="en"&&(o="en"),G(o)}ie();document.querySelector(".language-switcher").addEventListener("click",e=>{e.target.tagName==="A"&&(e.preventDefault(),G(e.target.dataset.lang))});document.body.classList.remove("hidden");
