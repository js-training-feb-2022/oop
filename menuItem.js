function MenuItem(itemType) {
  this._itemType = itemType;
}

//Тип пункта меню
MenuItem.prototype.getType = function() {
  return this._itemType;
};

module.exports = {
  MenuItem: MenuItem
};