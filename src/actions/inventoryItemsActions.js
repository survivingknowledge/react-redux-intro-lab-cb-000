
export function getInventoryListItems() {

  let items = [
    {quantity: '3lbs', description: "flour"},
    {quantity: "2 dozen", description: "eggs"},
    {quantity: '2lbs', description: "sugar"}
  ]

  return {
    type: 'GET_INVENTORY_LIST_ITEMS',
    payload: items
  }
}

export function addInventoryListItem(quanity, description) {

  const item = {
    description: description,
    quantity: quanity
  }

  return {
    type: 'ADD_INVENTORY_LIST_ITEM',
    payload: item
  }
}
