import { Request, Response } from 'express'
import { reportModel } from '../../models/report'
import { salonModel } from '../../models/salon'
import { generateReportWithAI } from '../../lib/utils/generateReportWithAi'

export const createReport = async (req: Request, res: Response) => {
    const { salonId } = req.params

    try {
        const existingReport = await reportModel.findOne({ salonId }).sort({
            createdAt: -1,
        })
        if (existingReport) {
            return res.status(200).json({
                message: 'Relatório já existe',
                report: existingReport,
            })
        }

        const salon = await salonModel
            .findById(salonId)
            .populate('expenses')
            .populate('services')
            .exec()

        if (!salon) {
            return res.status(404).json({ error: 'Salão não encontrado' })
        }

        const reportContent = await generateReportWithAI(salon)

        const newReport = new reportModel({ salonId, reportContent })
        await newReport.save()

        res.status(201).json({
            message: 'Relatório gerado com sucesso',
            report: newReport,
        })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao gerar o relatório' })
    }
}
