﻿################################################################################
## 初始化
################################################################################

## “init offset”语句可使此文件中的初始化语句在任何其他文件中的“init”语句之前运
## 行。
init offset = -2

## 调用 gui.init 会将样式重置为合理的默认值，并设置游戏的宽度和高度（基准分辨
## 率）。
init python:
    gui.init(1280, 720)

## 启用对屏幕或变换中无效或不稳定属性的检查
define config.check_conflicting_properties = True


################################################################################
## GUI 配置变量
################################################################################


## 颜色 ##########################################################################
##
## 界面中文本的颜色。

## 整个界面中使用的强调色，用于标记和突出显示文本。
define gui.accent_color = '#000000'

## 当文本按钮既未被选中也未被悬停时使用的颜色。
define gui.idle_color = '#707070'

## 小的颜色用于小的文本，需要更亮/更暗才能达到同样的效果。
define gui.idle_small_color = '#606060'

## 当按钮和滑条被悬停时使用的颜色。
define gui.hover_color = '#000000'

## 当文本按钮被选中但非焦点时使用的颜色。当一个按钮为当前屏幕或设置选项值时，会
## 处于选中状态。
define gui.selected_color = '#555555'

## 当文本按钮无法被选择时使用的颜色。
define gui.insensitive_color = '#7070707f'

## 滑条未填充的部分使用的颜色。这些颜色不直接使用，但在重新生成条形图像文件时使
## 用。
define gui.muted_color = '#666666'
define gui.hover_muted_color = '#999999'

## 对话和菜单选择文本使用的颜色。
define gui.text_color = '#404040'
define gui.interface_text_color = '#404040'


## 字体和字体大小 #####################################################################

## 游戏内文本使用的字体。
define gui.text_font = "SourceHanSansLite.ttf"

## 角色名称使用的字体。
define gui.name_text_font = "SourceHanSansLite.ttf"

## 游戏外文本使用的字体。
define gui.interface_text_font = "SourceHanSansLite.ttf"

## 普通对话文本的大小。
define gui.text_size = 22

## 角色名称的大小。
define gui.name_text_size = 30

## 游戏用户界面中文本的大小。
define gui.interface_text_size = 22

## 游戏用户界面中标签的大小。
define gui.label_text_size = 24

## 通知屏幕上文本的大小。
define gui.notify_text_size = 16

## 游戏标题的大小。
define gui.title_text_size = 50


## 标题和游戏菜单 #####################################################################

## 标题菜单和游戏菜单使用的图像。
define gui.main_menu_background = "gui/main_menu.png"
define gui.game_menu_background = "gui/game_menu.png"


## 对话 ##########################################################################
##
## 这些变量控制对话如何在屏幕上逐行显示。

## 包含对话的文本框的高度。
define gui.textbox_height = 185

## 文本框在屏幕上的垂直位置。0.0 是顶部，0.5 是居中，1.0 是底部。
define gui.textbox_yalign = 1.0


## 叙述角色名字相对于文本框的位置。可以是从左侧或顶部起的整数像素，或设为 0.5 来
## 居中。
define gui.name_xpos = 240
define gui.name_ypos = 0

## 角色名字的水平对齐方式。0.0 为左侧对齐，0.5 为居中显示，而 1.0 为右侧对齐。
define gui.name_xalign = 0.0

## 包含角色名字的方框的宽度、高度和边框尺寸，或设为 None 来自动确定其大小。
define gui.namebox_width = None
define gui.namebox_height = None

## 包含角色名字的方框的边界尺寸，以左、上、右、下顺序排列。
define gui.namebox_borders = Borders(5, 5, 5, 5)

## 若为 True，则名字框的背景将平铺；若为 False，则名字框的背景将缩放。
define gui.namebox_tile = False


## 对话相对于文本框的位置。可以是相对于文本框从左侧或顶部起的整数像素，或设为
## 0.5 来居中。
define gui.dialogue_xpos = 268
define gui.dialogue_ypos = 50

## 对话文本的最大宽度，以像素为单位。
define gui.dialogue_width = 744

## 对话文本的水平对齐方式。0.0 为左侧对齐，0.5 为居中显示，而 1.0 为右侧对齐。
define gui.dialogue_text_xalign = 0.0


## 按钮 ##########################################################################
##
## 这些变量以及 gui/button 中的图像文件控制着按钮显示方式。

## 按钮的宽度和高度像素数。如果为 None，则 Ren'Py 将计算大小。
define gui.button_width = None
define gui.button_height = None

## 按钮两侧的边框，按左、上、右、下的顺序排列。
define gui.button_borders = Borders(4, 4, 4, 4)

## 若为 True，则背景图像将平铺。若为 False，则背景图像将线性缩放。
define gui.button_tile = False

## 按钮使用的字体。
define gui.button_text_font = gui.interface_text_font

## 按钮所使用的文本大小。
define gui.button_text_size = gui.interface_text_size

## 按钮文本在各种状态下的颜色。
define gui.button_text_idle_color = gui.idle_color
define gui.button_text_hover_color = gui.hover_color
define gui.button_text_selected_color = gui.selected_color
define gui.button_text_insensitive_color = gui.insensitive_color

## 按钮文本的水平对齐方式。（0.0 为左侧对齐，0.5 为居中对齐，而 1.0 为右侧对
## 齐）。
define gui.button_text_xalign = 0.0


## 这些变量覆盖了不同类型按钮的设置。关于可用的按钮种类以及每种按钮的用途，请参
## 阅 gui 文档。
##
## 这些定制由默认界面使用：

define gui.radio_button_borders = Borders(18, 4, 4, 4)

define gui.check_button_borders = Borders(18, 4, 4, 4)

define gui.confirm_button_text_xalign = 0.5

define gui.page_button_borders = Borders(10, 4, 10, 4)

define gui.quick_button_borders = Borders(10, 4, 10, 0)
define gui.quick_button_text_size = 14
define gui.quick_button_text_idle_color = gui.idle_small_color
define gui.quick_button_text_selected_color = gui.accent_color

## 您还可以通过添加正确命名的变量来添加自己的定制。例如，您可以将以下几行取消注
## 释来设置导航按钮的宽度。

# define gui.navigation_button_width = 250


## 选项按钮 ########################################################################
##
## 游戏内菜单使用的选项按钮。

define gui.choice_button_width = 790
define gui.choice_button_height = None
define gui.choice_button_tile = False
define gui.choice_button_borders = Borders(100, 5, 100, 5)
define gui.choice_button_text_font = gui.text_font
define gui.choice_button_text_size = gui.text_size
define gui.choice_button_text_xalign = 0.5
define gui.choice_button_text_idle_color = '#707070'
define gui.choice_button_text_hover_color = "#ffffff"
define gui.choice_button_text_insensitive_color = '#7070707f'


## 存档按钮 ########################################################################
##
## 存档按钮是一种特殊的按钮。它包含一个缩略图和描述该存档内容的文本。存档使用
## gui/button 中的图像文件，就像其他类型的按钮一样。

## 存档位按钮。
define gui.slot_button_width = 276
define gui.slot_button_height = 206
define gui.slot_button_borders = Borders(10, 10, 10, 10)
define gui.slot_button_text_size = 14
define gui.slot_button_text_xalign = 0.5
define gui.slot_button_text_idle_color = gui.idle_small_color
define gui.slot_button_text_selected_idle_color = gui.selected_color
define gui.slot_button_text_selected_hover_color = gui.hover_color

## 存档所用缩略图的宽度和高度。
define config.thumbnail_width = 256
define config.thumbnail_height = 144

## 存档网格中的列数和行数。
define gui.file_slot_cols = 3
define gui.file_slot_rows = 2


## 定位和间距 #######################################################################
##
## 这些变量控制各种用户界面元素的位置和间距。

## 导航按钮左侧相对于屏幕左侧的位置。
define gui.navigation_xpos = 40

## 快进指示器的垂直位置。
define gui.skip_ypos = 10

## 通知界面的垂直位置。
define gui.notify_ypos = 45

## 菜单选项之间的间距。
define gui.choice_spacing = 22

## 标题菜单和游戏菜单的导航部分中的按钮。
define gui.navigation_spacing = 4

## 控制设置项目之间的间隔量。
define gui.pref_spacing = 10

## 控制设置按钮之间的间距。
define gui.pref_button_spacing = 0

## 存档页面按钮之间的间距。
define gui.page_spacing = 0

## 存档按钮之间的间距。
define gui.slot_spacing = 10

## 标题菜单文本的位置。
define gui.main_menu_text_xalign = 1.0


## 框架 ##########################################################################
##
## 这些变量控制在不存在覆盖层或窗口时可以包含用户界面组件的框架的外观。

## 通用框架。
define gui.frame_borders = Borders(4, 4, 4, 4)

## 用作确认界面部分的框架。
define gui.confirm_frame_borders = Borders(40, 40, 40, 40)

## 用作快进界面部分的框架。
define gui.skip_frame_borders = Borders(16, 5, 50, 5)

## 用作通知界面部分的框架。
define gui.notify_frame_borders = Borders(16, 5, 40, 5)

## 框架背景是否应平铺？
define gui.frame_tile = False


## 条，滚动条和滑块 ####################################################################
##
## 这些语句控制条，滚动条和滑块的外观和大小。
##
## 默认的 GUI 仅使用滑块和垂直滚动条。所有其他栏仅在创建者编写的屏幕中使用。

## 水平条，滚动条和滑块的高度。垂直条，滚动条和滑块的宽度。
define gui.bar_size = 25
define gui.scrollbar_size = 12
define gui.slider_size = 25

## 若为 True，则条的底图平铺。若为 False，则条的底图线性缩放。
define gui.bar_tile = False
define gui.scrollbar_tile = False
define gui.slider_tile = False

## 水平边框。
define gui.bar_borders = Borders(4, 4, 4, 4)
define gui.scrollbar_borders = Borders(4, 4, 4, 4)
define gui.slider_borders = Borders(4, 4, 4, 4)

## 垂直边框。
define gui.vbar_borders = Borders(4, 4, 4, 4)
define gui.vscrollbar_borders = Borders(4, 4, 4, 4)
define gui.vslider_borders = Borders(4, 4, 4, 4)

## What to do with unscrollable scrollbars in the game menu. "hide" hides them,
## while None shows them.
define gui.unscrollable = "hide"


## 历史 ##########################################################################
##
## 历史记录屏幕显示玩家已经阅读过的对话。

## Ren'Py 将保留的对话历史块数。
define config.history_length = 250

## 历史屏幕条目的高度，或设置为 None 以使高度变量自适应。
define gui.history_height = 140

## 在历史记录屏幕条目之间添加额外的空间。
define gui.history_spacing = 0

## 所指定叙述角色的标签的坐标、宽度和对齐方式。
define gui.history_name_xpos = 155
define gui.history_name_ypos = 0
define gui.history_name_width = 155
define gui.history_name_xalign = 1.0

## 对话文本的坐标、宽度和对齐方式。
define gui.history_text_xpos = 170
define gui.history_text_ypos = 2
define gui.history_text_width = 740
define gui.history_text_xalign = 0.0


## NVL 模式 ######################################################################
##
## NVL 模式屏幕显示 NVL 模式的角色所产生的对话。

## NVL 模式背景窗口的背景边框。
define gui.nvl_borders = Borders(0, 10, 0, 20)

## Ren'Py 所显示的 NVL 模式条目的最大数量。当要显示的条目多于此数量时，最旧的条
## 目将被删除。
define gui.nvl_list_length = 6

## NVL 模式条目的高度。将此设置为 None 可使条目动态调整高度。
define gui.nvl_height = 115

## 当 gui.nvl_height 为 None 时，NVL 模式条目之间的间距，以及 NVL 模式条目和 NVL
## 模式菜单之间的间距。
define gui.nvl_spacing = 10

## 所指定叙述角色的标签的坐标、宽度和对齐方式。
define gui.nvl_name_xpos = 430
define gui.nvl_name_ypos = 0
define gui.nvl_name_width = 150
define gui.nvl_name_xalign = 1.0

## 对话文本的坐标、宽度和对齐方式。
define gui.nvl_text_xpos = 450
define gui.nvl_text_ypos = 8
define gui.nvl_text_width = 590
define gui.nvl_text_xalign = 0.0

## nvl_thought 文本（由 nvl_narrator 字符表示的文本）的位置，宽度和对齐方式。
define gui.nvl_thought_xpos = 240
define gui.nvl_thought_ypos = 0
define gui.nvl_thought_width = 780
define gui.nvl_thought_xalign = 0.0

## NVL menu_buttons 的位置。
define gui.nvl_button_xpos = 450
define gui.nvl_button_xalign = 0.0


## 本地化 #########################################################################

## 该变量控制允许在何时换行。默认值适用于大多数语言。可用的值请参见 https://
## www.renpy.org/doc/html/style_properties.html#style-property-language

define gui.language = "unicode"


################################################################################
## 移动设备
################################################################################

init python:

    ## 该变量增加快捷菜单按钮的尺寸来使它们在平板和手机上更容易被按到。
    @gui.variant
    def touch():

        gui.quick_button_borders = Borders(40, 14, 40, 0)

    ## 该变量更改各个 GUI 元素的尺寸和间距来确保它们在手机上更容易被辨识。
    @gui.variant
    def small():

        ## 字体大小。
        gui.text_size = 30
        gui.name_text_size = 36
        gui.notify_text_size = 25
        gui.interface_text_size = 30
        gui.button_text_size = 30
        gui.label_text_size = 34

        ## 调整对话框的位置。
        gui.textbox_height = 240
        gui.name_xpos = 80
        gui.dialogue_xpos = 90
        gui.dialogue_width = 1100

        ## 更改各元素的尺寸和间距。
        gui.slider_size = 36

        gui.choice_button_width = 1240
        gui.choice_button_text_size = 30

        gui.navigation_spacing = 20
        gui.pref_button_spacing = 10

        gui.history_height = 190
        gui.history_text_width = 690

        gui.quick_button_text_size = 20

        ## 文件按钮布局。
        gui.file_slot_cols = 2
        gui.file_slot_rows = 2

        ## NVL 模式。
        gui.nvl_height = 170

        gui.nvl_name_width = 305
        gui.nvl_name_xpos = 325

        gui.nvl_text_width = 915
        gui.nvl_text_xpos = 345
        gui.nvl_text_ypos = 5

        gui.nvl_thought_width = 1240
        gui.nvl_thought_xpos = 20

        gui.nvl_button_width = 1240
        gui.nvl_button_xpos = 20
