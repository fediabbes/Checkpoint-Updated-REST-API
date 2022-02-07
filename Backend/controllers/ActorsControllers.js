
const ActorsSchema = require('../models/ActorsSchema')

exports.AddActor = async (req, res) => {
    const { name, image, occupation, oscars } = req.body
    try {
        const Actors = new ActorsSchema(req.body)
        const FoundActor = await ActorsSchema.findOne({ name })
        if (FoundActor) {
            return res.status(400).send({ msg: 'Actor Already exists' })
        }
        await Actors.save()
        res.status(200).send({ msg: 'New Actor is Added', Actors })
    } catch (error) {
        res.status(500).send({ msg: 'Cannot Add a new Actor', error })
    }
}

exports.GetAllActors = async (req, res) => {
    try {
        const Actors = await ActorsSchema.find()
        res.status(200).send({ msg: 'This is Your Actors List', Actors })
    } catch (error) {
        res.status(500).send({ msg: "Cannot Find Your Actors List", erro })
    }
}

exports.DeleteActor = async (req, res) => {
    try {
        const Actors = await ActorsSchema.findByIdAndDelete(req.params.id)
        res.status(200).send({ msg: 'Your Actor is Deleted', Actors })
    } catch (error) {
        res.status(500).send({ msg: 'Cannot Delete your Actor', error })
    }
}

exports.UpdateActor = async (req, res) => {
    try {
        const Actors = await ActorsSchema.findByIdAndUpdate(req.params.id, { $set: { ...req.body } })
        res.status(200).send({ msg: 'Your Actor is Updated', Actors })
    } catch (error) {
        res.status(500).send({ msg: 'Cannot Update your Actor', error })
    }
}

exports.GetOneActor = async (req, res) => {
    try {
        const Actors = await ActorsSchema.findById(req.params.id)
        res.status(200).send({ msg: 'This is Your Actor', Actors })
    } catch (error) {
        res.status(500).send({ msg: 'Cannot Find your Actor', error })
    }
}