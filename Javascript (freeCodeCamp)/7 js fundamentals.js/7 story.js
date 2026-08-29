const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(arr) {
  const compacted = [];
  for (let i of arr){
    if(i){
      compacted.push(i);
    }
  }
  if (compacted.length !== arr.length ){
    console.log("[COMPACTED] bwahhh");
  }
  return compacted;
}


const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(arr) {
  const copy = arr.slice();

  for (let i = 0; i < copy.length - 1; i++) {
    for (let j = 0; j < copy.length - 1 - i; j++) {
      if (copy[j].id > copy[j + 1].id) {
        [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
      }
    }
  }

  return copy;
}


const sortedFragments = sortFragments(compactedShuffledFragments)

function dedupeFragments(arr){
  const deduped = [];
  outer :for (let i of arr){
    for(let j of deduped) {
      if (j.id === i.id){
        console.log("[DEDUPED]");
        continue outer;
      }
    }
    deduped.push(i)
  }
  return deduped;
}
const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(arr) {
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i]);

    const currentId = arr[i].id;
    const nextId = arr[i + 1].id;

    for (let id = currentId + 1; id < nextId; id++) {
      result.push({
        id: id,
        text: '[...]'
      });

      console.log('[FILLED]');
    }
  }

  result.push(arr[arr.length - 1]);

  return result;
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += i === arr.length - 1 ? arr[i].text : arr[i].text + '\n';
  }

  return str;
}


console.log(assembleStory(filledFragments))
