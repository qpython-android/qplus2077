# 游戏的脚本可置于此文件中。

# 声明此游戏使用的角色。颜色参数可使角色姓名着色。

define e = Character("艾琳")


# 游戏在此开始。

label start:
    play music "audio/illurock.opus"
    # 显示一个背景。此处默认显示占位图，但您也可以在图片目录添加一个文件
    # （命名为 bg room.png 或 bg room.jpg）来显示。

    scene bg room

    # 显示角色立绘。此处使用了占位图，但您也可以在图片目录添加命名为
    # eileen happy.png 的文件来将其替换掉。

    show xiaoxin

    # 此处显示各行对话。

    e "您已来到 「Q+ 2077：代码边疆 游戏。」"

    e "这是一个共创游戏，欢迎您加入我们成为Q+开拓者，共同使用代码来创作一个属于我们自己的星球——「Q+2077」！ https://2077.qpython.org"

    # 此处为游戏结尾。

    return
