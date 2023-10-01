const programs = [
    {
        name: "Libre Wolf",
        icon: "images/librewolf.jpeg",
        os: "Linux",
        link: "https://librewolf.net/",
        category: "Misc"
    },
    {
        name: "Brave",
        icon: "images/brave.jpeg",
        os: "Linux",
        link: "https://brave.com/",
        category: "Misc"
    },
    {
        name: "Audacity",
        icon: "images/audacity.png",
        os: "Linux",
        link: "https://www.audacityteam.org/",
        category: "Music"
    },
    {
        name: "Godot",
        icon: "images/godot.png",
        os: "Linux",
        link: "https://godotengine.org/",
        category: "Games"
    },
    {
        name: "VS Codium",
        icon: "images/vscodium.jpeg",
        os: "Linux",
        link: "https://vscodium.com/",
        category: "Misc"
    },
    {
        name: "gedit",
        icon: "images/gedit.jpeg",
        os: "Linux",
        link: "https://wiki.gnome.org/Apps/Gedit",
        category: "Misc"
    },
    {
        name: "kitty",
        icon: "images/kitty.jpeg",
        os: "Linux",
        link: "https://sw.kovidgoyal.net/kitty/",
        category: "Misc"
    },
    {
        name: "appimage",
        icon: "images/appimageupdate.jpeg",
        os: "Linux",
        link: "https://github.com/AppImage/appimaged",
        category: "Misc"
    },
    {
        name: "0ad",
        icon: "images/0ad.png",
        os: "Linux",
        link: "https://play0ad.com/",
        category: "Games"
    },
    {
        name: "bitwarden",
        icon: "images/bitwarden.svg",
        os: "Linux",
        link: "https://bitwarden.com/",
        category: "Misc"
    },
    {
        name: "balenaetcher",
        icon: "images/balenaetcher.png",
        os: "Linux",
        link: "https://www.balena.io/etcher/",
        category: "Misc"
    },
    {
        name: "blender",
        icon: "images/blender.jpeg",
        os: "Linux",
        link: "https://www.blender.org/",
        category: "Misc"
    },
    {
        name: "gooverlay",
        icon: "images/gooverlay.png",
        os: "Linux",
        link: "https://github.com/irvinlim/goverlay",
        category: "Games"
    },
    {
        name: "moonlight",
        icon: "images/moonlight.png",
        os: "Linux",
        link: "https://moonlight-stream.org/",
        category: "Games"
    },
    {
        name: "steam",
        icon: "images/steam.jpeg",
        os: "Linux",
        link: "https://store.steampowered.com/about/",
        category: "Games"
    },
    {
        name: "plank",
        icon: "images/plank.jpeg",
        os: "Linux",
        link: "https://launchpad.net/plank",
        category: "Misc"
    },
    {
        name: "multimc",
        icon: "images/multimc.jpeg",
        os: "Linux",
        link: "https://multimc.org/",
        category: "Games"
    },
    {
        name: "java",
        icon: "images/java.jpeg",
        os: "Linux",
        link: "https://www.oracle.com/java/",
        category: "Misc"
    },
    {
        name: "GitHub Desktop",
        icon: "images/github-desktop.jpeg",
        os: "Linux",
        link: "https://desktop.github.com/",
        category: "Misc"
    },
    {
        name: "qBittorrent",
        icon: "images/qbittorrent.jpeg",
        os: "Linux",
        link: "https://www.qbittorrent.org/",
        category: "Misc"
    },
    {
        name: "Spotify",
        icon: "images/spotify.jpeg",
        os: "Linux",
        link: "https://www.spotify.com/",
        category: "Music"
    },
    {
        name: "GIMP",
        icon: "images/gimp.png",
        os: "Linux",
        link: "https://www.gimp.org/",
        category: "Art"
    },
    // Add Photoshop
    {
        name: "Photoshop",
        icon: "images/photoshop.jpeg", // Provide the correct image filename for Photoshop
        os: "Windows", // Specify the operating system
        link: "https://www.adobe.com/products/photoshop.html" // Link to Photoshop's website
    }
    // Add more programs here
];


const programList = document.getElementById("program-list");
const allFilter = document.getElementById("all-filter");
const linuxFilter = document.getElementById("linux-filter");
const windowsFilter = document.getElementById("windows-filter");
const musicFilter = document.getElementById("music-filter");
const artFilter = document.getElementById("art-filter");
const gamesFilter = document.getElementById("games-filter");
const miscFilter = document.getElementById("misc-filter");
const searchBar = document.getElementById("search-bar");

let originalPrograms = [];  // Store the original unsorted programs

const displayPrograms = (programArray) => {
    programList.innerHTML = "";
    programArray.forEach(program => {
        const programItem = document.createElement("div");
        programItem.className = "program-item";

        programItem.innerHTML = `
            <p>${program.name}</p>
            <img src="${program.icon}" alt="${program.name}">
            <a href="${program.link}" target="_blank">Visit Website</a>
        `;

        programList.appendChild(programItem);
    });
};

function initializeProgramList() {
    originalPrograms = [...programs];  // Copy the original unsorted programs
    programs.sort((a, b) => a.name.localeCompare(b.name));  // Sort the programs alphabetically
    displayPrograms(programs);
}

initializeProgramList();

allFilter.addEventListener("click", () => {
    displayPrograms(programs);
});

linuxFilter.addEventListener("click", () => {
    const linuxPrograms = originalPrograms.filter(program => program.os === "Linux");
    displayPrograms(linuxPrograms);
});

windowsFilter.addEventListener("click", () => {
    const windowsPrograms = originalPrograms.filter(program => program.os === "Windows");
    displayPrograms(windowsPrograms);
});

musicFilter.addEventListener("click", () => {
    const musicPrograms = originalPrograms.filter(program => program.category === "Music");
    displayPrograms(musicPrograms);
});

artFilter.addEventListener("click", () => {
    const artPrograms = originalPrograms.filter(program => program.category === "Art");
    displayPrograms(artPrograms);
});

gamesFilter.addEventListener("click", () => {
    const gamesPrograms = originalPrograms.filter(program => program.category === "Games");
    displayPrograms(gamesPrograms);
});

miscFilter.addEventListener("click", () => {
    const miscPrograms = originalPrograms.filter(program => program.category === "Misc");
    displayPrograms(miscPrograms);
});

searchBar.addEventListener("input", () => {
    const searchValue = searchBar.value.toLowerCase();
    const filteredPrograms = originalPrograms.filter(program => program.name.toLowerCase().includes(searchValue));
    displayPrograms(filteredPrograms);
});

