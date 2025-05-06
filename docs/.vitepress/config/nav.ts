import DefaultTheme from 'vitepress/theme'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '我的分类',
    items: [
      { text: 'Bug集', link: '/categories/issues/index', activeMatch: '/categories/issues/' },
      { text: '工具集', link: '/categories/tools/index', activeMatch: '/categories/tools/' },
      { text: '方法集', link: '/categories/solutions/index', activeMatch: '/categories/solutions/' },
      { text: '日积月累', link: '/categories/fragments/index', activeMatch: '/categories/fragments/' },
    ],
    activeMatch: '/categories/'
  },
  {
    text: '知识集',
    items: [
      { text: 'html知识集', link: '/courses/html/index', activeMatch: '/courses/html/' },
      { text: 'css知识集', link: '/courses/css/index', activeMatch: '/courses/css/' },
      { text: 'JavaScript知识集', link: '/courses/javascript/index', activeMatch: '/courses/javascript/' },
      { text: 'dom&bom知识集', link: '/courses/dom&bom/index', activeMatch: '/courses/dom&bom/' },
      { text: 'vue知识集', link: '/courses/vue/index', activeMatch: '/courses/vue/' },
      { text: 'h5移动端知识集', link: '/courses/h5/index', activeMatch: '/courses/h5/' },
      { text: '动画图像知识集', link: '/courses/AnimateIamge/index', activeMatch: '/courses/AnimateIamge/' },
      { text: '通用知识集', link: '/courses/general/index', activeMatch: '/courses/general/' },
    ],
    activeMatch: '/courses/'
  },
  {
    text: '代码示例',
    items: [
      { text: '动画', link: '/codeshow/animate/index', activeMatch: '/codeshow/animate/' },
      { text: 'css', link: '/codeshow/css/index', activeMatch: '/codeshow/css/' },
    ],
    activeMatch: '/codeshow/'
  },
  {
    text: '标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '归档',
    link: '/archives',
    activeMatch: '/archives'
  },
  {
    text: '关于',
    items: [
      { text: '关于知识库', link: '/about/index', activeMatch: '/about/index' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' }
    ],
    activeMatch: '/about/' // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  }
]