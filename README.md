# Installing

Using npm:

```bash
$ npm i dattx328-ts-helpers
```

## Example

```ts
import { copyToClipboard, isDateValid } from 'dattx328-ts-helpers';

copyToClipboard('Text to clipboard');

isDateValid('2020 03 20');
```

### Func

| Func | Description | Parameter  | Return |
| ------ | ------ | ------ | ------ |
| copyToClipboard | Copy to Clipboard | text: string |  |
| isDateValid | Check if Date is Valid | date: string | true/false |
| dayOfYear | Find the day of the year | date: string | date |
| getLastDayOfMonth | Return last instance of week day for given year and month | year: number, month: number, day: string | date |
| timeFromDate | Log Time from Date | date: Date | time |
| capitalize | Capitalize a String | str: string | string |
| dayDif | Find the number of days between two days | start: any, end: any | number |
| clearCookies | Clear All Cookies |  |  |
| randomHex | Generate Random Hex |  | hex |
| removeDuplicates | Remove Duplicated from Array | arr: any[] | array |
| getQueryParams | Get Query Params from URL | url: string | string |
| arrayToCSV | This snippet converts the elements that don’t have commas or double quotes to strings with comma-separated values. | arr: any[], delimiter: string = ',' | arr |
| average | This snippet returns the average of two or more numerical values. | ...nums: number[] | num |
| bottomVisible | This snippet checks whether the bottom of a page is visible. |  | true/false |
| differenceTwoArrays | This snippet finds the difference between two arrays. | a: any[], b: any[] | array |
| getStyle | This snippet can be used to get the value of a CSS rule for a particular element. | el: any, ruleName: string | styles |
| hasClass | This snippet checks whether an element has a particular class. | el: any, className: string | boolean |
| insertAfter | This snippet can be used to insert an HTML string after the end of a particular element. | el: any, htmlString: string |  |
| insertBefore | This snippet can be used to insert an HTML string before a particular element. | el: any, htmlString: string |  |
| isBrowser | This snippet can be used to determine whether the current runtime environment is a browser. |  | boolean |
| isBrowserTabFocused | This snippet can be used to determine whether the browser tab is focused. |  | boolean |
| randomIntArrayInRange | This snippet can be used to generate an array with n random integers in a specified range. | min: number, max: number, n: number = 1 | array |
| randomIntegerInRange | This snippet can be used to generate a random integer in a specified range. | min: number, max: number | number(integer) |
| randomNumberInRange | This snippet can be used to return a random number in a specified range. | min: number, max: number | number |
| redirectTo | This snippet can be used to do a redirect to a specified URL. | url: string, asLink: boolean = true |  |
| reverseString | This snippet can be used to reverse a string. | str: any | hex |
| sortArray | Sort array by key | arr: any[], key: string, orderBy: string = 'asc' | array |
