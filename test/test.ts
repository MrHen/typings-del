import test = require('blue-tape');

import del = require('del');

test('del (string parameter)', (t) => {
  t.plan(1);
  del(['tmp/*.js', '!tmp/unicorn.js']);
  t.assert(1 === 1);
});

test('del (string[] parameter)', (t) => {
  t.plan(1);
  del('tmp/*.js');
  t.assert(1 === 1);
});

test('del (with dryRun option)', (t) => {
  t.plan(1);
  del('tmp/*.js', {dryRun: true});
  t.assert(1 === 1);
});

test('del (with force option)', (t) => {
  t.plan(1);
  del('tmp/*.js', {force: true});
  t.assert(1 === 1);
});

test('del .then', (t) => {
  t.plan(1);
  del(['tmp/*.js']).then(paths => {
      if(paths.length) {
        paths[0].toUpperCase();
      }
      t.assert(1 === 1);
  });
});

test('del .catch', (t) => {
  t.plan(1);
  del(['tmp/*.js']).catch(paths => {
    if(paths.length) {
      paths[0].toUpperCase();
    }
  });
  t.assert(1 === 1);
});

test('sync (string parameter)', (t) => {
  t.plan(1);
  del.sync('public/assets/**');
  t.assert(1 === 1);
});

test('sync (string[] parameter)', (t) => {
  t.plan(1);
  del.sync(['public/assets/**', '!public/assets/goat.png']);
  t.assert(1 === 1);
});

test('sync (with dryRun option)', (t) => {
  t.plan(1);
  del.sync('tmp/*.js', {dryRun: true});
  t.assert(1 === 1);
});

test('sync (with force option)', (t) => {
  t.plan(1);
  del.sync('tmp/*.js', {force: true});
  t.assert(1 === 1);
});

test('sync .then', (t) => {
  t.plan(1);
  del(['tmp/*.js']).then(paths => {
      if(paths.length) {
        paths[0].toUpperCase();
      }
      t.assert(1 === 1);
  });
});

test('sync .catch', (t) => {
  t.plan(1);
  del(['tmp/*.js']).catch(paths => {
    if(paths.length) {
      paths[0].toUpperCase();
    }
  });
  t.assert(1 === 1);
});
