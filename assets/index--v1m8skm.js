(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))p(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&p(i)}).observe(document,{childList:!0,subtree:!0});function m(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function p(r){if(r.ep)return;r.ep=!0;const l=m(r);fetch(r.href,l)}})();const I="pl",M=["pl","en"],C={pl:{documentLang:"pl-PL",title:"23×2 Fundacja",label:"Polski"},en:{documentLang:"en-US",title:"23×2 Foundation",label:"English"}};function z(c){return c==="en"?"/?EN":"/"}function R(c){return`https://23x2.org${z(c)}`}const H={"title-23x2":{pl:"23×2<br>Fundacja — na styku psychologii<br>i sztuki",en:"23×2<br>Foundation<br>— At The Intersection Of Psychology<br>And Art"},"paragraph-chromosomes":{pl:"W genomie każdego człowieka znajdują się 23 pary chromosomów — to biologiczny fundament naszej różnorodności i jedności zarazem. Psychologia i sztuka, choć posługują się odmiennymi językami, mogą wspólnie służyć rozumieniu ludzkiego doświadczenia. Fundacja 23×2, utworzona w 2021 roku, działa na tym styku.",en:"Within every human genome are 23 pairs of chromosomes — the biological foundation of both our diversity and our unity. Psychology and art, though they use different languages, can complement one another in the effort to understand human experience. Established in 2021, the 23×2 Foundation works at this intersection."},"title-assumptions":{pl:"Obszary<br>działalności",en:"Areas<br>of work"},"paragraph-goal":{pl:"Fundacja została powołana do wspierania działań na styku psychologii, sztuki i technologii.",en:"The Foundation was established to support work at the intersection of psychology, art, and technology."},"paragraph-research":{pl:"<strong>Badania</strong><br> — projekty łączące podejście empiryczne z praktyką artystyczną.",en:"<strong>Research</strong><br> — projects combining empirical inquiry with artistic practice."},"paragraph-support":{pl:"<strong>Projekty interdyscyplinarne</strong><br> — przedsięwzięcia realizowane wspólnie przez artystów, badaczy i osoby zajmujące się technologią.",en:"<strong>Interdisciplinary projects</strong><br> — work carried out jointly by artists, researchers, and people working with technology."},"paragraph-tools":{pl:"<strong>Praktyka psychologiczna</strong><br> — działania wykorzystujące sztukę i technologię w pracy psychologicznej.",en:"<strong>Psychological practice</strong><br> — initiatives using art and technology in psychological work."},"paragraph-development":{pl:"Fundacja rozwija działalność stopniowo. Do współpracy zapraszamy osoby i instytucje działające w tych obszarach.",en:"The Foundation is developing its work gradually. We welcome contact from people and institutions active in these areas."},"title-contact":{pl:"Kontakt",en:"Contact"},"contact-email":{pl:'<a href="mailto:fundacja@23x2.org">fundacja@23x2.org</a>',en:'<a href="mailto:fundacja@23x2.org">fundacja@23x2.org</a>'},"title-phone":{pl:"tel.&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>",en:"phone &thinsp;+48&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>"},"contact-address":{pl:"<strong>Plac Konstytucji</strong> 3<br>00&#x2043;647 Warszawa",en:"<strong>Plac Konstytucji</strong> 3<br>00&#x2043;647 Warsaw"},"bank-account":{pl:"konto bankowe numer<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>",en:"bank account number<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>"},"footer-label":{pl:"23×2 Fundacja © 2021–2026",en:"23×2 Foundation © 2021–2026"},"footer-description":{pl:"Strona nie przetwarza danych osobowych ani nie używa ciasteczek.<br>Korzysta z odnawialnych źródeł energii.",en:"This website does not process personal data or use cookies.<br>It runs on renewable energy."},"cta-contact":{pl:"Zapraszamy do kontaktu",en:"Get in touch"}},P=3;let j=[],S=[],v=document.getElementById("connectionPath"),U=null,O=0;function N(){const c=document.querySelectorAll("#logo circle, #logo path");S=Array.from(c).map(g=>g.getAttribute("style").match(/fill: ([^;]+)/)[1])}function k(c,g,m){return c*(1-m)+g*m}function q(c){v.clientWidth;const g=v.clientHeight,p=document.getElementById("logo").getBoundingClientRect(),r=p.left+p.width/2;let l=Array(5).fill().map(()=>[]);for(let i=0;i<P;i++){const b=(i-P/2+.5)*10,E=r+b,h=r+b,y=5,w=150*(1+Math.sin(c*Math.PI)),x=1.5+c*2,f=c*Math.PI*2+i*Math.PI/P,s=[];for(let e=0;e<y;e++){const n=e/(y-1),u=Math.sin(n*Math.PI*x+f)*w,a=Math.cos(n*Math.PI*(x*1.5)+f)*(w*.5),d=k(E,h,n)+u*.5,L=k(0,g,n)+u+a;s.push({x:d,y:L}),l[e].push({x:d,y:L})}s[0].y=0,s[s.length-1].y=g;let o=`M ${s[0].x},${s[0].y}`;for(let e=0;e<s.length-1;e++){const n=s[e],u=s[e+1],a=(n.x+u.x)/2,d=(n.y+u.y)/2;o+=` Q ${n.x},${n.y} ${a},${d}`}o+=` L ${s[s.length-1].x},${s[s.length-1].y}`;let t=j[i];t||(t=document.createElementNS("http://www.w3.org/2000/svg","path"),j[i]=t,v.appendChild(t)),t.setAttribute("d",o),t.setAttribute("stroke",S[i%S.length]),t.setAttribute("fill","none"),t.setAttribute("stroke-width","1")}l.forEach((i,b)=>{if(i.length<2)return;let E=`M ${i[0].x},${i[0].y}`;for(let y=1;y<i.length-1;y++){const w=i[y-1],x=i[y],f=i[y+1],s=x.x-(f.x-w.x)*.2,o=x.y-(f.y-w.y)*.2,t=x.x+(f.x-w.x)*.2,e=x.y+(f.y-w.y)*.2;E+=` C ${s},${o} ${t},${e} ${f.x},${f.y}`}let h=v.querySelector(`#connecting-${b}`);h||(h=document.createElementNS("http://www.w3.org/2000/svg","path"),h.id=`connecting-${b}`,v.appendChild(h)),h.setAttribute("d",E),h.setAttribute("stroke",S[b%S.length])})}let D=performance.now();function $(c){c||(c=performance.now());const g=c-D;D=c;let m=window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight);m=Math.max(0,Math.min(1,m));const p=1-Math.exp(-.00632*g),r=k(O,m,p);q(r),O=r,U=requestAnimationFrame($)}N();v.style.position="fixed";v.style.top="0";v.style.left="0";v.style.pointerEvents="none";v.style.zIndex="1";$();window.addEventListener("pagehide",()=>{U&&cancelAnimationFrame(U)});(()=>{const m=`
    let gl, program;
    let isRendering = true;
    let startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    // Use modulo to keep time from getting too large for WebGL float precision
    let currentTime = (Date.now() - startOfDay.getTime()) % 100000;
    let uniformLocations = {};
    let lastFrameTime = 0;

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

        const createBuffer = (data, attribLocation, size) => {
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
            gl.enableVertexAttribArray(attribLocation);
            gl.vertexAttribPointer(attribLocation, size, gl.FLOAT, false, 0, 0);
        };

        createBuffer(positions, gl.getAttribLocation(program, 'a_position'), 2);
        createBuffer(texCoords, gl.getAttribLocation(program, 'a_texcoord'), 2);
    }

    function render(now = performance.now()) {
        if (!isRendering) return;
        
        if (lastFrameTime === 0) lastFrameTime = now;
        const deltaTime = now - lastFrameTime;
        lastFrameTime = now;
        
        // Simple accumulation so it is completely decoupled from frame rate
        // and doesn't suffer from startOfDay precision loss in lowp floats.
        currentTime += deltaTime;

        gl.uniform1f(uniformLocations.time, currentTime / 1000);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        
        requestAnimationFrame(render);
    }

    self.onmessage = function(e) {
        const { action, offscreen } = e.data;
        
        if (action === 'init') {
            gl = offscreen.getContext('webgl2');
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
      fragColor = vec4(1.0, 1.0, 0.9, finalValue);
  }`)});
            program = createProgram(gl, vertexShader, fragmentShader);

            setupAttributes(gl, program);
            
            // Set up uniforms
            uniformLocations = {
                time: gl.getUniformLocation(program, 'time'),
                noiseamount: gl.getUniformLocation(program, 'noiseamount'),
                speed: gl.getUniformLocation(program, 'speed'),
                viewportHeight: gl.getUniformLocation(program, 'viewportHeight'),
                pixelRatio: gl.getUniformLocation(program, 'pixelRatio'),
                aspectRatio: gl.getUniformLocation(program, 'aspectRatio'),
                scrollY: gl.getUniformLocation(program, 'scrollY')
            };

            // Initialize texture
            const textureCanvas = generateTextureWithCircles();
            const texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureCanvas);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

            gl.viewport(0, 0, offscreen.width, offscreen.height);
            gl.clearColor(0, 0, 0, 0);
            
            // Set initial uniform values
            gl.useProgram(program);
            gl.uniform1f(uniformLocations.noiseamount, 40.0);
            gl.uniform1f(uniformLocations.speed, 1.0);
            gl.uniform1f(uniformLocations.viewportHeight, e.data.viewportHeight);
            gl.uniform1f(uniformLocations.pixelRatio, e.data.pixelRatio);
            gl.uniform1f(uniformLocations.aspectRatio, offscreen.width / offscreen.height);
            gl.uniform1f(uniformLocations.scrollY, 0);

            render();
            self.postMessage({ action: 'initialized' });
        } else if (action === 'updateViewport') {
            if (!gl || !program) return;
            
            gl.useProgram(program);
            gl.uniform1f(uniformLocations.viewportHeight, e.data.viewportHeight);
            gl.uniform1f(uniformLocations.pixelRatio, e.data.pixelRatio);
            gl.uniform1f(uniformLocations.scrollY, e.data.scrollY || 0);
        } else if (action === 'stop') {
            isRendering = false;
        } else if (action === 'resume') {
            isRendering = true;
            render();
        }
    };
  `;function p(){if(!("OffscreenCanvas"in window)||!("transferControlToOffscreen"in HTMLCanvasElement.prototype)){console.warn("Required features not supported"),document.body.classList.remove("hidden");return}const o=new Blob([m],{type:"application/javascript"}),t=URL.createObjectURL(o),e=document.createElement("canvas");document.body.insertBefore(e,document.body.firstChild);const n=()=>{const T=window.devicePixelRatio||1,_=window.innerWidth*T,F=window.innerHeight*T;(e.width!==_||e.height!==F)&&(e.width=_,e.height=F)};n();const u=e.transferControlToOffscreen(),a=new Worker(t);a.postMessage({action:"init",offscreen:u,viewportHeight:window.innerHeight,pixelRatio:window.devicePixelRatio},[u]);let d;const L=()=>{n(),a.postMessage({action:"updateViewport",viewportHeight:window.innerHeight,pixelRatio:window.devicePixelRatio,scrollY:window.scrollY})};window.addEventListener("resize",()=>{clearTimeout(d),d=setTimeout(L,150)},{passive:!0}),window.addEventListener("scroll",()=>{a.postMessage({action:"updateViewport",viewportHeight:window.innerHeight,pixelRatio:window.devicePixelRatio,scrollY:window.scrollY})},{passive:!0}),document.addEventListener("visibilitychange",()=>{a.postMessage({action:document.hidden?"stop":"resume"})}),a.onmessage=T=>{T.data.action==="initialized"&&document.body.classList.remove("hidden")};const A=()=>{a.postMessage({action:"stop"}),a.terminate(),URL.revokeObjectURL(t),e&&e.parentNode&&e.parentNode.removeChild(e)};return window.addEventListener("beforeunload",A),window.addEventListener("pagehide",A),A}"fonts"in document?document.fonts.ready.then(()=>{p()}):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",p):p();let r=null;function l(){const o=new URLSearchParams(window.location.search);return o.has("en")||o.has("EN")?"en":I}function i(){document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(o=>{const t=o.getAttribute("hreflang");t==="x-default"?o.href=R(I):M.includes(t)&&(o.href=R(t))})}function b(o){const t=C[o];if(!t)return;document.documentElement.lang=t.documentLang,document.title=t.title;const e=document.querySelector('link[rel="canonical"]');e&&(e.href=R(o)),i()}function E(o){document.querySelectorAll(".language-switcher a").forEach(t=>{var n;const e=t.dataset.lang;t.href=z(e),t.title=((n=C[e])==null?void 0:n.label)||e,t.classList.toggle("active",e===o),e===o?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function h(){if(!window._paq)return;const o=`${window.location.pathname}${window.location.search}${window.location.hash}`;window._paq.push(["setCustomUrl",o]),window._paq.push(["setDocumentTitle",document.title]),window._paq.push(["trackPageView"])}function y(o,{animate:t=!0}={}){const e=document.querySelectorAll("[data-translate]"),n=()=>{e.forEach(u=>{var d;let a=(d=H[u.dataset.translate])==null?void 0:d[o];if(a){const L=/(^|\s|>)([a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{1,3})\s+/g;a=a.replace(L,"$1$2&nbsp;"),a=a.replace(L,"$1$2&nbsp;"),u.innerHTML=a}u.offsetHeight,u.classList.add("visible")})};document.body.style.visibility==="visible"&&t?(e.forEach(u=>{u.classList.remove("visible")}),window.setTimeout(n,280)):(n(),document.body.style.visibility="visible",document.body.classList.remove("hidden"))}function w(o,{updateUrl:t=!0,historyMode:e="push",animate:n=!0,track:u=!0}={}){if(M.includes(o)){if(t){const a=new URL(window.location.href),d=new URL(z(o),window.location.origin);(a.search!==d.search||a.pathname!==d.pathname)&&(a.pathname=d.pathname,a.search=d.search,e==="replace"?window.history.replaceState({lang:o},"",a.href):window.history.pushState({lang:o},"",a.href))}b(o),y(o,{animate:n}),E(o),u&&h()}}function x(){return r&&r.disconnect(),r=new IntersectionObserver(o=>{o.forEach(t=>{const e=t.target;t.isIntersecting?setTimeout(()=>{e.style.color="#000"},Math.random()*800):e.style.color="#E880A1"})},{threshold:.1,rootMargin:"0px"}),document.querySelectorAll("[data-translate]").forEach(o=>{r.observe(o)}),r}function f(){document.querySelectorAll("[data-translate]").forEach(t=>{t.style.color="#E880A1"});const o=l();w(o,{updateUrl:!1,animate:!1,track:!1}),x(),h(),document.querySelector(".language-switcher").addEventListener("click",t=>{const e=t.target.closest("a[data-lang]");if(!e)return;t.preventDefault();const n=e.dataset.lang;n&&n!==l()&&w(n)}),window.addEventListener("beforeunload",()=>{r==null||r.disconnect()})}"fonts"in document?document.fonts.ready.then(()=>{f(),document.body.classList.remove("hidden")}):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{f(),document.body.classList.remove("hidden")}):(f(),document.body.classList.remove("hidden")),window.addEventListener("popstate",()=>{w(l(),{updateUrl:!1,animate:!1,track:!0})});var s=window._paq=window._paq||[];s.push(["enableLinkTracking"]),function(){var o="https://viahorizon.com/matomo/";s.push(["setTrackerUrl",o+"matomo.php"]),s.push(["setSiteId","6"]);var t=document,e=t.createElement("script"),n=t.getElementsByTagName("script")[0];e.async=!0,e.src=o+"matomo.js",n.parentNode.insertBefore(e,n)}()})();
