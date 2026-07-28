(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))w(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const s of d.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&w(s)}).observe(document,{childList:!0,subtree:!0});function p(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function w(n){if(n.ep)return;n.ep=!0;const d=p(n);fetch(n.href,d)}})();const G="pl",K=["pl","en"],Z={pl:{documentLang:"pl-PL",title:"23×2 Fundacja",label:"Polski"},en:{documentLang:"en-US",title:"23×2 Foundation",label:"English"}};function $(l){return l==="en"?"/?EN":"/"}function H(l){return`https://23x2.org${$(l)}`}const ne={"title-23x2":{pl:"23×2<br>Fundacja — na styku psychologii<br>i sztuki",en:"23×2<br>Foundation<br>— At The Intersection Of Psychology<br>And Art"},"paragraph-chromosomes":{pl:"W genomie każdego człowieka znajdują się 23 pary chromosomów — to biologiczny fundament naszej różnorodności i jedności zarazem. Psychologia i sztuka, choć posługują się odmiennymi językami, mogą wspólnie służyć rozumieniu ludzkiego doświadczenia. Fundacja 23×2, utworzona w 2021 roku, działa na tym styku.",en:"Within every human genome are 23 pairs of chromosomes — the biological foundation of both our diversity and our unity. Psychology and art, though they use different languages, can complement one another in the effort to understand human experience. Established in 2021, the 23×2 Foundation works at this intersection."},"title-assumptions":{pl:"Obszary<br>działalności",en:"Areas<br>of work"},"paragraph-goal":{pl:"Fundacja została powołana do wspierania działań na styku psychologii, sztuki i technologii.",en:"The Foundation was established to support work at the intersection of psychology, art, and technology."},"paragraph-research":{pl:"<strong>Badania</strong><br> — projekty łączące podejście empiryczne z praktyką artystyczną.",en:"<strong>Research</strong><br> — projects combining empirical inquiry with artistic practice."},"paragraph-support":{pl:"<strong>Projekty interdyscyplinarne</strong><br> — przedsięwzięcia realizowane wspólnie przez artystów, badaczy i osoby zajmujące się technologią.",en:"<strong>Interdisciplinary projects</strong><br> — work carried out jointly by artists, researchers, and people working with technology."},"paragraph-tools":{pl:"<strong>Praktyka psychologiczna</strong><br> — działania wykorzystujące sztukę i technologię w pracy psychologicznej.",en:"<strong>Psychological practice</strong><br> — initiatives using art and technology in psychological work."},"paragraph-development":{pl:"Fundacja rozwija działalność stopniowo. Do współpracy zapraszamy osoby i instytucje działające w tych obszarach.",en:"The Foundation is developing its work gradually. We welcome contact from people and institutions active in these areas."},"title-contact":{pl:"Kontakt",en:"Contact"},"contact-email":{pl:'<a href="mailto:fundacja@23x2.org">fundacja@23x2.org</a>',en:'<a href="mailto:fundacja@23x2.org">fundacja@23x2.org</a>'},"title-phone":{pl:"tel.&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>",en:"phone &thinsp;+48&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>"},"contact-address":{pl:"<strong>Plac Konstytucji</strong> 3<br>00&#x2043;647 Warszawa",en:"<strong>Plac Konstytucji</strong> 3<br>00&#x2043;647 Warsaw"},"bank-account":{pl:"konto bankowe numer<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>",en:"bank account number<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>"},"footer-label":{pl:"23×2 Fundacja © 2021–2026",en:"23×2 Foundation © 2021–2026"},"footer-description":{pl:"Strona nie przetwarza danych osobowych ani nie używa ciasteczek.<br>Korzysta z odnawialnych źródeł energii.",en:"This website does not process personal data or use cookies.<br>It runs on renewable energy."},"cta-contact":{pl:"Zapraszamy do kontaktu",en:"Get in touch"}},O=3;let J=[],U=[],S=document.getElementById("connectionPath"),V=null,Q=0;function re(){const l=document.querySelectorAll("#logo circle, #logo path");U=Array.from(l).map(f=>f.getAttribute("style").match(/fill: ([^;]+)/)[1])}function B(l,f,p){return l*(1-p)+f*p}function ae(l){S.clientWidth;const f=S.clientHeight,w=document.getElementById("logo").getBoundingClientRect(),n=w.left+w.width/2;let d=Array(5).fill().map(()=>[]);for(let s=0;s<O;s++){const A=(s-O/2+.5)*10,z=n+A,y=n+A,v=5,h=150*(1+Math.sin(l*Math.PI)),E=1.5+l*2,x=l*Math.PI*2+s*Math.PI/O,c=[];for(let u=0;u<v;u++){const e=u/(v-1),o=Math.sin(e*Math.PI*E+x)*h,t=Math.cos(e*Math.PI*(E*1.5)+x)*(h*.5),r=B(z,y,e)+o*.5,b=B(0,f,e)+o+t;c.push({x:r,y:b}),d[u].push({x:r,y:b})}c[0].y=0,c[c.length-1].y=f;let T=`M ${c[0].x},${c[0].y}`;for(let u=0;u<c.length-1;u++){const e=c[u],o=c[u+1],t=(e.x+o.x)/2,r=(e.y+o.y)/2;T+=` Q ${e.x},${e.y} ${t},${r}`}T+=` L ${c[c.length-1].x},${c[c.length-1].y}`;let g=J[s];g||(g=document.createElementNS("http://www.w3.org/2000/svg","path"),J[s]=g,S.appendChild(g)),g.setAttribute("d",T),g.setAttribute("stroke",U[s%U.length]),g.setAttribute("fill","none"),g.setAttribute("stroke-width","1")}d.forEach((s,A)=>{if(s.length<2)return;let z=`M ${s[0].x},${s[0].y}`;for(let v=1;v<s.length-1;v++){const h=s[v-1],E=s[v],x=s[v+1],c=E.x-(x.x-h.x)*.2,T=E.y-(x.y-h.y)*.2,g=E.x+(x.x-h.x)*.2,u=E.y+(x.y-h.y)*.2;z+=` C ${c},${T} ${g},${u} ${x.x},${x.y}`}let y=S.querySelector(`#connecting-${A}`);y||(y=document.createElementNS("http://www.w3.org/2000/svg","path"),y.id=`connecting-${A}`,S.appendChild(y)),y.setAttribute("d",z),y.setAttribute("stroke",U[A%U.length])})}let ee=performance.now();function te(l){l||(l=performance.now());const f=l-ee;ee=l;let p=window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight);p=Math.max(0,Math.min(1,p));const w=1-Math.exp(-.00632*f),n=B(Q,p,w);ae(n),Q=n,V=requestAnimationFrame(te)}re();S.style.position="fixed";S.style.top="0";S.style.left="0";S.style.pointerEvents="none";S.style.zIndex="1";te();window.addEventListener("pagehide",()=>{V&&cancelAnimationFrame(V)});(()=>{const p=`
    let gl = null;
    let program = null;
    let vao = null;
    let offscreenCanvas = null;
    let isRendering = true;
    let animationFrameHandle = null;
    let startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    // Use modulo to keep time from getting too large for WebGL float precision
    let currentTime = (Date.now() - startOfDay.getTime()) % 100000;
    let uniformLocations = {};
    let lastFrameTime = 0;
    let pendingViewportState = null;
    let viewportInitialized = false;

    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    function createProgram(gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program linking error:', gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }

        gl.detachShader(program, vertexShader);
        gl.detachShader(program, fragmentShader);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);

        return program;
    }

    function generateTextureWithCircles() {
        const canvas = new OffscreenCanvas(2000, 2000);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 2000, 2000);
        ctx.fillStyle = 'black';

        // Logo circles
        const circles = [
            { x: 1373.47, y: 587.35, r: 149.09 },
            { x: 981.4, y: 587.35, r: 149.09 },
            { x: 589.33, y: 1023.71, r: 98.4 },
            { x: 981.4, y: 1023.71, r: 98.4 },
            { x: 1373.47, y: 1023.71, r: 98.4 },
            { x: 994.89, y: 1436.36, r: 98.4 },
            { x: 1386.96, y: 1436.36, r: 98.4 }
        ];

        circles.forEach(({ x, y, r }) => {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.fill();
        });

        // Add path
        const path = new Path2D("M522.23,1310.98c-8.79,5.66-17.14,12.27-24.83,19.96-7.69,7.69-14.3,16.04-19.96,24.83l80.59,80.59-80.59,80.59c5.66,8.79,12.27,17.14,19.96,24.83,7.69,7.69,16.04,14.3,24.83,19.96l80.59-80.59,80.59,80.59c8.79-5.66,17.14-12.27,24.83-19.96,7.69-7.69,14.3-16.04,19.96-24.83l-80.59-80.59,80.59-80.59c-5.66-8.79-12.27-17.14-19.96-24.83-7.69-7.69-16.04-14.3-24.83-19.96l-80.59,80.59-80.59-80.59Z");
        ctx.fill(path);

        return canvas;
    }

function setupAttributes(gl, program) {
    const positions = new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
         1,  1
    ]);
    
    // Flip the texture coordinates vertically
    const texCoords = new Float32Array([
        0, 1, // Bottom-left corner maps to top-left corner of the texture
        1, 1, // Bottom-right corner maps to top-right corner of the texture
        0, 0, // Top-left corner maps to bottom-left corner of the texture
        1, 0  // Top-right corner maps to bottom-right corner of the texture
    ]);

        const vao = gl.createVertexArray();
        gl.bindVertexArray(vao);

        const createBuffer = (data, attribLocation, size) => {
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
            gl.enableVertexAttribArray(attribLocation);
            gl.vertexAttribPointer(attribLocation, size, gl.FLOAT, false, 0, 0);
        };

        createBuffer(positions, gl.getAttribLocation(program, 'a_position'), 2);
        createBuffer(texCoords, gl.getAttribLocation(program, 'a_texcoord'), 2);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);

        return vao;
    }

    function updateViewportState(nextState) {
        pendingViewportState = {
            width: nextState.width,
            height: nextState.height,
            viewportHeight: nextState.viewportHeight,
            pixelRatio: nextState.pixelRatio,
            aspectRatio: nextState.aspectRatio,
            scrollY: nextState.scrollY || 0
        };
    }

    function applyViewportState() {
        if (!pendingViewportState || !gl || !offscreenCanvas) return;

        const { width, height, viewportHeight, pixelRatio, aspectRatio, scrollY } = pendingViewportState;

        if (offscreenCanvas.width !== width || offscreenCanvas.height !== height) {
            offscreenCanvas.width = width;
            offscreenCanvas.height = height;
        }

        if (!viewportInitialized || gl.drawingBufferWidth !== width || gl.drawingBufferHeight !== height) {
            gl.viewport(0, 0, width, height);
            viewportInitialized = true;
        }

        gl.uniform1f(uniformLocations.viewportHeight, viewportHeight);
        gl.uniform1f(uniformLocations.pixelRatio, pixelRatio);
        gl.uniform1f(uniformLocations.aspectRatio, aspectRatio);
        gl.uniform1f(uniformLocations.scrollY, scrollY);
        pendingViewportState = null;
    }

    function scheduleRender() {
        if (!isRendering || animationFrameHandle !== null) return;
        animationFrameHandle = requestAnimationFrame(render);
    }

    function render(now = performance.now()) {
        animationFrameHandle = null;
        if (!isRendering) return;
        
        if (lastFrameTime === 0) lastFrameTime = now;
        const deltaTime = now - lastFrameTime;
        lastFrameTime = now;
        
        // Simple accumulation so it is completely decoupled from frame rate
        // and doesn't suffer from startOfDay precision loss in lowp floats.
        currentTime += deltaTime;

        applyViewportState();
        gl.uniform1f(uniformLocations.time, currentTime / 1000);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        
        scheduleRender();
    }

    self.onmessage = function(e) {
        const { action, offscreen } = e.data;
        
        if (action === 'init') {
            offscreenCanvas = offscreen;
            gl = offscreenCanvas.getContext('webgl2');
            if (!gl) throw new Error('WebGL2 not supported');

            const vertexShader = createShader(gl, gl.VERTEX_SHADER, ${JSON.stringify(`#version 300 es
  in vec4 a_position;
  in vec2 a_texcoord;
  out vec2 vUv;
  
  void main() {
      vUv = a_texcoord;
      gl_Position = a_position;
  }`)});
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, ${JSON.stringify(`#version 300 es
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
      float sumSmoothStep = smoothstep(0.0, distortionAreaSize, normalizedViewportY) + 
                           smoothstep(1.0 - distortionAreaSize, 1.0, normalizedViewportY);
      float distortionFactor = -sumSmoothStep;
  
      float waveFactor = 0.2 * sin(retime) + 1.4;
      float waveDistortion = fbm(uv * 1.3 * distortionFactor * waveFactor) * 
                            distortionFactor * (sin(retime) + 1.0) * 0.3;
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
  }`)});
            program = createProgram(gl, vertexShader, fragmentShader);

            vao = setupAttributes(gl, program);
            
            // Set up uniforms
            uniformLocations = {
                time: gl.getUniformLocation(program, 'time'),
                texture1: gl.getUniformLocation(program, 'texture1'),
                viewportHeight: gl.getUniformLocation(program, 'viewportHeight'),
                pixelRatio: gl.getUniformLocation(program, 'pixelRatio'),
                aspectRatio: gl.getUniformLocation(program, 'aspectRatio'),
                scrollY: gl.getUniformLocation(program, 'scrollY')
            };

            // Initialize texture
            const textureCanvas = generateTextureWithCircles();
            const texture = gl.createTexture();
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureCanvas);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.clearColor(0, 0, 0, 0);
            
            // Set initial uniform values
            gl.useProgram(program);
            gl.bindVertexArray(vao);
            gl.uniform1i(uniformLocations.texture1, 0);

            updateViewportState(e.data);
            applyViewportState();

            scheduleRender();
            self.postMessage({ action: 'initialized' });
        } else if (action === 'updateViewport') {
            if (!gl || !program) return;
            updateViewportState(e.data);
        } else if (action === 'stop') {
            isRendering = false;
            lastFrameTime = 0;
            if (animationFrameHandle !== null) {
                cancelAnimationFrame(animationFrameHandle);
                animationFrameHandle = null;
            }
        } else if (action === 'resume') {
            if (isRendering) return;
            isRendering = true;
            lastFrameTime = 0;
            scheduleRender();
        }
    };
  `;function w(){if(!("OffscreenCanvas"in window)||!("transferControlToOffscreen"in HTMLCanvasElement.prototype)){console.warn("Required features not supported"),document.body.classList.remove("hidden");return}const e=new Blob([p],{type:"application/javascript"}),o=URL.createObjectURL(e),t=document.createElement("canvas");t.classList.add("webgl-overlay"),t.style.position="fixed",t.style.width="120vw",t.style.height="150vh",t.style.top="-25vh",t.style.left="-10vw",document.body.insertBefore(t,document.body.firstChild);const r=()=>{const M=window.visualViewport,q=t.getBoundingClientRect(),W=Math.max(1,q.width||window.innerWidth),D=Math.max(1,q.height||window.innerHeight),j=window.devicePixelRatio||1,Y=Math.max(1,Math.trunc(W*j)),X=Math.max(1,Math.trunc(D*j)),oe=window.scrollY+((M==null?void 0:M.offsetTop)??0);return{width:Y,height:X,cssWidth:W,cssHeight:D,viewportHeight:D,pixelRatio:j,aspectRatio:Y/Math.max(X,1),scrollY:oe}},b=r(),a=t.transferControlToOffscreen(),i=new Worker(o);i.postMessage({action:"init",offscreen:a,...b},[a]);const L=()=>{i.postMessage({action:"updateViewport",...r()})};let R=!1;const _=()=>{R||(R=!0,requestAnimationFrame(()=>{R=!1,!I&&L()}))},k=()=>{_()},C=()=>{_()},N=()=>{i.postMessage({action:document.hidden?"stop":"resume"})},m=window.visualViewport,P="ResizeObserver"in window?new ResizeObserver(()=>{_()}):null;window.addEventListener("resize",k,{passive:!0}),window.addEventListener("scroll",C,{passive:!0}),document.addEventListener("visibilitychange",N),m==null||m.addEventListener("resize",k,{passive:!0}),m==null||m.addEventListener("scroll",C,{passive:!0}),P==null||P.observe(t),i.onmessage=M=>{M.data.action==="initialized"&&document.body.classList.remove("hidden")};let I=!1;const F=()=>{I||(I=!0,window.removeEventListener("resize",k),window.removeEventListener("scroll",C),document.removeEventListener("visibilitychange",N),m==null||m.removeEventListener("resize",k),m==null||m.removeEventListener("scroll",C),P==null||P.disconnect(),window.removeEventListener("beforeunload",F),window.removeEventListener("pagehide",F),i.postMessage({action:"stop"}),i.terminate(),URL.revokeObjectURL(o),t&&t.parentNode&&t.parentNode.removeChild(t))};return window.addEventListener("beforeunload",F),window.addEventListener("pagehide",F),F}"fonts"in document?document.fonts.ready.then(()=>{w()}):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w();let n=null;function d(){const e=new URLSearchParams(window.location.search);return e.has("en")||e.has("EN")?"en":G}function s(){document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(e=>{const o=e.getAttribute("hreflang");o==="x-default"?e.href=H(G):K.includes(o)&&(e.href=H(o))})}function A(e){const o=Z[e];if(!o)return;document.documentElement.lang=o.documentLang,document.title=o.title;const t=document.querySelector('link[rel="canonical"]');t&&(t.href=H(e)),s()}function z(e){document.querySelectorAll(".language-switcher a").forEach(o=>{var r;const t=o.dataset.lang;o.href=$(t),o.title=((r=Z[t])==null?void 0:r.label)||t,o.classList.toggle("active",t===e),t===e?o.setAttribute("aria-current","page"):o.removeAttribute("aria-current")})}function y(){if(!window._paq)return;const e=`${window.location.pathname}${window.location.search}${window.location.hash}`;window._paq.push(["setCustomUrl",e]),window._paq.push(["setDocumentTitle",document.title]),window._paq.push(["trackPageView"])}function v(){document.querySelectorAll("[data-translate]").forEach(e=>{const o=40+Math.random()*640,t=280+Math.random()*520;e.dataset.fadeDelayMs=String(Math.round(o)),e.dataset.fadeDurationMs=String(Math.round(t)),e.style.setProperty("--fade-delay",`${(o/1e3).toFixed(3)}s`),e.style.setProperty("--fade-duration",`${(t/1e3).toFixed(3)}s`)})}const h=new WeakMap;function E(e,o,t){e.style.overflow="hidden";const r=e.animate([{height:`${o}px`},{height:`${t}px`}],{duration:350,easing:"ease-in-out"});h.set(e,r);const b=()=>{h.get(e)===r&&(e.style.overflow="",h.delete(e))};r.onfinish=b,r.oncancel=b}function x(e,{animate:o=!0}={}){const t=document.querySelectorAll("[data-translate]"),r=a=>{var L;let i=(L=ne[a.dataset.translate])==null?void 0:L[e];if(i){const R=/(^|\s|>)([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{1,3})\s+/g;i=i.replace(R,"$1$2&nbsp;"),i=i.replace(R,"$1$2&nbsp;"),a.innerHTML=i}a.offsetHeight,a.classList.add("visible")},b=a=>{var R;const i=a.getBoundingClientRect().height;(R=h.get(a))==null||R.cancel(),r(a);const L=a.getBoundingClientRect().height;Math.abs(L-i)>=.5&&E(a,i,L)};document.body.style.visibility==="visible"&&o?(v(),t.forEach(a=>{a.classList.remove("visible");const i=parseInt(a.dataset.fadeDelayMs||"0",10),L=parseInt(a.dataset.fadeDurationMs||"300",10);window.setTimeout(()=>b(a),i+L+20)})):(t.forEach(r),document.body.style.visibility="visible",document.body.classList.remove("hidden"))}function c(e,{updateUrl:o=!0,historyMode:t="push",animate:r=!0,track:b=!0}={}){if(K.includes(e)){if(o){const a=new URL(window.location.href),i=new URL($(e),window.location.origin);(a.search!==i.search||a.pathname!==i.pathname)&&(a.pathname=i.pathname,a.search=i.search,t==="replace"?window.history.replaceState({lang:e},"",a.href):window.history.pushState({lang:e},"",a.href))}A(e),x(e,{animate:r}),z(e),b&&y()}}function T(){return n&&n.disconnect(),n=new IntersectionObserver(e=>{e.forEach(o=>{const t=o.target;o.isIntersecting?t.style.color="#000":t.style.color="#E880A1"})},{threshold:.1,rootMargin:"0px"}),document.querySelectorAll("[data-translate]").forEach(e=>{n.observe(e)}),n}function g(){v(),document.querySelectorAll("[data-translate]").forEach(o=>{o.style.color="#E880A1"});const e=d();c(e,{updateUrl:!1,animate:!1,track:!1}),T(),y(),document.querySelector(".language-switcher").addEventListener("click",o=>{const t=o.target.closest("a[data-lang]");if(!t)return;o.preventDefault();const r=t.dataset.lang;r&&r!==d()&&c(r)}),window.addEventListener("beforeunload",()=>{n==null||n.disconnect()})}"fonts"in document?document.fonts.ready.then(()=>{g(),document.body.classList.remove("hidden")}):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{g(),document.body.classList.remove("hidden")}):(g(),document.body.classList.remove("hidden")),window.addEventListener("popstate",()=>{c(d(),{updateUrl:!1,animate:!1,track:!0})});var u=window._paq=window._paq||[];u.push(["disableCookies"]),u.push(["enableLinkTracking"]),function(){var e="https://viahorizon.com/matomo/";u.push(["setTrackerUrl",e+"matomo.php"]),u.push(["setSiteId","6"]);var o=document,t=o.createElement("script"),r=o.getElementsByTagName("script")[0];t.async=!0,t.src=e+"matomo.js",r.parentNode.insertBefore(t,r)}()})();
