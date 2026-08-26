const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


const updateRecords = (records, id, prop, value) => {
  if (!value){
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else if ((prop === "tracks") && !("tracks" in records[id])) {
    records[id]["tracks"] = [value];
  } else {
    records[id][prop].push(value);
  }
  return records;
}
