import * as yup from 'yup'

const schema = yup.object().shape({
  bins: yup.array().of(yup.object().shape({
    id: yup.string().required(),
    w: yup.number().min(0),
    h: yup.number().min(0),
    d: yup.number().min(0),
    max_wg: yup.number().min(0),
  })),
  items: yup.array().of(yup.object().shape({
    id: yup.string().required(),
    w: yup.number().min(0),
    h: yup.number().min(0),
    d: yup.number().min(0),
    wg: yup.number().min(0),
    q: yup.number().min(0),
    vr: yup.boolean(),
  }))
})

export default schema