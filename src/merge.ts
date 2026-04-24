export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const c3 = [...collection_3].reverse();

  const result: number[] = [];
  let i = 0, j = 0, k = 0;

  while (i < collection_1.length || j < collection_2.length || k < c3.length) {
    const a = i < collection_1.length ? collection_1[i] : Infinity;
    const b = j < collection_2.length ? collection_2[j] : Infinity;
    const c = k < c3.length ? c3[k] : Infinity;

    if (a <= b && a <= c) { result.push(a); i++; }
    else if (b <= a && b <= c) { result.push(b); j++; }
    else { result.push(c); k++; }
  }

  return result;
}
