import * as ASTY from "asty";
import * as fs from "fs";
import * as PEGUtil from "pegjs-util";
import * as peg from "pegjs";

describe("Default", () => {
  it("Default", () => {
    let contents = fs.readFileSync("source.pr").toString("utf-8");
    let parserContents = fs
      .readFileSync("./spec.pegjs")
      .toString("utf-8");
    let asty = new ASTY();
    let parser = peg.generate(parserContents);
    let actual = PEGUtil.parse(parser, contents, {
      makeAST: function(line, column, offset, args) {
        return asty.create.apply(asty, args).pos(line, column, offset);
      }
    });

    if (actual.error) {
      delete actual.error.expected;
      console.log(actual.error);
    }
    expect(actual.error).toBeFalsy();
  });
});