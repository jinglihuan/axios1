module.exports = [

    {
        a: ["多尿", "腹胀", "乏力", "发热", "口渴", "恶心"],
        b: ['阑尾炎', '异位急性阑尾炎', '老年急性阑尾炎', '高钙血症', '干燥综合征']
    },

    {
        a: ["无力", "眼睑下垂", "疲劳", "吞咽困难", "呼吸困难"],
        b: ['重症肌无力']
    },


    {
        a: ["咳嗽", "发热", "全身酸痛", "声音嘶哑", "胸痛", "意识模糊"],
        b: ['肺癌']
    },

    {
        a: ["情绪化", "精神不振", "贪睡", "记忆力下降", "浮肿", "体重增加"],
        b: ['甲状腺功能低下','甲减']
    },

    {
        a: ["腹泻", "腹鸣", "腹痛", "食欲减退", "腹部包块"],
        b: ['肠结核','克罗恩病']
    },

    {
        a: ["腰腿痛", "胸痛", "颈部痛", "僵硬", "四肢无力","站立不稳"],
        b: ['多发性骨髓瘤']
    },

    {
        a: ["四肢细长", "身高超常", "心血管系统异常","主动脉瘤","心脏瓣膜异常"],
        b: ['马凡综合征']
    },

    {
        a: ["肛门坠胀", "肌张力降低", "排便不尽感","排便困难","便次增多","会阴部疼痛","黏液血便","部分性失禁"],
        b: ['会阴下降综合征']
    },

    {
        a: ["吞咽困难", "胸骨后疼痛", "水肿","溃疡"],
        b: ['食管白斑']
    },

    {
        a: ["进食样自动症", "记忆力障碍", "癫痫性人格改变","抽搐","肌阵挛","癫痫的植物神经性发作"],
        b: ['外伤性癫痫']
    }


]

//curl -X POST {symptomName:"多尿","腹胀","乏力","发热","口渴","恶心"} http://101.201.197.11:10000/api/disease

	