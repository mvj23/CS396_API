"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    name: Schema.Types.String,
    seasons: [Schema.Types.Number]
});

DoctorSchema.statics.create = function(obj) {
    const doctor = new mongoose.model("Doctor", DoctorSchema)();
    doctor.name = obj.name;
    doctor.seasons = obj.seasons;
    return doctor;
}

module.exports = mongoose.model("Doctor", DoctorSchema);
