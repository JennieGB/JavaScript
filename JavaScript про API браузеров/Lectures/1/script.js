console.log(navigator.userAgent);
// информация о браузере
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36

console.log(navigator.cookieEnabled);
// включены ли coockie
// true

console.log(navigator.doNotTrack);
// включена ли опция на отсеживание
// null

console.log(navigator.platform); // не используется, т.к. устарела
//https://developer.mozilla.org/ru/docs/Web/API/Navigator/platform
//Win32

console.log(navigator.geolocation);
// геолокация
/*
Geolocation {}
[[Prototype]]
: 
Geolocation
clearWatch
: 
ƒ clearWatch()
getCurrentPosition
: 
ƒ getCurrentPosition()
watchPosition
: 
ƒ watchPosition()
constructor
: 
ƒ Geolocation()
Symbol(Symbol.toStringTag)
: 
"Geolocation"
[[Prototype]]
: 
Object
*/
console.log(location);
//location.href = './first.html'