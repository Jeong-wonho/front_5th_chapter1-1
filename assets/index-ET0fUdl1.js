(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const u=()=>(console.log("Header component 랜더링"),`<header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>`),m=()=>{const t=localStorage.getItem("user"),e=location.pathname,o=e==="/",l=e==="/profile",s=o?"text-blue-600 font-bold":"text-gray-600",n=l?"text-blue-600 font-bold":"text-gray-600";let r;return t?r=`
      <li><a href="/" class="${s}">홈</a></li>
      <li><a href="/profile" class="${n}">프로필</a></li>
      <li><a id="logout" href="/logout" class="text-gray-600">로그아웃</a></li>
    `:r=`
      <li><a href="/" class="${s}">홈</a></li>
      <li><a href="/login" class="text-gray-600">로그인</a></li>
    `,`
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${r}
      </ul>
    </nav>
  `},f=()=>(console.log("Footer"),`<footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`),h=[{profileImage:"https://placehold.co/40/FFC107/FFFFFF?text=YS",name:"유승민",time:"30분 전",content:"오늘 날씨 너무 좋네요! 다들 즐거운 하루 보내세요~"},{profileImage:"https://placehold.co/40/2196F3/FFFFFF?text=JH",name:"김정현",time:"1시간 전",content:"새로운 프로젝트 시작! 다들 응원해주세요!"},{profileImage:"https://placehold.co/40/4CAF50/FFFFFF?text=EJ",name:"이은지",time:"2시간 전",content:"오늘 점심은 뭘 먹을까요? 맛집 추천 받아요!"},{profileImage:"https://placehold.co/40/9C27B0/FFFFFF?text=SM",name:"박세민",time:"3시간 전",content:"주말에 등산 갈 사람? 같이 가요~"},{profileImage:"https://placehold.co/40/FF5722/FFFFFF?text=HJ",name:"최현지",time:"4시간 전",content:"새로 나온 영화 봤는데 너무 재밌어요! 강추!"}],x=()=>{const t=h.map(e=>`
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
      ${u()}
      ${m()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${t}
        </div>
        
      </main>
      ${f()}
    </div>
  </div>
`},d=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,g=()=>`
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
`,i={getUser(t){return JSON.parse(localStorage.getItem(t))},setUser(t,e){localStorage.setItem(t,JSON.stringify(e))},initUser(t){localStorage.removeItem(t)}},p=()=>{const t=i.getUser("user")||{username:"",email:"",bio:""};return`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${u()}
      ${m()}
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
      ${f()}
    </div>
  </div>
  `};class v{constructor(){this.routes={},window.addEventListener("popstate",this.handlePopState.bind(this))}addRoute(e,o){this.routes[e]=o}navigateTo(e){history.pushState(null,"",e),this.handleRoute(e)}handlePopState(){this.handleRoute(window.location.pathname)}handleRoute(e){const o=this.routes[e];o?o():console.log("404 Not Found")}}const y={"/login":g,"/profile":p,"/":x,"/error":d},b=t=>{const e=y[t];return typeof e=="function"?e():d()},w=()=>{console.log("logoutUser 실행"),i.initUser("user")},F=t=>{if(t.target.tagName==="A"){t.preventDefault();const e=t.target.getAttribute("href");if(e==="/logout"){console.log("logout 실행"),w(),a("/login");return}a(e)}},I=t=>{t.preventDefault();const e=document.getElementById("username").value,o=document.getElementById("userPw").value;if(console.log("email",e),console.log("password",o),e==="testuser"){const l={username:e,email:"",bio:""};i.setUser("user",l),a("/profile")}else alert(!e||!o?"이름 또는 비밀번호를 입력해주세요.":"이름 또는 비밀번호가 일치하지 않습니다.")},E=t=>{t.preventDefault();const e=document.getElementById("username").value.trim(),o=document.getElementById("email").value.trim(),l=document.getElementById("bio").value.trim();if(e){const s={username:e,email:o,bio:l};i.setUser("user",s),location.reload()}},P=()=>{a(location.pathname)},a=t=>{history.pushState(null,"",t);const e=document.getElementById("root");if(e.innerHTML=b(t),t==="/login"){if(i.getUser("user")){a("/");return}const l=document.getElementById("login-form");l&&l.addEventListener("submit",I)}if(t==="/profile"){const o=i.getUser("user");if(console.log("loginInfo",o),!o){a("/login");return}const l=document.getElementById("profile-form");l&&l.addEventListener("submit",E)}if(t!=="/login"&&t!=="/logout"){console.log("login or logout");const o=document.querySelector("nav");o&&o.addEventListener("click",l=>{l.target.tagName==="A"&&F(l)})}},c=new v;c.addRoute("/",()=>b("/"));c.addRoute("/login",g);c.addRoute("/profile",p);c.addRoute("/error",d);document.addEventListener("DOMContentLoaded",()=>{P()});window.addEventListener("popstate",()=>{console.log("popstate 이벤트 처리"),a(location.pathname)});
