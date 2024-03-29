import { game } from './369';

describe('369 게임', () => {
    it('[1,2] 를 넣으면 일,이가 반환되어야 한다.', () => {
        expect(game([1,2])).toBe('일, 이');
    });
    
    it('[1,2,3] 은 일, 이, 짝으로 읽어야 한다.', () => {
        expect(game([1,2,3])).toBe('일, 이, 짝');
    });

    it('[1,2,3,4,5,6] 은 일, 이, 짝, 사, 오, 짝으로 읽어야 한다.', () => {
        expect(game([1,2,3, 4, 5, 6])).toBe('일, 이, 짝, 사, 오, 짝');
    });

    it('[1,2,3,4,5,6,7,8,9] 은 일, 이, 짝, 사, 오, 짝, 칠, 팔, 짝으로 읽어야 한다.', () => {
        expect(game([1,2,3,4,5,6,7,8,9])).toBe('일, 이, 짝, 사, 오, 짝, 칠, 팔, 짝');
    });

    it('[10,11,12,13]은 십, 십일, 십이, 짝으로 읽어야 한다.', () => {
        expect(game([10,11,12,13])).toBe('십, 십일, 십이, 짝');
    });

    it('[29,30,31,32,33]은 이십구, 짝, 짝, 짝, 짝짝으로 읽어야 한다.', () => {
        expect(game([29,30,31,32,33])).toBe('이십구,짝,짝,짝,짝짝');
    });
});