import Events from 'mona-events'
import './style/index.less'

!window.Capricorn && (window.Capricorn = {})

// 摩羯系统全局消息监听机制，负责模块间通信
window.Capricorn.Events = Events
window.Capricorn.events = new Events