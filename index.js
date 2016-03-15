var _ = require('lodash')

var axios = require('axios')
var axios = require('axios')

var async = require('async')

var Url = 'http://101.201.197.11:10000/api'

var symptomname = require('./symptomname.js');

var t = 0;

async.each(symptomname, function (item, callback) {
	t = t + 2000;
	 _.delay(function () {

		axios.post(Url + '/disease', {
			symptomName: item.a
		}).then(function (resp) {

			var a = _.map(resp.data, 'diseaseName')

			_.each(item.b, function (b) {

				if(_.includes(a, b)) {
					console.log(b + ' in ' + a , "passed\n\n\n\n\n\n\n\n");
				} else { 
					console.log(item.a, "failed");
				}
				callback()
			 })
		})
	}, t)

}, function (err) {
	if (err) 
		console.log(err)
})

// axios.post(Url + '/disease', {
// 	symptomName: symptomname[]
// }).then(function (resp) {
// 	console.log(resp.data)
// 	// _.each(resp.data, function (d) {
// 	// 	console.log(d)
// 	// 	// if (!Array.isArray(d)) {
// 	// 	// 	console.log('\n\n\n\n\n', item, d)
// 	// 	// 	callback()
// 	// 	// } else {
// 	// 	// 	console.log('\n\n\n\n\n', 'fail to fetch data and find empty array')
// 	// 	// }
// 	// })
// })

// setTimeout(function () {


// axios.post(Url + '/disease', {
// 	symptomName: symptomname[1]
// }).then(function (resp) {
// 	console.log('\n\n\n', resp.data)

// 	console.log('second post')
	
// })

// }, 1000)

// setTimeout(function () {
// axios.post(Url + '/disease', {
// 	symptomName: symptomname[2]
// }).then(function (resp) {
// 	console.log('\n\n\n', resp.data)

// 	console.log('third post')
	
// })

// }, 2000)


  


