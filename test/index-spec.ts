import test from "ava";
import Maskme, {Type} from "../src";

test("Should mask credit card numbers \"4242424242424242\" => \"4242********4242\" (default configuration)", (t) => {
  t.is(Maskme("4242424242424242"), "4242********4242");
});

test("Should mask credit card numbers \"4242424242424242\" => \"4242--------4242\"", (t) => {
  t.is(Maskme("4242424242424242", {replaceBy: "-"}), "4242--------4242");
});

test("Should mask credit card numbers \"4242424242424242\" => \"4242xxxxxxxx4242\"", (t) => {
  t.is(Maskme("4242424242424242", {replaceBy: "x"}), "4242xxxxxxxx4242");
});

test("Should mask all chars except 4 last  \"4242424242424242\" => \"************4242\"", (t) => {
  t.is(Maskme("4242424242424242", {type: Type.start}), "************4242");
});

test("Should mask all chars except 2 last \"4242424242424242\" => \"**************42\"", (t) => {
  t.is(Maskme("4242424242424242", {type: Type.start, numberOfChars: 2}), "**************42");
});

test("Should mask all chars except 4 first \"4242424242424242\" => \"4242************\"", (t) => {
  t.is(Maskme("4242424242424242", {type: Type.end}), "4242************");
});

test("Should mask all chars except 2 first \"4242424242424242\" => \"42**************\"", (t) => {
  t.is(Maskme("4242424242424242", {type: Type.end, numberOfChars: 2}), "42**************");
});

test("Should mask nothing \"42\" => \"42\" (default configuration)", (t) => {
  t.is(Maskme("42"), "42");
});

test("Should mask nothing \"42\" => \"42\"", (t) => {
  t.is(Maskme("42", {type: Type.start}), "42");
});

test("Should mask nothing \"42\" => \"42\"", (t) => {
  t.is(Maskme("42", {type: Type.end}), "42");
});
