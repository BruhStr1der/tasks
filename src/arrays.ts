/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let finalArray: number[] = [];
    if (numbers.length == 0) return finalArray;
    else finalArray = [numbers[0], numbers[numbers.length - 1]];
    return finalArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let finalArray: number[] = [];
    for (let count: number = 0; count < numbers.length; count++) {
        finalArray[count] = numbers[count] * 3;
    }
    return finalArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let strInt: number[] = [];
    let tempNum: number = 0;
    for (let count: number = 0; count < numbers.length; count++) {
        tempNum = parseInt(numbers[count]);
        if (isNaN(tempNum)) {
            strInt[count] = 0;
        } else {
            strInt[count] = tempNum;
        }
    }
    return strInt;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let strInt: number[] = [];
    for (let count: number = 0; count < amounts.length; count++) {
        let tempNum: number;
        let currentValue: string = amounts[count];
        let finalString: string = "";
        if (currentValue[0] === "$") {
            for (
                let count2: number = 1;
                count2 < currentValue.length;
                count2++
            ) {
                finalString += currentValue[count2];
            }
            tempNum = parseInt(finalString);
        } else {
            tempNum = parseInt(currentValue);
        }
        if (isNaN(tempNum)) {
            strInt[count] = 0;
        } else {
            strInt[count] = tempNum;
        }
    }
    return strInt;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let filteredMessages: string[] = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );
    for (let count: number = 0; count < filteredMessages.length; count++) {
        if (
            filteredMessages[count][filteredMessages[count].length - 1] == "!"
        ) {
            filteredMessages[count] = filteredMessages[count].toUpperCase();
        }
    }
    return filteredMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shorterWords: number[] = [];
    for (let count: number = 0; count < words.length; count++) {
        shorterWords.push(words[count].length);
    }
    shorterWords = shorterWords.filter((length: number): boolean => length < 4);
    return shorterWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
