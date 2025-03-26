(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const g=()=>(console.log("Header component 랜더링"),`<header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>`),p=()=>{const e="/front_5th_chapter1-1/",s=window.location.pathname.includes("hash.html")?"hash":"browser",l=()=>s==="hash"?window.location.hash.slice(1)||"/":window.location.pathname;console.log("getCurrentPath",l());const o=localStorage.getItem("user"),r=l(),d=r==="/",v=r==="/profile",m=d?"text-blue-600 font-bold":"text-gray-600",y=v?"text-blue-600 font-bold":"text-gray-600",i=f=>s==="hash"?`#${f}`:`${e}${f}`;console.log("getHref",i());let u;return o?u=`
      <li><a href="${i("/")}" class="${m}">홈</a></li>
      <li><a href="${i("/profile")}" class="${y}">프로필</a></li>
      <li><a id="logout" href="${i("/logout")}" class="text-gray-600">로그아웃</a></li>
    `:u=`
      <li><a href="${i("/")}" class="${m}">홈</a></li>
      <li><a href="${i("/login")}" class="text-gray-600">로그인</a></li>
    `,`
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${u}
      </ul>
    </nav>
  `},b=()=>(console.log("Footer"),`<footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`),w=[{profileImage:"https://placehold.co/40/FFC107/FFFFFF?text=YS",name:"유승민",time:"30분 전",content:"오늘 날씨 너무 좋네요! 다들 즐거운 하루 보내세요~"},{profileImage:"https://placehold.co/40/2196F3/FFFFFF?text=JH",name:"김정현",time:"1시간 전",content:"새로운 프로젝트 시작! 다들 응원해주세요!"},{profileImage:"https://placehold.co/40/4CAF50/FFFFFF?text=EJ",name:"이은지",time:"2시간 전",content:"오늘 점심은 뭘 먹을까요? 맛집 추천 받아요!"},{profileImage:"https://placehold.co/40/9C27B0/FFFFFF?text=SM",name:"박세민",time:"3시간 전",content:"주말에 등산 갈 사람? 같이 가요~"},{profileImage:"https://placehold.co/40/FF5722/FFFFFF?text=HJ",name:"최현지",time:"4시간 전",content:"새로 나온 영화 봤는데 너무 재밌어요! 강추!"}],F=()=>{const e=w.map(t=>`
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="${t.profileImage}" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">${t.name}</p>
          <p class="text-sm text-gray-500">${t.time}</p>
        </div>
      </div>
      <p>${t.content}</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
  `).join("");return`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${g()}
      ${p()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">
          ${e}
        </div>
        
      </main>
      ${b()}
    </div>
  </div>
`},h=()=>`
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
`,$=()=>`
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
`,c={getUser(e){return JSON.parse(localStorage.getItem(e))},setUser(e,t){localStorage.setItem(e,JSON.stringify(t))},initUser(e){localStorage.removeItem(e)}},I=()=>{const e=c.getUser("user")||{username:"",email:"",bio:""};return`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${g()}
      ${p()}
      <main class="p-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
             내 프로필
          </h2>
          <form id="profile-form">
            <div class="mb-4">
              <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
              <input type="text" id="username" name="username" value="${e.username||""}" class="w-full p-2 border rounded" />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
              <input type="email" id="email" name="email" value="${e.email||""}" class="w-full p-2 border rounded" />
            </div>
            <div class="mb-6">
              <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
              <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">${e.bio||""}</textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
          </form>
        </div>
      </main>
      ${b()}
    </div>
  </div>
  `},n="/front_5th_chapter1-1/",x={[n+"login"]:$,[n+"profile"]:I,[n]:F,[n+"error"]:h};console.log("routePath",{routePath:x});const E=e=>{const t=x[e];return typeof t=="function"?t():h()},P=()=>{console.log("logoutUser 실행"),c.initUser("user")},L=e=>{if(e.target.tagName==="A"){e.preventDefault();const t=e.target.getAttribute("href");if(t==="/logout"){console.log("logout 실행"),P(),a(n+"login");return}a(t)}},S=e=>{e.preventDefault();const t=document.getElementById("username").value,s=document.getElementById("userPw").value;if(console.log("email",t),console.log("password",s),t==="testuser"){const l={username:t,email:"",bio:""};c.setUser("user",l),a(n+"profile")}else alert(!t||!s?"이름 또는 비밀번호를 입력해주세요.":"이름 또는 비밀번호가 일치하지 않습니다.")},U=e=>{e.preventDefault();const t=document.getElementById("username").value.trim(),s=document.getElementById("email").value.trim(),l=document.getElementById("bio").value.trim();if(t){const o={username:t,email:s,bio:l};c.setUser("user",o),location.reload()}},a=e=>{console.log("navigateTo",e),history.pushState(null,"",e);const t=document.getElementById("root");if(t.innerHTML=E(e),e===n+"login"){if(c.getUser("user")){a(n+"profile");return}const l=document.getElementById("login-form");l&&l.addEventListener("submit",S)}if(e===n+"profile"){const s=c.getUser("user");if(console.log("loginInfo",s),!s){a(n+"login");return}const l=document.getElementById("profile-form");l&&l.addEventListener("submit",U)}if(e!==n+"login"&&e!==n+"logout"){console.log("login or logout");const s=document.querySelector("nav");s&&s.addEventListener("click",l=>{l.target.tagName==="A"&&L(l)})}};document.addEventListener("DOMContentLoaded",()=>{a(location.pathname)});window.addEventListener("popstate",()=>{console.log("popstate 이벤트 처리"),a(location.pathname)});
