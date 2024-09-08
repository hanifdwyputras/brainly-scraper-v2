const { Brainly } = require('../build');

(async() => {
    await Brainly.initialize();
    const br = new Brainly('id', true, true);
    const results = await br.searchWithMT('1+1 =');

    console.log(results[0]);
})();