require("dotenv").config();
const express = require('express')
const app = express()

const {initializeDatabase} = require("./db/db.connect");
const Event = require("./models/events.models");
initializeDatabase()

const cors = require("cors");

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json())

// create a new event data in the event Database

// const newEvent1 = {
//     topic: "Tech Conference",
//     hostedBy: "Tech Experts",
//     imageUrl: "https://images.pexels.com/photos/7689853/pexels-photo-7689853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     details: "Join us for an engaging and informative evening at our Machine Learning Tech Talks! This meetup is designed for anyone passionate about machine learning, whether you're a seasoned expert, a curious beginner, or simply fascinated by the potential of this rapidly evolving field.",
//     dressCode: ["Casual", "Smart Casual", "Business Casual"],
//     ageRestrictions: ["18 and over"],
//     eventMode: ["Offline Event"],
//     eventTags: ["Conference"],
//     sessionTiming: "Thu Dec 13 2024 * 7:00:00 AM IST",
//     venue: "123 Tech City, XYZ",
//     pricing: "2000",
//     speakers: [{
//         name: "John Doe",
//         profession: "ML Specialist",
//     },
//     {
//         name: "Samson Paul",
//         profession: "Principal Engineer",
//     },]
// }

// const newEvent2 = {
//     topic: "Design Workshop",
//     hostedBy: "Design Experts",
//     imageUrl: "https://images.pexels.com/photos/8546590/pexels-photo-8546590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     details: "Join us for an engaging and transformative Design Workshop designed to inspire creativity, foster collaboration, and enhance your design skills. This workshop will provide a unique opportunity to dive deep into the principles of design thinking while working alongside fellow designers and stakeholders.",
//     dressCode: ["Cocktail Attire", "Creative Attire", "Athleisure"],
//     ageRestrictions: ["All Ages"],
//     eventMode: ["Online Event"],
//     eventTags: ["Workshop"],
//     sessionTiming: "Mon Dec 13 2024 * 7:00:00 AM IST",
//     venue: "123 Design City, XYZ",
//     pricing: "1000",
//     speakers: [{
//         name: "John Doe",
//         profession: "ML Specialist",
//     },
//     {
//         name: "Samson Paul",
//         profession: "Principal Engineer",
//     },]
// }

// const newEvent3 = {
//     topic: "Marketing Seminar",
//     hostedBy: "Marketing Experts",
//     imageUrl: "https://images.pexels.com/photos/9034731/pexels-photo-9034731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     details: "Join us for an engaging and informative marketing seminar designed to equip professionals, entrepreneurs, and business leaders with the latest strategies and tools to thrive in today’s competitive landscape. Whether you’re looking to enhance your marketing skills or gain fresh insights into the digital marketplace, this seminar is tailored for you.",
//     dressCode: ["Business Professional", "Formal/Black Tie", "Black Tie Optional", "White Tie"],
//     ageRestrictions: ["18 and over"],
//     eventMode: ["Offline Event"],
//     eventTags: ["Seminar"],
//     sessionTiming: "Tue Dec 15 2024 * 10:00:00 PM IST",
//     venue: "123 Market City, XYZ",
//     pricing: "3000",
//     speakers: [
//             {
//                 name: "Sarah Johnson",
//                 profession: "Marketing Manager",
//             },
//             {
//                 name: "Michael Brown",
//                 profession: "SEO Specialist",
//             },
//     ]
// }

// const newEvent4 = {
//     topic: "Music Concert",
//     hostedBy: "Music Experts",
//     imageUrl: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     details: "Join us for an unforgettable night of live music at our upcoming concert, where talented artists will take the stage to deliver an electrifying performance that will resonate with your soul. Whether you’re a fan of vibrant rhythms, soulful ballads, or foot-tapping beats, this concert promises to be a celebration of diverse musical styles and extraordinary talent.",
//     dressCode: ["Casual", "Cocktail Attire", "Creative Attire"],
//     ageRestrictions: ["18 and over"],
//     eventMode: ["Offline Event"],
//     eventTags: ["Concert"],
//     sessionTiming: "Sat Dec 21 2024 * 8:00:00 PM IST",
//     venue: "123 Music City, XYZ",
//     pricing: "5000",
//     speakers: [
//             {
//                 name: "Ed Sheeran",
//                 profession: "Artist",
//             },
//     ]
// }

// const newEvent5 = {
//     topic: "Crypto Webinar",
//     hostedBy: "Crypto Experts",
//     imageUrl: "https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     details: "Join us for an enlightening and interactive webinar that dives deep into the world of cryptocurrency! Whether you’re a seasoned investor, a curious beginner, or simply interested in understanding the digital currency landscape, this webinar is designed to provide valuable insights and practical knowledge about crypto assets and their impact on the financial world.",
//     dressCode: ["Casual", "Smart Casual", "Cocktail Attire", "Creative Attire", "Business Casual", "Athleisure"],
//     ageRestrictions: ["21 and over"],
//     eventMode: ["Online Event"],
//     eventTags: ["Webinar"],
//     sessionTiming: "Sun Dec 2 2024 * 6:00:00 PM IST",
//     venue: "123 Crypto City, XYZ",
//     pricing: "2500",
//     speakers: [
//             {
//                 name: "Alex Parker",
//                 profession: "Crypto Specialist",
//             },
//             {
//                 name: "Mike Jackson",
//                 profession: "Crypto Trader",
//             },
//     ]
// }

// const newEvent6 = {
//     topic: "Photography Workshop",
//     hostedBy: "Photography Experts",
//     imageUrl: "https://images.pexels.com/photos/22873813/pexels-photo-22873813/free-photo-of-smiling-friends-in-house.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     details: "Join us for an immersive photography workshop designed for enthusiasts of all skill levels, from beginners to advanced photographers. This hands-on experience will take you through the essential techniques and creative processes that will elevate your photography to the next level.",
//     dressCode: ["Casual", "Smart Casual", "Business Casual",],
//     ageRestrictions: ["All Ages"],
//     eventMode: ["Online Event"],
//     eventTags: ["Workshop"],
//     sessionTiming: "Sat Dec 24 2024 * 1:00:00 PM IST",
//     venue: "123 Crypto City, XYZ",
//     pricing: "1500",
//     speakers: [
//             {
//                 name: "Jason White",
//                 profession: "Wildlife Photographer",
//             },
//     ]
// }

// createEvents(newEvent1)
// createEvents(newEvent2)
// createEvents(newEvent3)
// createEvents(newEvent4)
// createEvents(newEvent5)
// createEvents(newEvent6)

async function createEvents(newEvent) {
    try {
        const event = new Event(newEvent)
        const saveEvent = await event.save()
        return saveEvent
    } catch (error){
        console.log(error)
        throw error
    }
}

app.post('/events', async(req, res)=> {
    try{
        console.log(req.body)
        const savedEvent = await createEvents(req.body)
        res.status(200).json({message: "New Event created a event", newEvent: savedEvent})
    } catch(error){
        res.status(500).json({error: "Failed to create a event"})
    }
})

// get all events in the database

async function readAllEvents() {
    try{
        const allEvents = await Event.find()
        return allEvents
    } catch(error){
        throw error
    }
}

app.get('/events', async(req, res) => {
    try{
        const events = await readAllEvents()
        if(events.length != 0){
            res.json(events)
        }else{
            res.status(404).json({error: "Event not found."})
        }
    }catch(error){
        res.status(500).json({error: "Failed to fetch events"})
    }
})

// get event details by title

async function readEventsByTitle(topicName) {
    try{
        const allEvents = await Event.find({topic: topicName})
        return allEvents
    }catch(error){
        throw error
    }
}

app.get('/events/:topicname', async(req, res)=> {
    try{
        const events = await readEventsByTitle(req.params.topicname)
        if(events.length != 0){
            res.json(events)
        }else{
            res.status(404).json({error: "Event not found."})
        }
    }catch(error){
        res.status(500).json({error: "Failed to fetch events"})
    }
})

//get event details by tags

async function readEventsByTag(tagName) {
    try{
        const allEvents = await Event.find({eventTags: tagName})
        return allEvents
    }catch(error){
        throw error
    }
}

app.get('/events/tag/:tagName', async(req, res)=> {
    try{
        const events = await readEventsByTag(req.params.tagName)
        if(events.length != 0){
            res.json(events)
        }else{
            res.status(404).json({error: "Event not found."})
        }
    }catch(error){
        res.status(500).json({error: "Failed to fetch events"})
    }
})

async function deleteEvent(eventId) {
    try{
        const deletedEvent = await Event.findByIdAndDelete(eventId)
        return deletedEvent
    }catch(error){
        console.log(error)
    }
}

app.delete('/events/:eventId', async(req, res)=> {
    try{
        const eventDeleted = await deleteEvent(req.params.eventId)
        if(eventDeleted){
            res.status(200).json({message: "Event deleted successfully"})
        }
    }catch{
        res.status(500).json({error: "Failed to delete Event"})
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})