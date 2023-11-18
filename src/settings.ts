/*
 * @Author: Augustqin0806 augustqin0806@gmail.com
 * @Date: 2023-11-10 02:49:24
 * @LastEditors: Augustqin0806 augustqin0806@gmail.com
 * @LastEditTime: 2023-11-18 21:05:59
 * @FilePath: \Fantastic_admin\src\settings.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defaultsDeep } from 'lodash-es'
import type { RecursiveRequired, Settings } from '#/global'
import settingsDefault from '@/settings.default'

const globalSettings: Settings.all = {
  // 请在此处编写或粘贴配置代码

  // 这是基础版演示源码里的自定义配置示例
  app: {
    enablePermission: true, // 开启权限功能
    enableDynamicTitle: true, // 开启动态标题，网页标题随路由变化😃
    enableAppSetting: true, // !开启应用配置,强烈建议在生产环境中关闭

  },
  layout: {
    enableMobileAdaptation: true, // 开启移动端适配
  },
  menu: {
    menuMode: 'side', // 导航栏模式三种：side、head、single
    enableSubMenuCollapseButton: true, // 开启次导航的展开/收起按钮
    enableHotkeys: true, // 开启主导航切换快捷键
  },
  topbar: {
    mode: 'fixed', // 固定，不跟随页面滚动，始终固定在顶部
  },
  toolbar: {
    enableFullscreen: true, // 开启全屏
    enablePageReload: true, // 开启页面刷新
    enableColorScheme: true, // 开启颜色主题
  },
  home: { // 关闭主页
    // title: '主页',              //可以更改主页标题
    // enable: false,
  },
}

export default defaultsDeep(globalSettings, settingsDefault) as RecursiveRequired<Settings.all>
