import test from "ava";
import Maskme from "../src";

test("Should mask credit card numbers \"4242424242424242\" => \"4242********4242\" (default configuration)", (t) => {
  t.is(Maskme("4242424242424242"), "4242********4242");
});

test("Should mask credit card numbers \"4242424242424242\" => \"4242--------4242\"", (t) => {
  t.is(Maskme("4242424242424242", {replaceBy: "-"}), "4242--------4242");
});

test("Should mask credit card numbers \"4242424242424242\" => \"4242xxxxxxxx4242\"", (t) => {
  t.is(Maskme("4242424242424242", {replaceBy: "x"}), "4242xxxxxxxx4242");
});

