const mongoose = require("mongoose")
const { type } = require("os")

const eventSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    hostedBy: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required : true
    },
    details: {
        type: String,
        required: true,
    },
    dressCode: [{
        type: String,
        enum: [
            "Casual",
            "Business Casual",
            "Business Professional",
            "Cocktail Attire",
            "Formal/Black Tie",
            "Black Tie Optional",
            "White Tie",
            "Smart Casual",
            "Theme-Based",
            "Resort Casual",
            "Athleisure",
            "Creative Attire"
        ]
    }],
    ageRestrictions: [{
        type: String,
        enum: [
            "Under 12",
            "Under 13",
            "Under 16",
            "Under 18",
            "Under 21",
            "21 and over",
            "18 and over",
            "All Ages"
        ]
    }],
    eventMode: [{
        type: String,
        enum: [
            "Online Event",
            "Offline Event",
            "Both",
        ]
    }],
    eventTags: [{
        type: String,
        enum: [
            "Marketing",
            "Digital",
            "Networking",
            "Workshop",
            "Conference",
            "Seminar",
            "Webinar",
            "Social",
            "Fundraiser",
            "Gala",
            "Exhibition",
            "Panel Discussion",
            "Meetup",
            "Retreat",
            "Trade Show",
            "Celebration",
            "Launch Party",
            "Concert",
            "Festival"
        ]
    }],
    sessionTiming: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    pricing: {
        type: Number,
        min: 0,
        max: 99999,
        default: 0,
        require: true
    },
    speakers: [{
        type: Object,
        enum: [
            {
                name: "Sarah Johnson",
                profession: "Marketing Manager",
            },
            {
                name: "Michael Brown",
                profession: "SEO Specialist",
            },
            {
                name: "John Doe",
                profession: "ML Specialist",
            },
            {
                name: "Samson Paul",
                profession: "Principal Engineer",
            },
            {
                name: "Dwight Scrute",
                profession: "Designer",
            },
            {
                name: "Bella Smith",
                profession: "Fashion Designer",
            },
            {
                name: "Ed Sheeran",
                profession: "Artist",
            },
            {
                name: "Alex Parker",
                profession: "Crypto Specialist",
            },
            {
                name: "Mike Jackson",
                profession: "Crypto Trader",
            },
            {
                name: "Jason White",
                profession: "Wildlife Photographer",
            },
        ],
        required: true
    }]
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event