let gitUrl = "https://api.github.com/users/";
let wikiUrl =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

let gitSearcher = document.getElementById("gitSearcher");
let wikiSearcher = document.getElementById("wikiSearcher");

let gitInfo = document.getElementById("gitInfo");
let wikiInfo = document.getElementById("wikiInfo");

gitSearcher.addEventListener("keyup", (e) => {
  let url = `https://api.github.com/users/${e.target.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let user = `
      <div>
      <img class="authImg" src="${data.avatar_url}" alt="" />
      <h2 class="authName">${data.name}</h2>
      <h3 class="authNickName">${data.login}</h3>
      <button class="follow">
      <a href="${data.html_url}"></a>
      </button>
      <div class="profileFollow">
        <div class="following">
        <img />
        following ${data.following}
        </div>
        <div class="followers">
        <img />
        followers ${data.followers}</div>
      </div>
      <div class="contact">
        <div class="">
          <img src="" alt="" />
          <a href=""></a>
        </div>
        <div class="">
          <img src="" alt="" />
          <a href=""></a>
        </div>
        <div class="">
          <img src="" alt="" />
          <a href=""></a>
        </div>
      </div>
      <div class="achievements"></div>
      <div class="organizations"></div>
    </div>`;

      gitInfo.innerHTML = user;
    });
});
wikiSearcher.addEventListener("keyup", (e) => {
  let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${e.target.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
