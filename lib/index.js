"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTimer = exports.currentTime = exports.scrollToTop = exports.sortArray = exports.reverseString = exports.redirectTo = exports.randomNumberInRange = exports.randomIntegerInRange = exports.randomIntArrayInRange = exports.isBrowserTabFocused = exports.isBrowser = exports.insertBefore = exports.insertAfter = exports.hasClass = exports.getStyle = exports.differenceTwoArrays = exports.bottomVisible = exports.average = exports.arrayToCSV = exports.getQueryParams = exports.removeDuplicates = exports.randomHex = exports.clearCookies = exports.dayDif = exports.capitalize = exports.timeFromDate = exports.getLastDayOfMonth = exports.dayOfYear = exports.isDateValid = exports.copyToClipboard = void 0;
// Copy to Clipboard
var copyToClipboard = function (text) {
    return navigator.clipboard.writeText(text);
};
exports.copyToClipboard = copyToClipboard;
// Check if Date is Valid
var isDateValid = function (date) {
    return !Number.isNaN(new Date(date).valueOf());
};
exports.isDateValid = isDateValid;
// Find the day of the year
var dayOfYear = function (date) {
    var diff = new Date(date.getFullYear(), 0, 0);
    return Math.floor((date - diff) / 1000 / 60 / 60 / 24);
};
exports.dayOfYear = dayOfYear;
// Return last instance of week day for given year and month
var getLastDayOfMonth = function (year, month, day) {
    // Convert day name to index
    var i = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'].indexOf(day.toLowerCase().slice(0, 2));
    // Get end of month and eom day index
    var eom = new Date(year, month, 0);
    var eomDay = eom.getDay();
    // Subtract required number of days
    eom.setDate(eom.getDate() - eomDay + i - (i > eomDay ? 7 : 0));
    return eom;
};
exports.getLastDayOfMonth = getLastDayOfMonth;
// Log Time from Date
var timeFromDate = function (date) {
    return date.toTimeString().slice(0, 8);
};
exports.timeFromDate = timeFromDate;
// Capitalize a String
var capitalize = function (str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(' ');
};
exports.capitalize = capitalize;
// Find the number of days between two days
var dayDif = function (start, end) {
    return Math.ceil(Math.abs(start.getTime() - end.getTime()) / 86400000);
};
exports.dayDif = dayDif;
// Clear All Cookies
var clearCookies = function () {
    document.cookie.split(';').forEach(function (cookie) { return document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, "=;expires=".concat(new Date(0).toUTCString(), ";path=/")); });
};
exports.clearCookies = clearCookies;
// Generate Random Hex
var randomHex = function () {
    return "#".concat(Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0"));
};
exports.randomHex = randomHex;
// Remove Duplicated from Array
var removeDuplicates = function (arr) {
    return Array.from(new Set(arr));
};
exports.removeDuplicates = removeDuplicates;
// Get Query Params from URL
var getQueryParams = function (url) {
    var URL = JSON.parse('{"' + decodeURI(url.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    return JSON.stringify(URL);
};
exports.getQueryParams = getQueryParams;
// This snippet converts the elements that don’t have commas or double quotes to strings with comma-separated values.
var arrayToCSV = function (arr, delimiter) {
    if (delimiter === void 0) { delimiter = ','; }
    return arr.map(function (v) { return v.map(function (x) { return "\"".concat(x, "\""); }).join(delimiter); }).join('\n');
};
exports.arrayToCSV = arrayToCSV;
// This snippet returns the average of two or more numerical values.
var average = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, val) { return acc + val; }, 0) / nums.length;
};
exports.average = average;
// This snippet checks whether the bottom of a page is visible.
var bottomVisible = function () {
    return document.documentElement.clientHeight + window.scrollY >=
        (document.documentElement.scrollHeight || document.documentElement.clientHeight);
};
exports.bottomVisible = bottomVisible;
// This snippet finds the difference between two arrays.
var differenceTwoArrays = function (a, b) {
    var s = new Set(b);
    return a.filter(function (x) { return !s.has(x); });
};
exports.differenceTwoArrays = differenceTwoArrays;
// This snippet can be used to get the value of a CSS rule for a particular element.
var getStyle = function (el, ruleName) {
    var styleCss = getComputedStyle(el);
    return styleCss[ruleName];
};
exports.getStyle = getStyle;
// This snippet checks whether an element has a particular class.
var hasClass = function (el, className) { return el.classList.contains(className); };
exports.hasClass = hasClass;
// This snippet can be used to insert an HTML string after the end of a particular element.
var insertAfter = function (el, htmlString) { return el.insertAdjacentHTML('afterend', htmlString); };
exports.insertAfter = insertAfter;
// This snippet can be used to insert an HTML string before a particular element.
var insertBefore = function (el, htmlString) { return el.insertAdjacentHTML('beforebegin', htmlString); };
exports.insertBefore = insertBefore;
// This snippet can be used to determine whether the current runtime environment is a browser.
// This is helpful for avoiding errors when running front-end modules on the server (Node).
var isBrowser = function () { return ![typeof window, typeof document].includes('undefined'); };
exports.isBrowser = isBrowser;
// This snippet can be used to determine whether the browser tab is focused.
var isBrowserTabFocused = function () { return !document.hidden; };
exports.isBrowserTabFocused = isBrowserTabFocused;
// This snippet can be used to generate an array with n random integers in a specified range.
var randomIntArrayInRange = function (min, max, n) {
    if (n === void 0) { n = 1; }
    return Array.from({ length: n }, function () { return Math.floor(Math.random() * (max - min + 1)) + min; });
};
exports.randomIntArrayInRange = randomIntArrayInRange;
// This snippet can be used to generate a random integer in a specified range.
var randomIntegerInRange = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
exports.randomIntegerInRange = randomIntegerInRange;
// This snippet can be used to return a random number in a specified range.
var randomNumberInRange = function (min, max) { return Math.random() * (max - min) + min; };
exports.randomNumberInRange = randomNumberInRange;
// This snippet can be used to do a redirect to a specified URL.
var redirectTo = function (url, asLink) {
    if (asLink === void 0) { asLink = true; }
    return asLink ? (window.location.href = url) : window.location.replace(url);
};
exports.redirectTo = redirectTo;
// This snippet can be used to reverse a string.
var reverseString = function (str) { return __spreadArray([], str, true).reverse().join(''); };
exports.reverseString = reverseString;
// Sort array by key
var sortArray = function (arr, key, orderBy) {
    if (orderBy === void 0) { orderBy = 'asc'; }
    var arrClone = __spreadArray([], arr, true);
    return arrClone.sort(function (a, b) { return (a[key] < b[key] ? -1 : 1) * (orderBy === 'asc' ? 1 : -1); });
};
exports.sortArray = sortArray;
// Smooth-scroll to the top of the page
var scrollToTop = function () {
    var c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(exports.scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};
exports.scrollToTop = scrollToTop;
// The code for a 24-hour clock is quite similar to the previous code, we only have one major change.
var currentTime = function () {
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var session = "AM";
    if (hh > 12) {
        session = "PM";
    }
    hh = (hh < 10) ? 0 + hh : hh;
    mm = (mm < 10) ? 0 + mm : mm;
    ss = (ss < 10) ? 0 + ss : ss;
    var time = hh + ":" + mm + ":" + ss + " " + session;
    return time;
};
exports.currentTime = currentTime;
// Create a countdown timer
var createTimer = function (start, end) {
    var startTime = new Date(start).getTime();
    var endTime = new Date(end).getTime();
    var distance = endTime - startTime;
    if (distance > 0) {
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            expired: false
        };
    }
    else {
        return {
            expired: true
        };
    }
};
exports.createTimer = createTimer;
