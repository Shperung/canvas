const TIME_DATA_TEST = {
  activities: {
    out: [
      // 2
      {
        activityId: 75, //2
        startTime: 2,
        endTime: 4,
        colors: ['red'],
      },
      //
      {
        activityId: 73, // 1
        startTime: 4,
        endTime: 5,
        colors: ['green'],
      },
      // 5
      {
        activityId: 80,
        startTime: 10,
        endTime: 12,
        colors: ['gold'],
      },
      //
      {
        activityId: 81,
        startTime: 14,
        endTime: 15,
        colors: ['blue'],
      },
      //
      {
        activityId: 82,
        startTime: 17,
        endTime: 22,
        colors: ['brown'],
      },
    ],
    inner: [
      {
        activityId: 74,
        startTime: 1682942404000,
        endTime: 1682964004000,
        colors: ['#C72E48'],
      },
    ],
  },
  from: 0,
  to: 24,
};

const pieStructure = [];

TIME_DATA_TEST.activities.out.forEach((item, i, arr) => {
  // перший пробіл
  if (i === 0 && item.startTime > TIME_DATA_TEST.from) {
    pieStructure.push({
      iterator: pieStructure.length,
      svg: {fill: 'transparent'},
      value: `${item.startTime - TIME_DATA_TEST.from} / 24`,
      arc: {},
    });
  }

  if (i > 0 && item.startTime - arr[i - 1].endTime > 0) {
    pieStructure.push({
      iterator: pieStructure.length,
      svg: {fill: 'transparent'},
      value: `${item.startTime - arr[i - 1].endTime} / 24`,
      arc: {},
    });
  }

  pieStructure.push({
    iterator: pieStructure.length,
    svg: {fill: item.colors[0]},
    value: `${item.endTime - item.startTime} / 24`,
    arc: {cornerRadius: 15, padAngle: 0.02},
  });

  if (i === arr.length - 1 && item.endTime < TIME_DATA_TEST.to) {
    pieStructure.push({
      iterator: pieStructure.length,
      svg: {fill: 'transparent'},
      value: `${TIME_DATA_TEST.to - item.endTime} / 24`,
      arc: {},
    });
  }
});

console.log('%c ||||| pieStructure', 'color:yellowgreen', pieStructure);
