const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(arrays) {
  if (!Array.isArray(arrays)) return [];

  const result = [];

  for (let playlistIndex = 0; playlistIndex < arrays.length; playlistIndex++) {
    for (let trackIndex = 0; trackIndex < arrays[playlistIndex].length; trackIndex++) {
      result.push({
        ...arrays[playlistIndex][trackIndex],
        source: [playlistIndex, trackIndex]
      });
    }
  }

  return result;
}

function scoreTracks(array) {
  return array.map(track => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120)
  }));
}

function dedupeTracks(array) {
  const seen = new Set();
  const result = [];

  for (const track of array) {
    if (!seen.has(track.trackId)) {
      seen.add(track.trackId);
      result.push(track);
    }
  }

  return result;
}

function enforceArtistQuota(array, maxPerArtist) {
  const artistCounts = new Map();
  const result = [];

  for (const track of array) {
    const count = artistCounts.get(track.artist) || 0;

    if (count < maxPerArtist) {
      result.push(track);
      artistCounts.set(track.artist, count + 1);
    }
  }

  return result;
}

function buildSchedule(arr) {
  return arr.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId
  }));
}

function remixPlaylist(arr, maxPerArtist) {
  const flattened = flattenPlaylists(arr);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const quotaEnforced = enforceArtistQuota(deduped, maxPerArtist);
  return buildSchedule(quotaEnforced);
}
