const myObj = {
    js: 'JavaScript',
    ts: 'TypeScript',
    rb: 'Ruby',
    swift: 'Swift'
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py"]
for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('IN', 'India')

for (const key in map) { // Map is not iterable so we can't use for in
    // console.log(key);
    
}