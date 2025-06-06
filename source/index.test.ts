import test from "node:test";
import assert from "node:assert";
import { identity } from "./index.ts";

test("returns the same argument as given when argument is of type string", function () {
    assert.strictEqual(identity("foo"), "foo");
});

test("returns the same argument as given when argument is of type number", function () {
    assert.strictEqual(identity(42), 42);
});

test("returns the same argument as given when argument is of type boolean", function () {
    assert.strictEqual(identity(true), true);
});
