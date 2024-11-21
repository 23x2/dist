(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();let t,c,p=!1,M=new Date;M.setHours(0,0,0,0);let X=Date.now()-M.getTime(),S={},g,i,Y=0;const H=1e3/30;let _=0;const R=3;let W=[],L=[];const k=`#version 300 es
in vec4 a_position;
in vec2 a_texcoord;
out vec2 vUv;

void main() {
    vUv = a_texcoord;
    gl_Position = a_position;
}`,K=`#version 300 es
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
}`;function I(e,o,n){return e*(1-n)+o*n}function Q(){const e=document.querySelectorAll("#logo circle, #logo path");L=Array.from(e).map(o=>o.getAttribute("style").match(/fill: ([^;]+)/)[1])}function V(e,o){const n=document.getElementById("connectionPath");n.clientWidth;const r=n.clientHeight,a=document.getElementById("logo").getBoundingClientRect(),f=a.left+a.width/2,P=(o-R/2+.5)*10,y=f+P,E=0,h=f+P,C=r,l=[],D=5,B=150*(1+Math.sin(e*Math.PI)),N=1.5+e*2;for(let d=0;d<D;d++){const u=d/(D-1),x=e*Math.PI*2+o*Math.PI/R,A=Math.sin(u*Math.PI*N+x)*B,w=Math.cos(u*Math.PI*(N*1.5)+x)*(B*.5),$=I(y,h,u)+A*.5,q=I(E,C,u)+A+w;l.push({x:$,y:q})}l[0].y=E,l[l.length-1].y=C;let b=`M ${l[0].x},${l[0].y}`;for(let d=0;d<l.length-1;d++){const u=l[d],x=l[d+1],A=(u.x+x.x)/2,w=(u.y+x.y)/2;b+=` Q ${u.x},${u.y} ${A},${w}`}const O=l[l.length-1];b+=` L ${O.x},${O.y}`;let v=W[o];v||(v=document.createElementNS("http://www.w3.org/2000/svg","path"),W[o]=v,n.appendChild(v)),v.setAttribute("d",b),v.setAttribute("stroke",L[o%L.length])}function Z(){g=document.createElement("canvas"),g.width=2e3,g.height=2e3,i=g.getContext("2d"),i.fillStyle="white",i.fillRect(0,0,2e3,2e3),i.fillStyle="black",i.beginPath(),i.arc(1373.47,587.35,149.09,0,2*Math.PI),i.fill(),i.beginPath(),i.arc(981.4,587.35,149.09,0,2*Math.PI),i.fill(),i.beginPath(),i.arc(589.33,1023.71,98.4,0,2*Math.PI),i.fill(),i.beginPath(),i.arc(981.4,1023.71,98.4,0,2*Math.PI),i.fill(),i.beginPath(),i.arc(1373.47,1023.71,98.4,0,2*Math.PI),i.fill();const e="M522.23,1310.98c-8.79,5.66-17.14,12.27-24.83,19.96-7.69,7.69-14.3,16.04-19.96,24.83l80.59,80.59-80.59,80.59c5.66,8.79,12.27,17.14,19.96,24.83,7.69,7.69,16.04,14.3,24.83,19.96l80.59-80.59,80.59,80.59c8.79-5.66,17.14-12.27,24.83-19.96,7.69-7.69,14.3-16.04,19.96-24.83l-80.59-80.59,80.59-80.59c-5.66-8.79-12.27-17.14-19.96-24.83-7.69-7.69-16.04-14.3-24.83-19.96l-80.59,80.59-80.59-80.59Z",o=new Path2D(e);return i.fill(o),i.beginPath(),i.arc(1386.96,1436.36,98.4,0,2*Math.PI),i.fill(),i.beginPath(),i.arc(994.89,1436.36,98.4,0,2*Math.PI),i.fill(),i}function z(e,o,n){const r=e.createShader(o);return e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error("Shader compilation error:",e.getShaderInfoLog(r)),e.deleteShader(r),null)}function j(e,o,n){const r=e.createProgram();return e.attachShader(r,o),e.attachShader(r,n),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)?r:(console.error("Program linking error:",e.getProgramInfoLog(r)),e.deleteProgram(r),null)}function J(e,o){const n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),n}function m(e,o,n,r,s){S[n]||(e.useProgram(o),S[n]=e.getUniformLocation(o,n));const a=S[n];if(a===null)return;switch(e.getParameter(e.CURRENT_PROGRAM)!==o&&e.useProgram(o),s){case"1f":e.uniform1f(a,r);break;case"1i":e.uniform1i(a,r);break;case"2f":e.uniform2f(a,r[0],r[1]);break;case"3f":e.uniform3f(a,r[0],r[1],r[2]);break}}function ee(){const e=document.createElement("canvas");if(document.body.insertBefore(e,document.body.firstChild),t=e.getContext("webgl2",{alpha:!0,antialias:!1}),!t){console.error("WebGL2 not supported");return}const o=z(t,t.VERTEX_SHADER,k),n=z(t,t.FRAGMENT_SHADER,K);if(!o||!n||(c=j(t,o,n),!c))return;Z();const r=J(t,g),s=new Float32Array([-1,-1,1,-1,-1,1,1,1]),a=new Float32Array([0,0,1,0,0,1,1,1]),f=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,f),t.bufferData(t.ARRAY_BUFFER,s,t.STATIC_DRAW);const P=t.getAttribLocation(c,"a_position");t.enableVertexAttribArray(P),t.vertexAttribPointer(P,2,t.FLOAT,!1,0,0);const y=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,y),t.bufferData(t.ARRAY_BUFFER,a,t.STATIC_DRAW);const E=t.getAttribLocation(c,"a_texcoord");t.enableVertexAttribArray(E),t.vertexAttribPointer(E,2,t.FLOAT,!1,0,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,r),t.useProgram(c),m(t,c,"texture1",0,"1i"),m(t,c,"noiseamount",40,"1f"),m(t,c,"speed",1,"1f"),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA);const h=document.getElementById("connectionPath");h.style.position="fixed",h.style.top="0",h.style.left="0",h.style.pointerEvents="none",h.style.zIndex="1",U(),window.addEventListener("resize",U),window.addEventListener("scroll",G),p=!0,T()}function U(){if(!t||!c)return;const e=t.canvas,o=Math.floor(e.clientWidth*window.devicePixelRatio),n=Math.floor(e.clientHeight*window.devicePixelRatio);(e.width!==o||e.height!==n)&&(e.width=o,e.height=n,t.viewport(0,0,o,n)),e.style.width="100%",e.style.height="100vh",t.useProgram(c),m(t,c,"viewportHeight",e.clientHeight,"1f"),m(t,c,"pixelRatio",window.devicePixelRatio,"1f"),m(t,c,"aspectRatio",e.clientWidth/e.clientHeight,"1f");for(let r=0;r<R;r++)V(_,r)}function G(){if(!t||!c)return;t.useProgram(c),m(t,c,"scrollY",window.scrollY,"1f");let e=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight);const n=I(_,e,.1);for(let r=0;r<R;r++)V(n,r);_=n}function T(e=0){if(!p)return;const o=e-Y;if(o<H){requestAnimationFrame(T);return}Y=e-o%H,X=Date.now()-M.getTime(),t.useProgram(c),m(t,c,"time",X/1e3,"1f"),t.drawArrays(t.TRIANGLE_STRIP,0,4),requestAnimationFrame(T)}function te(){if(!t)return;window.removeEventListener("resize",U),window.removeEventListener("scroll",G),t.useProgram(null),t.deleteProgram(c),c=null;const e=t.canvas;e.parentNode.removeChild(e),t=null,p=!1}function F(){if(p)return;ee(),Q(),document.querySelectorAll("#logo circle, #logo path, #logo-vertical path, #logo-vertical circle").forEach(o=>{}),document.body.classList.remove("hidden")}"fonts"in document?document.fonts.ready.then(()=>{F(),document.body.classList.remove("hidden")}):document.addEventListener("DOMContentLoaded",()=>{F(),document.body.classList.remove("hidden")});document.addEventListener("visibilitychange",()=>{document.hidden?p=!1:t&&c?(p=!0,T()):F()});window.addEventListener("unload",te);
