import { NextApiRequest, NextApiResponse } from 'next'
import DataBase from '../../../database/db'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const service = new DataBase()
  const avocados = await service.getAll()
  const length = avocados.length
  res.status(200).json({ data: avocados, length })
}

export default allAvos
