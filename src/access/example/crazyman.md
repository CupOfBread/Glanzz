## 一

今天晚上，很好的月光。

我不见他，已是三十多年；今天见了，精神分外爽快。才知道以前的三十多年，全是发昏；然而须十分小心。不然，那赵家的狗，何以看我两眼呢？

我怕得有理。

## 二

今天全没月光，我知道不妙。早上小心出门，赵贵翁的眼色便怪：似乎怕我，似乎想害我。还有七八个人，交头接耳的议论我，张着嘴，对我笑了一笑；我便从头直冷到脚根，晓得他们布置，都已妥当了。

我可不怕，仍旧走我的路。前面一伙小孩子，也在那里议论我；眼色也同赵贵翁一样，脸色也铁青。我想我同小孩子有什么仇，他也这样。忍不住大声说，“你告诉我！”他们可就跑了。

我想：我同赵贵翁有什么仇，同路上的人又有什么仇；只有廿年以前，把古久先生的陈年流水簿子⑶，踹了一脚，古久先生很不高兴。赵贵翁虽然不认识他，一定也听到风声，代抱不平；约定路上的人，同我作冤对。但是小孩子呢？那时候，他们还没有出世，何以今天也睁着怪眼睛，似乎怕我，似乎想害我。这真教我怕，教我纳罕而且伤心。

我明白了。这是他们娘老子教的！



<div style="text-align:right">——摘自《狂人日记》鲁迅著</div>

## 表格测试

|    项目    |    版本    |    描述    |
| ---------- | ---------- | ---------- |
|vue|3.2.37|Vue3|
|vue-router|4.1.3|vue-router|
|vite|3.0.0|vite|
|pinia|2.0.18|pinia|
|tailwindcss|3.1.8|CSS 框架|
|aplayer|1.10.1|H5音乐播放器|

## 代码测试

```java
public class JasyptUtil {  
	public static String encrypt(String plaintext) {  
        //加密工具  
        StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();  
        //加密配置  
        EnvironmentStringPBEConfig config = new EnvironmentStringPBEConfig();  
        // 算法类型  
        config.setAlgorithm("PBEWithMD5AndDES");  
        //生成秘钥的公钥  
        config.setPassword("shinlink");  
        //应用配置  
        encryptor.setConfig(config);  
        //加密  
        String ciphertext = encryptor.encrypt(plaintext);  
        return ciphertext;  
    }  
```