(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const a of d.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&m(a)}).observe(document,{childList:!0,subtree:!0});function p(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function m(r){if(r.ep)return;r.ep=!0;const d=p(r);fetch(r.href,d)}})();const V="pl",O=["pl","en"],H={pl:{documentLang:"pl-PL",title:"23×2 Fundacja",label:"Polski"},en:{documentLang:"en-US",title:"23×2 Foundation",label:"English"}};function P(l){return l==="en"?"/?EN":"/"}function A(l){return`https://23x2.org${P(l)}`}const q={"title-23x2":{pl:"23×2<br>Fundacja — na styku psychologii<br>i sztuki",en:"23×2<br>Foundation<br>— At The Intersection Of Psychology<br>And Art"},"paragraph-chromosomes":{pl:"W genomie każdego człowieka znajdują się 23 pary chromosomów — to biologiczny fundament naszej różnorodności i jedności zarazem. Psychologia i sztuka, choć posługują się odmiennymi językami, mogą wspólnie służyć rozumieniu ludzkiego doświadczenia. Fundacja 23×2, utworzona w 2021 roku, działa na tym styku.",en:"Within every human genome are 23 pairs of chromosomes — the biological foundation of both our diversity and our unity. Psychology and art, though they use different languages, can complement one another in the effort to understand human experience. Established in 2021, the 23×2 Foundation works at this intersection."},"title-assumptions":{pl:"Obszary<br>działalności",en:"Areas<br>of work"},"paragraph-goal":{pl:"Fundacja została powołana do wspierania działań na styku psychologii, sztuki i technologii.",en:"The Foundation was established to support work at the intersection of psychology, art, and technology."},"paragraph-research":{pl:"<strong>Badania</strong><br> — projekty łączące podejście empiryczne z praktyką artystyczną.",en:"<strong>Research</strong><br> — projects combining empirical inquiry with artistic practice."},"paragraph-support":{pl:"<strong>Projekty interdyscyplinarne</strong><br> — przedsięwzięcia realizowane wspólnie przez artystów, badaczy i osoby zajmujące się technologią.",en:"<strong>Interdisciplinary projects</strong><br> — work carried out jointly by artists, researchers, and people working with technology."},"paragraph-tools":{pl:"<strong>Praktyka psychologiczna</strong><br> — działania wykorzystujące sztukę i technologię w pracy psychologicznej.",en:"<strong>Psychological practice</strong><br> — initiatives using art and technology in psychological work."},"paragraph-development":{pl:"Fundacja rozwija działalność stopniowo. Do współpracy zapraszamy osoby i instytucje działające w tych obszarach.",en:"The Foundation is developing its work gradually. We welcome contact from people and institutions active in these areas."},"title-contact":{pl:"Kontakt",en:"Contact"},"contact-email":{pl:'<a href="mailto:fundacja@23x2.org">fundacja@23x2.org</a>',en:'<a href="mailto:fundacja@23x2.org">fundacja@23x2.org</a>'},"title-phone":{pl:"tel.&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>",en:"phone &thinsp;+48&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>"},"contact-address":{pl:"<strong>Plac Konstytucji</strong> 3<br>00&#x2043;647 Warszawa",en:"<strong>Plac Konstytucji</strong> 3<br>00&#x2043;647 Warsaw"},"bank-account":{pl:"konto bankowe numer<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>",en:"bank account number<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>"},"footer-label":{pl:"23×2 Fundacja © 2021–2026",en:"23×2 Foundation © 2021–2026"},"footer-description":{pl:"Strona nie przetwarza danych osobowych ani nie używa ciasteczek.<br>Korzysta z odnawialnych źródeł energii.",en:"This website does not process personal data or use cookies.<br>It runs on renewable energy."},"cta-contact":{pl:"Zapraszamy do kontaktu",en:"Get in touch"}},z=3;let D=[],T=[],v=document.getElementById("connectionPath"),F=null,$=0;function Y(){const l=document.querySelectorAll("#logo circle, #logo path");T=Array.from(l).map(g=>g.getAttribute("style").match(/fill: ([^;]+)/)[1])}function U(l,g,p){return l*(1-p)+g*p}function W(l){v.clientWidth;const g=v.clientHeight,m=document.getElementById("logo").getBoundingClientRect(),r=m.left+m.width/2;let d=Array(5).fill().map(()=>[]);for(let a=0;a<z;a++){const b=(a-z/2+.5)*10,E=r+b,h=r+b,y=5,w=150*(1+Math.sin(l*Math.PI)),x=1.5+l*2,f=l*Math.PI*2+a*Math.PI/z,s=[];for(let e=0;e<y;e++){const n=e/(y-1),u=Math.sin(n*Math.PI*x+f)*w,i=Math.cos(n*Math.PI*(x*1.5)+f)*(w*.5),c=U(E,h,n)+u*.5,S=U(0,g,n)+u+i;s.push({x:c,y:S}),d[e].push({x:c,y:S})}s[0].y=0,s[s.length-1].y=g;let o=`M ${s[0].x},${s[0].y}`;for(let e=0;e<s.length-1;e++){const n=s[e],u=s[e+1],i=(n.x+u.x)/2,c=(n.y+u.y)/2;o+=` Q ${n.x},${n.y} ${i},${c}`}o+=` L ${s[s.length-1].x},${s[s.length-1].y}`;let t=D[a];t||(t=document.createElementNS("http://www.w3.org/2000/svg","path"),D[a]=t,v.appendChild(t)),t.setAttribute("d",o),t.setAttribute("stroke",T[a%T.length]),t.setAttribute("fill","none"),t.setAttribute("stroke-width","1")}d.forEach((a,b)=>{if(a.length<2)return;let E=`M ${a[0].x},${a[0].y}`;for(let y=1;y<a.length-1;y++){const w=a[y-1],x=a[y],f=a[y+1],s=x.x-(f.x-w.x)*.2,o=x.y-(f.y-w.y)*.2,t=x.x+(f.x-w.x)*.2,e=x.y+(f.y-w.y)*.2;E+=` C ${s},${o} ${t},${e} ${f.x},${f.y}`}let h=v.querySelector(`#connecting-${b}`);h||(h=document.createElementNS("http://www.w3.org/2000/svg","path"),h.id=`connecting-${b}`,v.appendChild(h)),h.setAttribute("d",E),h.setAttribute("stroke",T[b%T.length])})}let N=performance.now();function B(l){l||(l=performance.now());const g=l-N;N=l;let p=window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight);p=Math.max(0,Math.min(1,p));const m=1-Math.exp(-.00632*g),r=U($,p,m);W(r),$=r,F=requestAnimationFrame(B)}Y();v.style.position="fixed";v.style.top="0";v.style.left="0";v.style.pointerEvents="none";v.style.zIndex="1";B();window.addEventListener("pagehide",()=>{F&&cancelAnimationFrame(F)});(()=>{const p=`
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
  `;function m(){if(!("OffscreenCanvas"in window)||!("transferControlToOffscreen"in HTMLCanvasElement.prototype)){console.warn("Required features not supported"),document.body.classList.remove("hidden");return}const o=new Blob([p],{type:"application/javascript"}),t=URL.createObjectURL(o),e=document.createElement("canvas");document.body.insertBefore(e,document.body.firstChild);const n=()=>{const R=window.devicePixelRatio||1,I=Math.max(1,Math.trunc(window.innerWidth*R)),j=Math.max(1,Math.trunc(window.innerHeight*R));return{width:I,height:j,viewportHeight:window.innerHeight,pixelRatio:R,aspectRatio:I/Math.max(j,1),scrollY:window.scrollY}},u=n();e.width=u.width,e.height=u.height;const i=e.transferControlToOffscreen(),c=new Worker(t);c.postMessage({action:"init",offscreen:i,...u},[i]);const S=()=>{c.postMessage({action:"updateViewport",...n()})},k=()=>{S()},_=()=>{S()},C=()=>{c.postMessage({action:document.hidden?"stop":"resume"})};window.addEventListener("resize",k,{passive:!0}),window.addEventListener("scroll",_,{passive:!0}),document.addEventListener("visibilitychange",C),c.onmessage=R=>{R.data.action==="initialized"&&document.body.classList.remove("hidden")};let M=!1;const L=()=>{M||(M=!0,window.removeEventListener("resize",k),window.removeEventListener("scroll",_),document.removeEventListener("visibilitychange",C),window.removeEventListener("beforeunload",L),window.removeEventListener("pagehide",L),c.postMessage({action:"stop"}),c.terminate(),URL.revokeObjectURL(t),e&&e.parentNode&&e.parentNode.removeChild(e))};return window.addEventListener("beforeunload",L),window.addEventListener("pagehide",L),L}"fonts"in document?document.fonts.ready.then(()=>{m()}):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m();let r=null;function d(){const o=new URLSearchParams(window.location.search);return o.has("en")||o.has("EN")?"en":V}function a(){document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(o=>{const t=o.getAttribute("hreflang");t==="x-default"?o.href=A(V):O.includes(t)&&(o.href=A(t))})}function b(o){const t=H[o];if(!t)return;document.documentElement.lang=t.documentLang,document.title=t.title;const e=document.querySelector('link[rel="canonical"]');e&&(e.href=A(o)),a()}function E(o){document.querySelectorAll(".language-switcher a").forEach(t=>{var n;const e=t.dataset.lang;t.href=P(e),t.title=((n=H[e])==null?void 0:n.label)||e,t.classList.toggle("active",e===o),e===o?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function h(){if(!window._paq)return;const o=`${window.location.pathname}${window.location.search}${window.location.hash}`;window._paq.push(["setCustomUrl",o]),window._paq.push(["setDocumentTitle",document.title]),window._paq.push(["trackPageView"])}function y(o,{animate:t=!0}={}){const e=document.querySelectorAll("[data-translate]"),n=()=>{e.forEach(u=>{var c;let i=(c=q[u.dataset.translate])==null?void 0:c[o];if(i){const S=/(^|\s|>)([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{1,3})\s+/g;i=i.replace(S,"$1$2&nbsp;"),i=i.replace(S,"$1$2&nbsp;"),u.innerHTML=i}u.offsetHeight,u.classList.add("visible")})};document.body.style.visibility==="visible"&&t?(e.forEach(u=>{u.classList.remove("visible")}),window.setTimeout(n,280)):(n(),document.body.style.visibility="visible",document.body.classList.remove("hidden"))}function w(o,{updateUrl:t=!0,historyMode:e="push",animate:n=!0,track:u=!0}={}){if(O.includes(o)){if(t){const i=new URL(window.location.href),c=new URL(P(o),window.location.origin);(i.search!==c.search||i.pathname!==c.pathname)&&(i.pathname=c.pathname,i.search=c.search,e==="replace"?window.history.replaceState({lang:o},"",i.href):window.history.pushState({lang:o},"",i.href))}b(o),y(o,{animate:n}),E(o),u&&h()}}function x(){return r&&r.disconnect(),r=new IntersectionObserver(o=>{o.forEach(t=>{const e=t.target;t.isIntersecting?setTimeout(()=>{e.style.color="#000"},Math.random()*800):e.style.color="#E880A1"})},{threshold:.1,rootMargin:"0px"}),document.querySelectorAll("[data-translate]").forEach(o=>{r.observe(o)}),r}function f(){document.querySelectorAll("[data-translate]").forEach(t=>{t.style.color="#E880A1"});const o=d();w(o,{updateUrl:!1,animate:!1,track:!1}),x(),h(),document.querySelector(".language-switcher").addEventListener("click",t=>{const e=t.target.closest("a[data-lang]");if(!e)return;t.preventDefault();const n=e.dataset.lang;n&&n!==d()&&w(n)}),window.addEventListener("beforeunload",()=>{r==null||r.disconnect()})}"fonts"in document?document.fonts.ready.then(()=>{f(),document.body.classList.remove("hidden")}):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{f(),document.body.classList.remove("hidden")}):(f(),document.body.classList.remove("hidden")),window.addEventListener("popstate",()=>{w(d(),{updateUrl:!1,animate:!1,track:!0})});var s=window._paq=window._paq||[];s.push(["enableLinkTracking"]),function(){var o="https://viahorizon.com/matomo/";s.push(["setTrackerUrl",o+"matomo.php"]),s.push(["setSiteId","6"]);var t=document,e=t.createElement("script"),n=t.getElementsByTagName("script")[0];e.async=!0,e.src=o+"matomo.js",n.parentNode.insertBefore(e,n)}()})();
