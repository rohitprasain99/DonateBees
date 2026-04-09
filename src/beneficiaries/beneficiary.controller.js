import Beneficiary from './beneficiary.model.js'

const getBeneficiaries = async (req, res) => {
    try {
        const data = await Beneficiary
            .find()
            .select(['_id', 'beneficiaryName', "description", 'billAmount', 'category'])

        return res.status(200).json({ data, meta: { count: data.length } }, 'beneficiarys sent successfullyy')
    } catch (e) {
        console.error(e.message)
        return res.status(500).json({ devMessage: e.message }, 'could not get beneficiary')
    }
}

const postBeneficiary = async (req, res, next) => {
    try {
        const reqData = req.body
        //post in db"role":"ADMIN"
        const data = await Beneficiary.create(reqData)
        return res.status(201).json({ id: data._id }, 'beneficiarys added successfully')
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
        const reqData = req.body
        //update in db
        const data = await Beneficiary
            .findByIdAndUpdate(beneficiaryId, reqData).select('_id')
        return res.status(200).json({ data }, 'beneficiary updated successfully')
    } catch (e) {
        console.error(e.message)
        return res.status(500).json({ devMessage: e.message }, 'could not update beneficiary')
    }
}

const patchBeneficiary = async (req, res) => {
    try {
        const beneficiaryId = req.params.id
        const reqData = req.body
        //update in db

        const data = await Beneficiary
            .findByIdAndUpdate(beneficiaryId, reqData).select('_id')

        return res.status(200).json({ data }, 'beneficiary updated successfully')
    } catch (e) {
        console.error(e.message)
        return res.status(500).json({ devMessage: e.message }, 'could not update beneficiary')
    }
}

const deleteBeneficiary = async (req, res) => {
    try {
        const beneficiaryId = req.params.id
        //delete beneficiary in db
        const data = await Beneficiary.findOneAndDelete({ _id: beneficiaryId }).select('_id')
        return res.status(200).json({ data }, 'beneficiary deleted successfully')
    } catch (e) {
        console.error(e.message)
        return res.status(500).json({ devMessage: e.message }, 'could not delete beneficiary')
    }
}


export { getBeneficiaries, postBeneficiary, putBeneficiary, patchBeneficiary, deleteBeneficiary }