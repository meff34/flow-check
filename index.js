/* @flow */

type A = {
  name: string;
  id: number;
}

type B = $Keys<A>;
type C = $Shape<A>;

const b: B = 'id';

const c: C = {
  id: 1,
};

console.log(b);
console.log(c);
