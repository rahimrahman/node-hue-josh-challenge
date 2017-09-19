var _ = require('lodash');
var { fetchLights } = require('simple-hue-library');

const TIMER_IN_SECONDS = (process.env.TIMER_IN_SECONDS) || 1;
const API_USERNAME = (process.env.API_USERNAME) || 'newdeveloper';
const API_URL = (process.env.API_URL) || 'http://54.197.187.61';

function main(i = 0, lights = []) {
    setTimeout(() => {
        fetchLights(API_URL, API_USERNAME)
            .then((newLights) => {
                if (lights.length > 0) {
                    var x = 0;
                    // iterate through lights
                    _.map(lights, light => {
                        var changed = false;
                        var newLight = newLights[x];
                        var reduceReturned = _.reduce(light, function(result, value, key) {
                            if (!_.size(result)) {
                                result = { id: light.id }
                            };
                            if (!_.isEqual(value, newLight[key])) {
                                result[key] = newLight[key];
                                changed = true;
                                return result;
                            }
                            return result;
                        }, {});

                        if (changed) console.log(JSON.stringify(reduceReturned, null, 2));
                        x++;
                    });
                } else {
                    console.log(JSON.stringify(newLights, null, 2))
                }

                main(++i, newLights);     
            })
            .catch(err => {
                console.log(err);
            })
    }, 1000 * TIMER_IN_SECONDS);
}

main();
