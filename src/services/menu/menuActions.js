import { createActions } from 'redux-actions';

const {
  getMenus,
  getMenusSucceed,
  getMenusFailed,
  deleteMenu,
  deleteMenuSucceed,
  deleteMenuFailed,
  updateMenu,
  updateMenuSucceed,
  updateMenuFailed,
  addMenu,
  addMenuSucceed,
  addMenuFailed,
  addMenus,
  addMenusSucceed,
  addMenusFailed,
  addMenusItems,
  addMenusItemsSucceed,
  addMenusItemsFailed,
  getMenu,
  getMenuSucceed,
  getMenuFailed,
  updateCurrentMenu
} = createActions({
  GET_MENUS: params => ({ params }),
  GET_MENUS_SUCCEED: menus => ({ menus }),
  GET_MENUS_FAILED: error => ({ error }),
  DELETE_MENU: (id, params = null) => ({ id, params }),
  DELETE_MENU_SUCCEED: () => ({}),
  DELETE_MENU_FAILED: error => ({ error }),
  UPDATE_MENU: (id, menu, params = null) => ({ id, menu, params }),
  UPDATE_MENU_SUCCEED: () => ({}),
  UPDATE_MENU_FAILED: error => ({ error }),
  ADD_MENU: (menu, params = null) => ({ menu, params }),
  ADD_MENU_SUCCEED: () => ({}),
  ADD_MENU_FAILED: error => ({ error }),
  ADD_MENUS: (data, params = null) => ({ data, params }),
  ADD_MENUS_SUCCEED: () => ({}),
  ADD_MENUS_FAILED: error => ({ error }),
  ADD_MENUS_ITEMS: (data, params = null) => ({ data, params }),
  ADD_MENUS_ITEMS_SUCCEED: () => ({}),
  ADD_MENUS_ITEMS_FAILED: error => ({ error }),
  GET_MENU: id => ({ id }),
  GET_MENU_SUCCEED: menu => ({ menu }),
  GET_MENU_FAILED: error => ({ error }),
  UPDATE_CURRENT_MENU: menu => ({ menu })
});

export {
  getMenus,
  getMenusSucceed,
  getMenusFailed,
  deleteMenu,
  deleteMenuSucceed,
  deleteMenuFailed,
  updateMenu,
  updateMenuSucceed,
  updateMenuFailed,
  addMenu,
  addMenuSucceed,
  addMenuFailed,
  addMenus,
  addMenusSucceed,
  addMenusFailed,
  addMenusItems,
  addMenusItemsSucceed,
  addMenusItemsFailed,
  getMenu,
  getMenuSucceed,
  getMenuFailed,
  updateCurrentMenu
};