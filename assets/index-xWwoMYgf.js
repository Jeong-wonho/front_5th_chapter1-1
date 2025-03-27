var L=Object.defineProperty;var E=(o,e,t)=>e in o?L(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var u=(o,e,t)=>E(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const f=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input id="userPw" type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button id="loginBtn" type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,p=()=>(console.log("Header component 랜더링"),`<header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>`),b=()=>{const o="/front_5th_chapter1-1/",t=window.location.pathname.includes("hash.html")?"hash":"browser",s=()=>{if(t==="hash")return window.location.hash.slice(1)||"/";{const l=window.location.pathname;if(l.startsWith(o)){const a=l.substring(o.length)||"/";return a.startsWith("/")?a:`/${a}`}return l}};console.log("getCurrentPath",s());const n=localStorage.getItem("user"),r=s(),c=r==="/",P=r==="/profile",m=c?"text-blue-600 font-bold":"text-gray-600",F=P?"text-blue-600 font-bold":"text-gray-600",i=l=>{if(!l)return o;if(t==="hash")return`#${l}`;{if(l==="/")return o;const a=l.startsWith("/")?l.slice(1):l;return console.log("cleanPath",a),`${o.endsWith("/")?o.slice(0,-1):o}/${a}`}};console.log("getHref",i());let h;return n?h=`
      <li><a href="${i("/")}" class="${m}">홈</a></li>
      <li><a href="${i("/profile")}" class="${F}">프로필</a></li>
      <li><a id="logout" href="${i("/logout")}" class="text-gray-600">로그아웃</a></li>
    `:h=`
      <li><a href="${i("/")}" class="${m}">홈</a></li>
      <li><a href="${i("/login")}" class="text-gray-600">로그인</a></li>
    `,`
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${h}
      </ul>
    </nav>
  `},w=()=>(console.log("Footer"),`<footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`),$=[{profileImage:"https://placehold.co/40/FFC107/FFFFFF?text=YS",name:"유승민",time:"30분 전",content:"오늘 날씨 너무 좋네요! 다들 즐거운 하루 보내세요~"},{profileImage:"https://placehold.co/40/2196F3/FFFFFF?text=JH",name:"김정현",time:"1시간 전",content:"새로운 프로젝트 시작! 다들 응원해주세요!"},{profileImage:"https://placehold.co/40/4CAF50/FFFFFF?text=EJ",name:"이은지",time:"2시간 전",content:"오늘 점심은 뭘 먹을까요? 맛집 추천 받아요!"},{profileImage:"https://placehold.co/40/9C27B0/FFFFFF?text=SM",name:"박세민",time:"3시간 전",content:"주말에 등산 갈 사람? 같이 가요~"},{profileImage:"https://placehold.co/40/FF5722/FFFFFF?text=HJ",name:"최현지",time:"4시간 전",content:"새로 나온 영화 봤는데 너무 재밌어요! 강추!"}],v=()=>{const o=$.map(e=>`
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="${e.profileImage}" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">${e.name}</p>
          <p class="text-sm text-gray-500">${e.time}</p>
        </div>
      </div>
      <p>${e.content}</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
  `).join("");return`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${p()}
      ${b()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${o}
        </div>
        
      </main>
      ${w()}
    </div>
  </div>
`},d={getUser(o){return JSON.parse(localStorage.getItem(o))},setUser(o,e){localStorage.setItem(o,JSON.stringify(e))},initUser(o){localStorage.removeItem(o)}},x=()=>{const o=d.getUser("user")||{username:"",email:"",bio:""};return`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${p()}
      ${b()}
      <main class="p-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
             내 프로필
          </h2>
          <form id="profile-form">
            <div class="mb-4">
              <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
              <input type="text" id="username" name="username" value="${o.username||""}" class="w-full p-2 border rounded" />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
              <input type="email" id="email" name="email" value="${o.email||""}" class="w-full p-2 border rounded" />
            </div>
            <div class="mb-6">
              <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
              <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">${o.bio||""}</textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
          </form>
        </div>
      </main>
      ${w()}
    </div>
  </div>
  `},R=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/front_5th_chapter1-1/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,g={login:o=>{if(o==="testuser"){const e={username:o,email:"",bio:""};return d.setUser("user",e),!0}return!1},logout:()=>{d.initUser("user")}};class y{constructor(){u(this,"handleLinkClick",e=>{if(console.log("handleLinkClick 실행"),e.target.tagName==="A"){e.preventDefault();const t=this.cleanPath(e.target.getAttribute("href")),s=t.includes("#")?t.split("#")[1]:this.cleanPath(t);if(console.log("handleLinkClick",s),this.cleanPath(t)==="/logout"||s==="/logout"){console.log("/logout 실행"),g.logout(),this.navigateTo("/login");return}this.navigateTo(t)}});u(this,"handleLogin",e=>{e.preventDefault();const t=document.getElementById("username").value,s=document.getElementById("userPw").value;g.login(t,s)?this.navigateTo("/profile"):alert(!t||!s?"이름 또는 비밀번호를 입력해주세요.":"이름 또는 비밀번호가 일치하지 않습니다.")});u(this,"handleUpdateProfile",e=>{e.preventDefault();const t=document.getElementById("username").value.trim(),s=document.getElementById("email").value.trim(),n=document.getElementById("bio").value.trim();if(t){const r={username:t,email:s,bio:n};d.setUser("user",r),window.location.reload()}});this.routes={},this.currentPath=""}addRoute(e,t){this.routes[e]=t}renderPage(e){const t=this.routes[e];return typeof t=="function"?t():R()}cleanPath(e){if(!e)return"/";if(console.log("this.repoName",this.repoName),console.log("window.location.hostname",window.location.hostname),console.log("this.isGhPages",this.isGhPages),this.repoName&&e.startsWith(this.repoName)){const t=e.slice(this.repoName.length);return console.log("cleanedPath",t),t.startsWith("/")?t:(console.log("cleanedPath","/"+t),"/"+t)}return e}setupPageListeners(e){console.log("setupPageListeners path",e),this.currentPath=e;const t=d.getUser("user");if(e==="/login"){if(t){this.navigateTo("/");return}const s=document.getElementById("login-form");s&&(s.removeEventListener("submit",this.handleLogin),s.addEventListener("submit",this.handleLogin))}if(e==="/profile"&&!t){this.navigateTo("/login");return}else{const s=document.getElementById("profile-form");s&&(s.removeEventListener("submit",this.handleUpdateProfile),s.addEventListener("submit",this.handleUpdateProfile))}if(e!=="/login"){console.log("nav 이벤트 리스너 등록");const s=document.querySelector("nav");s&&(s.removeEventListener("click",this.handleLinkClick),s.addEventListener("click",this.handleLinkClick))}}navigateTo(){throw new Error("자식 클래스에서 해당 메서드 구현해야합니다.")}handleRoute(){throw new Error("자식 클래스에서 해당 메서드 구현해야합니다.")}init(){throw new Error("자식 클래스에서 구현합니다.")}}class I extends y{constructor(){super(),this.repoName="/front_5th_chapter1-1",window.addEventListener("popstate",this.handlePopState.bind(this))}handlePopState(){console.log("브라우저 popstate 이벤트 발생"),this.handleRoute("root",window.location.pathname)}navigateTo(e){console.log("브라우저 라우터: navigateTo",e),history.pushState(null,"",e),this.handleRoute("root",e)}handleRoute(e,t){console.log("브라우저 라우팅 이동",t);const s=this.cleanPath(t);console.log("cleanedPath",s);const n=document.getElementById(e);n&&(n.innerHTML=this.renderPage(s),this.setupPageListeners(s))}init(){this.addRoute("/",v),this.addRoute("/login",f),this.addRoute("/profile",x),this.handleRoute("root",window.location.pathname)}}class C extends y{constructor(){super(),window.addEventListener("hashchange",this.handleHashChange.bind(this))}getCurrentPath(){return console.log("해시 라우터: getCurrentPath",window.location.hash),window.location.hash.slice(1)||"/"}handleHashChange(){console.log("해시 변경 감지됨");const e=this.getCurrentPath();this.handleRoute("root",e)}navigateTo(e){console.log("해시 라우터: navigateTo",e),window.location.hash=e}handleRoute(e,t){if(t==="/profile"&&!localStorage.getItem("user")){this.navigateTo("/login");return}const s=document.getElementById(e);s&&(s.innerHTML=this.renderPage(t),this.setupPageListeners(t))}init(){if(this.addRoute("/",v),this.addRoute("/login",f),this.addRoute("/profile",x),!window.location.hash)window.location.hash="/";else{const e=this.getCurrentPath();console.log("해시 라우터: init",e),this.handleRoute("root",e)}}}function S(o="browser"){switch(console.log("createRouter",o.toLowerCase()),o.toLowerCase()){case"hash":return new C;case"browser":return new I}}const T=S("browser");T.init();
