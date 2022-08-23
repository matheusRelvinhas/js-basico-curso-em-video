let num = [1,2,3,4,5];
console.log(num);

console.log('_____________')
console.log('')

let friend = {
  name:'José',
  sexo:'M',
  peso:65.5,
  engordar(p=0){
    console.log('Engordou')
    this.peso += p
  }
}
console.log(friend)
console.log(friend.peso)
friend.engordar(2)
console.log(`${friend.name} pesa ${friend.peso}Kg.`)

console.log('_____________')
console.log('')

console.log(typeof num);
console.log(typeof friend);

let s = 'JavaScript'
let uS = s.toUpperCase()

console.log(uS)