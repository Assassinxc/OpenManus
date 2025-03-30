import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/components/SimpleFrame.vue'),
      meta: {
        title: "主页"
      },
      // 重定向到默认页面
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/Home.vue'),
          meta: {
            title: "主页"
          }
        }
      ]
    },
    {
      path: '/task',
      component: () => import('@/components/MainFrame.vue'),
      meta: {
        title: "任务"
      },
      children: [
        {
          path: '',
          component: () => import('@/views/task/TaskIndex.vue'),
          meta: {
            keepAlive: true,
            title: "任务列表",
            index: 0
          }
        },
        {
          path: ':id',
          component: () => import('@/views/task/TaskInfo.vue'),
          meta: {
            keepAlive: true,
            title: "任务信息",
            index: 0
          }
        },
        {
          path: 'history',
          component: () => import('@/views/task/HistoryIndex.vue'),
          meta: {
            keepAlive: true,
            title: "历史记录",
            index: 0
          }
        },
      ]
    },
    {
      path: '/config',
      component: () => import('@/components/MainFrame.vue'),
      meta: {
        title: "设置"
      },
      children: [
        {
          path: 'general',
          component: () => import('@/views/config/General.vue'),
          meta: {
            keepAlive: false,
            title: "常规设置",
            index: 0
          }
        },
        {
          path: 'llm',
          component: () => import('@/views/config/Llm.vue'),
          meta: {
            keepAlive: false,
            title: "大模型配置",
            index: 0
          }
        },
        {
          path: 'init',
          component: () => import('@/views/config/Init.vue'),
          meta: {
            keepAlive: false,
            title: "初始化配置",
            index: 0
          }
        },
      ]
    },
  ]
})

export default router
