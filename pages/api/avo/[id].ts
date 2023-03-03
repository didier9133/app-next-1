import { NextApiRequest, NextApiResponse } from 'next'
import DataBase from '../../../database/db'

const oneAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const service = new DataBase()
  const avocado = await service.getById(id as string)

  res.status(200).json(avocado)
}

export default oneAvo
