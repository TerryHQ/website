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
        name: "Gedit",
        icon: "images/gedit.jpeg",
        os: "Linux",
        link: "https://wiki.gnome.org/Apps/Gedit",
        category: "Misc"
    },
    {
        name: "Kitty",
        icon: "images/kitty.jpeg",
        os: "Linux",
        link: "https://sw.kovidgoyal.net/kitty/",
        category: "Misc"
    },
    {
        name: "Appimage",
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
        name: "Bitwarden",
        icon: "images/bitwarden.svg",
        os: "Linux",
        link: "https://bitwarden.com/",
        category: "Misc"
    },
    {
        name: "Balenaetcher",
        icon: "images/balenaetcher.png",
        os: "Linux",
        link: "https://www.balena.io/etcher/",
        category: "Misc"
    },
    {
        name: "Blender",
        icon: "images/blender.jpeg",
        os: "Linux",
        link: "https://www.blender.org/",
        category: "Misc"
    },
    {
        name: "Gooverlay",
        icon: "images/gooverlay.png",
        os: "Linux",
        link: "https://github.com/irvinlim/goverlay",
        category: "Games"
    },
    {
        name: "Moonlight",
        icon: "images/moonlight.png",
        os: "Linux",
        link: "https://moonlight-stream.org/",
        category: "Games"
    },
    {
        name: "Steam",
        icon: "images/steam.jpeg",
        os: "Linux",
        link: "https://store.steampowered.com/about/",
        category: "Games"
    },
    {
        name: "Plank",
        icon: "images/plank.jpeg",
        os: "Linux",
        link: "https://launchpad.net/plank",
        category: "Misc"
    },
    {
        name: "Multimc",
        icon: "images/multimc.jpeg",
        os: "Linux",
        link: "https://multimc.org/",
        category: "Games"
    },
    {
        name: "Java",
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
        name: "QBittorrent",
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


const randomTextElement = document.getElementById("random-text");
const programList = document.getElementById("program-list");
const allFilter = document.getElementById("all-filter");
const linuxFilter = document.getElementById("linux-filter");
const windowsFilter = document.getElementById("windows-filter");
const musicFilter = document.getElementById("music-filter");
const artFilter = document.getElementById("art-filter");
const gamesFilter = document.getElementById("games-filter");
const miscFilter = document.getElementById("misc-filter");
const searchBar = document.getElementById("search-bar");

let originalPrograms = [...programs];
let programIndex = 0;
let typingInterval;

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

function updateRandomText() {
    if (programIndex >= originalPrograms.length) {
        programIndex = 0;
    }

    const programName = originalPrograms[programIndex].name;
    randomTextElement.textContent = programName;

    programIndex++;

    clearTimeout(typingInterval);
    typingInterval = setTimeout(updateRandomText, 1000); // Wait for 1 second
}

function filterPrograms() {
    const searchValue = searchBar.value.toLowerCase();
    const filteredPrograms = originalPrograms.filter(program => program.name.toLowerCase().includes(searchValue));
    displayPrograms(filteredPrograms);
}

function initializeProgramList() {
    programs.sort((a, b) => a.name.localeCompare(b.name));
    displayPrograms(programs);
    updateRandomText();
}

initializeProgramList();

// Add event listeners for filter buttons
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

// Add event listener for search bar input
searchBar.addEventListener("input", () => {
    filterPrograms();
});
