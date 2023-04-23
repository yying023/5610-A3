import { render, screen } from '@testing-library/react';
const sum = (a,b)=>a+b;

describe('sum', () => {
  it('sums up two values', () => {
    expect(sum(2, 4)).toBe(6);
  });
});
