import test from "ava";
import Maskme from "../src";

test('Shouldn\'t hide 2 first and 2 last chars "4242424242424242" => "42************42" (default configuration)', (t) => {
  t.is(Maskme("4242424242424242"), "42************42");
});

test('Shouldn\'t hide 4 first and 4 last chars "4242424242424242" => "42xxxxxxxxxxxx42"', (t) => {
  t.is(Maskme("4242424242424242", { replaceBy: "x" }), "42xxxxxxxxxxxx42");
});

test('Shouldn\'t hide 2 last chars "4242424242424242" => "**************42"', (t) => {
  t.is(Maskme("4242424242424242", { offsetLeft: 0 }), "**************42");
});

test('Shouldn\'t hide 2 first chars "4242424242424242" => "42**************"', (t) => {
  t.is(Maskme("4242424242424242", { offsetRight: 0 }), "42**************");
});

test('Should hide all chars "4242424242424242" => "****************"', (t) => {
  t.is(
    Maskme("4242424242424242", { offsetRight: 0, offsetLeft: 0 }),
    "****************"
  );
});

test('Shouldn\'t hide 6 first and 5 last chars "4242424242424242" => "424242*****24242"', (t) => {
  t.is(
    Maskme("4242424242424242", { offsetLeft: 6, offsetRight: 5 }),
    "424242*****24242"
  );
});

test('Shouldn\'t hide nothing "4242424242424242" => "4242424242424242"', (t) => {
  t.is(
    Maskme("4242424242424242", { offsetLeft: 30, offsetRight: 40 }),
    "4242424242424242"
  );
});
