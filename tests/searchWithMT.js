const { Brainly } = require('../build');

void Brainly.initialize();
(async() => {
    const br = new Brainly('id', true, false);
    const results = await br.searchWithMT('1+1 =');

    console.log(results[0]);
})();