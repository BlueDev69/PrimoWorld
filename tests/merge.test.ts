import {describe, expect, test} from '@jest/globals';
import merge from '../src/module/merge';

describe('merge module', () => {
  test('merge case 1 ปกติ', () => {
    expect(merge([1,3,5], [2,4,6])).toStrictEqual([1,2,3,4,5,6]);
  });

  test('merge case 2 length is not the same', () => {
    expect(merge([1,3,5,7], [2,4,6])).toStrictEqual([1,2,3,4,5,6,7]);
  });

  test('merge case 3 some collection is null', () => {
    expect(merge([1,7,5,3], [])).toStrictEqual([1,3,5,7]);
  });

  test('merge case 4 all null', () => {
    expect(merge([], [])).toStrictEqual("all collection is null, Please input value");
  });
});