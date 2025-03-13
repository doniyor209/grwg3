let ismlar = [
    'Ali',
    'Vali',
    'Hasan',
    'Husan',
    'Olim',
    'Botir',
    'Sobir',
    'Qosim',
    'Karim',
    'Javohir',
    'Islom',
    'Nurulloh',
    'Sunnatilla',
    'Shamsiddin',
    'Olimjon',
];
let nharf = [];
let nharfyoq = [];
console.log(ismlar);

for (const element of ismlar) {
if(element.includes('n')){
    nharf.push(element);

}else{
    nharfyoq.push(element);
}
}

console.log(ismlar,"hamma ismlar");
console.log(nharf,"n harf bor ismlar");
console.log(nharfyoq,"n harf yoq ismlar");