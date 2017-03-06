export const EVENTS = {
  GeoObject: {
    onBallonClose: 'balloonclose',
    onBalloonOpen: 'balloonopen',
    onBeforeDrag: 'beforedrag',
    onBeforeDragStart: 'beforedragstart',
    onClick: 'click',
    onContextMenu: 'contextmenu',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onEditorStateChange: 'editorstatechange',
    onGeometryChange: 'geometrychange',
    onHintClose: 'hintclose',
    onHintOpen: 'hintopen',
    onMapChange: 'mapchange',
    onMouseDown: 'mousedown',
    onMouseEnter: 'mouseenter',
    onMouseLeave: 'mouseleave',
    onMouseMove: 'mousemove',
    onMouseUp: 'mouseup',
    onMultiTouchEnd: 'multitouchend',
    onMultiTouchMove: 'multitouchmove',
    onMultiTouchStart: 'multitouchstart',
    onOptionsChange: 'optionschange',
    onOverlayChange: 'overlaychange',
    onParentChange: 'parentchange',
    onPropertiesChange: 'propertieschange',
    onWheel: 'wheel',
  },
  ObjectManager: {
    onClick: 'click',
    onContextMenu: 'contextmenu',
    onDblClick: 'dblclick',
    onGeometryChange: 'geometrychange',
    onMapChange: 'mapchange',
    onMouseDown: 'mousedown',
    onMouseEnter: 'mouseenter',
    onMouseLeave: 'mouseleave',
    onMouseMove: 'mousemove',
    onMouseUp: 'mouseup',
    onMultiTouchEnd: 'multitouchend',
    onMultiTouchMove: 'multitouchmove',
    onMultiTouchStart: 'multitouchstart',
    onOptionsChange: 'optionschange',
    onOverlayChange: 'overlaychange',
    onParentChange: 'parentchange',
    onPropertiesChange: 'propertieschange',
    onWheel: 'wheel',
  },
  Clusterer: {
    onBalloonClose: 'balloonclose',
    onBalloonOpen: 'balloonopen',
    onHintClose: 'hintclose',
    onHintOpen: 'hintopen',
    onMapChange: 'mapchange',
    onOptionsChange: 'optionschange',
    onParentChange: 'parentchange',
  },
  Map: {
    onActionBegin: 'actionbegin',
    onActionBreak: 'actionbreak',
    onActionEnd: 'actionend',
    onActionTick: 'actiontick',
    onActionTickComplete: 'actiontickcomplete',
    onBalloonClose: 'balloonclose',
    onBalloonOpen: 'balloonopen',
    onBoundsChange: 'boundschange',
    onClick: 'click',
    onContextMenu: 'contextmenu',
    onDblClick: 'dblclick',
    onDestroy: 'destroy',
    onHintClose: 'hintclose',
    onHintOpen: 'hintopen',
    onMarginChange: 'marginchange',
    onMouseDown: 'mousedown',
    onMouseEnter: 'mouseenter',
    onMouseLeave: 'mouseleave',
    onMouseMove: 'mousemove',
    onMouseUp: 'mouseup',
    onMultiTouchEnd: 'multitouchend',
    onMultiTouchMove: 'multitouchmove',
    onMultiTouchStart: 'multitouchstart',
    onOptionsChange: 'optionschange',
    onSizeChange: 'sizechange',
    onTypeChange: 'typechange',
    onWheel: 'wheel',
  },
  Control: {
    Button: {
      onClick: 'click',
      onDeselect: 'deselect',
      onDisable: 'disable',
      onEnable: 'enable',
      onOptionsChange: 'optionschange',
      onParentChange: 'parentchange',
      onPress: 'press',
      onSelect: 'select',
    },
    FullscreenControl: {
      onClick: 'click',
      onDeselect: 'deselect',
      onDisable: 'disable',
      onEnable: 'enable',
      onFullscreenEnter: 'fullscreenenter',
      onFullscreenExit: 'fullscreenexit',
      onOptionsChange: 'optionschange',
      onParentChange: 'parentchange',
      onPress: 'press',
      onSelect: 'select',
    },
    GeolocationControl: {
      onClick: 'click',
      onDeselect: 'deselect',
      onDisable: 'disable',
      onEnable: 'enable',
      onLocationChange: 'locationchange',
      onOptionsChange: 'optionschange',
      onParentChange: 'parentchange',
      onPress: 'press',
      onSelect: 'select',
    },
    // ListBox: {},
    // ListBoxItem: {},
    RouteEditor: {
      onClick: 'click',
      onDeselect: 'deselect',
      onDisable: 'disable',
      onEnable: 'enable',
      onOptionsChange: 'optionschange',
      onParentChange: 'parentchange',
      onPress: 'press',
      onSelect: 'select',
    },
    RulerControl: {
      onClick: 'click',
      onDeselect: 'deselect',
      onDisable: 'disable',
      onEnable: 'enable',
      onOptionsChange: 'optionschange',
      onParentChange: 'parentchange',
      onPress: 'press',
      onSelect: 'select',
    },
    SearchControl: {
      onClear: 'clear',
      onError: 'error',
      onLoad: 'load',
      onOptionsChange: 'optionschange',
      onParentChange: 'parentchange',
      onResultSelect: 'resultselect',
      onResultShow: 'resultshow',
      onSubmit: 'submit',
    },
    TrafficControl: {
      onCollapse: 'collapse',
      onExpand: 'expand',
      onHideTraffic: 'hidetraffic',
      onOptionsChange: 'optionschange',
      onParentChange: 'parentchange',
      onProviderKeyChange: 'providerkeychange',
      onShowTraffic: 'showtraffic',
    },
    TypeSelector: {
      onAdd: 'add',
      onClick: 'click',
      onCollapse: 'collapse',
      onExpand: 'expand',
      onOptionsChange: 'optionschange',
      onParentChange: 'parentchange',
      onPress: 'press',
      onRemove: 'remove',
    },
    ZoomControl: {
      onOptionsChange: 'optionschange',
      onParentChange: 'parentchange',
    },
  },
}

export function separateEvents(props) {
  const eventsRegExp = /^on[A-Z]/
  const events = {}
  const rest = {}

  Object.keys(props).forEach((key) => {
    if (eventsRegExp.test(key)) {
      events[key] = props[key]
    } else {
      rest[key] = props[key]
    }
  })

  return {events, ...rest}
}