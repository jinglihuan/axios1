var _ = require('lodash')

var axios = require('axios')
var axios = require('axios')

var async = require('async')

var colors = require('colors');

var Url = 'http://101.201.197.11:10000/api'

var symptomname = require('./symptomname.js');

console.log('\033[2J');

async.eachSeries(symptomname, function (item, callback) {

    axios.post(Url + '/disease', {
        symptomName: item.a
    }).then(function (resp) {

        var expect = item.b.sort()

        var data = _.chain(resp.data).map('diseaseName').compact().sort().value()

        var _mp = matchPercent(expect, data)

        console.log('查询条件：', item.a)
        console.log('预期结果：', expect)
        console.log('实际返回：', data)
        console.log('匹配程度：', _mp)
        console.log('预期外结果：', _.difference(data, expect))
        if(_mp == '100%'){
            console.log('passed test✅'.green)
        }else{
            console.log('failed ‼️'.underline.red)

        }
        console.log('\n')
        
        callback()
    })
})



function matchPercent(a, b) {
    if (_.isEqual(a, b)) {
        return '100%'
    } else {
        if (_.isEmpty(_.difference(a, b)))
            return '100%'
        else
            return '未提供算法'
    }
}