const url = "https://61fda2daa58a4e00173c9617.mockapi.io/menuboard/menuBoard";

function getMenuBoard() {
   fetch(url)
      .then(response => response.json())
      .then(data => {
         for (let i = 0; i < data.length; i++) {
            document.getElementById("home").innerHTML += `<div class="slider"><div class="slide"><div><img src="${data[i].logo}" alt="" class="logo"></div><div class="content"><div class="title">${data[i].title}</div><div class="foods">${data[i].foods}</div></div></div></div>`;
         }
      })
}

getMenuBoard();