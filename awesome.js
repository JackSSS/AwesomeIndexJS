
var peopleIndex = [
{
name: 'Trinity',
occupation: 'programmer',
awesomeIndex: 10
},
{
name: 'Mater',
occupation: 'tow truck'
},
{
name: 'Number 5',
occupation: 'programmer',
awesomeIndex: 7
},
{
name: 'Alice',
occupation: 'programmer',
awesomeIndex: 9
},
{
name: 'Zaphod',
occupation: 'President of the Galaxy'
},
{
name: 'Bob Parr',
occupation: 'programmer',
awesomeIndex: 6
}
];

var person = 0
var awesomeIndexAvg = 0;
var average;

for (var i = 0; i < peopleIndex.length; i++) {
    if (peopleIndex[i].occupation === 'programmer' && peopleIndex[i].awesomeIndex !== 'undefined') {
        awesomeIndexAvg += peopleIndex[i].awesomeIndex
        person++;
    }
}
average = awesomeIndexAvg / person;
function getAvg() {
    document.getElementById("average-index").innerHTML = "<p> Programmers have an average awesome index of <b>" + average + "</b>.</p>";
  }


