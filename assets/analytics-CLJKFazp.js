(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function d(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerPolicy&&(u.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?u.credentials="include":i.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(i){if(i.ep)return;i.ep=!0;const u=d(i);fetch(i.href,u)}})();function O(){let w=[],d=[],s=document.getElementById("connectionPath"),i=null,u=0;function c(){const f=document.querySelectorAll("#logo circle, #logo path");d=Array.from(f).map(v=>v.getAttribute("style").match(/fill: ([^;]+)/)[1])}function b(f,v,p){return f*(1-p)+v*p}function k(f){s.clientWidth;const v=s.clientHeight,e=document.getElementById("logo").getBoundingClientRect(),o=e.left+e.width/2;let a=Array(5).fill().map(()=>[]);for(let t=0;t<3;t++){const g=(t-1.5+.5)*10,r=o+g,n=o+g,l=5,y=150*(1+Math.sin(f*Math.PI)),R=1.5+f*2,S=f*Math.PI*2+t*Math.PI/3,h=[];for(let x=0;x<l;x++){const A=x/(l-1),M=Math.sin(A*Math.PI*R+S)*y,U=Math.cos(A*Math.PI*(R*1.5)+S)*(y*.5),F=b(r,n,A)+M*.5,I=b(0,v,A)+M+U;h.push({x:F,y:I}),a[x].push({x:F,y:I})}h[0].y=0,h[h.length-1].y=v;let P=`M ${h[0].x},${h[0].y}`;for(let x=0;x<h.length-1;x++){const A=h[x],M=h[x+1],U=(A.x+M.x)/2,F=(A.y+M.y)/2;P+=` Q ${A.x},${A.y} ${U},${F}`}P+=` L ${h[h.length-1].x},${h[h.length-1].y}`;let E=w[t];E||(E=document.createElementNS("http://www.w3.org/2000/svg","path"),E.setAttribute("stroke",d[t%d.length]),E.setAttribute("fill","none"),E.setAttribute("stroke-width","1"),w[t]=E,s.appendChild(E)),E.setAttribute("d",P)}a.forEach((t,g)=>{if(t.length<2)return;let r=`M ${t[0].x},${t[0].y}`;for(let l=1;l<t.length-1;l++){const y=t[l-1],R=t[l],S=t[l+1],h=R.x-(S.x-y.x)*.2,P=R.y-(S.y-y.y)*.2,E=R.x+(S.x-y.x)*.2,x=R.y+(S.y-y.y)*.2;r+=` C ${h},${P} ${E},${x} ${S.x},${S.y}`}let n=s.querySelector(`#connecting-${g}`);n||(n=document.createElementNS("http://www.w3.org/2000/svg","path"),n.id=`connecting-${g}`,n.setAttribute("stroke",d[g%d.length]),s.appendChild(n)),n.setAttribute("d",r)})}let T=performance.now(),z=!0;function L(f){f||(f=performance.now());const v=f-T;T=f;let p=window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight);p=Math.max(0,Math.min(1,p));const e=1-Math.exp(-.00632*v),o=Math.abs(p-u)<1e-6?p:b(u,p,e);(z||o!==u)&&(k(o),z=!1),u=o,i=requestAnimationFrame(L)}window.addEventListener("resize",()=>{z=!0},{passive:!0}),c(),s.style.position="fixed",s.style.top="0",s.style.left="0",s.style.pointerEvents="none",s.style.zIndex="1",L(),window.addEventListener("pagehide",()=>{i&&cancelAnimationFrame(i)})}function V(){const d=`
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
  `;function s(){if(!("OffscreenCanvas"in window)||!("transferControlToOffscreen"in HTMLCanvasElement.prototype)){console.warn("Required features not supported"),document.body.classList.remove("hidden");return}const i=new Blob([d],{type:"application/javascript"}),u=URL.createObjectURL(i),c=document.createElement("canvas");c.classList.add("webgl-overlay"),c.style.position="fixed",c.style.width="120vw",c.style.height="150vh",c.style.top="-25vh",c.style.left="-10vw",document.body.insertBefore(c,document.body.firstChild);let b=null;const k=()=>{const l=window.visualViewport;if(!b){const x=c.getBoundingClientRect();b={width:Math.max(1,x.width||window.innerWidth),height:Math.max(1,x.height||window.innerHeight)}}const y=b.width,R=b.height,S=window.devicePixelRatio||1,h=Math.max(1,Math.trunc(y*S)),P=Math.max(1,Math.trunc(R*S)),E=window.scrollY+((l==null?void 0:l.offsetTop)??0);return{width:h,height:P,cssWidth:y,cssHeight:R,viewportHeight:R,pixelRatio:S,aspectRatio:h/Math.max(P,1),scrollY:E}},T=k(),z=c.transferControlToOffscreen(),L=new Worker(u);L.postMessage({action:"init",offscreen:z,...T},[z]);const f=()=>{L.postMessage({action:"updateViewport",...k()})};let v=!1;const p=()=>{v||(v=!0,requestAnimationFrame(()=>{v=!1,!r&&f()}))},e=()=>{b=null,p()},o=()=>{p()},a=()=>{L.postMessage({action:document.hidden?"stop":"resume"})},t=window.visualViewport,g="ResizeObserver"in window?new ResizeObserver(()=>{b=null,p()}):null;window.addEventListener("resize",e,{passive:!0}),window.addEventListener("scroll",o,{passive:!0}),document.addEventListener("visibilitychange",a),t==null||t.addEventListener("resize",e,{passive:!0}),t==null||t.addEventListener("scroll",o,{passive:!0}),g==null||g.observe(c),L.onmessage=l=>{l.data.action==="initialized"&&document.body.classList.remove("hidden")};let r=!1;const n=()=>{r||(r=!0,window.removeEventListener("resize",e),window.removeEventListener("scroll",o),document.removeEventListener("visibilitychange",a),t==null||t.removeEventListener("resize",e),t==null||t.removeEventListener("scroll",o),g==null||g.disconnect(),window.removeEventListener("beforeunload",n),window.removeEventListener("pagehide",n),L.postMessage({action:"stop"}),L.terminate(),URL.revokeObjectURL(u),c&&c.parentNode&&c.parentNode.removeChild(c))};return window.addEventListener("beforeunload",n),window.addEventListener("pagehide",n),n}"fonts"in document?document.fonts.ready.then(()=>{s()}):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()}const D="pl",j=["pl","en"],H={pl:{documentLang:"pl-PL",title:"23×2 Fundacja",label:"Polski"},en:{documentLang:"en-US",title:"23×2 Foundation",label:"English"}};function _(m,w="/"){return m==="en"?`${w}?EN`:w}function C(m,w="/"){return`https://23x2.org${_(m,w)}`}const $={"title-23x2":{pl:"23×2<br>Fundacja — na styku psychologii<br>i sztuki",en:"23×2<br>Foundation<br>— At The Intersection Of Psychology<br>And Art"},"paragraph-chromosomes":{pl:"W genomie każdego człowieka znajdują się 23 pary chromosomów — to biologiczny fundament naszej różnorodności i jedności zarazem. Psychologia i sztuka, choć posługują się odmiennymi językami, mogą wspólnie służyć rozumieniu ludzkiego doświadczenia. Fundacja 23×2, utworzona w 2021 roku, działa na tym styku.",en:"Within every human genome are 23 pairs of chromosomes — the biological foundation of both our diversity and our unity. Psychology and art, though they use different languages, can complement one another in the effort to understand human experience. Established in 2021, the 23×2 Foundation works at this intersection."},"title-assumptions":{pl:"Obszary<br>działalności",en:"Areas<br>of work"},"paragraph-goal":{pl:"Fundacja została powołana do wspierania działań na styku psychologii, sztuki i technologii.",en:"The Foundation was established to support work at the intersection of psychology, art, and technology."},"paragraph-research":{pl:"<strong>Badania</strong><br> — projekty łączące podejście empiryczne z praktyką artystyczną.",en:"<strong>Research</strong><br> — projects combining empirical inquiry with artistic practice."},"paragraph-support":{pl:"<strong>Projekty interdyscyplinarne</strong><br> — przedsięwzięcia realizowane wspólnie przez artystów, badaczy i osoby zajmujące się technologią.",en:"<strong>Interdisciplinary projects</strong><br> — work carried out jointly by artists, researchers, and people working with technology."},"paragraph-tools":{pl:"<strong>Praktyka psychologiczna</strong><br> — działania wykorzystujące sztukę i technologię w pracy psychologicznej.",en:"<strong>Psychological practice</strong><br> — initiatives using art and technology in psychological work."},"paragraph-development":{pl:"Fundacja rozwija działalność stopniowo. Do współpracy zapraszamy osoby i instytucje działające w tych obszarach.",en:"The Foundation is developing its work gradually. We welcome contact from people and institutions active in these areas."},"title-contact":{pl:"Kontakt",en:"Contact"},"contact-email":{pl:'<a href="mailto:fundacja@23x2.org">fundacja@23x2.org</a>',en:'<a href="mailto:fundacja@23x2.org">fundacja@23x2.org</a>'},"title-phone":{pl:"tel.&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>",en:"phone &thinsp;+48&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>"},"contact-address":{pl:"<strong>Plac Konstytucji</strong> 3<br>00&#x2043;647 Warszawa",en:"<strong>Plac Konstytucji</strong> 3<br>00&#x2043;647 Warsaw"},"bank-account":{pl:"konto bankowe numer<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>",en:"bank account number<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>"},"footer-label":{pl:"23×2 Fundacja © 2021–2026",en:"23×2 Foundation © 2021–2026"},"supporters-link":{pl:'<a href="/supporters/">Wspierają nas</a>',en:'<a href="/supporters/?EN">Supporters</a>'},"footer-description":{pl:"Strona nie przetwarza danych osobowych ani nie używa ciasteczek.<br>Korzysta z odnawialnych źródeł energii.",en:"This website does not process personal data or use cookies.<br>It runs on renewable energy."},"cta-contact":{pl:"Zapraszamy do kontaktu",en:"Get in touch"},"title-supporters":{pl:"Wspierają nas",en:"Supporters"},"supporters-btcam":{pl:'<strong><a href="https://www.btcam.app">BT Cam</a></strong>',en:'<strong><a href="https://www.btcam.app">BT Cam</a></strong>'},"supporters-thanks":{pl:"Dziękujemy za życzliwe wsparcie naszych działań.",en:"Thank you for your kind support of our work."},"back-home":{pl:'<a href="/" title="powrót">←</a>',en:'<a href="/?EN" title="back">←</a>'}};function N({basePath:m="/",titles:w={}}={}){let d=null;function s(){const e=new URLSearchParams(window.location.search);return e.has("en")||e.has("EN")?"en":D}function i(){document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(e=>{const o=e.getAttribute("hreflang");o==="x-default"?e.href=C(D,m):j.includes(o)&&(e.href=C(o,m))})}function u(e){const o=H[e];if(!o)return;document.documentElement.lang=o.documentLang,document.title=w[e]||o.title;const a=document.querySelector('link[rel="canonical"]');a&&(a.href=C(e,m)),i()}function c(e){document.querySelectorAll(".language-switcher a").forEach(o=>{var t;const a=o.dataset.lang;o.href=_(a,m),o.title=((t=H[a])==null?void 0:t.label)||a,o.classList.toggle("active",a===e),a===e?o.setAttribute("aria-current","page"):o.removeAttribute("aria-current")})}function b(){if(!window._paq)return;const e=`${window.location.pathname}${window.location.search}${window.location.hash}`;window._paq.push(["setCustomUrl",e]),window._paq.push(["setDocumentTitle",document.title]),window._paq.push(["trackPageView"])}function k(){document.querySelectorAll("[data-translate]").forEach(e=>{const o=40+Math.random()*640,a=280+Math.random()*520;e.dataset.fadeDelayMs=String(Math.round(o)),e.dataset.fadeDurationMs=String(Math.round(a)),e.style.setProperty("--fade-delay",`${(o/1e3).toFixed(3)}s`),e.style.setProperty("--fade-duration",`${(a/1e3).toFixed(3)}s`)})}const T=new WeakMap;function z(e,o,a){e.style.overflow="hidden";const t=e.animate([{height:`${o}px`},{height:`${a}px`}],{duration:350,easing:"ease-in-out"});T.set(e,t);const g=()=>{T.get(e)===t&&(e.style.overflow="",T.delete(e))};t.onfinish=g,t.oncancel=g}function L(e,{animate:o=!0}={}){const a=document.querySelectorAll("[data-translate]"),t=r=>{var l;let n=(l=$[r.dataset.translate])==null?void 0:l[e];if(n){const y=/(^|\s|>)([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{1,3})\s+/g;n=n.replace(y,"$1$2&nbsp;"),n=n.replace(y,"$1$2&nbsp;"),r.innerHTML=n}r.offsetHeight,r.classList.add("visible")},g=r=>{var y;const n=r.getBoundingClientRect().height;(y=T.get(r))==null||y.cancel(),t(r);const l=r.getBoundingClientRect().height;Math.abs(l-n)>=.5&&z(r,n,l)};document.body.style.visibility==="visible"&&o?(k(),a.forEach(r=>{r.classList.remove("visible");const n=parseInt(r.dataset.fadeDelayMs||"0",10),l=parseInt(r.dataset.fadeDurationMs||"300",10);window.setTimeout(()=>g(r),n+l+20)})):(a.forEach(t),document.body.style.visibility="visible",document.body.classList.remove("hidden"))}function f(e,{updateUrl:o=!0,historyMode:a="push",animate:t=!0,track:g=!0}={}){if(j.includes(e)){if(o){const r=new URL(window.location.href),n=new URL(_(e,m),window.location.origin);(r.search!==n.search||r.pathname!==n.pathname)&&(r.pathname=n.pathname,r.search=n.search,a==="replace"?window.history.replaceState({lang:e},"",r.href):window.history.pushState({lang:e},"",r.href))}u(e),L(e,{animate:t}),c(e),g&&b()}}function v(){return d&&d.disconnect(),d=new IntersectionObserver(e=>{e.forEach(o=>{const a=o.target;o.isIntersecting?a.style.color="#000":a.style.color="#E880A1"})},{threshold:.1,rootMargin:"0px"}),document.querySelectorAll("[data-translate]").forEach(e=>{d.observe(e)}),d}function p(){k(),document.querySelectorAll("[data-translate]").forEach(o=>{o.style.color="#E880A1"});const e=s();f(e,{updateUrl:!1,animate:!1,track:!1}),v(),b(),document.querySelector(".language-switcher").addEventListener("click",o=>{const a=o.target.closest("a[data-lang]");if(!a)return;o.preventDefault();const t=a.dataset.lang;t&&t!==s()&&f(t)}),window.addEventListener("beforeunload",()=>{d==null||d.disconnect()})}"fonts"in document?document.fonts.ready.then(()=>{p(),document.body.classList.remove("hidden")}):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{p(),document.body.classList.remove("hidden")}):(p(),document.body.classList.remove("hidden")),window.addEventListener("popstate",()=>{f(s(),{updateUrl:!1,animate:!1,track:!0})})}function q(){var m=window._paq=window._paq||[];m.push(["disableCookies"]),m.push(["enableLinkTracking"]);var w="https://viahorizon.com/matomo/";m.push(["setTrackerUrl",w+"matomo.php"]),m.push(["setSiteId","6"]);var d=document,s=d.createElement("script"),i=d.getElementsByTagName("script")[0];s.async=!0,s.src=w+"matomo.js",i.parentNode.insertBefore(s,i)}export{V as a,N as b,q as c,O as i};
