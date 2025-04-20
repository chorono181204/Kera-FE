export const capitalizeFirstLetter = (val) => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}
export const generatePlaceHolderCard = (column) => {
  return {
    id:`${column.id}-placeholder-card`,
    columnId:column.id,
    FE_PlaceholderCard:true,
    orderIndex:-1
  }
}