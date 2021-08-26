import axios from 'axios'

import transformBooleans from '@utils/transformBooleansShallow'

async function pack(values: Object) {
  try {
    const data = await axios.post('/api/pack-it', transformBooleans(values))

    return data
  } catch (e) {
    console.error(e)
  }
}

export default pack