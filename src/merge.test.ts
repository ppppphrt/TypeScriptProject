import { merge } from './merge';

test('merges three sorted collections', () => {
  expect(merge([1, 4, 7], [2, 5, 8], [9, 6, 3])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('handles empty collections', () => {
  expect(merge([], [], [])).toEqual([]);
});

test('handles one non-empty collection', () => {
  expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
});

test('handles duplicates', () => {
  expect(merge([1, 3], [1, 3], [3, 1])).toEqual([1, 1, 1, 3, 3, 3]);
});
