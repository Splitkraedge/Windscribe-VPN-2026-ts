function debounce(func: (...args: any[]) => void, delay: number) {
let timeoutId: NodeJS.Timeout | null = null;
return function(...args: any[]) {
if (timeoutId) {
clearTimeout(timeoutId);
}
timeoutId = setTimeout(() => {
func(...args);
}, delay);
};
}
function throttle(func: (...args: any[]) => void, limit: number) {
let lastFunc: NodeJS.Timeout | null;
let lastRan: number;
return function(...args: any[]) {
const context = this;
if (!lastRan) {
func.apply(context, args);
lastRan = Date.now();
} else {
if (Date.now() - lastRan >= limit) {
func.apply(context, args);
lastRan = Date.now();
}
}
};
}
function memoize(fn: (...args: any[]) => any) {
const cache: {[key: string]: any} = {};
return function(...args: any[]) {
const key = JSON.stringify(args);
if (cache[key]) {
return cache[key];
}
const result = fn(...args);
cache[key] = result;
return result;
};
}
function randomInt(min: number, max: number) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffleArray<T>(array: T[]) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
return array;
}
function uniqueArray<T>(array: T[]) {
return Array.from(new Set(array));
}
export { debounce, throttle, memoize, randomInt, shuffleArray, uniqueArray };
