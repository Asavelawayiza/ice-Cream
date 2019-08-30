describe('ice-cream test', function () {
    it('should return a correct price when a certain cone is selected', function () {
        var iceInstances = IceCream();
        assert.equal(iceInstances.cone('Plain Cone'), "R2.00");
    })

    it('should return a correct price when a certain flavour is selected', function () {
        var iceInstances = IceCream();
        assert.equal(iceInstances.flavours('Vanilla'), "R10.00");
    })

    it('should return a correct price when a certain topping is selected', function () {
        var iceInstances = IceCream();
        assert.equal(iceInstances.topping('dipp'), "R5.00");
    })

    it('should return a correct price for a certain iceCream choosen selected', function () {
        var iceInstances = IceCream();
         iceInstances.cone('Sugar cone');
         iceInstances.flavours('Chocolate');
         iceInstances.topping('dipTop');
        assert.equal(iceInstances.getTotal(), "R20.00");
    })

    });