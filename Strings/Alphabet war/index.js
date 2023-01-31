function alphabetWar(fight)
{
  
const right = {
    m:4,
    q:3,
    d:2,
    z:1
  }
    const left = {
    w:4,
    p:3,
    b:2,
    s:1
  }
    const rightPoints =   fight.split("").filter(x => Object.getOwnPropertyNames(right).includes(x) ).reduce((a,b) => a+right[b],0)
    const leftPoints = fight.split("").filter(x => Object.getOwnPropertyNames(left).includes(x) ).reduce((a,b) => a+left[b],0)
    return rightPoints > leftPoints ? "Right side wins!" : leftPoints> rightPoints ? "Left side wins!" : "Let's fight again!";
}