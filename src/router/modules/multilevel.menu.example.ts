/*
 * @Author: Augustqin0806 augustqin0806@gmail.com
 * @Date: 2023-11-10 02:49:24
 * @LastEditors: Augustqin0806 augustqin0806@gmail.com
 * @LastEditTime: 2023-11-18 17:10:28
 * @FilePath: \Fantastic_admin\src\router\modules\multilevel.menu.example.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}
// 每一个ts文件是一个路由模块
const routes: RouteRecordRaw = {
  path: '/multilevel_menu_example',
  component: Layout, // todo 一级路由的 component 需设置为 Layout ，并且 path 前面需要加 /，其余子路由都不要以 / 开头
  redirect: '/multilevel_menu_example/page',
  name: 'multilevelMenuExample',
  meta: {
    title: '多级导航', // todo 一级路由
    icon: 'heroicons-solid:menu-alt-3',
  },
  children: [
    {
      path: 'page',
      name: 'multilevelMenuExample1',
      component: () => import('@/views/multilevel_menu_example/page.vue'),
      meta: {
        title: '导航1', // todo 二级路由
      },
    },
    {
      path: 'level2',
      name: 'multilevelMenuExample2',
      redirect: '/multilevel_menu_example/level2/page',
      meta: {
        title: '导航2', // todo 二级路由
      },
      children: [
        {
          path: 'page',
          name: 'multilevelMenuExample2-1',
          component: () => import('@/views/multilevel_menu_example/level2/page.vue'),
          meta: {
            title: '导航2-1', // todo 三级路由
          },
        },
        {
          path: 'level3',
          name: 'multilevelMenuExample2-2',
          redirect: '/multilevel_menu_example/level2/level3/page1',
          meta: {
            title: '导航2-2', // todo 三级路由
          },
          children: [
            {
              path: 'page1',
              name: 'multilevelMenuExample2-2-1',
              component: () => import('@/views/multilevel_menu_example/level2/level3/page1.vue'),
              meta: {
                title: '导航2-2-1', // todo 四级路由
                // sidebar: false,      //是否在侧边栏导航中展示
              },
            },
            {
              path: 'page2',
              name: 'multilevelMenuExample2-2-2',
              component: () => import('@/views/multilevel_menu_example/level2/level3/page2.vue'),
              meta: {
                title: '导航2-2-2', // todo 四级路由
              },
            },
          ],
        },
      ],
    },
  ],
}

export default routes
