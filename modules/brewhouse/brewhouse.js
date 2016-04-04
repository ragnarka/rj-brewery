import {Module} from '/lib/Module';

export let Brewhouse = (function (Module) {

    let module = Module;

    module.moduleName = "brewhouse";

    module.configuration = {
        "moduleName": module.moduleName,
        "owner": "James Bond",
        "system": {
            "length": "metric",
            "temperature": "celsius",
            "weight": "gram",
            "beerColor": "EBC",
            "BJCPCodes": "2008"
        },
        "equipment": {

        },
        "costs": {

        },
        "values": {

        },
        "beerColorCalculations": {

        },
        "yeastConstants": {

        },
        "calculatedData": {

        },
        "waterProfile": {

        },
        "waterProfileCalculations": {

        },
        "postAdjustmentWaterProfile": {

        },
        "bottling": {

        }
    };

    return module;

}(Module));