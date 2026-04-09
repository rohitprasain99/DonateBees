import Beneficiary from './beneficiary.model.js'

const getBeneficiaries = async (req, res) => {
    try {
        const dbres = await Beneficiary
            .find()
            .select(['_id', 'beneficiaryName', "description", 'billAmount', 'category'])

        return res.status(200).json({ data: dbres, meta: { count: dbres.length } }, 'beneficiarys sent successfullyy')
    } catch (e) {
        console.error(e.message)
        return res.status(500).json({ devMessage: e.message }, 'could not get beneficiary')
    }
}

const postBeneficiary = async (req, res, next) => {
    try {
        const data = req.body
        //post in db"role":"ADMIN"
        const dbres = await Beneficiary.create(data)
        return res.status(201).json({ data: { id: dbres._id } }, 'beneficiarys added successfully')
    } catch (e) {
        console.error(e.message)
        return res.status(500).json({ devMessage: e.message }, 'could not add beneficiary')
    } finally {
        next()
    }
}

const putBeneficiary = async (req, res) => {
    try {
        const beneficiaryId = req.params.id
        const data = req.body
        console.log(data)
        //update in db
        const dbres = await Beneficiary
            .findByIdAndUpdate(beneficiaryId, data).select('_id')
        return res.status(200).json({ data: dbres }, 'beneficiary updated successfully')
    } catch (e) {
        console.error(e.message)
        return res.status(500).json({ devMessage: e.message }, 'could not update beneficiary')
    }
}

const patchBeneficiary = async (req, res) => {
    try {
        const beneficiaryId = req.params.id
        const data = req.body
        //update in db

        const dbres = await Beneficiary
            .findByIdAndUpdate(beneficiaryId, data).select('_id')

        return res.status(200).json({ data: dbres }, 'beneficiary updated successfully')
    } catch (e) {
        console.error(e.message)
        return res.status(500).json({ devMessage: e.message }, 'could not update beneficiary')
    }
}

const deleteBeneficiary = async (req, res) => {
    try {
        const beneficiaryId = req.params.id
        //delete beneficiary in db
        const dbres = await Beneficiary.findOneAndDelete({ _id: beneficiaryId }).select('_id')
        return res.status(200).json({ data: dbres }, 'beneficiary deleted successfully')
    } catch (e) {
        console.error(e.message)
        return res.status(500).json({ devMessage: e.message }, 'could not delete beneficiary')
    }
}


export { getBeneficiaries, postBeneficiary, putBeneficiary, patchBeneficiary, deleteBeneficiary }