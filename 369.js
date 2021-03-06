export function game(arr) {
    const hangul = '영일이삼사오육칠팔구';
    const read = arr.map((num) => {
        if(num === 3 || num === 6 || num === 9) {
            return '짝';
        }
        return hangul[num];
    });
    return read.join(', ');
}