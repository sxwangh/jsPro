
const parserTreeChild = {
  node: 'root',
  sub: [{
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
  }]
};

const segment = [
  {
    "offset":0,
    "length":1,
    "word":"我",
    "pos":"rr",
    "basicWords":[

    ]
  },
  {
    "offset":1,
    "length":1,
    "word":"爱",
    "pos":"v",
    "basicWords":[

    ]
  },
  {
    "offset":2,
    "length":2,
    "word":"北京",
    "pos":"ns",
    "basicWords":[

    ]
  },
  {
    "offset":4,
    "length":3,
    "word":"天安门",
    "pos":"ns",
    "basicWords":[

    ]
  }
];

var recursiveTraverse = function (child, action) {
  action(child, segment);
  if (!child || !child.children) { return; }
  child.children.forEach(function(item, index) {
    recursiveTraverse(item, action);
  });
}
// 递归实现  oldChild -- {node: '', sub: []}
var action = function(oldChild, segment) {
  // let newChild = {}; //  newChild  --  {name: '', children: []}
  // newChild for 'name'
  if (oldChild.node) {
    oldChild.name = oldChild.node;
    delete oldChild.node;
  }
  if (oldChild.index) {
    const index = oldChild.index - 1;
    console.log(index);
    console.log(segment[index]);
    console.log(segment[index].word);
    oldChild.name = segment[index].word;
    delete oldChild.index;
  }
  // newChild for 'children'
  if (oldChild.sub) {
    oldChild.children = oldChild.sub;
    delete oldChild.sub;
  }
}

recursiveTraverse(parserTreeChild, action);

console.log(JSON.stringify(parserTreeChild, null, 2));
