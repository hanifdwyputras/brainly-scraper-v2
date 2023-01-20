const { Brainly } = require('../build');

void Brainly.initialize();
(async() => {
    const br = new Brainly('id');
    const results = await br.searchById(37959056, 'id');

    console.log(results);
})();