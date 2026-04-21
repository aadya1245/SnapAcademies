const albumCatalog = [
  {
    id: 1,
    title: "Blonde",
    artist: "Frank Ocean",
    year: 2016,
    genre: "Alternative R&B",
    mood: "Reflective",
    rating: 9.8,
    runtime: 60,
    standoutTrack: "Nights",
    note: "A slow-motion album that feels introspective, cinematic, and endlessly replayable.",
    tags: ["late-night", "layered", "emotional"],
    colors: {
      start: "#d48a52",
      end: "#2f6670",
      accent: "#fff0d9"
    },
    saved: false
  },
  {
    id: 2,
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    year: 2015,
    genre: "Hip-Hop",
    mood: "Thoughtful",
    rating: 9.9,
    runtime: 79,
    standoutTrack: "Alright",
    note: "Dense, ambitious, and full of ideas that reward close listening every time.",
    tags: ["jazz-infused", "political", "bold"],
    colors: {
      start: "#294e4a",
      end: "#d2a34c",
      accent: "#f9f0c8"
    },
    saved: false
  },
  {
    id: 3,
    title: "The Miseducation of Lauryn Hill",
    artist: "Lauryn Hill",
    year: 1998,
    genre: "Neo-Soul",
    mood: "Warm",
    rating: 9.8,
    runtime: 77,
    standoutTrack: "Doo Wop (That Thing)",
    note: "It balances vulnerability, power, and songwriting that still feels timeless.",
    tags: ["classic", "soulful", "storytelling"],
    colors: {
      start: "#bd6d3d",
      end: "#61351d",
      accent: "#ffe4b8"
    },
    saved: false
  },
  {
    id: 4,
    title: "Discovery",
    artist: "Daft Punk",
    year: 2001,
    genre: "Electronic",
    mood: "Euphoric",
    rating: 9.4,
    runtime: 61,
    standoutTrack: "Digital Love",
    note: "Bright and futuristic without losing the warmth that makes dance music fun.",
    tags: ["glossy", "dance", "nostalgic"],
    colors: {
      start: "#0f7d8a",
      end: "#f3a33c",
      accent: "#e7fff8"
    },
    saved: false
  },
  {
    id: 5,
    title: "CTRL",
    artist: "SZA",
    year: 2017,
    genre: "Alternative R&B",
    mood: "Candid",
    rating: 9.4,
    runtime: 49,
    standoutTrack: "The Weekend",
    note: "Messy, honest, and sharp in a way that makes it feel personal and modern.",
    tags: ["confessional", "modern", "sharp"],
    colors: {
      start: "#4f7f66",
      end: "#d17c58",
      accent: "#eef8d3"
    },
    saved: false
  },
  {
    id: 6,
    title: "Currents",
    artist: "Tame Impala",
    year: 2015,
    genre: "Psychedelic Pop",
    mood: "Night Drive",
    rating: 9.3,
    runtime: 51,
    standoutTrack: "Let It Happen",
    note: "This is the album I reach for when I want motion, color, and a little momentum.",
    tags: ["synths", "motion", "shimmering"],
    colors: {
      start: "#c1545a",
      end: "#3f4076",
      accent: "#ffe8ec"
    },
    saved: false
  },
  {
    id: 7,
    title: "IGOR",
    artist: "Tyler, The Creator",
    year: 2019,
    genre: "Art Pop",
    mood: "Restless",
    rating: 9.2,
    runtime: 39,
    standoutTrack: "EARFQUAKE",
    note: "A theatrical breakup album with distorted edges and a surprisingly tight arc.",
    tags: ["dramatic", "inventive", "hooky"],
    colors: {
      start: "#f1b01e",
      end: "#d95f5f",
      accent: "#fff2be"
    },
    saved: false
  },
  {
    id: 8,
    title: "Malibu",
    artist: "Anderson .Paak",
    year: 2016,
    genre: "Soul",
    mood: "Sunny",
    rating: 9.1,
    runtime: 61,
    standoutTrack: "Am I Wrong",
    note: "It feels loose and joyful while still sounding incredibly detailed and alive.",
    tags: ["groovy", "bright", "live-band"],
    colors: {
      start: "#f0a146",
      end: "#1f7980",
      accent: "#fff0cf"
    },
    saved: false
  },
  {
    id: 9,
    title: "A Seat at the Table",
    artist: "Solange",
    year: 2016,
    genre: "Neo-Soul",
    mood: "Calm",
    rating: 9.2,
    runtime: 51,
    standoutTrack: "Cranes in the Sky",
    note: "Elegant and minimal, with space for every lyric and idea to breathe.",
    tags: ["minimal", "graceful", "clear"],
    colors: {
      start: "#d8ab7d",
      end: "#6c5a59",
      accent: "#fff2e4"
    },
    saved: false
  },
  {
    id: 10,
    title: "Process",
    artist: "Sampha",
    year: 2017,
    genre: "Electronic Soul",
    mood: "Reflective",
    rating: 9.0,
    runtime: 40,
    standoutTrack: "Blood on Me",
    note: "Sparse production and emotional vocals make it feel intimate without being quiet.",
    tags: ["minimal", "tender", "unfiltered"],
    colors: {
      start: "#586f83",
      end: "#d28b62",
      accent: "#eff4ff"
    },
    saved: false
  },
  {
    id: 11,
    title: "Late Registration",
    artist: "Kanye West",
    year: 2005,
    genre: "Hip-Hop",
    mood: "Triumphant",
    rating: 9.3,
    runtime: 70,
    standoutTrack: "Touch the Sky",
    note: "Big arrangements, memorable hooks, and a lot of personality in every transition.",
    tags: ["orchestral", "confident", "anthemic"],
    colors: {
      start: "#873a36",
      end: "#e0a93f",
      accent: "#ffe1ca"
    },
    saved: false
  },
  {
    id: 12,
    title: "Random Access Memories",
    artist: "Daft Punk",
    year: 2013,
    genre: "Electronic",
    mood: "Polished",
    rating: 9.1,
    runtime: 74,
    standoutTrack: "Giorgio by Moroder",
    note: "A carefully crafted album that makes studio precision feel human and warm.",
    tags: ["precision", "groove", "retro-future"],
    colors: {
      start: "#2f5d72",
      end: "#d9a441",
      accent: "#eff8fb"
    },
    saved: false
  },
  {
    id: 13,
    title: "Flower Boy",
    artist: "Tyler, The Creator",
    year: 2017,
    genre: "Hip-Hop",
    mood: "Warm",
    rating: 9.0,
    runtime: 47,
    standoutTrack: "See You Again",
    note: "Bright production and personal writing make it feel open-hearted and replayable.",
    tags: ["vivid", "open", "melodic"],
    colors: {
      start: "#f2ba3c",
      end: "#60895b",
      accent: "#fff4c4"
    },
    saved: false
  },
  {
    id: 14,
    title: "Sometimes I Might Be Introvert",
    artist: "Little Simz",
    year: 2021,
    genre: "Hip-Hop",
    mood: "Driven",
    rating: 9.5,
    runtime: 65,
    standoutTrack: "Woman",
    note: "Confident and cinematic with a sense of scale that still feels personal.",
    tags: ["cinematic", "sharp", "commanding"],
    colors: {
      start: "#8a4b52",
      end: "#2b5168",
      accent: "#ffe0df"
    },
    saved: false
  },
  {
    id: 15,
    title: "Channel Orange",
    artist: "Frank Ocean",
    year: 2012,
    genre: "Alternative R&B",
    mood: "Warm",
    rating: 9.3,
    runtime: 62,
    standoutTrack: "Pyramids",
    note: "A world-building album that moves between moods without ever feeling scattered.",
    tags: ["cinematic", "narrative", "expansive"],
    colors: {
      start: "#ef8f39",
      end: "#bb5a3d",
      accent: "#fff1cf"
    },
    saved: false
  },
  {
    id: 16,
    title: "Baduizm",
    artist: "Erykah Badu",
    year: 1997,
    genre: "Neo-Soul",
    mood: "Calm",
    rating: 9.2,
    runtime: 58,
    standoutTrack: "On & On",
    note: "Relaxed and deeply musical, with a personality that never feels forced.",
    tags: ["organic", "classic", "cool"],
    colors: {
      start: "#4f6b55",
      end: "#c48b52",
      accent: "#ecf6d7"
    },
    saved: false
  },
  {
    id: 17,
    title: "The Forever Story",
    artist: "JID",
    year: 2022,
    genre: "Hip-Hop",
    mood: "Driven",
    rating: 9.3,
    runtime: 64,
    standoutTrack: "Dance Now",
    note: "Technically sharp, energetic, and packed with flows that keep surprising me.",
    tags: ["technical", "energetic", "precise"],
    colors: {
      start: "#2d495a",
      end: "#ca7148",
      accent: "#eef6fb"
    },
    saved: false
  },
  {
    id: 18,
    title: "Swimming",
    artist: "Mac Miller",
    year: 2018,
    genre: "Hip-Hop",
    mood: "Reflective",
    rating: 9.0,
    runtime: 58,
    standoutTrack: "What's the Use?",
    note: "It feels mature, thoughtful, and full of quiet craft rather than easy flash.",
    tags: ["groove", "personal", "steady"],
    colors: {
      start: "#4f8ca3",
      end: "#d08d4b",
      accent: "#ebf8ff"
    },
    saved: false
  },
  {
    id: 19,
    title: "Getz / Gilberto",
    artist: "Stan Getz & Joao Gilberto",
    year: 1964,
    genre: "Jazz",
    mood: "Calm",
    rating: 9.4,
    runtime: 35,
    standoutTrack: "The Girl from Ipanema",
    note: "An easy album to return to because it feels effortless and elegant.",
    tags: ["bossa-nova", "classic", "minimal"],
    colors: {
      start: "#6ca09a",
      end: "#c8a05c",
      accent: "#edfdf8"
    },
    saved: false
  },
  {
    id: 20,
    title: "Kind of Blue",
    artist: "Miles Davis",
    year: 1959,
    genre: "Jazz",
    mood: "Focused",
    rating: 9.8,
    runtime: 46,
    standoutTrack: "So What",
    note: "A foundational album that still sounds cool, clear, and almost effortless.",
    tags: ["focused", "legendary", "cool"],
    colors: {
      start: "#355d76",
      end: "#89b2b8",
      accent: "#e8f7fb"
    },
    saved: false
  },
  {
    id: 21,
    title: "SOS",
    artist: "SZA",
    year: 2022,
    genre: "Alternative R&B",
    mood: "Restless",
    rating: 8.9,
    runtime: 68,
    standoutTrack: "Kill Bill",
    note: "The mood swings are part of the point, and that makes the album feel alive.",
    tags: ["bold", "genre-bending", "emotional"],
    colors: {
      start: "#2d7f86",
      end: "#d2a864",
      accent: "#e6fbfb"
    },
    saved: false
  },
  {
    id: 22,
    title: "Un Verano Sin Ti",
    artist: "Bad Bunny",
    year: 2022,
    genre: "Latin Pop",
    mood: "Sunny",
    rating: 8.9,
    runtime: 82,
    standoutTrack: "Me Porto Bonito",
    note: "It covers a lot of ground without losing the breezy feeling that makes it addictive.",
    tags: ["summer", "playful", "wide-ranging"],
    colors: {
      start: "#40a0a6",
      end: "#efb24e",
      accent: "#effffd"
    },
    saved: false
  },
  {
    id: 23,
    title: "22, A Million",
    artist: "Bon Iver",
    year: 2016,
    genre: "Indie Folk",
    mood: "Experimental",
    rating: 9.0,
    runtime: 39,
    standoutTrack: "33 \"GOD\"",
    note: "Fragmented and strange in a way that somehow still lands emotionally.",
    tags: ["glitchy", "textured", "searching"],
    colors: {
      start: "#836d5c",
      end: "#374b5e",
      accent: "#f9ecdf"
    },
    saved: false
  },
  {
    id: 24,
    title: "House of Balloons",
    artist: "The Weeknd",
    year: 2011,
    genre: "Alternative R&B",
    mood: "Night Drive",
    rating: 9.1,
    runtime: 49,
    standoutTrack: "The Morning",
    note: "Dark, moody, and influential in a way that still feels immediate today.",
    tags: ["dark", "atmospheric", "iconic"],
    colors: {
      start: "#2f3349",
      end: "#6a4c6f",
      accent: "#ede4ff"
    },
    saved: false
  }
];

const albumCoverById = {
  1: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Blonde_-_Frank_Ocean.jpeg/250px-Blonde_-_Frank_Ocean.jpeg",
  2: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png/250px-Kendrick_Lamar_-_To_Pimp_a_Butterfly.png",
  3: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/The_Miseducation_of_Lauryn_Hill.png/250px-The_Miseducation_of_Lauryn_Hill.png",
  4: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Daft_Punk_-_Discovery.png/250px-Daft_Punk_-_Discovery.png",
  5: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/SZA_-_Ctrl_cover.png/250px-SZA_-_Ctrl_cover.png",
  6: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Tame_Impala_-_Currents.png/250px-Tame_Impala_-_Currents.png",
  7: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Igor_-_Tyler%2C_the_Creator.jpg/250px-Igor_-_Tyler%2C_the_Creator.jpg",
  8: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Anderson-Park-Malibu-Cover-Billboard-650x650.jpg/250px-Anderson-Park-Malibu-Cover-Billboard-650x650.jpg",
  9: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Solange_-_A_Seat_at_the_Table.png/250px-Solange_-_A_Seat_at_the_Table.png",
  10: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Process_-_Sampha_album.jpg/250px-Process_-_Sampha_album.jpg",
  11: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Late_registration_cd_cover.jpg/250px-Late_registration_cd_cover.jpg",
  12: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Daft_Punk_-_Random_Access_Memories.png/250px-Daft_Punk_-_Random_Access_Memories.png",
  13: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png/250px-Tyler%2C_the_Creator_-_Flower_Boy.png",
  14: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Little_Simz_-_Sometimes_I_Might_Be_Introvert.jpeg/250px-Little_Simz_-_Sometimes_I_Might_Be_Introvert.jpeg",
  15: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Channel_ORANGE.jpg/250px-Channel_ORANGE.jpg",
  16: "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Baduizm.png/250px-Baduizm.png",
  17: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/JID_-_The_Forever_Story.png/250px-JID_-_The_Forever_Story.png",
  18: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Mac_Miller_-_Swimming.png/250px-Mac_Miller_-_Swimming.png",
  19: "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Getz-gilberto.jpg/250px-Getz-gilberto.jpg",
  20: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Miles_Davis_-_Kind_of_Blue_album_cover.jpg/250px-Miles_Davis_-_Kind_of_Blue_album_cover.jpg",
  21: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/SZA_-_S.O.S.png/250px-SZA_-_S.O.S.png",
  22: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png/250px-Bad_Bunny_-_Un_Verano_Sin_Ti.png",
  23: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/22%2C_A_Million_cover.jpg/250px-22%2C_A_Million_cover.jpg",
  24: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/The_Weeknd_-_House_of_Balloons.png/250px-The_Weeknd_-_House_of_Balloons.png"
};

const state = {
  search: "",
  genre: "all",
  mood: "all",
  sortBy: "featured",
  savedOnly: false
};

const totalCount = document.querySelector("#totalCount");
const visibleCount = document.querySelector("#visibleCount");
const avgRating = document.querySelector("#avgRating");
const savedCount = document.querySelector("#savedCount");
const resultsMessage = document.querySelector("#resultsMessage");
const searchInput = document.querySelector("#searchInput");
const genreSelect = document.querySelector("#genreSelect");
const moodSelect = document.querySelector("#moodSelect");
const sortSelect = document.querySelector("#sortSelect");
const savedToggle = document.querySelector("#savedToggle");
const clearButton = document.querySelector("#clearButton");
const catalogGrid = document.querySelector("#catalogGrid");
const emptyState = document.querySelector("#emptyState");
const spotlightVisual = document.querySelector("#spotlightVisual");
const spotlightAlbum = document.querySelector("#spotlightAlbum");
const spotlightMeta = document.querySelector("#spotlightMeta");
const spotlightDescription = document.querySelector("#spotlightDescription");
const spotlightChips = document.querySelector("#spotlightChips");

function getInitials(title) {
  return title
    .split(" ")
    .map((word) => word.replace(/[^a-z0-9]/gi, ""))
    .filter((word) => word.length > 0)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function getCoverImage(albumId) {
  return albumCoverById[albumId] || "";
}

function populateFilters() {
  const genres = [...new Set(albumCatalog.map((album) => album.genre))].sort();
  const moods = [...new Set(albumCatalog.map((album) => album.mood))].sort();

  genres.forEach((genre) => {
    genreSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${genre}">${genre}</option>`
    );
  });

  moods.forEach((mood) => {
    moodSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${mood}">${mood}</option>`
    );
  });
}

function getProcessedAlbums() {
  const searchValue = state.search.trim().toLowerCase();

  const filteredAlbums = albumCatalog.filter((album) => {
    const matchesSearch =
      searchValue === "" ||
      album.title.toLowerCase().includes(searchValue) ||
      album.artist.toLowerCase().includes(searchValue) ||
      album.standoutTrack.toLowerCase().includes(searchValue) ||
      album.tags.some((tag) => tag.toLowerCase().includes(searchValue));

    const matchesGenre = state.genre === "all" || album.genre === state.genre;
    const matchesMood = state.mood === "all" || album.mood === state.mood;
    const matchesSaved = !state.savedOnly || album.saved;

    return matchesSearch && matchesGenre && matchesMood && matchesSaved;
  });

  const sortedAlbums = [...filteredAlbums];

  switch (state.sortBy) {
    case "rating-high":
      sortedAlbums.sort((first, second) => second.rating - first.rating);
      break;
    case "year-new":
      sortedAlbums.sort((first, second) => second.year - first.year);
      break;
    case "year-old":
      sortedAlbums.sort((first, second) => first.year - second.year);
      break;
    case "runtime-short":
      sortedAlbums.sort((first, second) => first.runtime - second.runtime);
      break;
    case "title-az":
      sortedAlbums.sort((first, second) => first.title.localeCompare(second.title));
      break;
    default:
      sortedAlbums.sort((first, second) => {
        if (first.saved !== second.saved) {
          return Number(second.saved) - Number(first.saved);
        }

        if (first.rating !== second.rating) {
          return second.rating - first.rating;
        }

        return second.year - first.year;
      });
  }

  return sortedAlbums;
}

function updateStats(visibleAlbums) {
  totalCount.textContent = albumCatalog.length;
  visibleCount.textContent = visibleAlbums.length;

  const average =
    visibleAlbums.length === 0
      ? 0
      : visibleAlbums.reduce((sum, album) => sum + album.rating, 0) / visibleAlbums.length;

  avgRating.textContent = visibleAlbums.length === 0 ? "--" : average.toFixed(1);
  savedCount.textContent = albumCatalog.filter((album) => album.saved).length;
}

function updateResultsMessage(visibleAlbums) {
  const parts = [];

  if (state.search.trim() !== "") {
    parts.push(`search "${state.search.trim()}"`);
  }

  if (state.genre !== "all") {
    parts.push(state.genre);
  }

  if (state.mood !== "all") {
    parts.push(state.mood);
  }

  if (state.savedOnly) {
    parts.push("saved picks");
  }

  const descriptor = parts.length === 0 ? "all albums" : parts.join(" / ");
  resultsMessage.textContent = `Showing ${visibleAlbums.length} of ${albumCatalog.length} albums for ${descriptor}.`;
}

function updateSpotlight(album) {
  if (!album) {
    spotlightVisual.style.background = "linear-gradient(135deg, #a2a2a2, #d4d4d4)";
    spotlightVisual.classList.remove("has-cover");
    spotlightVisual.innerHTML = '<span class="spotlight-initials" id="spotlightInitials">--</span>';
    spotlightAlbum.textContent = "No matching album";
    spotlightMeta.textContent = "Try adjusting the catalog filters.";
    spotlightDescription.textContent = "The spotlight updates when the filtered album list changes.";
    spotlightChips.innerHTML = "";
    return;
  }

  spotlightVisual.style.background = `linear-gradient(135deg, ${album.colors.start}, ${album.colors.end})`;
  spotlightVisual.classList.add("has-cover");
  spotlightVisual.innerHTML = `
    <img
      class="spotlight-cover"
      src="${getCoverImage(album.id)}"
      alt="${album.title} album cover"
    />
  `;
  spotlightAlbum.textContent = album.title;
  spotlightMeta.textContent = `${album.artist} • ${album.year} • ${album.genre} • ${album.rating.toFixed(1)}/10`;
  spotlightDescription.textContent = album.note;
  spotlightChips.innerHTML = `
    <span>Mood: ${album.mood}</span>
    <span>Runtime: ${album.runtime} min</span>
    <span>Standout track: ${album.standoutTrack}</span>
  `;
}

function createAlbumCard(album, index) {
  return `
    <article
      class="catalog-card"
      style="--card-start: ${album.colors.start}; --card-end: ${album.colors.end}; animation-delay: ${index * 40}ms;"
    >
      <div class="catalog-visual has-cover">
        <img
          class="catalog-cover"
          src="${getCoverImage(album.id)}"
          alt="${album.title} album cover"
          loading="lazy"
        />
      </div>

      <div class="catalog-body">
        <div class="catalog-topline">
          <div>
            <h3 class="catalog-title">${album.title}</h3>
            <p class="catalog-artist">${album.artist}</p>
          </div>
          <button
            type="button"
            class="save-button ${album.saved ? "is-saved" : ""}"
            data-id="${album.id}"
            aria-pressed="${album.saved}"
          >
            ${album.saved ? "Saved" : "Save"}
          </button>
        </div>

        <div class="catalog-meta">
          <span>${album.year}</span>
          <span>${album.genre}</span>
          <span>${album.mood}</span>
          <span>${album.rating.toFixed(1)}/10</span>
        </div>

        <p class="catalog-description">${album.note}</p>

        <div class="catalog-tags">
          ${album.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>

        <div class="card-actions">
          <p><strong>Standout track:</strong> ${album.standoutTrack}</p>
          <p><strong>Runtime:</strong> ${album.runtime} min</p>
        </div>
      </div>
    </article>
  `;
}

function renderCatalog() {
  const processedAlbums = getProcessedAlbums();

  updateStats(processedAlbums);
  updateResultsMessage(processedAlbums);
  updateSpotlight(processedAlbums[0]);

  emptyState.hidden = processedAlbums.length !== 0;
  catalogGrid.innerHTML = processedAlbums.map(createAlbumCard).join("");
}

function resetControls() {
  state.search = "";
  state.genre = "all";
  state.mood = "all";
  state.sortBy = "featured";
  state.savedOnly = false;

  searchInput.value = "";
  genreSelect.value = "all";
  moodSelect.value = "all";
  sortSelect.value = "featured";
  savedToggle.classList.remove("is-active");
  savedToggle.textContent = "Show saved only: Off";
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderCatalog();
});

genreSelect.addEventListener("change", (event) => {
  state.genre = event.target.value;
  renderCatalog();
});

moodSelect.addEventListener("change", (event) => {
  state.mood = event.target.value;
  renderCatalog();
});

sortSelect.addEventListener("change", (event) => {
  state.sortBy = event.target.value;
  renderCatalog();
});

savedToggle.addEventListener("click", () => {
  state.savedOnly = !state.savedOnly;
  savedToggle.classList.toggle("is-active", state.savedOnly);
  savedToggle.textContent = `Show saved only: ${state.savedOnly ? "On" : "Off"}`;
  renderCatalog();
});

clearButton.addEventListener("click", () => {
  resetControls();
  renderCatalog();
});

catalogGrid.addEventListener("click", (event) => {
  const clickedButton = event.target.closest(".save-button");

  if (!clickedButton) {
    return;
  }

  const albumId = Number(clickedButton.dataset.id);
  const selectedAlbum = albumCatalog.find((album) => album.id === albumId);

  if (!selectedAlbum) {
    return;
  }

  selectedAlbum.saved = !selectedAlbum.saved;
  renderCatalog();
});

populateFilters();
resetControls();
renderCatalog();
