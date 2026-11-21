import { test } from 'node:test';
import assert from 'node:assert/strict';
import { GOAL_KEYS, isProjectGoal, projectHref, assemblyProgress, assemblySpread } from '../app/_lib/project-goals.ts';

test('only known business goals can enter the enquiry context', () => {
  for (const goal of GOAL_KEYS) assert.equal(isProjectGoal(goal), true);
  for (const value of ['__proto__', 'constructor', '<script>', 'unknown', null, {}]) assert.equal(isProjectGoal(value), false);
});
test('all selected goals survive the contact destination', () => {
  for (const goal of GOAL_KEYS) {
    const url = new URL(projectHref(goal), 'https://carterdigitals.co.za');
    assert.equal(url.pathname, '/contact');
    assert.equal(url.searchParams.get('goal'), goal);
    assert.equal(url.hash, '#enquiry');
  }
  assert.equal(projectHref(), '/contact#enquiry');
});
test('scroll progress clamps outside the section and handles zero travel', () => {
  assert.equal(assemblyProgress(100, 1000, 1000), 0);
  assert.equal(assemblyProgress(-1000, 2200, 1000), 1000 / 1200);
  assert.equal(assemblyProgress(-9999, 2200, 1000), 1);
  assert.ok(Number.isFinite(assemblyProgress(0, 500, 1000)));
});
test('the assembly opens, reaches one peak, and resolves on reverse or forward scroll', () => {
  assert.equal(assemblySpread(0), 0);
  assert.equal(assemblySpread(.4), 1);
  assert.equal(assemblySpread(1), 0);
  for (let p = -1; p <= 2; p += .01) assert.ok(assemblySpread(p) >= 0 && assemblySpread(p) <= 1);
  const positions = [.1, .3, .5, .8, 1];
  assert.deepEqual(positions.map(assemblySpread).reverse(), [...positions].reverse().map(assemblySpread));
});
