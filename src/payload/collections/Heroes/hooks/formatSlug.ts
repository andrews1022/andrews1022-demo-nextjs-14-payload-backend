// taken from here:
// https://github.com/payloadcms/payload/discussions/433

import type { FieldHook } from 'payload/types'

export const formatSlug: FieldHook = async ({ value, data }) => {
  // return formatted version of title if exists, else return unmodified value
  return data?.name?.replace(/ /g, '-').toLowerCase() ?? value
}
