(function (global) {

    "use strict";

    describe('parsePhone', function () {

        it('should be globally available', function () {
            expect(global.parsePhone).to.be.a(Function);
        });

        it('should be able to parse a simple phone number', function () {
            expect(parsePhone('555-03 0999')).to.equal('555030999');
        });
    });

}(this));
