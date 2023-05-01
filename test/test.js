var expect = require("chai").expect;
var request = require("request");
var url = "http://localhost:3000/api/monkeys";
let monkey = {
  title: "For test",
  link: "For test",
  path: "For test",
  description: "For test",
};

describe("test get all monkeys", function () {
  it("return status code of 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("return successfully message", function (done) {
    request(url, function (error, response, body) {
      console.log(body);
      body = JSON.parse(body);
      expect(body.message).to.contain("Sucessful");
      done();
    });
  });

  it("return successfully message", function (done) {
    request(url, function (error, response, body) {
      console.log(body);
      body = JSON.parse(body);
      expect(body.data).to.be.a("array");
      done();
    });
  });
});

describe("test post monkeys", function () {
  it("insert a monkey to database", function (done) {
    request.post({ url: url, form: monkey }, function (error, response, body) {
      body = JSON.parse(body);
      expect(body.message).to.contain("Sucessfully Added");
      done();
    });
  });
});

describe("test Delete monkeys", function () {
  it("Delete a monkey from database", function (done) {
    request.delete(
      { url: url, form: monkey },
      function (error, response, body) {
        body = JSON.parse(body);
        expect(body.message).to.contain("Sucessfully removed");
        done();
      }
    );
  });
});
