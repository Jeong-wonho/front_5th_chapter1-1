var L=Object.defineProperty;var E=(t,e,o)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var u=(t,e,o)=>E(t,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const f=()=>`
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
    </header>`),b=()=>{const t="/front_5th_chapter1-1/",o=window.location.pathname.includes("hash.html")?"hash":"browser",n=()=>{if(o==="hash")return console.log("해시 라우팅: getCurrentPath",window.location.hash),window.location.hash.slice(1)||"/";{const l=window.location.pathname;if(l.startsWith(t)){const i=l.substring(t.length)||"/";return i.startsWith("/")?i:`/${i}`}return l}};console.log("getCurrentPath",n());const s=localStorage.getItem("user"),r=n(),c=r==="/",P=r==="/profile",m=c?"text-blue-600 font-bold":"text-gray-600",F=P?"text-blue-600 font-bold":"text-gray-600",a=l=>{if(!l)return t;if(o==="hash")return`/${l}`;{if(l==="/")return t;const i=l.startsWith("/")?l.slice(1):l;return console.log("cleanPath",i),`${t.endsWith("/")?t.slice(0,-1):t}/${i}`}};console.log("getHref",a());let h;return s?h=`
      <li><a href="${a("/")}" class="${m}">홈</a></li>
      <li><a href="${a("/profile")}" class="${F}">프로필</a></li>
      <li><a id="logout" href="${a("/logout")}" class="text-gray-600">로그아웃</a></li>
    `:h=`
      <li><a href="${a("/")}" class="${m}">홈</a></li>
      <li><a href="${a("/login")}" class="text-gray-600">로그인</a></li>
    `,`
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${h}
      </ul>
    </nav>
  `},w=()=>(console.log("Footer"),`<footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`),$=[{profileImage:"https://placehold.co/40/FFC107/FFFFFF?text=YS",name:"유승민",time:"30분 전",content:"오늘 날씨 너무 좋네요! 다들 즐거운 하루 보내세요~"},{profileImage:"https://placehold.co/40/2196F3/FFFFFF?text=JH",name:"김정현",time:"1시간 전",content:"새로운 프로젝트 시작! 다들 응원해주세요!"},{profileImage:"https://placehold.co/40/4CAF50/FFFFFF?text=EJ",name:"이은지",time:"2시간 전",content:"오늘 점심은 뭘 먹을까요? 맛집 추천 받아요!"},{profileImage:"https://placehold.co/40/9C27B0/FFFFFF?text=SM",name:"박세민",time:"3시간 전",content:"주말에 등산 갈 사람? 같이 가요~"},{profileImage:"https://placehold.co/40/FF5722/FFFFFF?text=HJ",name:"최현지",time:"4시간 전",content:"새로 나온 영화 봤는데 너무 재밌어요! 강추!"}],v=()=>{const t=$.map(e=>`
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
          ${t}
        </div>
        
      </main>
      ${w()}
    </div>
  </div>
`},d={getUser(t){return JSON.parse(localStorage.getItem(t))},setUser(t,e){localStorage.setItem(t,JSON.stringify(e))},initUser(t){localStorage.removeItem(t)}},x=()=>{const t=d.getUser("user")||{username:"",email:"",bio:""};return`
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
              <input type="text" id="username" name="username" value="${t.username||""}" class="w-full p-2 border rounded" />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
              <input type="email" id="email" name="email" value="${t.email||""}" class="w-full p-2 border rounded" />
            </div>
            <div class="mb-6">
              <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
              <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">${t.bio||""}</textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
          </form>
        </div>
      </main>
      ${w()}
    </div>
  </div>
  `},R=t=>{const e=document.getElementById("login-form");e&&(e.removeEventListener("submit",t),e.addEventListener("submit",t))},C=t=>{const e=document.getElementById("profile-form");e&&(e.removeEventListener("submit",t),e.addEventListener("submit",t))},I=t=>{const e=document.querySelector("nav");e&&(e.removeEventListener("click",t),e.addEventListener("click",t))},S=()=>`
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
`,g={login:t=>{if(t==="testuser"){const e={username:t,email:"",bio:""};return d.setUser("user",e),!0}return!1},logout:()=>{d.initUser("user")}};class y{constructor(){u(this,"handleLinkClick",e=>{if(console.log("handleLinkClick 실행"),e.target.tagName==="A"){e.preventDefault(),console.log("event.target.getAttribute('href')",e.target.getAttribute("href"));const o=this.cleanPath(e.target.getAttribute("href")),n=o.includes("#")?o.split("#")[1]:this.cleanPath(o);if(console.log("path",n),this.cleanPath(o)==="/logout"||n==="/logout"){g.logout(),this.navigateTo("/login");return}this.navigateTo(o)}});u(this,"handleLogin",e=>{e.preventDefault();const o=document.getElementById("username").value,n=document.getElementById("userPw").value;g.login(o,n)?this.navigateTo("/profile"):alert(!o||!n?"이름 또는 비밀번호를 입력해주세요.":"이름 또는 비밀번호가 일치하지 않습니다.")});u(this,"handleUpdateProfile",e=>{e.preventDefault();const o=document.getElementById("username").value.trim(),n=document.getElementById("email").value.trim(),s=document.getElementById("bio").value.trim();if(o){const r={username:o,email:n,bio:s};d.setUser("user",r),this.navigateTo("/profile")}});this.routes={},this.currentPath=""}addRoute(e,o){this.routes[e]=o}renderPage(e){const o=this.routes[e];return typeof o=="function"?o():S()}cleanPath(e){if(!e)return"/";if(console.log("this.repoName",this.repoName),console.log("window.location.hostname",window.location.hostname),console.log("this.isGhPages",this.isGhPages),this.repoName&&e.startsWith(this.repoName)){const o=e.slice(this.repoName.length);return console.log("cleanedPath",o),o.startsWith("/")?o:(console.log("cleanedPath","/"+o),"/"+o)}return e}authGuard(e){console.log("authGuard 실행"),console.log("path",e);const o=d.getUser("user");return console.log("userData",o),e==="/profile"&&!o?(console.log("인증 필요: 프로필 페이지 접근 시도"),"/login"):e==="/login"&&o?(console.log("이미 로그인됨: 로그인 페이지 접근 시도"),"/"):null}handleRoute(e,o){const n=this.authGuard(o);if(n){console.log("인증 실패: 리다이렉트",n),this.navigateTo(n);return}const s=document.getElementById(e);s&&(s.innerHTML=this.renderPage(o),this.setupPageListeners(o))}setupPageListeners(e){console.log("setupPageListeners path",e),this.currentPath=e,e==="/login"&&R(this.handleLogin),e==="/profile"&&C(this.handleUpdateProfile),e!=="/login"&&(console.log("nav 이벤트 리스너 등록"),I(this.handleLinkClick))}navigateTo(){throw new Error("자식 클래스에서 해당 메서드 구현해야합니다.")}init(){throw new Error("자식 클래스에서 구현합니다.")}}class T extends y{constructor(){super(),this.repoName="/front_5th_chapter1-1",window.addEventListener("popstate",this.handlePopState.bind(this))}handlePopState(){console.log("브라우저 popstate 이벤트 발생"),this.handleRoute("root",this.cleanPath(window.location.pathname))}navigateTo(e){console.log("브라우저 라우터: navigateTo",e),history.pushState(null,"",this.cleanPath(e)),this.handleRoute("root",this.cleanPath(e))}init(){this.addRoute("/",v),this.addRoute("/login",f),this.addRoute("/profile",x),this.handleRoute("root",this.cleanPath(window.location.pathname))}}class U extends y{constructor(){super(),window.addEventListener("hashchange",this.handleHashChange.bind(this))}getCurrentPath(){return console.log("해시 라우터: getCurrentPath",window.location.hash),window.location.hash.slice(1)||"/"}handleHashChange(){console.log("해시 변경 감지됨");const e=this.getCurrentPath();console.log("해시 라우터: handleHashChange",e),this.handleRoute("root",e)}navigateTo(e){console.log("해시 라우터: navigateTo",e),window.location.hash=e,console.log("해시 라우터: navigateTo",window.location.hash)}init(){if(this.addRoute("/",v),this.addRoute("/login",f),this.addRoute("/profile",x),!window.location.hash)window.location.hash="/";else{const e=this.getCurrentPath();console.log("해시 라우터: init",e),this.handleRoute("root",e)}}}function N(t="browser"){switch(console.log("createRouter",t.toLowerCase()),t.toLowerCase()){case"hash":return new U;case"browser":return new T}}export{N as c};
