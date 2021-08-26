import { NotPackedItem } from '@types/NotPackedItem'
import { ResponseBin } from '@types/ResponseBin'
import { ResponseItem } from '@types/ResponseItem'

export type ResponseData = {
  image_complete: string,
  bin_data: ResponseBin,
  items: ResponseItem[],
  not_packed_items: NotPackedItem[],
}