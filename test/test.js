const asserttype = require("chai-asserttype");
const axios = require("axios");
const chai = require("chai");

const data = require("../config/data.json");
const utils = require("./util/testUtil");

chai.use(asserttype);
const expect = chai.expect;

describe("/doctor", () => {
    describe("GET", () => {
        it("should return a list of all Doctor ids", done => {
            axios.get(utils.route("/doctor"))
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data).to.eql(data.doctors.map(doctor => doctor._id));
                    done();
                })
                .catch(err => done(err));
        });
    });
    describe("POST", () => {
        it("should create a new Doctor object", done => {
            axios.post(utils.route("/doctor"), utils.mockDoctor)
                .then(response => {
                    expect(response.status).to.equal(201);
                    const _id = response.data;
                    expect(_id).to.be.string();
                    axios.get(utils.route(`/doctor/${_id}`))
                        .then(response => {
                            expect(
                                response.status,
                                `Error in GET /doctor/${_id}, which is required to test POST /doctor`
                            ).to.equal(200);
                            expect(response.data._id).to.equal(_id);
                            delete response.data._id;
                            expect(response.data).to.eql(utils.mockDoctor);
                            done();
                        })
                        .catch(err => done(err));
                })
                .catch(err => done(err));
        });
    });
});

describe("/doctor/:id", () => {
    describe("GET", () => {
        it("should find the Doctor object with the specified id", done => {
            axios.get(`/doctor/${data.doctors[0]._id}`)
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data).to.eql(data.doctors[0]);
                    done();
                })
                .catch(err => done(err));
        });
        it("should return a 404 error for a non-existent id", done => {
            axios.get(`/doctor/${utils.mockId}`)
                .then(response => {
                    expect(response.status).to.equal(404);
                    done();
                })
                .catch(err => done(err));
        });
    });
    describe("PATCH", () => {
        it("should update the given doctor with the specified information", done => {
            const _id = data.doctors[1]._id;
            axios.patch(`/doctor/${_id}`, utils.mockPatchData)
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data).to.equal(_id);
                    axios.get(utils.route(`/doctor/${_id}`))
                        .then(response => {
                            expect(
                                response.status,
                                `Error in GET /doctor/${_id}, which is required to test POST /doctor`
                            ).to.equal(200);
                            expect(response.data._id).to.equal(_id);
                            delete response.data._id;
                            expect(response.data).to.eql(utils.mockPatchData);
                            done();
                        })
                        .catch(err => done(err));
                })
                .catch(err => done(err));
        });
        it("should update only the specified fields of the given doctor", done => {
            const _id = data.doctors[2]._id;
            const mockPatchCopy = {...utils.mockPatchData};
            delete mockPatchCopy.seasons;
            axios.patch(`/doctor/${_id}`, utils.mockPatchCopy)
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data).to.equal(_id);
                    axios.get(utils.route(`/doctor/${_id}`))
                        .then(response => {
                            expect(
                                response.status,
                                `Error in GET /doctor/${_id}, which is required to test POST /doctor`
                            ).to.equal(200);
                            expect(response.data._id).to.equal(_id);
                            expect(response.data.name).to.eql(mockPatchCopy.name);
                            expect(response.data.seasons).to.eql(data.doctors[2].seasons);
                            done();
                        })
                        .catch(err => done(err));
                })
                .catch(err => done(err));
        });
    });
    describe("DELETE", () => {
        it("should delete the specified doctor from the data object", done => {
            const i = data.doctors.length - 1;
            const _id = data.doctors[i]._id;
            axios.delete(`/doctor/${_id}`)
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data).to.equal(_id);
                    axios.get(utils.route(`/doctor/${_id}`))
                        .then(response => {
                            expect(response.status).to.equal(404);
                            done();
                        })
                        .catch(err => done(err));
                })
        });
    });
});

describe("/doctor/:id/companions", () => {
    describe("GET", () => {
        it("", done => {
            done();
        });
    });
});

describe("/doctor/:id/companions/longest", () => {
    describe("GET", () => {
        it("", done => {
            done();
        });
    });
});

describe("/doctor/:id/goodparent", () => {
    describe("GET", () => {
        it("", done => {
            done();
        });
    });
});

describe("/companion", () => {
    describe("GET", () => {
        it("", done => {
            done();
        });
    });
    describe("POST", () => {
        it("", done => {
            done();
        });
    });
});

describe("/companion/:id", () => {
    describe("GET", () => {
        it("", done => {
            done();
        });
    });
    describe("PATCH", () => {
        it("", done => {
            done();
        });
    });
    describe("DELETE", () => {
        it("", done => {
            done();
        });
    });
});

describe("/companion/:id/doctors", () => {
    describe("GET", () => {
        it("", done => {
            done();
        });
    });
});

describe("/companion/:id/friends", () => {
    describe("GET", () => {
        it("", done => {
            done();
        });
    });
});

describe("/companion/crossover", () => {
    describe("GET", () => {
        it("", done => {
            done();
        });
    });
});

describe("/doctor/:id/favorite", () => {
    describe("GET", () => {
        it("", done => {
            done();
        });
    });
    describe("POST", () => {
        it("", done => {
            done();
        });
    });
    describe("DELETE", () => {
        it("", done => {
            done();
        });
    });
});

describe("/companion/:id/favorite", () => {
    describe("GET", () => {
        it("", done => {
            done();
        });
    });
    describe("POST", () => {
        it("", done => {
            done();
        });
    });
    describe("DELETE", () => {
        it("", done => {
            done();
        });
    });
});
