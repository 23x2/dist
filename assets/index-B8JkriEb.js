(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`pl`,`en`],t={pl:{documentLang:`pl-PL`,title:`23×2 Fundacja`,label:`Polski`},en:{documentLang:`en-US`,title:`23×2 Foundation`,label:`English`}};function n(e){return e===`en`?`/?EN`:`/`}function r(e){return`https://23x2.org${n(e)}`}var i={"title-23x2":{pl:`23×2<br>Fundacja — na styku psychologii<br>i sztuki`,en:`23×2<br>Foundation<br>— At The Intersection Of Psychology<br>And Art`},"paragraph-chromosomes":{pl:`W genomie każdego człowieka znajdują się 23 pary chromosomów — to biologiczny fundament naszej różnorodności i jedności zarazem. Psychologia i sztuka, choć posługują się odmiennymi językami, mogą wspólnie służyć rozumieniu ludzkiego doświadczenia. Fundacja 23×2, utworzona w 2021 roku, działa na tym styku.`,en:`Within every human genome are 23 pairs of chromosomes — the biological foundation of both our diversity and our unity. Psychology and art, though they use different languages, can complement one another in the effort to understand human experience. Established in 2021, the 23×2 Foundation works at this intersection.`},"title-assumptions":{pl:`Obszary<br>działalności`,en:`Areas<br>of work`},"paragraph-goal":{pl:`Fundacja została powołana do wspierania działań na styku psychologii, sztuki i technologii.`,en:`The Foundation was established to support work at the intersection of psychology, art, and technology.`},"paragraph-research":{pl:`<strong>Badania</strong><br> — projekty łączące podejście empiryczne z praktyką artystyczną.`,en:`<strong>Research</strong><br> — projects combining empirical inquiry with artistic practice.`},"paragraph-support":{pl:`<strong>Projekty interdyscyplinarne</strong><br> — przedsięwzięcia realizowane wspólnie przez artystów, badaczy i osoby zajmujące się technologią.`,en:`<strong>Interdisciplinary projects</strong><br> — work carried out jointly by artists, researchers, and people working with technology.`},"paragraph-tools":{pl:`<strong>Praktyka psychologiczna</strong><br> — działania wykorzystujące sztukę i technologię w pracy psychologicznej.`,en:`<strong>Psychological practice</strong><br> — initiatives using art and technology in psychological work.`},"paragraph-development":{pl:`Fundacja rozwija działalność stopniowo. Do współpracy zapraszamy osoby i instytucje działające w tych obszarach.`,en:`The Foundation is developing its work gradually. We welcome contact from people and institutions active in these areas.`},"title-contact":{pl:`Kontakt`,en:`Contact`},"contact-email":{pl:`<a href="mailto:fundacja@23x2.org">fundacja@23x2.org</a>`,en:`<a href="mailto:fundacja@23x2.org">fundacja@23x2.org</a>`},"title-phone":{pl:`tel.&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>`,en:`phone &thinsp;+48&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>`},"contact-address":{pl:`<strong>Plac Konstytucji</strong> 3<br>00&#x2043;647 Warszawa`,en:`<strong>Plac Konstytucji</strong> 3<br>00&#x2043;647 Warsaw`},"bank-account":{pl:`konto bankowe numer<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>`,en:`bank account number<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>`},"footer-label":{pl:`23×2 Fundacja © 2021–2026`,en:`23×2 Foundation © 2021–2026`},"footer-description":{pl:`Strona nie przetwarza danych osobowych ani nie używa ciasteczek.<br>Korzysta z odnawialnych źródeł energii.`,en:`This website does not process personal data or use cookies.<br>It runs on renewable energy.`},"cta-contact":{pl:`Zapraszamy do kontaktu`,en:`Get in touch`}},a=3,o=[],s=[],c=document.getElementById(`connectionPath`),l=null,u=0;function d(){let e=document.querySelectorAll(`#logo circle, #logo path`);s=Array.from(e).map(e=>e.getAttribute(`style`).match(/fill: ([^;]+)/)[1])}function f(e,t,n){return e*(1-n)+t*n}function p(e){c.clientWidth;let t=c.clientHeight,n=document.getElementById(`logo`).getBoundingClientRect(),r=n.left+n.width/2,i=[,,,,,].fill().map(()=>[]);for(let n=0;n<a;n++){let l=(n-a/2+.5)*10,u=r+l,d=r+l,p=150*(1+Math.sin(e*Math.PI)),m=1.5+e*2,h=e*Math.PI*2+n*Math.PI/a,g=[];for(let e=0;e<5;e++){let n=e/4,r=Math.sin(n*Math.PI*m+h)*p,a=Math.cos(n*Math.PI*(m*1.5)+h)*(p*.5),o=f(u,d,n)+r*.5,s=f(0,t,n)+r+a;g.push({x:o,y:s}),i[e].push({x:o,y:s})}g[0].y=0,g[g.length-1].y=t;let _=`M ${g[0].x},${g[0].y}`;for(let e=0;e<g.length-1;e++){let t=g[e],n=g[e+1],r=(t.x+n.x)/2,i=(t.y+n.y)/2;_+=` Q ${t.x},${t.y} ${r},${i}`}_+=` L ${g[g.length-1].x},${g[g.length-1].y}`;let v=o[n];v||(v=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),o[n]=v,c.appendChild(v)),v.setAttribute(`d`,_),v.setAttribute(`stroke`,s[n%s.length]),v.setAttribute(`fill`,`none`),v.setAttribute(`stroke-width`,`1`)}i.forEach((e,t)=>{if(e.length<2)return;let n=`M ${e[0].x},${e[0].y}`;for(let t=1;t<e.length-1;t++){let r=e[t-1],i=e[t],a=e[t+1],o=i.x-(a.x-r.x)*.2,s=i.y-(a.y-r.y)*.2,c=i.x+(a.x-r.x)*.2,l=i.y+(a.y-r.y)*.2;n+=` C ${o},${s} ${c},${l} ${a.x},${a.y}`}let r=c.querySelector(`#connecting-${t}`);r||(r=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),r.id=`connecting-${t}`,c.appendChild(r)),r.setAttribute(`d`,n),r.setAttribute(`stroke`,s[t%s.length])})}var m=performance.now();function h(e){e||=performance.now();let t=e-m;m=e;let n=window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight);n=Math.max(0,Math.min(1,n));let r=1-Math.exp(-.00632*t),i=f(u,n,r);p(i),u=i,l=requestAnimationFrame(h)}d(),c.style.position=`fixed`,c.style.top=`0`,c.style.left=`0`,c.style.pointerEvents=`none`,c.style.zIndex=`1`,h(),window.addEventListener(`pagehide`,()=>{l&&cancelAnimationFrame(l)}),(()=>{let a=`
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
  `;function o(){if(!(`OffscreenCanvas`in window)||!(`transferControlToOffscreen`in HTMLCanvasElement.prototype)){console.warn(`Required features not supported`),document.body.classList.remove(`hidden`);return}let e=new Blob([a],{type:`application/javascript`}),t=URL.createObjectURL(e),n=document.createElement(`canvas`);document.body.insertBefore(n,document.body.firstChild);let r=()=>{let e=window.visualViewport,t=e?.width??window.innerWidth,n=e?.height??window.innerHeight,r=e?.offsetTop??0,i=e?.offsetLeft??0,a=window.devicePixelRatio||1,o=Math.max(1,Math.trunc(t*a)),s=Math.max(1,Math.trunc(n*a));return{width:o,height:s,cssWidth:t,cssHeight:n,offsetTop:r,offsetLeft:i,viewportHeight:n,pixelRatio:a,aspectRatio:o/Math.max(s,1),scrollY:window.scrollY}},i=e=>{try{n.width!==e.width&&(n.width=e.width),n.height!==e.height&&(n.height=e.height)}catch{}n.style.width=`${e.cssWidth}px`,n.style.height=`${e.cssHeight}px`,n.style.left=`${Math.round(e.offsetLeft)}px`,n.style.top=`${Math.round(e.offsetTop)}px`},o=r();i(o);let s=n.transferControlToOffscreen(),c=new Worker(t);c.postMessage({action:`init`,offscreen:s,...o},[s]);let l=()=>{let e=r();i(e),c.postMessage({action:`updateViewport`,...e})},u=()=>{l()},d=()=>{l()},f=()=>{c.postMessage({action:document.hidden?`stop`:`resume`})},p=window.visualViewport;window.addEventListener(`resize`,u,{passive:!0}),window.addEventListener(`scroll`,d,{passive:!0}),document.addEventListener(`visibilitychange`,f),p?.addEventListener(`resize`,u,{passive:!0}),p?.addEventListener(`scroll`,u,{passive:!0}),c.onmessage=e=>{e.data.action===`initialized`&&document.body.classList.remove(`hidden`)};let m=!1,h=()=>{m||(m=!0,window.removeEventListener(`resize`,u),window.removeEventListener(`scroll`,d),document.removeEventListener(`visibilitychange`,f),p?.removeEventListener(`resize`,u),p?.removeEventListener(`scroll`,u),window.removeEventListener(`beforeunload`,h),window.removeEventListener(`pagehide`,h),c.postMessage({action:`stop`}),c.terminate(),URL.revokeObjectURL(t),n&&n.parentNode&&n.parentNode.removeChild(n))};return window.addEventListener(`beforeunload`,h),window.addEventListener(`pagehide`,h),h}`fonts`in document?document.fonts.ready.then(()=>{o()}):document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,o):o();let s=null;function c(){let e=new URLSearchParams(window.location.search);return e.has(`en`)||e.has(`EN`)?`en`:`pl`}function l(){document.querySelectorAll(`link[rel="alternate"][hreflang]`).forEach(t=>{let n=t.getAttribute(`hreflang`);n===`x-default`?t.href=r(`pl`):e.includes(n)&&(t.href=r(n))})}function u(e){let n=t[e];if(!n)return;document.documentElement.lang=n.documentLang,document.title=n.title;let i=document.querySelector(`link[rel="canonical"]`);i&&(i.href=r(e)),l()}function d(e){document.querySelectorAll(`.language-switcher a`).forEach(r=>{let i=r.dataset.lang;r.href=n(i),r.title=t[i]?.label||i,r.classList.toggle(`active`,i===e),i===e?r.setAttribute(`aria-current`,`page`):r.removeAttribute(`aria-current`)})}function f(){if(!window._paq)return;let e=`${window.location.pathname}${window.location.search}${window.location.hash}`;window._paq.push([`setCustomUrl`,e]),window._paq.push([`setDocumentTitle`,document.title]),window._paq.push([`trackPageView`])}function p(){document.querySelectorAll(`[data-translate]`).forEach((e,t)=>{let n=e.dataset.translate||`${e.tagName}:${t}`,r=2166136261;for(let e=0;e<n.length;e+=1)r^=n.charCodeAt(e),r=Math.imul(r,16777619);let i=40+(r>>>0)%760;e.dataset.fadeDelayMs=String(i),e.style.setProperty(`--fade-delay`,`${(i/1e3).toFixed(3)}s`)})}function m(e,{animate:t=!0}={}){let n=document.querySelectorAll(`[data-translate]`),r=()=>{n.forEach(t=>{let n=i[t.dataset.translate]?.[e];if(n){let e=/(^|\s|>)([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{1,3})\s+/g;n=n.replace(e,`$1$2&nbsp;`),n=n.replace(e,`$1$2&nbsp;`),t.innerHTML=n}t.offsetHeight,t.classList.add(`visible`)})};document.body.style.visibility===`visible`&&t?(n.forEach(e=>{e.classList.remove(`visible`)}),window.setTimeout(r,280)):(r(),document.body.style.visibility=`visible`,document.body.classList.remove(`hidden`))}function h(t,{updateUrl:r=!0,historyMode:i=`push`,animate:a=!0,track:o=!0}={}){if(e.includes(t)){if(r){let e=new URL(window.location.href),r=new URL(n(t),window.location.origin);(e.search!==r.search||e.pathname!==r.pathname)&&(e.pathname=r.pathname,e.search=r.search,i===`replace`?window.history.replaceState({lang:t},``,e.href):window.history.pushState({lang:t},``,e.href))}u(t),m(t,{animate:a}),d(t),o&&f()}}function g(){return s&&s.disconnect(),s=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target;e.isIntersecting?t.style.color=`#000`:t.style.color=`#E880A1`})},{threshold:.1,rootMargin:`0px`}),document.querySelectorAll(`[data-translate]`).forEach(e=>{s.observe(e)}),s}function _(){p(),document.querySelectorAll(`[data-translate]`).forEach(e=>{e.style.color=`#E880A1`}),h(c(),{updateUrl:!1,animate:!1,track:!1}),g(),f(),document.querySelector(`.language-switcher`).addEventListener(`click`,e=>{let t=e.target.closest(`a[data-lang]`);if(!t)return;e.preventDefault();let n=t.dataset.lang;n&&n!==c()&&h(n)}),window.addEventListener(`beforeunload`,()=>{s?.disconnect()})}`fonts`in document?document.fonts.ready.then(()=>{_(),document.body.classList.remove(`hidden`)}):document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>{_(),document.body.classList.remove(`hidden`)}):(_(),document.body.classList.remove(`hidden`)),window.addEventListener(`popstate`,()=>{h(c(),{updateUrl:!1,animate:!1,track:!0})});var v=window._paq=window._paq||[];v.push([`enableLinkTracking`]),(function(){var e=`https://viahorizon.com/matomo/`;v.push([`setTrackerUrl`,e+`matomo.php`]),v.push([`setSiteId`,`6`]);var t=document,n=t.createElement(`script`),r=t.getElementsByTagName(`script`)[0];n.async=!0,n.src=e+`matomo.js`,r.parentNode.insertBefore(n,r)})()})();