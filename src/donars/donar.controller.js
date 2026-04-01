
const getDonars = async (req, res) => {
    try {
        res.status(200).json([{}], 'donars sent successfully'
        )
    } catch (e) {
        console.error(e.message)
        res.status(500).json({ devMessage: e.message }, 'could not get donar')
    }
}

const postDonar = async (req, res, next) => {
    try {
        const data = req.body
        //post in db
        res.status(201).json(data, 'donars added successfully')
    } catch (e) {
        console.error(e.message)
        res.status(500).json({ devMessage: e.message }, 'could not add donar')
    } finally {
        next()
    }
}

const putDonar = async (req, res) => {
    try {
        const donarId = req.params.id
        const data = req.body
        //update in db
        res.status(200).json({ donarId, data }, 'donar updated successfully')
    } catch (e) {
        console.error(e.message)
        res.status(500).json({ devMessage: e.message }, 'could not update donar')
    }
}

const patchDonar = async (req, res) => {
    try {
        const donarId = req.params.id
        const data = req.body
        //update in db
        res.status(200).json({ donarId, data }, 'donar updated successfully')
    } catch (e) {
        console.error(e.message)
        res.status(500).json({ devMessage: e.message }, 'could not update donar')
    }
}

const deleteDonar = async (req, res) => {
    try {
        const donarId = req.params.id
        //delete donar in db
        res.status(200).json(donarId, 'donar deleted successfully')
    } catch (e) {
        console.error(e.message)
        res.status(500).json({ devMessage: e.message }, 'could not delete donar')
    }
}


module.exports = { getDonars, postDonar, putDonar, patchDonar, deleteDonar }