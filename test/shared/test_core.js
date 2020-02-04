const { assert } = require('chai');

const pangu = require('../../dist/shared/core');

describe('Pangu', () => {
    describe('spacing()', () => {
        // 字母 数字
        it('处理字母、数字', () => {
            assert.equal(pangu.spacing("ABC中文"), 'ABC 中文');
            assert.equal(pangu.spacing("中文ABC"), '中文 ABC');
            assert.equal(pangu.spacing("中文123"), '中文 123');
            assert.equal(pangu.spacing("123中文"), '123 中文');
            assert.equal(pangu.spacing("ABC中文123中文"), 'ABC 中文 123 中文');
            assert.equal(pangu.spacing("中文123中文ABC"), '中文 123 中文 ABC');
            assert.equal(pangu.spacing("这是由苹果公司最新推出的iPhone 7手机"), '这是由苹果公司最新推出的 iPhone 7 手机');
        });

        it('处理 %', () => {
            assert.equal(pangu.spacing('前面%后面'), '前面 % 后面');
            assert.equal(pangu.spacing('在环境变量%SYSTEM%里面'), '在环境变量 %SYSTEM% 里面');
            assert.equal(pangu.spacing('我有100%的信心'), '我有 100% 的信心');
            assert.equal(pangu.spacing('The 100%是百分百'), 'The 100% 是百分百');
        });

        it('处理 $', () => {
            assert.equal(pangu.spacing('前面$后面'), '前面 $ 后面');
            assert.equal(pangu.spacing('前面 $ 后面'), '前面 $ 后面');
            assert.equal(pangu.spacing('前面$100后面'), '前面 $100 后面');
        });

        it('处理 ￥', () => {
            assert.equal(pangu.spacing('前面￥后面'), '前面 ￥ 后面');
            assert.equal(pangu.spacing('前面 ￥ 后面'), '前面 ￥ 后面');
            assert.equal(pangu.spacing('前面￥100后面'), '前面 ￥100 后面');
        });

        it ('处理 -', () => {
            assert.equal(pangu.spacing('前面-后面'), '前面 - 后面');
            assert.equal(pangu.spacing('Mac-OS'), 'Mac-OS');
            assert.equal(pangu.spacing('今天的日期是2020-01-01'),'今天的日期是 2020-01-01');
        });

        it ('处理 .', () => {
            assert.equal(pangu.spacing('我用Photoshop处理了一张.png图片'), '我用 Photoshop 处理了一张 .png 图片');
            assert.equal(pangu.spacing('百度.中国'), '百度.中国');
            assert.equal(pangu.spacing('我打开了www.baidu.com'), '我打开了 www.baidu.com');
            assert.equal(pangu.spacing('github.com'), 'github.com');
        });

        it ('处理斜杠', () => {
            assert.equal(pangu.spacing('这段代码中/**/是注释'), '这段代码中 /**/ 是注释');
            assert.equal(pangu.spacing('前往C:\\windows\\寻找文件'), '前往 C:\\windows\\ 寻找文件');
            assert.equal(pangu.spacing('需要安装到/home/ubuntu/下，然后在./bin下运行start.sh'), '需要安装到 /home/ubuntu/ 下，然后在 ./bin 下运行 start.sh');
        });

        it ('处理 +, =', () => {
            assert.equal(pangu.spacing('A+B=C'), 'A+B=C');
            assert.equal(pangu.spacing('甲+乙=丙'), '甲 + 乙 = 丙');
            assert.equal(pangu.spacing('A=B'), 'A=B');
            assert.equal(pangu.spacing('左边=右边'), '左边 = 右边');
            assert.equal(pangu.spacing('我用C++写了一段程序'), '我用 C++ 写了一段程序');
        });

        it ('处理 *', () => {
            assert.equal(pangu.spacing('A*B'), 'A*B');
            assert.equal(pangu.spacing('星号*表示省略'), '星号*表示省略');
            assert.equal(pangu.spacing('我真是*了狗了'), '我真是*了狗了');
            assert.equal(pangu.spacing('这里存在注释*'), '这里存在注释*');
        });

        it ('处理 &', () => {
            assert.equal(pangu.spacing('A&B'), 'A&B');
            assert.equal(pangu.spacing('李先生&Mike'), '李先生 & Mike');
            assert.equal(pangu.spacing('Mike&林先生'), 'Mike & 林先生');
            assert.equal(pangu.spacing('Mike&Lee'), 'Mike&Lee');
            assert.equal(pangu.spacing('李先生&林先生'), '李先生 & 林先生');
        });

        it ('处理 @', () => {
            assert.equal(pangu.spacing('backrunner@gmail.com'), 'backrunner@gmail.com');
            assert.equal(pangu.spacing('今天@kano直播'), '今天 @kano 直播');
            assert.equal(pangu.spacing('今天@神乐mea直播'), '今天 @神乐mea 直播');
        });

        it ('处理 #', () => {
            assert.equal(pangu.spacing('#1标题'), '#1 标题');
            assert.equal(pangu.spacing('楼层#100'), '楼层 #100');
            assert.equal(pangu.spacing('带上话题#2020#发微博'), '带上话题 #2020# 发微博');
        });

        it ('处理 ！', () => {
            assert.equal(pangu.spacing('今天天气真好！我要出去玩'), '今天天气真好！我要出去玩');
            assert.equal(pangu.spacing('Weather is so good!我要出去玩'), 'Weather is so good! 我要出去玩');
        });

        it ('处理 ？', () => {
            assert.equal(pangu.spacing('喂？哪位？'), '喂？哪位？');
            assert.equal(pangu.spacing('Hello?是一个梗'), 'Hello? 是一个梗');
            assert.equal(pangu.spacing('颜文字?_?颜文字'), '颜文字 ?_? 颜文字');
        });

        it ('处理普通括号', () => {
            assert.equal(pangu.spacing('这是一个(This is a)括号'), '这是一个 (This is a) 括号');
            assert.equal(pangu.spacing('中文(123ABC中文)中文'), '中文 (123ABC 中文) 中文');
            assert.equal(pangu.spacing('固定电话(520)1314'), '固定电话 (520)1314');
        });

        it ('处理尖角括号', () => {
            assert.equal(pangu.spacing('比如说<html></html>这个标签'), '比如说 <html></html> 这个标签');
        });
    });

    describe('spacingText()', () => {
        it('callback', (done) => {
            pangu.spacingText('在Windows中，你需要用Windows自带的cmd运行%SYSTEM%/来寻找64位的记事本，并使用-quiet命令启动', (err, newText) => {
                assert.equal(newText, '在 Windows 中，你需要用 Windows 自带的 cmd 运行 %SYSTEM%/ 来寻找 64 位的记事本，并使用 -quiet 命令启动');
                done();
            });
        });

        it('promise', (done) => {
            pangu.spacingText('今天有一个iOS(苹果手机系统)的程序员找我聊了5个小时', (err, newText) => {
                assert.equal(newText, '今天有一个 iOS(苹果手机系统) 的程序员找我聊了 5 个小时');
                done();
            });
        });
    });

    describe('spacingTextSync()', () => {
        it('sync', () => {
            assert.equal(pangu.spacingTextSync('How are you?我很好谢谢。'), 'How are you? 我很好谢谢。');
        });
    });
});