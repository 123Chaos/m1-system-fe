declare namespace PageRoute {
  /**
   * the root route key
   * @translate 根路由
   */
  type RootRouteKey = 'root';

  /**
   * the not found route, which catch the invalid route path
   * @translate 未找到路由(捕获无效路径的路由)
   */
  type NotFoundRouteKey = 'not-found';

  /**
   * the route key
   * @translate 页面路由
   */
  type RouteKey =
    | '403'
    | '404'
    | '500'
    | 'constant-page'
    | 'login'
    | 'not-found'
    | 'component'
    | 'component_button'
    | 'component_card'
    | 'component_table'
    | 'config'
    | 'dashboard'
    | 'dashboard_analysis'
    | 'dashboard_workbench'
    | 'document'
    | 'document_naive'
    | 'document_project-link'
    | 'document_project'
    | 'document_vite'
    | 'document_vue'
    | 'exception'
    | 'exception_403'
    | 'exception_404'
    | 'exception_500'
    | 'management'
    | 'management_auth'
    | 'management_role'
    | 'management_route'
    | 'management_user'
    | 'module-detail'
    | 'module-log'
    | 'module-setting'
    | 'multi-menu'
    | 'multi-menu_first'
    | 'multi-menu_first_second-new'
    | 'multi-menu_first_second-new_third'
    | 'multi-menu_first_second'
    | 'operation-log'
    | 'plugin'
    | 'plugin_charts'
    | 'plugin_charts_antv'
    | 'plugin_charts_echarts'
    | 'plugin_copy'
    | 'plugin_editor'
    | 'plugin_editor_markdown'
    | 'plugin_editor_quill'
    | 'plugin_icon'
    | 'plugin_map'
    | 'plugin_print'
    | 'plugin_swiper'
    | 'plugin_video'
    | 'upload'
    | 'user-center';

  /**
   * last degree route key, which has the page file
   * @translate 最后一级路由(该级路有对应的页面文件)
   */
  type LastDegreeRouteKey = Extract<
    RouteKey,
    | '403'
    | '404'
    | '500'
    | 'constant-page'
    | 'login'
    | 'not-found'
    | 'component_button'
    | 'component_card'
    | 'component_table'
    | 'config'
    | 'dashboard_analysis'
    | 'dashboard_workbench'
    | 'document_naive'
    | 'document_project-link'
    | 'document_project'
    | 'document_vite'
    | 'document_vue'
    | 'exception_403'
    | 'exception_404'
    | 'exception_500'
    | 'management_auth'
    | 'management_role'
    | 'management_route'
    | 'management_user'
    | 'module-detail'
    | 'module-log'
    | 'module-setting'
    | 'multi-menu_first_second-new_third'
    | 'multi-menu_first_second'
    | 'operation-log'
    | 'plugin_charts_antv'
    | 'plugin_charts_echarts'
    | 'plugin_copy'
    | 'plugin_editor_markdown'
    | 'plugin_editor_quill'
    | 'plugin_icon'
    | 'plugin_map'
    | 'plugin_print'
    | 'plugin_swiper'
    | 'plugin_video'
    | 'upload'
    | 'user-center'
  >;
}
