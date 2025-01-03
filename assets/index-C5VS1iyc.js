(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))w(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&w(a)}).observe(document,{childList:!0,subtree:!0});function m(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function w(n){if(n.ep)return;n.ep=!0;const c=m(n);fetch(n.href,c)}})();const R=3;let _=[],S=[],y=document.getElementById("connectionPath"),P=null,I=0;function D(){const p=document.querySelectorAll("#logo circle, #logo path");S=Array.from(p).map(l=>l.getAttribute("style").match(/fill: ([^;]+)/)[1])}function A(p,l,m){return p*(1-m)+l*m}function F(p){y.clientWidth;const l=y.clientHeight,w=document.getElementById("logo").getBoundingClientRect(),n=w.left+w.width/2;let c=Array(5).fill().map(()=>[]);for(let a=0;a<R;a++){const x=(a-R/2+.5)*10,L=n+x,f=n+x,d=5,v=150*(1+Math.sin(p*Math.PI)),b=1.5+p*2,u=p*Math.PI*2+a*Math.PI/R,s=[];for(let o=0;o<d;o++){const t=o/(d-1),i=Math.sin(t*Math.PI*b+u)*v,g=Math.cos(t*Math.PI*(b*1.5)+u)*(v*.5),r=A(L,f,t)+i*.5,z=A(0,l,t)+i+g;s.push({x:r,y:z}),c[o].push({x:r,y:z})}s[0].y=0,s[s.length-1].y=l;let h=`M ${s[0].x},${s[0].y}`;for(let o=0;o<s.length-1;o++){const t=s[o],i=s[o+1],g=(t.x+i.x)/2,r=(t.y+i.y)/2;h+=` Q ${t.x},${t.y} ${g},${r}`}h+=` L ${s[s.length-1].x},${s[s.length-1].y}`;let e=_[a];e||(e=document.createElementNS("http://www.w3.org/2000/svg","path"),_[a]=e,y.appendChild(e)),e.setAttribute("d",h),e.setAttribute("stroke",S[a%S.length]),e.setAttribute("fill","none"),e.setAttribute("stroke-width","1")}c.forEach((a,x)=>{if(a.length<2)return;let L=`M ${a[0].x},${a[0].y}`;for(let d=1;d<a.length-1;d++){const v=a[d-1],b=a[d],u=a[d+1],s=b.x-(u.x-v.x)*.2,h=b.y-(u.y-v.y)*.2,e=b.x+(u.x-v.x)*.2,o=b.y+(u.y-v.y)*.2;L+=` C ${s},${h} ${e},${o} ${u.x},${u.y}`}let f=y.querySelector(`#connecting-${x}`);f||(f=document.createElementNS("http://www.w3.org/2000/svg","path"),f.id=`connecting-${x}`,y.appendChild(f)),f.setAttribute("d",L),f.setAttribute("stroke",S[x%S.length])})}function U(){const p=window.scrollY/(document.documentElement.scrollHeight-window.innerHeight),m=A(I,p,.1);F(m),I=m,P=requestAnimationFrame(U)}D();y.style.position="fixed";y.style.top="0";y.style.left="0";y.style.pointerEvents="none";y.style.zIndex="1";U();window.addEventListener("pagehide",()=>{P&&cancelAnimationFrame(P)});(()=>{const m=`
    let gl, program;
    let isRendering = true;
    let startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    let currentTime = Date.now() - startOfDay.getTime();
    let uniformLocations = {};
    let lastFrameTime = 0;
    const frameInterval = 1000 / 30;

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

    function render(now = 0) {
        if (!isRendering) return;
        
        const deltaTime = now - lastFrameTime;
        if (deltaTime < frameInterval) {
            requestAnimationFrame(render);
            return;
        }
        
        lastFrameTime = now - (deltaTime % frameInterval);
        currentTime = Date.now() - startOfDay.getTime();

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
      fragColor = vec4(finalValue);
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
  `;function w(){if(!("OffscreenCanvas"in window)||!("transferControlToOffscreen"in HTMLCanvasElement.prototype)){console.warn("Required features not supported"),document.body.classList.remove("hidden");return}const e=new Blob([m],{type:"application/javascript"}),o=URL.createObjectURL(e),t=document.createElement("canvas");document.body.insertBefore(t,document.body.firstChild);const i=()=>{const E=window.devicePixelRatio||1,k=window.innerWidth*E,j=window.innerHeight*E;(t.width!==k||t.height!==j)&&(t.width=k,t.height=j)};i();const g=t.transferControlToOffscreen(),r=new Worker(o);r.postMessage({action:"init",offscreen:g,viewportHeight:window.innerHeight,pixelRatio:window.devicePixelRatio},[g]);let z;const C=()=>{i(),r.postMessage({action:"updateViewport",viewportHeight:window.innerHeight,pixelRatio:window.devicePixelRatio,scrollY:window.scrollY})};window.addEventListener("resize",()=>{clearTimeout(z),z=setTimeout(C,150)},{passive:!0}),window.addEventListener("scroll",()=>{r.postMessage({action:"updateViewport",viewportHeight:window.innerHeight,pixelRatio:window.devicePixelRatio,scrollY:window.scrollY})},{passive:!0}),document.addEventListener("visibilitychange",()=>{r.postMessage({action:document.hidden?"stop":"resume"})}),r.onmessage=E=>{E.data.action==="initialized"&&document.body.classList.remove("hidden")};const T=()=>{r.postMessage({action:"stop"}),r.terminate(),URL.revokeObjectURL(o),t&&t.parentNode&&t.parentNode.removeChild(t)};return window.addEventListener("beforeunload",T),window.addEventListener("pagehide",T),T}"fonts"in document?document.fonts.ready.then(()=>{w()}):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w();const n={"title-23x2":{pl:"23×2<br>Fundacja — Na Styku Psychologii<br>i Sztuki",en:"23×2<br>Foundation — At the Intersection of Psychology<br>and Art"},"paragraph-chromosomes":{pl:"W genomie każdego człowieka znajdują się <strong>23 pary chromosomów</strong> — to biologiczny fundament naszej różnorodności i jedności zarazem. Podobnie jak te 46 chromosomów tworzy kompletny kod genetyczny, tak połączenie <strong>psychologii i sztuki</strong> otwiera pełniejszą perspektywę rozumienia ludzkiego doświadczenia. Fundacja 23×2, utworzona w 2021 roku, działa właśnie na tym <strong>przecięciu</strong>, gdzie empiryczne podejście spotyka się z artystyczną ekspresją.",en:"Within the genome of every human being are <strong>23 pairs of chromosomes</strong> — the biological foundation of our diversity and unity. Just as these 46 chromosomes form a complete genetic code, so too does the combination of <strong>psychology and art</strong> open a fuller perspective on understanding the human experience. The 23×2 Foundation, established in 2021, operates at this <strong>intersection</strong>, where empirical approach meets artistic expression."},"title-assumptions":{pl:"Założenia<br>i kierunki działań",en:"Assumptions<br>and<br>Directions of Action"},"paragraph-goal":{pl:"Naszym celem jest tworzenie przestrzeni, gdzie metody naukowe i artystyczne wzajemnie się uzupełniają i wzmacniają. Koncentrujemy się na trzech głównych obszarach:",en:"Our goal is to create a space where scientific and artistic methods complement and reinforce each other. We focus on three main areas:"},"paragraph-research":{pl:"<strong>Innowacyjne metody badawcze</strong><br> — łączymy zaawansowane techniki analizy danych z artystycznymi formami ekspresji, tworząc nowe sposoby rozumienia i przedstawiania ludzkiego doświadczenia.",en:"<strong>Innovative research methods</strong><br> — We combine advanced data analysis techniques with artistic forms of expression, creating new ways of understanding and presenting human experience."},"paragraph-support":{pl:"<strong>Wsparcie projektów interdyscyplinarnych</strong><br> — pomagamy artystom i naukowcom w realizacji przedsięwzięć, które przekraczają tradycyjne granice swoich dziedzin, ze szczególnym uwzględnieniem projektów wykorzystujących nowoczesne technologie.",en:"<strong>Supporting interdisciplinary projects</strong><br> — We help artists and scientists in the implementation of projects that transcend the traditional boundaries of their fields, with particular emphasis on projects using modern technologies."},"paragraph-tools":{pl:"<strong>Rozwój narzędzi terapeutycznych</strong><br> — pracujemy nad nowatorskimi metodami wsparcia psychologicznego, gdzie sztuka i technologia służą lepszemu zrozumieniu siebie.",en:"<strong>Development of therapeutic tools</strong><br> — We are working on innovative methods of psychological support, where art and technology serve a better understanding of oneself."},"title-perspectives":{pl:"Perspektywy rozwoju",en:"Development Perspectives"},"paragraph-focus":{pl:"Skupiamy się na projektach wykorzystujących uczenie maszynowe do analizy procesów twórczych oraz na budowaniu przestrzeni do eksploracji własnych doświadczeń psychologicznych.",en:"We focus on projects using machine learning to analyze creative processes and on building spaces to explore one's own psychological experiences."},"paragraph-designing":{pl:"ᵃ⁄ Projektujemy narzędzia przekładające dane psychologiczne na niekonwencjonalne formy wyrazu artystycznego,",en:"ᵃ⁄ We design tools that translate psychological data into unconventional forms of artistic expression,"},"paragraph-supporting":{pl:"ᵇ⁄ wspieramy projekty łączące tradycyjne sposoby ekspresji z nowoczesnymi metodami analizy danych,",en:"ᵇ⁄ we support projects combining traditional forms of expression with modern data analysis methods,"},"paragraph-creating":{pl:"ᶜ⁄ tworzymy aplikacje do spersonalizowanej eksploracji własnych wzorców psychologicznych.",en:"ᶜ⁄ we create applications for personalized exploration of one's own psychological patterns."},"paragraph-invitation":{pl:"Zapraszamy do współpracy <strong>artystów, badaczy i innowatorów</strong>, którzy wierzą w potencjał łączenia różnych perspektyw poznawczych.",en:"We invite <strong>artists, researchers and innovators</strong> who believe in the potential of combining different cognitive perspectives to cooperate with us."},"title-contact":{pl:"Kontakt",en:"Contact"},"title-phone":{pl:"tel.&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>",en:"phone &thinsp;+48&thinsp;<strong>22&thinsp;100&thinsp;4420</strong>"},"bank-account":{pl:"konto bankowe numer<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>",en:"bank account number<br><strong>40 1600 1462 1747<br>7068 9000 0001</strong>"},"footer-label":{pl:"23×2 Fundacja © 2024",en:"23×2 Foundation © 2024"},"footer-description":{pl:"Strona nie przetwarza danych osobowy ani nie używa ciasteczek,<br>korzysta z odnawialnych źródeł energii.",en:"This website does not process personal data or use cookies,<br>and is powered by renewable energy sources."},cta_button:{en:"Discuss Your Project",pl:"Porozmawiajmy o Projekcie"},cta_email_subject:{en:"Project Discussion Request",pl:"Zapytanie o Projekt"},cta_email_body:{en:"Hello, I'm interested in discussing a potential project...",pl:"Dzień dobry, chciałbym porozmawiać o potencjalnym projekcie..."}},c="preferred_language";let a=!1;function x(e){localStorage.setItem(c,e)}function L(){return localStorage.getItem(c)||"pl"}function f(e){const o=new URL(window.location.href);e==="en"?o.search="en":o.search="",window.history.pushState({},"",o.toString())}function d(e,o=!0){if(e!=="en"&&e!=="pl")return;o&&f(e),x(e),document.documentElement.lang=e==="pl"?"pl-PL":"en-US";const t=document.querySelectorAll("[data-translate]:not(.cta-button)"),i=document.querySelector(".cta-button"),g=[...t,i];document.body.style.visibility==="visible"?(g.forEach(r=>{const z=Math.random()*400;setTimeout(()=>{r.classList.remove("visible")},z)}),setTimeout(()=>{g.forEach(r=>{const z=500+Math.random()*500;setTimeout(()=>{r===i?r.textContent=n.cta_button[e]:r.innerHTML=n[r.dataset.translate][e],r.offsetWidth,r.classList.add("visible")},z)})},500)):(g.forEach(r=>{r===i?r.textContent=n.cta_button[e]:r.innerHTML=n[r.dataset.translate][e],r.offsetWidth,r.classList.add("visible")}),document.body.style.visibility="visible",document.body.classList.remove("hidden")),document.querySelectorAll(".language-switcher a").forEach(r=>{r.classList.toggle("active",r.dataset.lang===e)})}function v(){const e=document.querySelector(".cta-button");e.addEventListener("click",o=>{o.preventDefault();const t=document.documentElement.lang.startsWith("pl")?"pl":"en",i=encodeURIComponent(n.cta_email_subject[t]),g=encodeURIComponent(n.cta_email_body[t]);window.location.href=`mailto:fundacja@23x2.org?subject=${i}&body=${g}`}),e.classList.add("visible")}function b(){a&&e.disconnect();const e=new IntersectionObserver(o=>{o.forEach(t=>{const i=t.target;t.isIntersecting?setTimeout(()=>{i.style.color="#000"},Math.random()*800):i.style.color="#E880A1"})},{threshold:.1,rootMargin:"0px"});return document.querySelectorAll("[data-translate]:not(.cta-button)").forEach(o=>{e.observe(o)}),a=!0,e}function u(){return new URLSearchParams(window.location.search).toString()==="en"?"en":L()||"pl"}function s(){document.querySelectorAll("[data-translate]:not(.cta-button)").forEach(t=>{t.style.color="#E880A1"});const e=u();d(e,!1);const o=b();v(),document.querySelector(".language-switcher").addEventListener("click",t=>{if(t.target.tagName==="A"){t.preventDefault();const i=t.target.dataset.lang;i&&d(i,!0)}}),window.addEventListener("beforeunload",()=>{o.disconnect()})}"fonts"in document?document.fonts.ready.then(()=>{s(),document.body.classList.remove("hidden")}):document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{s(),document.body.classList.remove("hidden")}):(s(),document.body.classList.remove("hidden")),window.addEventListener("popstate",()=>{const e=u();d(e,!1)});var h=window._paq=window._paq||[];h.push(["trackPageView"]),h.push(["enableLinkTracking"]),function(){var e="https://viahorizon.com/matomo/";h.push(["setTrackerUrl",e+"matomo.php"]),h.push(["setSiteId","6"]);var o=document,t=o.createElement("script"),i=o.getElementsByTagName("script")[0];t.async=!0,t.src=e+"matomo.js",i.parentNode.insertBefore(t,i)}()})();
