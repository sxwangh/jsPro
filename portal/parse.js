
String.prototype.replaceByIndex = function(start, length, replaceWord) {
  const end = start + length;
  let newSen = '';
  if (start === 0) {
    newSen = `${replaceWord}${this.slice(end, this.length)}`;
  } else {
    newSen = `${this.slice(0, start)}${replaceWord}${this.slice(end, this.length)}`;
  }
  return newSen;
}

// const MyString = require('./MyString.js');
function Parser() {
}
Parser.prototype = {
  parseEntity: function(sentence0, NerList0) {
    let sentence = sentence0;
    const NerList = NerList0;
    let addLen = 0; // 拼句后新增在的长度，用于计算拼句后的offset
    NerList.forEach((ner, i) => {
      let newWord = `<START:${ner.type}>${ner.ne}<END>`;
      sentence = sentence.replaceByIndex(ner.offset, ner.length, newWord);
      addLen = addLen + 13 + ner.type.length;
      if (i+1 <= NerList.length - 1) {
        NerList[i+1].offset += addLen;
      }
    });
    return sentence;
  },
  sortEntityByOffset(NerList) {
    NerList.sort((a, b) => {
      return a.offset - b.offset;
    });
    return NerList;
  },
  parserTree: function(data) {
    const treeData = { name: 'ROOT', children: [] };
    const children = [];
    data.forEach((item, i) => {
      if (item.node) {
        children[i].name = item.node;
      }
      if (item.sub) {
        children[i].children = item.sub;
      }
    })
  }
}


const parser = new Parser();
const parserTree = {
  "root":[
    {
      "node":"IP",
      "sub":[
        {
          "node":"NP",
          "sub":[
            {
              "node":"PN",
              "index":1
            }
          ]
        },
        {
          "node":"VP",
          "sub":[
            {
              "node":"VV",
              "index":2
            },
            {
              "node":"NP",
              "sub":[
                {
                  "node":"NR",
                  "index":3
                },
                {
                  "node":"NR",
                  "index":4
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};




// const entityData = [
//   {
//     "ne":"北京天安门",
//     "offset":4,
//     "length":5,
//     "type":"LOC",
//     "subType":null,
//     "basicNEs":[
//       {
//         "ne":"北京",
//         "offset":4,
//         "length":2,
//         "type":"CITY"
//       },
//       {
//         "ne":"天安门",
//         "offset":6,
//         "length":3,
//         "type":"GPE"
//       }
//     ]
//   },
//   {
//     "ne":"武汉",
//     "offset":24,
//     "length":2,
//     "type":"LOC",
//     "subType":"CITY",
//     "basicNEs":null
//   },
//   {
//     "ne":"9点",
//     "offset":1,
//     "length":2,
//     "type":"TIM",
//     "subType":"TIM",
//     "basicNEs":null
//   },
//   {
//     "ne":"11点",
//     "offset":19,
//     "length":3,
//     "type":"TIM",
//     "subType":"TIM",
//     "basicNEs":null
//   }
// ];
// const parser = new Parser();
// parser.sortEntityByOffset(entityData);
// debugger;
// console.log(parser.parseEntity((new MyString('我9点再北京天安门买了一些好吃的，然后11点回了武汉')), data1));
