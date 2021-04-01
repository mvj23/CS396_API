"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanionSchema = new Schema({
    alive: Schema.Types.Boolean,
    character: Schema.Types.String,
    doctors: [{type: Schema.Types.ObjectId, ref: "Doctor"}],
    name: Schema.Types.String,
    seasons: [Schema.Types.Number]
});

CompanionSchema.statics.create = function(obj) {
    const companion = new mongoose.model("Companion", CompanionSchema)();
    companion.alive = obj.alive;
    companion.character = obj.character;
    companion.doctors = obj.doctors.map(doctor => doctor.id);
    companion.name = obj.name;
    companion.seasons = obj.seasons;
    return companion;
}

module.exports = mongoose.model("Companion", CompanionSchema);
