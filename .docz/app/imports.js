export const imports = {
  'src/aIndex/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-a-index-index" */ 'src/aIndex/index.mdx'
    ),
  'src/brandManage/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-brand-manage-index" */ 'src/brandManage/index.mdx'
    ),
}
