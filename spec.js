describe("Calculator App", function(){
  it("should have a title", function(){
    browser.get("http://juliemr.github.io/protractor-demo/");
    expect(browser.getTitle()).toEqual("Something Different");
  })
})