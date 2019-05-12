'use strict';

// Register `lotteryList` component, along with its associated controller and template
angular.
  module('lotteryList').
  component('lotteryList', {
    templateUrl: 'lottery-list/lottery-list.template.html',
    controller: ['$http', function lotteryListController($http) {
      var self = this;
      self.orderPropList = [
        { id: 0, name: 'date', description: 'mais antigos' },
        { id: 1, name: '-date', description: 'mais recentes' }];
      self.orderProp = self.orderPropList[0].name;

      self.vizList = [
        { id: 0, name: 'arr', description: 'sorteio' },
        { id: 1, name: 'cres', description: 'crescente' }];


      self.vizMode = 'sort'
      self.selectedOption = self.orderPropList[0]
      self.selectedOption2 = self.vizList[0]




      $http.get('lotteries/lotteries.json').then((response) => {

        response.data.forEach(it => parseElement(it));

        self.lotterys = response.data;
      });

      function parseElement(it) {
        it.arr = [];
        it.arr_sorted = [];
        it.v1 = [];
        it.v2 = [];
        it.v3 = [];

        it.arr.push(parseInt(it.Bola1, 10))
        it.arr.push(parseInt(it.Bola2, 10))
        it.arr.push(parseInt(it.Bola3, 10))
        it.arr.push(parseInt(it.Bola4, 10))
        it.arr.push(parseInt(it.Bola5, 10))
        it.arr.push(parseInt(it.Bola6, 10))
        it.arr.push(parseInt(it.Bola7, 10))
        it.arr.push(parseInt(it.Bola8, 10))
        it.arr.push(parseInt(it.Bola9, 10))
        it.arr.push(parseInt(it.Bola10, 10))
        it.arr.push(parseInt(it.Bola11, 10))
        it.arr.push(parseInt(it.Bola12, 10))
        it.arr.push(parseInt(it.Bola13, 10))
        it.arr.push(parseInt(it.Bola14, 10))
        it.arr.push(parseInt(it.Bola15, 10))

        var i;
        for (i = 0; i < 5; i++) {
          it.v1.push(it.arr[i]);
        }

        for (i = 5; i < 10; i++) {
          it.v2.push(it.arr[i]);
        }

        for (i = 10; i < 15; i++) {
          it.v3.push(it.arr[i]);
        }
        it.arr_sorted = it.arr.sort((a, b) => a - b);


        
        it.v1s = []
        it.v2s = []
        it.v3s = []

        for (i = 0; i < 5; i++) {
          it.v1s.push(it.arr_sorted[i]);
        }

        for (i = 5; i < 10; i++) {
          it.v2s.push(it.arr_sorted[i]);
        }

        for (i = 10; i < 15; i++) {
          it.v3s.push(it.arr_sorted[i]);
        }
          



        var ss = it.Data;
        var sp = ss.split('/')
        it.date = new Date(sp[2], sp[1], sp[0])
      }
    }]
  });
