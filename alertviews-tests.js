// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by alertviews.js.
import { name as packageName } from "meteor/alertviews";

// Write your tests here!
// Here is an example.
Tinytest.add('alertviews - example', function (test) {
  test.equal(packageName, "alertviews");
});
