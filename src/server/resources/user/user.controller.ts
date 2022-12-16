import responseStatus from '../../utils/responseStatus'
import User from './user.model'

export const me = async (req: any, res: any) => {
  res.status(responseStatus.ok).json({ data: req.user })
}

export const updateMe = async (req: any, res: any) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    })
      .lean()
      .exec()

    res.status(responseStatus.ok).json({ data: user })
  } catch (e) {
    console.error(e)
    res.status(responseStatus.badRequest).end()
  }
}
