const { response } = require("express");

module.exports = {
    mockDoctor: {
        name: "Sarah Van Wart",
        seasons: [1, 2, 3, 4, 5, 6]
    },
    mockId: "this_is_a_fake_id",
    mockPatchData: {
        name: "new_name",
        seasons: [0]
    },
    route: route => "http://localhost:8081" + route,
    testImplemented: (response, done) => {
        if (response.status === 501) {
            done("Status code 501 received: Not Implemented.");
        }
    }
}
