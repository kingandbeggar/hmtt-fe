import Vue from 'vue'
import {
  NavBar, Cell, CellGroup, Form, Field, Button, CountDown, Tabbar, TabbarItem,
  Icon, Tab, Tabs, Image as VanImage, List, PullRefresh, ActionSheet, Popup,
  Col, Row, Search, Divider, Loading, Lazyload, Badge, Tag, Uploader, Dialog,
  DatetimePicker, NoticeBar, Swipe, SwipeItem
} from 'vant'
Vue.use(NavBar)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(CountDown)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(VanImage)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(ActionSheet)
Vue.use(Popup)
Vue.use(Col)
Vue.use(Row)
Vue.use(Search)
Vue.use(Divider)
Vue.use(Loading)
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(Badge)
Vue.use(Tag)
Vue.use(Uploader)
Vue.use(Dialog)
Vue.use(DatetimePicker)
Vue.use(NoticeBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
