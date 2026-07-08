import assert from 'node:assert';
import { suite, test } from 'mocha';

import { identity } from './index.ts';

suite('identity', function () {
    test('returns the same argument as given when argument is of type string', function () {
        assert.strictEqual(identity('foo'), 'foo');
    });

    test('returns the same argument as given when argument is of type number', function () {
        const numericArgument = 42;

        assert.strictEqual(identity(numericArgument), numericArgument);
    });

    test('returns the same argument as given when argument is of type boolean', function () {
        assert.strictEqual(identity(true), true);
    });
});
