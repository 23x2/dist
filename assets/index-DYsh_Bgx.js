/* empty css                   */(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))v(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const i of d.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&v(i)}).observe(document,{childList:!0,subtree:!0});function g(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function v(r){if(r.ep)return;r.ep=!0;const d=g(r);fetch(r.href,d)}})();const J="pl",Q=["pl","en"],ee={pl:{documentLang:"pl-PL",title:"23×2 Fundacja",label:"Polski"},en:{documentLang:"en-US",title:"23×2 Foundation",label:"English"}};function q(l){return l==="en"?"/?EN":"/"}function $(l){return`https://23x2.org${q(l)}`}const ae={"title-23x2":{pl:"23×2<br>Fundacja — na styku psychologii<br>i sztuki",en:"23×2<br>Foundation<br>— At The Intersection Of Psychology<br>And Art"},"paragraph-chromosomes":{pl:"W genomie każdego człowieka znajdują się 23 pary chromosomów — to biologiczny fundament naszej różnorodności i jedności zarazem. Psychologia i sztuka, choć posługują się odmiennymi językami, mogą wspólnie służyć rozumieniu ludzkiego doświadczenia. Fundacja 23×2, utworzona w 2021 roku, działa na tym styku.",en:"Within every human genome are 23 pairs of chromosomes — the biological foundation of both our diversity and our unity. Psychology and art, though they use different languages, can complement one another in the effort to understand human experience. Established in 2021, the 23×2 Foundation works at this intersection."},"title-assumptions":{pl:"Obszary<br>działalności",en:"Areas<br>of work"},"paragraph-goal":{pl:"Fundacja została powołana do wspierania działań na styku psychologii, sztuki i technologii.",en:"The Foundation was established to support work at the intersection of psychology, art, and technology."},"paragraph-research":{pl:"<strong>Badania</strong><br> — projekty łączące podejście empiryczne z praktyką artystyczną.",en:"<strong>Research</strong><br> — projects combining empirical inquiry with artistic practice."},"paragraph-support":{pl:"<strong>Projekty interdyscyplinarne</strong><br> — przedsięwzięcia realizowane wspólnie przez artystów, badaczy i osoby zajmujące się technologią.",en:"<strong>Interdisciplinary projects</strong><br> — work carried out jointly by artists, researchers, and people working with technology."},"paragraph-tools":{pl:"<strong>Praktyka psychologiczna</strong><br> — działania wykorzystujące sztukę i technologię w pracy psychologicznej.",en:"<strong>Psychological practice</strong><br> — initiatives using art and technology in psychological work."},"paragraph-development":{pl:"Fundacja rozwija działalność stopniowo. Do współpracy zapraszamy osoby i instytucje działające w tych obszarach.",en:"The Foundation is developing its work gradually. We welcome contact from people and institutions active in these areas."},"title-contact":{pl:"Kontakt",en:"Contact"},"contact-email":{pl:'<a href="mailto:fundacja@23x2.org">fundacja@23x2.org</a>',en:'<a href="mailto:fundacja@23x2.org">fundacja@23x2.org</a>'},"title-phone":{pl:"tel.&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>",en:"phone &thinsp;+48&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>"},"contact-address":{pl:"<strong>Plac Konstytucji</strong> 3<br>00&#x2043;647 Warszawa",en:"<strong>Plac Konstytucji</strong> 3<br>00&#x2043;647 Warsaw"},"bank-account":{pl:"konto bankowe numer<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>",en:"bank account number<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>"},"footer-label":{pl:"23×2 Fundacja © 2021–2026",en:"23×2 Foundation © 2021–2026"},"supporters-link":{pl:'<a href="/supporters/">Wspierają nas</a>',en:'<a href="/supporters/?EN">Supporters</a>'},"footer-description":{pl:"Strona nie przetwarza danych osobowych ani nie używa ciasteczek.<br>Korzysta z odnawialnych źródeł energii.",en:"This website does not process personal data or use cookies.<br>It runs on renewable energy."},"cta-contact":{pl:"Zapraszamy do kontaktu",en:"Get in touch"}},V=3;let te=[],U=[],E=document.getElementById("connectionPath"),N=null,_=0;function ie(){const l=document.querySelectorAll("#logo circle, #logo path");U=Array.from(l).map(h=>h.getAttribute("style").match(/fill: ([^;]+)/)[1])}function B(l,h,g){return l*(1-g)+h*g}function se(l){E.clientWidth;const h=E.clientHeight,v=document.getElementById("logo").getBoundingClientRect(),r=v.left+v.width/2;let d=Array(5).fill().map(()=>[]);for(let i=0;i<V;i++){const R=(i-V/2+.5)*10,z=r+R,x=r+R,b=5,m=150*(1+Math.sin(l*Math.PI)),L=1.5+l*2,S=l*Math.PI*2+i*Math.PI/V,s=[];for(let u=0;u<b;u++){const e=u/(b-1),o=Math.sin(e*Math.PI*L+S)*m,t=Math.cos(e*Math.PI*(L*1.5)+S)*(m*.5),n=B(z,x,e)+o*.5,w=B(0,h,e)+o+t;s.push({x:n,y:w}),d[u].push({x:n,y:w})}s[0].y=0,s[s.length-1].y=h;let T=`M ${s[0].x},${s[0].y}`;for(let u=0;u<s.length-1;u++){const e=s[u],o=s[u+1],t=(e.x+o.x)/2,n=(e.y+o.y)/2;T+=` Q ${e.x},${e.y} ${t},${n}`}T+=` L ${s[s.length-1].x},${s[s.length-1].y}`;let f=te[i];f||(f=document.createElementNS("http://www.w3.org/2000/svg","path"),f.setAttribute("stroke",U[i%U.length]),f.setAttribute("fill","none"),f.setAttribute("stroke-width","1"),te[i]=f,E.appendChild(f)),f.setAttribute("d",T)}d.forEach((i,R)=>{if(i.length<2)return;let z=`M ${i[0].x},${i[0].y}`;for(let b=1;b<i.length-1;b++){const m=i[b-1],L=i[b],S=i[b+1],s=L.x-(S.x-m.x)*.2,T=L.y-(S.y-m.y)*.2,f=L.x+(S.x-m.x)*.2,u=L.y+(S.y-m.y)*.2;z+=` C ${s},${T} ${f},${u} ${S.x},${S.y}`}let x=E.querySelector(`#connecting-${R}`);x||(x=document.createElementNS("http://www.w3.org/2000/svg","path"),x.id=`connecting-${R}`,x.setAttribute("stroke",U[R%U.length]),E.appendChild(x)),x.setAttribute("d",z)})}let oe=performance.now(),W=!0;function re(l){l||(l=performance.now());const h=l-oe;oe=l;let g=window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight);g=Math.max(0,Math.min(1,g));const v=1-Math.exp(-.00632*h),r=Math.abs(g-_)<1e-6?g:B(_,g,v);(W||r!==_)&&(se(r),W=!1),_=r,N=requestAnimationFrame(re)}window.addEventListener("resize",()=>{W=!0},{passive:!0});ie();E.style.position="fixed";E.style.top="0";E.style.left="0";E.style.pointerEvents="none";E.style.zIndex="1";re();window.addEventListener("pagehide",()=>{N&&cancelAnimationFrame(N)});(()=>{const g=`
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
            // Single fullscreen quad: MSAA and the depth buffer are never
            // visible in the output — skip allocating them
            gl = offscreenCanvas.getContext('webgl2', {
                antialias: false,
                depth: false,
                powerPreference: 'low-power'
            });
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
  
      // sumSmoothStep is exactly 0.0 across the middle band of the canvas,
      // where waveDistortion multiplies out to 0.0 — skip the fbm there
      if (sumSmoothStep > 0.0) {
          float waveFactor = 0.2 * sin(retime) + 1.4;
          float waveDistortion = fbm(uv * 1.3 * distortionFactor * waveFactor) *
                                distortionFactor * (sin(retime) + 1.0) * 0.3;
          uv.y += waveDistortion;
      }
  
      float textureValue = texture(texture1, uv).r;
      float grain = calculateGrain(uv, time) * 0.7;
      float grainedTexture = textureValue - grain * 200.0;
  
      float strength = 3.0 + (sin(retime) * cos(retime + PI)) + (sin(retime) + 1.0) * 0.3;
      float scale = cos(retime * 3.0 + PI) + 2.8;
      float timeOffset = cos(retime) + 10.5;
      vec2 surface1 = computeSurface(strength, scale, vec2(grainedTexture), timeOffset);
  
      // refract(vec2(0.0), N, eta) reduces to -sqrt(1.0 - eta * eta) * N
      const float eta = 1.0 / ior;
      uv += -sqrt(1.0 - eta * eta) * surface1;

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
            // The shader only samples .r — R8 quarters memory and sampling bandwidth
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8, gl.RED, gl.UNSIGNED_BYTE, textureCanvas);
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
  `;function v(){if(!("OffscreenCanvas"in window)||!("transferControlToOffscreen"in HTMLCanvasElement.prototype)){console.warn("Required features not supported"),document.body.classList.remove("hidden");return}const e=new Blob([g],{type:"application/javascript"}),o=URL.createObjectURL(e),t=document.createElement("canvas");t.classList.add("webgl-overlay"),t.style.position="fixed",t.style.width="120vw",t.style.height="150vh",t.style.top="-25vh",t.style.left="-10vw",document.body.insertBefore(t,document.body.firstChild);let n=null;const w=()=>{const F=window.visualViewport;if(!n){const Z=t.getBoundingClientRect();n={width:Math.max(1,Z.width||window.innerWidth),height:Math.max(1,Z.height||window.innerHeight)}}const X=n.width,H=n.height,O=window.devicePixelRatio||1,G=Math.max(1,Math.trunc(X*O)),K=Math.max(1,Math.trunc(H*O)),ne=window.scrollY+((F==null?void 0:F.offsetTop)??0);return{width:G,height:K,cssWidth:X,cssHeight:H,viewportHeight:H,pixelRatio:O,aspectRatio:G/Math.max(K,1),scrollY:ne}},a=w(),c=t.transferControlToOffscreen(),p=new Worker(o);p.postMessage({action:"init",offscreen:c,...a},[c]);const A=()=>{p.postMessage({action:"updateViewport",...w()})};let I=!1;const D=()=>{I||(I=!0,requestAnimationFrame(()=>{I=!1,!j&&A()}))},k=()=>{n=null,D()},C=()=>{D()},Y=()=>{p.postMessage({action:document.hidden?"stop":"resume"})},y=window.visualViewport,P="ResizeObserver"in window?new ResizeObserver(()=>{n=null,D()}):null;window.addEventListener("resize",k,{passive:!0}),window.addEventListener("scroll",C,{passive:!0}),document.addEventListener("visibilitychange",Y),y==null||y.addEventListener("resize",k,{passive:!0}),y==null||y.addEventListener("scroll",C,{passive:!0}),P==null||P.observe(t),p.onmessage=F=>{F.data.action==="initialized"&&document.body.classList.remove("hidden")};let j=!1;const M=()=>{j||(j=!0,window.removeEventListener("resize",k),window.removeEventListener("scroll",C),document.removeEventListener("visibilitychange",Y),y==null||y.removeEventListener("resize",k),y==null||y.removeEventListener("scroll",C),P==null||P.disconnect(),window.removeEventListener("beforeunload",M),window.removeEventListener("pagehide",M),p.postMessage({action:"stop"}),p.terminate(),URL.revokeObjectURL(o),t&&t.parentNode&&t.parentNode.removeChild(t))};return window.addEventListener("beforeunload",M),window.addEventListener("pagehide",M),M}"fonts"in document?document.fonts.ready.then(()=>{v()}):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();let r=null;function d(){const e=new URLSearchParams(window.location.search);return e.has("en")||e.has("EN")?"en":J}function i(){document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(e=>{const o=e.getAttribute("hreflang");o==="x-default"?e.href=$(J):Q.includes(o)&&(e.href=$(o))})}function R(e){const o=ee[e];if(!o)return;document.documentElement.lang=o.documentLang,document.title=o.title;const t=document.querySelector('link[rel="canonical"]');t&&(t.href=$(e)),i()}function z(e){document.querySelectorAll(".language-switcher a").forEach(o=>{var n;const t=o.dataset.lang;o.href=q(t),o.title=((n=ee[t])==null?void 0:n.label)||t,o.classList.toggle("active",t===e),t===e?o.setAttribute("aria-current","page"):o.removeAttribute("aria-current")})}function x(){if(!window._paq)return;const e=`${window.location.pathname}${window.location.search}${window.location.hash}`;window._paq.push(["setCustomUrl",e]),window._paq.push(["setDocumentTitle",document.title]),window._paq.push(["trackPageView"])}function b(){document.querySelectorAll("[data-translate]").forEach(e=>{const o=40+Math.random()*640,t=280+Math.random()*520;e.dataset.fadeDelayMs=String(Math.round(o)),e.dataset.fadeDurationMs=String(Math.round(t)),e.style.setProperty("--fade-delay",`${(o/1e3).toFixed(3)}s`),e.style.setProperty("--fade-duration",`${(t/1e3).toFixed(3)}s`)})}const m=new WeakMap;function L(e,o,t){e.style.overflow="hidden";const n=e.animate([{height:`${o}px`},{height:`${t}px`}],{duration:350,easing:"ease-in-out"});m.set(e,n);const w=()=>{m.get(e)===n&&(e.style.overflow="",m.delete(e))};n.onfinish=w,n.oncancel=w}function S(e,{animate:o=!0}={}){const t=document.querySelectorAll("[data-translate]"),n=a=>{var p;let c=(p=ae[a.dataset.translate])==null?void 0:p[e];if(c){const A=/(^|\s|>)([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{1,3})\s+/g;c=c.replace(A,"$1$2&nbsp;"),c=c.replace(A,"$1$2&nbsp;"),a.innerHTML=c}a.offsetHeight,a.classList.add("visible")},w=a=>{var A;const c=a.getBoundingClientRect().height;(A=m.get(a))==null||A.cancel(),n(a);const p=a.getBoundingClientRect().height;Math.abs(p-c)>=.5&&L(a,c,p)};document.body.style.visibility==="visible"&&o?(b(),t.forEach(a=>{a.classList.remove("visible");const c=parseInt(a.dataset.fadeDelayMs||"0",10),p=parseInt(a.dataset.fadeDurationMs||"300",10);window.setTimeout(()=>w(a),c+p+20)})):(t.forEach(n),document.body.style.visibility="visible",document.body.classList.remove("hidden"))}function s(e,{updateUrl:o=!0,historyMode:t="push",animate:n=!0,track:w=!0}={}){if(Q.includes(e)){if(o){const a=new URL(window.location.href),c=new URL(q(e),window.location.origin);(a.search!==c.search||a.pathname!==c.pathname)&&(a.pathname=c.pathname,a.search=c.search,t==="replace"?window.history.replaceState({lang:e},"",a.href):window.history.pushState({lang:e},"",a.href))}R(e),S(e,{animate:n}),z(e),w&&x()}}function T(){return r&&r.disconnect(),r=new IntersectionObserver(e=>{e.forEach(o=>{const t=o.target;o.isIntersecting?t.style.color="#000":t.style.color="#E880A1"})},{threshold:.1,rootMargin:"0px"}),document.querySelectorAll("[data-translate]").forEach(e=>{r.observe(e)}),r}function f(){b(),document.querySelectorAll("[data-translate]").forEach(o=>{o.style.color="#E880A1"});const e=d();s(e,{updateUrl:!1,animate:!1,track:!1}),T(),x(),document.querySelector(".language-switcher").addEventListener("click",o=>{const t=o.target.closest("a[data-lang]");if(!t)return;o.preventDefault();const n=t.dataset.lang;n&&n!==d()&&s(n)}),window.addEventListener("beforeunload",()=>{r==null||r.disconnect()})}"fonts"in document?document.fonts.ready.then(()=>{f(),document.body.classList.remove("hidden")}):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{f(),document.body.classList.remove("hidden")}):(f(),document.body.classList.remove("hidden")),window.addEventListener("popstate",()=>{s(d(),{updateUrl:!1,animate:!1,track:!0})});var u=window._paq=window._paq||[];u.push(["disableCookies"]),u.push(["enableLinkTracking"]),function(){var e="https://viahorizon.com/matomo/";u.push(["setTrackerUrl",e+"matomo.php"]),u.push(["setSiteId","6"]);var o=document,t=o.createElement("script"),n=o.getElementsByTagName("script")[0];t.async=!0,t.src=e+"matomo.js",n.parentNode.insertBefore(t,n)}()})();
