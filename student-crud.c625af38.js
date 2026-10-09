let e=async()=>{try{return await fetch("http://localhost:3000/students").then(e=>e.json())}catch(e){console.log(e.message)}},t=document.querySelector(".students__list"),s=async()=>{t.innerHTML=(await e()).map(e=>` <li class="students__item">
        <p class="student-id">${e.id}</p>
        <p class="student-name">${e.name}</p>
        <p class="student-age">${e.age}</p>
        <p class="student-email">${e.email}</p>
        <p class="student-phone">${e.phone}</p>
    </li>`).join("")},a=async e=>{try{let t=await fetch(`http://localhost:3000/students/${e}`);return await t.json()}catch(e){console.log(e.message)}},n=document.querySelector(".form-id"),l=document.querySelector("[data-student-id]"),c=document.querySelector(".student__result");(async()=>{await s(),await void n.addEventListener("submit",async e=>{var t;e.preventDefault();let s=l.value;t=await a(s),c.innerHTML=` <li class="students__item">
        <p class="student-id">${t.id}</p>
        <p class="student-name">${t.name}</p>
        <p class="student-age">${t.age}</p>
        <p class="student-email">${t.email}</p>
        <p class="student-phone">${t.phone}</p>
    </li>`,n.reset()})})();
//# sourceMappingURL=student-crud.c625af38.js.map
