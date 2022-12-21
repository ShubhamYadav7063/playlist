let username = document.getElementById('user-name')
let playlist = document.getElementById('playlist-link')
let addPlaylist = document.getElementById('add-btn')
const container = document.getElementById('playlists')
// function clickButton(e) {
//     e.preventDefault()
//     playlist()
// }


addPlaylist.addEventListener('click', function () {
    const card = document.createElement('div')
    card.classList.add('playlist-added')
    card.classList.add('card')

    const name = document.createElement('p')
    if (username.value === "") {
        alert("Enter your name");
        return
    }
    else {
        name.textContent = username.value
        name.classList.add('user-name')
        card.appendChild(name)
    }
    
    const link = document.createElement('iframe')
    if (playlist.value === "") {
        alert("Enter playlist link")
        return
    }
    else {
        link.style.borderRadius = "12px";
        var newString = playlist.value.replace('https://open.spotify.com/playlist', 'https://open.spotify.com/embed/playlist');
        link.src = newString;
        link.setAttribute("width", "100%")
        link.setAttribute("target", "_blank")
        link.setAttribute("height", "380")
        link.setAttribute("allowfullscreen", "")
        link.setAttribute("frameborder", "0")
        link.setAttribute("allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture")
        link.setAttribute("loading", "lazy")
    }
    card.appendChild(link)

    container.appendChild(card)
})