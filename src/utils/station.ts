import type { StationDatabse, StationInfo } from '../types/pews'

export const getStationInfo = (
  lat: number,
  lon: number
): StationInfo | null => {
  const stations = StationDB.filter(
    (station) =>
      Math.abs(station.lat - lat) < 0.1 && Math.abs(station.lon - lon) < 0.1
  )

  stations.sort((a, b) => Number(b.inOperation) - Number(a.inOperation))

  return stations.length > 0
    ? {
        code: stations[0].code,
        name: stations[0].name,
        inOperation: stations[0].inOperation
      }
    : null
}

export const StationDB: StationDatabse = [
  {
    code: 'ADO',
    name: '안동',
    inOperation: false,
    lat: 36.4121,
    lon: 128.9488
  },
  {
    code: 'ADO2',
    name: '안동',
    inOperation: false,
    lat: 36.4121,
    lon: 128.9488
  },
  {
    code: 'ADOA',
    name: '송현',
    inOperation: true,
    lat: 36.5726,
    lon: 128.7009
  },
  { code: 'AGSA', name: '앙성', inOperation: true, lat: 37.0917, lon: 127.808 },
  { code: 'AMD', name: '안마도', inOperation: true, lat: 35.3436, lon: 126.03 },
  {
    code: 'AND',
    name: '안동',
    inOperation: false,
    lat: 36.5687,
    lon: 128.7057
  },
  {
    code: 'ANDB',
    name: '안덕',
    inOperation: true,
    lat: 33.25658,
    lon: 126.32875
  },
  {
    code: 'ANHA',
    name: '안흥',
    inOperation: true,
    lat: 37.464696,
    lon: 128.155024
  },
  {
    code: 'ANM',
    name: '안면도',
    inOperation: false,
    lat: 36.5387,
    lon: 126.33
  },
  {
    code: 'ANMA',
    name: '안면도',
    inOperation: true,
    lat: 36.5386,
    lon: 126.33
  },
  {
    code: 'ASNA',
    name: '아산',
    inOperation: true,
    lat: 36.8277,
    lon: 127.0123
  },
  {
    code: 'BAR',
    name: '백령도',
    inOperation: false,
    lat: 37.9771,
    lon: 124.7142
  },
  {
    code: 'BAR2',
    name: '백령도',
    inOperation: true,
    lat: 37.9771,
    lon: 124.7142
  },
  {
    code: 'BAU',
    name: '백운산',
    inOperation: true,
    lat: 35.1027,
    lon: 127.5968
  },
  {
    code: 'BGDB',
    name: '비금도',
    inOperation: true,
    lat: 34.7726,
    lon: 125.9469
  },
  {
    code: 'BKWA',
    name: '백운',
    inOperation: true,
    lat: 37.1681,
    lon: 127.9875
  },
  {
    code: 'BLGA',
    name: '벌곡',
    inOperation: true,
    lat: 36.1392,
    lon: 127.3032
  },
  {
    code: 'BLLA',
    name: '별량',
    inOperation: true,
    lat: 34.8646,
    lon: 127.4638
  },
  {
    code: 'BOE',
    name: '보은',
    inOperation: false,
    lat: 36.4875,
    lon: 127.7363
  },
  {
    code: 'BOGA',
    name: '보개',
    inOperation: true,
    lat: 37.0131,
    lon: 127.3294
  },
  {
    code: 'BOHB',
    name: '봉화',
    inOperation: true,
    lat: 36.926326,
    lon: 129.053685
  },
  {
    code: 'BON',
    name: '보은',
    inOperation: false,
    lat: 36.5482,
    lon: 127.7981
  },
  {
    code: 'BON2',
    name: '보은',
    inOperation: true,
    lat: 36.5482,
    lon: 127.7981
  },
  {
    code: 'BOSB',
    name: '보성',
    inOperation: true,
    lat: 34.7636783,
    lon: 127.212175
  },
  {
    code: 'BRD',
    name: '백령도',
    inOperation: false,
    lat: 37.9677,
    lon: 124.6303
  },
  {
    code: 'BSA',
    name: '부산',
    inOperation: false,
    lat: 35.1048,
    lon: 129.0319
  },
  {
    code: 'BSAA',
    name: '부산',
    inOperation: true,
    lat: 35.0661,
    lon: 129.0741
  },
  {
    code: 'BURB',
    name: '부론',
    inOperation: true,
    lat: 37.2317,
    lon: 127.7486
  },
  {
    code: 'BUS',
    name: '부산',
    inOperation: false,
    lat: 35.2483,
    lon: 129.1125
  },
  {
    code: 'BUS2',
    name: '금정',
    inOperation: false,
    lat: 35.2486,
    lon: 129.1125
  },
  {
    code: 'BUS3',
    name: '금정',
    inOperation: true,
    lat: 35.2486,
    lon: 129.1124
  },
  {
    code: 'BUSA',
    name: '부석',
    inOperation: true,
    lat: 36.9791,
    lon: 128.6611
  },
  {
    code: 'BUY',
    name: '부여',
    inOperation: false,
    lat: 36.2726,
    lon: 126.9206
  },
  {
    code: 'BUYB',
    name: '부여',
    inOperation: true,
    lat: 36.2726,
    lon: 126.9206
  },
  {
    code: 'CDSA',
    name: '달성',
    inOperation: true,
    lat: 35.704465,
    lon: 128.444361
  },
  {
    code: 'CE2A',
    name: '청주',
    inOperation: true,
    lat: 36.6268,
    lon: 127.5135
  },
  {
    code: 'CEA',
    name: '천안',
    inOperation: false,
    lat: 36.8231,
    lon: 127.2575
  },
  {
    code: 'CEA2',
    name: '천안',
    inOperation: true,
    lat: 36.8231,
    lon: 127.2574
  },
  {
    code: 'CEBA',
    name: '천부',
    inOperation: true,
    lat: 37.5405,
    lon: 130.9169
  },
  {
    code: 'CEJ',
    name: '청주',
    inOperation: false,
    lat: 36.6398,
    lon: 127.4405
  },
  {
    code: 'CEJA',
    name: '청주',
    inOperation: false,
    lat: 36.6399,
    lon: 127.4406
  },
  {
    code: 'CGAA',
    name: '청안',
    inOperation: true,
    lat: 36.7069,
    lon: 127.7263
  },
  {
    code: 'CGDA',
    name: '청도',
    inOperation: true,
    lat: 35.6628,
    lon: 128.6703
  },
  {
    code: 'CGIA',
    name: '청일',
    inOperation: true,
    lat: 37.5823,
    lon: 128.1527
  },
  {
    code: 'CGPA',
    name: '청풍',
    inOperation: true,
    lat: 34.8766,
    lon: 126.9709
  },
  {
    code: 'CGUB',
    name: '청운',
    inOperation: true,
    lat: 37.5583,
    lon: 127.7136
  },
  {
    code: 'CGWB',
    name: '창원',
    inOperation: true,
    lat: 35.1702,
    lon: 128.5721
  },
  {
    code: 'CGYA',
    name: '청양',
    inOperation: true,
    lat: 36.4234767,
    lon: 126.7787833
  },
  {
    code: 'CHA',
    name: '천안',
    inOperation: false,
    lat: 36.7727,
    lon: 127.1194
  },
  {
    code: 'CHC',
    name: '춘천',
    inOperation: false,
    lat: 37.7776,
    lon: 127.8145
  },
  {
    code: 'CHC2',
    name: '춘천',
    inOperation: false,
    lat: 37.7776,
    lon: 127.8145
  },
  {
    code: 'CHDA',
    name: '초도',
    inOperation: true,
    lat: 34.2367,
    lon: 127.2496
  },
  {
    code: 'CHI',
    name: '진주',
    inOperation: false,
    lat: 35.2032,
    lon: 128.1194
  },
  {
    code: 'CHIA',
    name: '처인',
    inOperation: true,
    lat: 37.127287,
    lon: 127.116933
  },
  { code: 'CHJ', name: '충주', inOperation: false, lat: 36.873, lon: 127.9748 },
  {
    code: 'CHJ2',
    name: '충주',
    inOperation: false,
    lat: 36.873,
    lon: 127.9748
  },
  { code: 'CHJ3', name: '충주', inOperation: true, lat: 36.873, lon: 127.9748 },
  { code: 'CHO', name: '전주', inOperation: false, lat: 35.8407, lon: 127.116 },
  {
    code: 'CHO(p)',
    name: '전주',
    inOperation: false,
    lat: 35.8178,
    lon: 127.1542
  },
  { code: 'CHOA', name: '전주', inOperation: true, lat: 35.8408, lon: 127.117 },
  { code: 'CHR', name: '창녕', inOperation: false, lat: 35.544, lon: 128.4917 },
  {
    code: 'CHRA',
    name: '창녕',
    inOperation: false,
    lat: 35.5342,
    lon: 128.4778
  },
  {
    code: 'CHRB',
    name: '창녕',
    inOperation: true,
    lat: 35.5342,
    lon: 128.4779
  },
  {
    code: 'CHS',
    name: '청송',
    inOperation: false,
    lat: 36.3919,
    lon: 129.0794
  },
  {
    code: 'CHU',
    name: '춘천',
    inOperation: false,
    lat: 37.8904,
    lon: 127.7308
  },
  {
    code: 'CHW',
    name: '철원',
    inOperation: false,
    lat: 38.1404,
    lon: 127.3038
  },
  {
    code: 'CHY',
    name: '봉화',
    inOperation: false,
    lat: 36.9438,
    lon: 128.9145
  },
  {
    code: 'CHYB',
    name: '춘양',
    inOperation: true,
    lat: 36.9439,
    lon: 128.9144
  },
  {
    code: 'CIG',
    name: '칠곡',
    inOperation: false,
    lat: 36.0399,
    lon: 128.3813
  },
  {
    code: 'CIGB',
    name: '칠곡',
    inOperation: true,
    lat: 36.0398,
    lon: 128.3813
  },
  {
    code: 'CJD',
    name: '추자도',
    inOperation: true,
    lat: 33.9593,
    lon: 126.2933
  },
  {
    code: 'CJDB',
    name: '춘장대',
    inOperation: true,
    lat: 36.1741,
    lon: 126.5285
  },
  {
    code: 'CLSA',
    name: '칠서',
    inOperation: true,
    lat: 35.3628,
    lon: 128.4907
  },
  {
    code: 'CPN',
    name: '추풍령',
    inOperation: false,
    lat: 36.2169,
    lon: 127.9913
  },
  {
    code: 'CPR',
    name: '추풍령',
    inOperation: false,
    lat: 36.2211,
    lon: 127.9719
  },
  {
    code: 'CPR2',
    name: '추풍령',
    inOperation: true,
    lat: 36.2211,
    lon: 127.9718
  },
  {
    code: 'CSDB',
    name: '청산도',
    inOperation: true,
    lat: 34.1811,
    lon: 126.8956
  },
  {
    code: 'CSO',
    name: '청송',
    inOperation: false,
    lat: 36.3918,
    lon: 129.0794
  },
  {
    code: 'CSOA',
    name: '청송',
    inOperation: true,
    lat: 36.3878,
    lon: 129.0854
  },
  {
    code: 'CWO',
    name: '철원',
    inOperation: false,
    lat: 38.0835,
    lon: 127.5205
  },
  {
    code: 'CWO2',
    name: '철원',
    inOperation: true,
    lat: 38.0834,
    lon: 127.5204
  },
  {
    code: 'DACB',
    name: '대청도',
    inOperation: false,
    lat: 37.8318,
    lon: 124.7068
  },
  { code: 'DAG', name: '대구', inOperation: false, lat: 35.7685, lon: 128.897 },
  {
    code: 'DAG2',
    name: '경산',
    inOperation: false,
    lat: 35.7685,
    lon: 128.8971
  },
  {
    code: 'DAGA',
    name: '대구',
    inOperation: true,
    lat: 35.8788,
    lon: 128.6527
  },
  {
    code: 'DAU',
    name: '대구',
    inOperation: false,
    lat: 35.8856,
    lon: 128.6188
  },
  {
    code: 'DAYA',
    name: '담양',
    inOperation: true,
    lat: 35.310266,
    lon: 126.972796
  },
  {
    code: 'DDC',
    name: '동두천',
    inOperation: false,
    lat: 37.9021,
    lon: 127.0611
  },
  {
    code: 'DDCA',
    name: '동두천',
    inOperation: true,
    lat: 37.902,
    lon: 127.061
  },
  {
    code: 'DDCB',
    name: '대청도',
    inOperation: true,
    lat: 37.8317,
    lon: 124.7069
  },
  {
    code: 'DEI',
    name: '덕적도',
    inOperation: false,
    lat: 37.2559,
    lon: 126.1049
  },
  {
    code: 'DEI2',
    name: '덕적도',
    inOperation: true,
    lat: 37.2557,
    lon: 126.1048
  },
  {
    code: 'DGHA',
    name: '동향',
    inOperation: true,
    lat: 35.8352,
    lon: 127.5711
  },
  {
    code: 'DGJA',
    name: '당진',
    inOperation: true,
    lat: 36.8894,
    lon: 126.6174
  },
  {
    code: 'DGLA',
    name: '동로',
    inOperation: true,
    lat: 36.7907,
    lon: 128.2706
  },
  {
    code: 'DGY',
    name: '대관령',
    inOperation: false,
    lat: 37.6904,
    lon: 128.6742
  },
  {
    code: 'DGY2',
    name: '대관령',
    inOperation: false,
    lat: 37.6904,
    lon: 128.6742
  },
  {
    code: 'DKSA',
    name: '덕산',
    inOperation: true,
    lat: 36.9044,
    lon: 128.1456
  },
  {
    code: 'DNBA',
    name: '단북',
    inOperation: true,
    lat: 36.3906,
    lon: 128.4284
  },
  {
    code: 'DNYA',
    name: '단양',
    inOperation: true,
    lat: 36.9877,
    lon: 128.3559
  },
  {
    code: 'DUSB',
    name: '덕유산',
    inOperation: true,
    lat: 35.8942,
    lon: 127.7731
  },
  {
    code: 'ECDB',
    name: '어청도',
    inOperation: true,
    lat: 36.1183,
    lon: 125.9797
  },
  {
    code: 'EMSB',
    name: '음성',
    inOperation: false,
    lat: 36.9737,
    lon: 127.6237
  },
  {
    code: 'EURB',
    name: '의령',
    inOperation: true,
    lat: 35.322492,
    lon: 128.288222
  },
  {
    code: 'EUS',
    name: '의성',
    inOperation: false,
    lat: 36.3563,
    lon: 128.6887
  },
  {
    code: 'EUSB',
    name: '의성',
    inOperation: true,
    lat: 36.3561,
    lon: 128.6887
  },
  {
    code: 'GACA',
    name: '개천',
    inOperation: true,
    lat: 35.1136,
    lon: 128.3071
  },
  {
    code: 'GAGA',
    name: '가곡',
    inOperation: true,
    lat: 37.1306,
    lon: 129.1696
  },
  {
    code: 'GAH',
    name: '강화',
    inOperation: false,
    lat: 37.7074,
    lon: 126.4466
  },
  {
    code: 'GAHB',
    name: '강화',
    inOperation: false,
    lat: 37.7077,
    lon: 126.4464
  },
  {
    code: 'GAPB',
    name: '가평',
    inOperation: true,
    lat: 37.8442,
    lon: 127.4949
  },
  {
    code: 'GBI',
    name: '격비',
    inOperation: false,
    lat: 36.6255,
    lon: 125.5596
  },
  {
    code: 'GBI2',
    name: '격비',
    inOperation: true,
    lat: 36.6255,
    lon: 125.559515
  },
  {
    code: 'GDDB',
    name: '가덕도',
    inOperation: true,
    lat: 34.9931,
    lon: 128.8313
  },
  {
    code: 'GEJA',
    name: '거제',
    inOperation: true,
    lat: 34.998401,
    lon: 128.679686
  },
  {
    code: 'GEJB',
    name: '거진',
    inOperation: true,
    lat: 38.4165,
    lon: 128.3858
  },
  {
    code: 'GGDA',
    name: '강동',
    inOperation: true,
    lat: 35.9499,
    lon: 129.2531
  },
  {
    code: 'GGDB',
    name: '가거도',
    inOperation: true,
    lat: 34.0521917,
    lon: 125.126362
  },
  {
    code: 'GGGA',
    name: '강구',
    inOperation: true,
    lat: 36.3637,
    lon: 129.3908
  },
  {
    code: 'GGSA',
    name: '금강송',
    inOperation: true,
    lat: 36.9295,
    lon: 129.1518
  },
  {
    code: 'GGTA',
    name: '광탄',
    inOperation: true,
    lat: 37.7686,
    lon: 126.8991
  },
  {
    code: 'GH2B',
    name: '강화',
    inOperation: true,
    lat: 37.7076,
    lon: 126.446435
  },
  {
    code: 'GIC',
    name: '김천',
    inOperation: false,
    lat: 36.0798,
    lon: 128.1024
  },
  {
    code: 'GICA',
    name: '김천',
    inOperation: true,
    lat: 36.0812,
    lon: 128.1016
  },
  {
    code: 'GIGA',
    name: '기계',
    inOperation: true,
    lat: 36.0689,
    lon: 129.1996
  },
  {
    code: 'GIJA',
    name: '김제',
    inOperation: true,
    lat: 35.796622,
    lon: 126.902045
  },
  {
    code: 'GKSA',
    name: '곡성',
    inOperation: true,
    lat: 35.2304,
    lon: 127.2252
  },
  {
    code: 'GLCA',
    name: '갈천',
    inOperation: true,
    lat: 37.9049,
    lon: 128.5207
  },
  { code: 'GLSA', name: '결성', inOperation: true, lat: 36.5255, lon: 126.545 },
  {
    code: 'GMDB',
    name: '거문도',
    inOperation: true,
    lat: 34.0408,
    lon: 127.2882
  },
  { code: 'GMHB', name: '김화', inOperation: true, lat: 38.25, lon: 127.421 },
  {
    code: 'GMNA',
    name: '금남',
    inOperation: true,
    lat: 34.9832,
    lon: 127.8946
  },
  {
    code: 'GMPB',
    name: '김포',
    inOperation: true,
    lat: 37.6421,
    lon: 126.6756
  },
  {
    code: 'GOBA',
    name: '고북',
    inOperation: true,
    lat: 36.657064,
    lon: 126.544051
  },
  {
    code: 'GOCB',
    name: '고창',
    inOperation: true,
    lat: 35.348448,
    lon: 126.598183
  },
  {
    code: 'GODA',
    name: '교동',
    inOperation: true,
    lat: 37.7894,
    lon: 126.2915
  },
  { code: 'GOS', name: '고산', inOperation: false, lat: 33.294, lon: 126.1628 },
  {
    code: 'GOS(P)',
    name: '고산',
    inOperation: false,
    lat: 33.2938,
    lon: 126.1628
  },
  { code: 'GOS1', name: '고산', inOperation: false, lat: 33.3003, lon: 126.21 },
  {
    code: 'GOS2',
    name: '고산',
    inOperation: false,
    lat: 33.3002,
    lon: 126.2061
  },
  {
    code: 'GOSF',
    name: '고산',
    inOperation: true,
    lat: 33.302741,
    lon: 126.182302
  },
  {
    code: 'GSG',
    name: '강서구',
    inOperation: false,
    lat: 37.5484,
    lon: 126.8446
  },
  {
    code: 'GSGA',
    name: '강서구',
    inOperation: true,
    lat: 37.5516,
    lon: 126.8443
  },
  {
    code: 'GSNA',
    name: '경주산내',
    inOperation: true,
    lat: 35.7576,
    lon: 129.0109
  },
  {
    code: 'GUJA',
    name: '구좌',
    inOperation: true,
    lat: 33.5504,
    lon: 126.7503
  },
  {
    code: 'GUM',
    name: '구미',
    inOperation: false,
    lat: 36.2348,
    lon: 128.2903
  },
  {
    code: 'GUMA',
    name: '구미',
    inOperation: true,
    lat: 36.2347,
    lon: 128.2902
  },
  { code: 'GUS', name: '서천', inOperation: false, lat: 36.0372, lon: 126.782 },
  {
    code: 'GUS(P)',
    name: '군산',
    inOperation: false,
    lat: 36.0371,
    lon: 126.7819
  },
  {
    code: 'GUWB',
    name: '군위',
    inOperation: true,
    lat: 36.18242,
    lon: 128.5932
  },
  { code: 'GWJ', name: '광주', inOperation: false, lat: 35.173, lon: 126.8915 },
  {
    code: 'GWL',
    name: '사북',
    inOperation: false,
    lat: 37.2071,
    lon: 128.8236
  },
  {
    code: 'GWLA',
    name: '사북',
    inOperation: true,
    lat: 37.2195,
    lon: 128.8212
  },
  {
    code: 'GWYB',
    name: '광양',
    inOperation: true,
    lat: 34.943289,
    lon: 127.691414
  },
  {
    code: 'HA2B',
    name: '한림',
    inOperation: true,
    lat: 33.3925,
    lon: 126.2582
  },
  {
    code: 'HAC',
    name: '합천',
    inOperation: false,
    lat: 35.5651,
    lon: 128.1698
  },
  {
    code: 'HACA',
    name: '삼가',
    inOperation: true,
    lat: 35.4135383,
    lon: 128.1016417
  },
  {
    code: 'HAD',
    name: '하동',
    inOperation: false,
    lat: 35.0797,
    lon: 127.7697
  },
  {
    code: 'HAIA',
    name: '하일',
    inOperation: true,
    lat: 34.9444,
    lon: 128.1928
  },
  {
    code: 'HALB',
    name: '한림',
    inOperation: false,
    lat: 33.4021,
    lon: 126.273
  },
  {
    code: 'HAMB',
    name: '함양',
    inOperation: true,
    lat: 35.5115544,
    lon: 127.745693
  },
  {
    code: 'HAN',
    name: '해남',
    inOperation: false,
    lat: 34.5538,
    lon: 126.5691
  },
  { code: 'HANB', name: '해남', inOperation: true, lat: 34.554, lon: 126.5688 },
  { code: 'HAWA', name: '화원', inOperation: true, lat: 34.671, lon: 126.3283 },
  {
    code: 'HAWB',
    name: '화성',
    inOperation: true,
    lat: 37.084445,
    lon: 126.773925
  },
  { code: 'HCNA', name: '합천', inOperation: true, lat: 35.5652, lon: 128.17 },
  {
    code: 'HEDA',
    name: '하의도',
    inOperation: true,
    lat: 34.6064,
    lon: 126.0365
  },
  { code: 'HES', name: '횡성', inOperation: false, lat: 37.493, lon: 127.993 },
  {
    code: 'HESA',
    name: '횡성',
    inOperation: true,
    lat: 37.5406,
    lon: 127.9565
  },
  {
    code: 'HGDB',
    name: '홍도',
    inOperation: true,
    lat: 34.7068,
    lon: 125.2012
  },
  {
    code: 'HGSA',
    name: '홍성',
    inOperation: true,
    lat: 36.6579,
    lon: 126.6879
  },
  {
    code: 'HMGA',
    name: '호미곶',
    inOperation: true,
    lat: 36.0761,
    lon: 129.5666
  },
  {
    code: 'HMPA',
    name: '함평',
    inOperation: true,
    lat: 35.1413,
    lon: 126.6176
  },
  {
    code: 'HOC',
    name: '홍천',
    inOperation: false,
    lat: 37.6838,
    lon: 127.8803
  },
  {
    code: 'HOCA',
    name: '홍천',
    inOperation: true,
    lat: 37.6838,
    lon: 127.8801
  },
  {
    code: 'HONA',
    name: '회남',
    inOperation: true,
    lat: 36.4457,
    lon: 127.5791
  },
  {
    code: 'HSJB',
    name: '세종',
    inOperation: true,
    lat: 36.5668,
    lon: 127.2804
  },
  {
    code: 'HTDA',
    name: '하태도',
    inOperation: true,
    lat: 34.3908,
    lon: 125.2986
  },
  {
    code: 'HUK',
    name: '흑산도',
    inOperation: false,
    lat: 34.6871,
    lon: 125.4504
  },
  {
    code: 'HUK2',
    name: '흑산도',
    inOperation: false,
    lat: 34.6872,
    lon: 125.4504
  },
  { code: 'HWCA', name: '간동', inOperation: true, lat: 38.065, lon: 127.7746 },
  {
    code: 'HWCB',
    name: '화천',
    inOperation: false,
    lat: 38.2324,
    lon: 127.6888
  },
  {
    code: 'HWDB',
    name: '화도',
    inOperation: true,
    lat: 37.6322,
    lon: 127.3404
  },
  {
    code: 'HWSA',
    name: '화서',
    inOperation: true,
    lat: 36.4412,
    lon: 127.9441
  },
  {
    code: 'HYDA',
    name: '현동',
    inOperation: true,
    lat: 36.283577,
    lon: 129.019264
  },
  {
    code: 'ICH',
    name: '이천',
    inOperation: false,
    lat: 37.2639,
    lon: 127.4842
  },
  {
    code: 'ICN',
    name: '이천',
    inOperation: false,
    lat: 37.2907,
    lon: 127.4167
  },
  {
    code: 'ICN2',
    name: '이천',
    inOperation: true,
    lat: 37.2908,
    lon: 127.4167
  },
  {
    code: 'IJA',
    name: '인제',
    inOperation: false,
    lat: 37.9866,
    lon: 128.1111
  },
  {
    code: 'IJA2',
    name: '인제',
    inOperation: true,
    lat: 37.9866,
    lon: 128.1111
  },
  {
    code: 'IJAA',
    name: '기린',
    inOperation: true,
    lat: 37.9471,
    lon: 128.3248
  },
  {
    code: 'IJBA',
    name: '인제북',
    inOperation: true,
    lat: 38.1208,
    lon: 128.3173
  },
  {
    code: 'IJDB',
    name: '임자도',
    inOperation: true,
    lat: 35.1028,
    lon: 126.0651
  },
  {
    code: 'IKSA',
    name: '익산',
    inOperation: true,
    lat: 36.0592,
    lon: 127.0619
  },
  {
    code: 'IKSB',
    name: '익산금강',
    inOperation: true,
    lat: 35.9355,
    lon: 126.9747
  },
  {
    code: 'IMS',
    name: '임실',
    inOperation: false,
    lat: 35.6125,
    lon: 127.2859
  },
  {
    code: 'IMSA',
    name: '임실',
    inOperation: false,
    lat: 35.6125,
    lon: 127.2854
  },
  {
    code: 'IMSB',
    name: '임실',
    inOperation: true,
    lat: 35.6124,
    lon: 127.2854
  },
  {
    code: 'IMWB',
    name: '임원',
    inOperation: true,
    lat: 37.237934,
    lon: 129.342076
  },
  {
    code: 'INC',
    name: '인천',
    inOperation: false,
    lat: 37.4776,
    lon: 126.6239
  },
  { code: 'INCA', name: '인천', inOperation: true, lat: 37.4777, lon: 126.624 },
  {
    code: 'INJ',
    name: '인제',
    inOperation: false,
    lat: 38.0601,
    lon: 128.1667
  },
  {
    code: 'INJA',
    name: '안중',
    inOperation: true,
    lat: 36.993,
    lon: 126.918474
  },
  {
    code: 'IPTA',
    name: '평택',
    inOperation: true,
    lat: 36.996887,
    lon: 127.135381
  },
  {
    code: 'ISGB',
    name: '익산금강',
    inOperation: false,
    lat: 35.9345,
    lon: 126.9741
  },
  {
    code: 'ISHB',
    name: '시흥',
    inOperation: true,
    lat: 37.348832,
    lon: 126.70386
  },
  {
    code: 'IYIB',
    name: '용인',
    inOperation: true,
    lat: 37.2708,
    lon: 127.2317
  },
  {
    code: 'IYPA',
    name: '양평',
    inOperation: true,
    lat: 37.491441,
    lon: 127.521814
  },
  { code: 'JAEA', name: '재산', inOperation: true, lat: 36.8, lon: 128.9903 },
  {
    code: 'JAEB',
    name: '자은',
    inOperation: true,
    lat: 34.879054,
    lon: 126.028758
  },
  {
    code: 'JAGA',
    name: '장성',
    inOperation: true,
    lat: 35.3196,
    lon: 126.8107
  },
  {
    code: 'JAH',
    name: '장흥',
    inOperation: false,
    lat: 34.6889,
    lon: 126.9195
  },
  { code: 'JAHA', name: '장흥', inOperation: true, lat: 34.689, lon: 126.9194 },
  {
    code: 'JAS',
    name: '장수',
    inOperation: false,
    lat: 35.6571,
    lon: 127.5204
  },
  {
    code: 'JASA',
    name: '장수',
    inOperation: true,
    lat: 35.6571,
    lon: 127.5204
  },
  {
    code: 'JCUA',
    name: '주천',
    inOperation: true,
    lat: 37.2753,
    lon: 128.2694
  },
  {
    code: 'JDGB',
    name: '대관령',
    inOperation: true,
    lat: 37.690417,
    lon: 128.674248
  },
  { code: 'JDO', name: '진도', inOperation: false, lat: 34.473, lon: 126.3239 },
  { code: 'JDO2', name: '진도', inOperation: true, lat: 34.473, lon: 126.3238 },
  {
    code: 'JEC',
    name: '제천',
    inOperation: false,
    lat: 37.1595,
    lon: 128.1943
  },
  {
    code: 'JECB',
    name: '제천',
    inOperation: true,
    lat: 37.1595,
    lon: 128.1945
  },
  {
    code: 'JEDA',
    name: '증도',
    inOperation: true,
    lat: 35.001844,
    lon: 126.101988
  },
  {
    code: 'JEJB',
    name: '정자',
    inOperation: true,
    lat: 35.6374,
    lon: 129.4411
  },
  {
    code: 'JEO',
    name: '완주',
    inOperation: false,
    lat: 35.9378,
    lon: 127.2928
  },
  {
    code: 'JEO(P)',
    name: '완주',
    inOperation: false,
    lat: 35.9378,
    lon: 127.2928
  },
  {
    code: 'JEO2',
    name: '완주',
    inOperation: false,
    lat: 35.9379,
    lon: 127.2928
  },
  {
    code: 'JES',
    name: '정선',
    inOperation: false,
    lat: 37.4303,
    lon: 128.6654
  },
  {
    code: 'JESA',
    name: '정선',
    inOperation: true,
    lat: 37.4303,
    lon: 128.6653
  },
  {
    code: 'JEU',
    name: '정읍',
    inOperation: false,
    lat: 35.4935,
    lon: 126.9298
  },
  {
    code: 'JEU2',
    name: '정읍',
    inOperation: true,
    lat: 35.49345,
    lon: 126.929807
  },
  {
    code: 'JGJA',
    name: '구정',
    inOperation: true,
    lat: 37.704719,
    lon: 128.913415
  },
  {
    code: 'JGNA',
    name: '증산',
    inOperation: true,
    lat: 35.8754,
    lon: 128.0485
  },
  {
    code: 'JHCB',
    name: '화천',
    inOperation: true,
    lat: 38.232183,
    lon: 127.688756
  },
  {
    code: 'JIN',
    name: '진주',
    inOperation: false,
    lat: 35.1615,
    lon: 128.0301
  },
  {
    code: 'JIN(P)',
    name: '진주',
    inOperation: false,
    lat: 35.1615,
    lon: 128.0301
  },
  {
    code: 'JINA',
    name: '진주',
    inOperation: true,
    lat: 35.1642,
    lon: 128.0402
  },
  {
    code: 'JJBA',
    name: '진부',
    inOperation: true,
    lat: 37.647925,
    lon: 128.564524
  },
  {
    code: 'JJU',
    name: '제주',
    inOperation: false,
    lat: 33.4306,
    lon: 126.5463
  },
  {
    code: 'JJU(P)',
    name: '제주',
    inOperation: false,
    lat: 33.4306,
    lon: 126.5463
  },
  {
    code: 'JJU2',
    name: '제주',
    inOperation: true,
    lat: 33.4305,
    lon: 126.5463
  },
  {
    code: 'JKJA',
    name: '죽장',
    inOperation: true,
    lat: 36.2421,
    lon: 129.2151
  },
  {
    code: 'JLSA',
    name: '지리산',
    inOperation: true,
    lat: 35.3574,
    lon: 127.648
  },
  {
    code: 'JMJ',
    name: '주문진',
    inOperation: false,
    lat: 37.8816,
    lon: 128.7561
  },
  {
    code: 'JMJ2',
    name: '주문진',
    inOperation: true,
    lat: 37.8816,
    lon: 128.7561
  },
  {
    code: 'JNHA',
    name: '진해',
    inOperation: true,
    lat: 35.1121,
    lon: 128.7536
  },
  {
    code: 'JNPA',
    name: '증평',
    inOperation: true,
    lat: 36.7956,
    lon: 127.5621
  },
  {
    code: 'JNUA',
    name: '전의',
    inOperation: true,
    lat: 36.6908,
    lon: 127.2005
  },
  {
    code: 'JNYA',
    name: '진영',
    inOperation: true,
    lat: 35.2822,
    lon: 128.7175
  },
  {
    code: 'JODB',
    name: '조도',
    inOperation: true,
    lat: 34.3115,
    lon: 126.0437
  },
  {
    code: 'JOGB',
    name: '옥계',
    inOperation: true,
    lat: 37.621027,
    lon: 128.980129
  },
  {
    code: 'JOU',
    name: '정읍',
    inOperation: false,
    lat: 35.5561,
    lon: 126.8676
  },
  {
    code: 'JSTB',
    name: '정선특별관측소',
    inOperation: true,
    lat: 37.19218,
    lon: 128.66809
  },
  { code: 'JUCA', name: '주촌', inOperation: true, lat: 35.2423, lon: 128.828 },
  {
    code: 'JUR',
    name: '중랑구',
    inOperation: false,
    lat: 37.6135,
    lon: 127.0884
  },
  {
    code: 'JURA',
    name: '중랑구',
    inOperation: true,
    lat: 37.6147,
    lon: 127.0868
  },
  {
    code: 'JWJB',
    name: '원주',
    inOperation: true,
    lat: 37.415544,
    lon: 128.050498
  },
  {
    code: 'KAN',
    name: '강릉',
    inOperation: false,
    lat: 37.7425,
    lon: 128.8893
  },
  {
    code: 'KAW',
    name: '강릉',
    inOperation: false,
    lat: 37.8052,
    lon: 128.8548
  },
  {
    code: 'KAWA',
    name: '강릉',
    inOperation: true,
    lat: 37.8052,
    lon: 128.8548
  },
  { code: 'KCH', name: '거창', inOperation: false, lat: 35.614, lon: 127.9188 },
  { code: 'KCH2', name: '거창', inOperation: true, lat: 35.614, lon: 127.9188 },
  {
    code: 'KESB',
    name: '음성',
    inOperation: true,
    lat: 36.953658,
    lon: 127.604785
  },
  {
    code: 'KH2B',
    name: '고흥',
    inOperation: true,
    lat: 34.6185,
    lon: 127.2757
  },
  {
    code: 'KKDA',
    name: '거금도',
    inOperation: true,
    lat: 34.4557,
    lon: 127.1222
  },
  {
    code: 'KMS',
    name: '금산',
    inOperation: false,
    lat: 36.1058,
    lon: 127.4816
  },
  {
    code: 'KMSA',
    name: '금산',
    inOperation: false,
    lat: 36.1059,
    lon: 127.4816
  },
  {
    code: 'KMSB',
    name: '금산',
    inOperation: true,
    lat: 36.1059,
    lon: 127.4816
  },
  { code: 'KOH', name: '고흥', inOperation: false, lat: 34.609, lon: 127.2733 },
  {
    code: 'KOHB',
    name: '고흥',
    inOperation: false,
    lat: 34.6185,
    lon: 127.2758
  },
  {
    code: 'KOJ',
    name: '공주',
    inOperation: false,
    lat: 36.4708,
    lon: 127.1447
  },
  {
    code: 'KOJ(P)',
    name: '공주',
    inOperation: false,
    lat: 36.4708,
    lon: 127.1447
  },
  {
    code: 'KOJ2',
    name: '공주',
    inOperation: false,
    lat: 36.4708,
    lon: 127.1447
  },
  {
    code: 'KOSB',
    name: '고성',
    inOperation: true,
    lat: 38.6028,
    lon: 128.3595
  },
  {
    code: 'KUC',
    name: '거창',
    inOperation: false,
    lat: 35.6676,
    lon: 127.9079
  },
  {
    code: 'KUJ',
    name: '거제',
    inOperation: false,
    lat: 34.8884,
    lon: 128.6047
  },
  {
    code: 'KUJA',
    name: '거제',
    inOperation: false,
    lat: 34.8885,
    lon: 128.6047
  },
  {
    code: 'KUM',
    name: '구미',
    inOperation: false,
    lat: 36.1232,
    lon: 128.3203
  },
  {
    code: 'KUS',
    name: '군산',
    inOperation: false,
    lat: 36.0168,
    lon: 126.8336
  },
  {
    code: 'KWJ',
    name: '무등산',
    inOperation: false,
    lat: 35.1599,
    lon: 126.9911
  },
  {
    code: 'KWJ2',
    name: '무등산',
    inOperation: true,
    lat: 35.1599,
    lon: 126.9911
  },
  {
    code: 'KWJU',
    name: '무등(초)',
    inOperation: true,
    lat: 35.1599,
    lon: 126.9911
  },
  {
    code: 'LIWA',
    name: '이원',
    inOperation: true,
    lat: 36.2482,
    lon: 127.6137
  },
  {
    code: 'LMGA',
    name: '임계',
    inOperation: true,
    lat: 37.4918,
    lon: 128.8637
  },
  {
    code: 'MALA',
    name: '마령',
    inOperation: true,
    lat: 35.7445,
    lon: 127.3477
  },
  {
    code: 'MAN',
    name: '무안',
    inOperation: false,
    lat: 35.0939,
    lon: 126.2849
  },
  { code: 'MANA', name: '무안', inOperation: true, lat: 35.0941, lon: 126.285 },
  {
    code: 'MAS',
    name: '마산',
    inOperation: false,
    lat: 35.1703,
    lon: 128.5722
  },
  {
    code: 'MAS(P)',
    name: '마산',
    inOperation: false,
    lat: 35.1706,
    lon: 128.5725
  },
  {
    code: 'MAS(PP)',
    name: '마산',
    inOperation: false,
    lat: 35.1855,
    lon: 128.567
  },
  {
    code: 'MAS2',
    name: '마산',
    inOperation: false,
    lat: 35.1703,
    lon: 128.5721
  },
  {
    code: 'MGY',
    name: '문경',
    inOperation: false,
    lat: 36.6552,
    lon: 128.0608
  },
  {
    code: 'MGY2',
    name: '문경',
    inOperation: true,
    lat: 36.6551667,
    lon: 128.060783
  },
  {
    code: 'MIY',
    name: '밀양',
    inOperation: false,
    lat: 35.4916,
    lon: 128.7444
  },
  {
    code: 'MIYA',
    name: '밀양',
    inOperation: false,
    lat: 35.4916,
    lon: 128.7444
  },
  {
    code: 'MJDB',
    name: '만재도',
    inOperation: true,
    lat: 34.2074,
    lon: 125.469
  },
  { code: 'MLGA', name: '물금', inOperation: true, lat: 35.3113, lon: 128.997 },
  {
    code: 'MMD',
    name: '매물도',
    inOperation: true,
    lat: 34.6488,
    lon: 128.5769
  },
  {
    code: 'MND',
    name: '무녀도',
    inOperation: true,
    lat: 35.8043,
    lon: 126.4242
  },
  {
    code: 'MNDB',
    name: '문덕',
    inOperation: true,
    lat: 34.966515,
    lon: 127.160857
  },
  {
    code: 'MOGA',
    name: '모곡',
    inOperation: true,
    lat: 37.6962,
    lon: 127.5825
  },
  {
    code: 'MOK',
    name: '영암',
    inOperation: false,
    lat: 34.7656,
    lon: 126.7379
  },
  {
    code: 'MOK(P)',
    name: '목포',
    inOperation: false,
    lat: 34.8169,
    lon: 126.3812
  },
  {
    code: 'MOP',
    name: '목포',
    inOperation: false,
    lat: 34.8169,
    lon: 126.3809
  },
  {
    code: 'MOP(P)',
    name: '목포',
    inOperation: false,
    lat: 34.8083,
    lon: 126.3766
  },
  {
    code: 'MOPB',
    name: '목포',
    inOperation: true,
    lat: 34.8173,
    lon: 126.3812
  },
  {
    code: 'MSMB',
    name: '새만금',
    inOperation: true,
    lat: 35.689173,
    lon: 126.556217
  },
  {
    code: 'MSNA',
    name: '밀양산내',
    inOperation: true,
    lat: 35.5884,
    lon: 128.9539
  },
  {
    code: 'MUG',
    name: '문경',
    inOperation: false,
    lat: 36.6274,
    lon: 128.1488
  },
  {
    code: 'MUS',
    name: '문산',
    inOperation: false,
    lat: 37.8862,
    lon: 126.7657
  },
  {
    code: 'MUS2',
    name: '문산',
    inOperation: true,
    lat: 37.8862,
    lon: 126.7656
  },
  { code: 'NACA', name: '내초', inOperation: true, lat: 35.9505, lon: 126.591 },
  {
    code: 'NAH',
    name: '남해',
    inOperation: false,
    lat: 34.8167,
    lon: 127.9262
  },
  {
    code: 'NAHA',
    name: '남해',
    inOperation: true,
    lat: 34.8167,
    lon: 127.9261
  },
  {
    code: 'NAJ',
    name: '나주',
    inOperation: false,
    lat: 35.0261,
    lon: 126.8265
  },
  {
    code: 'NAJA',
    name: '나주',
    inOperation: true,
    lat: 35.0261,
    lon: 126.8264
  },
  {
    code: 'NAMB',
    name: '내면',
    inOperation: true,
    lat: 37.7711,
    lon: 128.3863
  },
  {
    code: 'NAW',
    name: '남원',
    inOperation: false,
    lat: 35.4056,
    lon: 127.3329
  },
  {
    code: 'NAWB',
    name: '남원',
    inOperation: true,
    lat: 35.42117,
    lon: 127.396272
  },
  {
    code: 'NCNA',
    name: '내촌',
    inOperation: true,
    lat: 37.8197,
    lon: 128.0919
  },
  {
    code: 'NGJA',
    name: '강진',
    inOperation: true,
    lat: 34.644516,
    lon: 126.784051
  },
  {
    code: 'NHPA',
    name: '함평남',
    inOperation: true,
    lat: 35.060394,
    lon: 126.527374
  },
  {
    code: 'NHSB',
    name: '흑산도',
    inOperation: true,
    lat: 34.687072,
    lon: 125.450413
  },
  {
    code: 'NJDA',
    name: '난지도',
    inOperation: true,
    lat: 37.0503,
    lon: 126.4221
  },
  {
    code: 'NLDA',
    name: '나로도',
    inOperation: true,
    lat: 34.5326,
    lon: 127.4673
  },
  {
    code: 'NOSA',
    name: '노성',
    inOperation: true,
    lat: 36.2836,
    lon: 127.1272
  },
  {
    code: 'NOW',
    name: '노원구',
    inOperation: false,
    lat: 37.6864,
    lon: 127.0693
  },
  {
    code: 'NPGA',
    name: '팔금',
    inOperation: true,
    lat: 34.786946,
    lon: 126.147751
  },
  {
    code: 'NSJA',
    name: '송지',
    inOperation: true,
    lat: 34.381934,
    lon: 126.515861
  },
  {
    code: 'NYSA',
    name: '약산',
    inOperation: true,
    lat: 34.378096,
    lon: 126.88675
  },
  {
    code: 'OADB',
    name: '안동',
    inOperation: true,
    lat: 36.524538,
    lon: 128.831413
  },
  {
    code: 'OGSB',
    name: '경산',
    inOperation: true,
    lat: 35.7685,
    lon: 128.8971
  },
  {
    code: 'OHBA',
    name: '화북',
    inOperation: true,
    lat: 36.138884,
    lon: 128.994749
  },
  {
    code: 'OJSA',
    name: '경북장수',
    inOperation: true,
    lat: 36.786901,
    lon: 128.571418
  },
  {
    code: 'OKCB',
    name: '옥천',
    inOperation: true,
    lat: 36.34626,
    lon: 127.79412
  },
  {
    code: 'OKEB',
    name: '옥계',
    inOperation: false,
    lat: 37.6209,
    lon: 128.9802
  },
  {
    code: 'OOJB',
    name: '온정',
    inOperation: true,
    lat: 36.701999,
    lon: 129.408396
  },
  {
    code: 'OPHB',
    name: '포항',
    inOperation: true,
    lat: 36.190497,
    lon: 129.339183
  },
  {
    code: 'OPSA',
    name: '풍산',
    inOperation: true,
    lat: 36.580989,
    lon: 128.560634
  },
  {
    code: 'OSBA',
    name: '소보',
    inOperation: true,
    lat: 36.276214,
    lon: 128.466333
  },
  {
    code: 'OUJA',
    name: '울진북',
    inOperation: true,
    lat: 37.11573,
    lon: 129.370242
  },
  {
    code: 'OWSA',
    name: '황성',
    inOperation: true,
    lat: 35.863047,
    lon: 129.209289
  },
  {
    code: 'OYDB',
    name: '외연도',
    inOperation: true,
    lat: 36.2294,
    lon: 126.0757
  },
  { code: 'PGEA', name: '평은', inOperation: true, lat: 36.7559, lon: 128.692 },
  {
    code: 'PHA',
    name: '포항',
    inOperation: false,
    lat: 36.1929,
    lon: 129.3708
  },
  {
    code: 'PHA2',
    name: '포항',
    inOperation: false,
    lat: 36.193,
    lon: 129.3708
  },
  { code: 'PHDA', name: '하동', inOperation: true, lat: 35.1287, lon: 127.745 },
  {
    code: 'PMNM',
    name: '문내(현장)',
    inOperation: false,
    lat: 34.59,
    lon: 126.31
  },
  {
    code: 'PMYA',
    name: '밀양',
    inOperation: true,
    lat: 35.501783,
    lon: 128.760554
  },
  {
    code: 'POH',
    name: '포항',
    inOperation: false,
    lat: 36.0245,
    lon: 129.3758
  },
  {
    code: 'POR',
    name: '보령',
    inOperation: false,
    lat: 36.3276,
    lon: 126.5575
  },
  {
    code: 'PORA',
    name: '보령',
    inOperation: true,
    lat: 36.327826,
    lon: 126.557519
  },
  {
    code: 'PTK',
    name: '평택',
    inOperation: false,
    lat: 36.9859,
    lon: 127.1077
  },
  {
    code: 'PTYC',
    name: '통영',
    inOperation: true,
    lat: 34.85075,
    lon: 128.4375733
  },
  {
    code: 'PUA',
    name: '부안',
    inOperation: false,
    lat: 35.7298,
    lon: 126.7166
  },
  {
    code: 'PUAA',
    name: '부안',
    inOperation: true,
    lat: 35.7295,
    lon: 126.7167
  },
  {
    code: 'PUYA',
    name: '풍양',
    inOperation: true,
    lat: 36.56179,
    lon: 128.306132
  },
  {
    code: 'PYC',
    name: '평창',
    inOperation: false,
    lat: 37.3713,
    lon: 128.3907
  },
  { code: 'PYCA', name: '면온', inOperation: true, lat: 37.562, lon: 128.3778 },
  {
    code: 'PYCB',
    name: '평창',
    inOperation: true,
    lat: 37.3774,
    lon: 128.3946
  },
  {
    code: 'PYSB',
    name: '표선',
    inOperation: true,
    lat: 33.3536,
    lon: 126.8167
  },
  {
    code: 'SAC',
    name: '산청',
    inOperation: false,
    lat: 35.4131,
    lon: 127.8789
  },
  {
    code: 'SACA',
    name: '산청',
    inOperation: true,
    lat: 35.4131,
    lon: 127.8789
  },
  {
    code: 'SAJ',
    name: '상주',
    inOperation: false,
    lat: 36.4079,
    lon: 128.1576
  },
  {
    code: 'SAJA',
    name: '상주',
    inOperation: false,
    lat: 36.4078,
    lon: 128.1575
  },
  {
    code: 'SAJB',
    name: '상주',
    inOperation: true,
    lat: 36.4079,
    lon: 128.1575
  },
  { code: 'SCH', name: '순천', inOperation: false, lat: 35.065, lon: 127.2406 },
  {
    code: 'SCHA',
    name: '순천',
    inOperation: true,
    lat: 35.0199,
    lon: 127.3692
  },
  { code: 'SECA', name: '서천', inOperation: true, lat: 36.142, lon: 126.7519 },
  {
    code: 'SEHB',
    name: '서화',
    inOperation: false,
    lat: 38.2686,
    lon: 128.2525
  },
  {
    code: 'SEJA',
    name: '성주',
    inOperation: true,
    lat: 35.947423,
    lon: 128.21703
  },
  {
    code: 'SENA',
    name: '성내',
    inOperation: true,
    lat: 35.538485,
    lon: 126.742386
  },
  {
    code: 'SEO',
    name: '서울',
    inOperation: false,
    lat: 37.4879,
    lon: 126.9188
  },
  {
    code: 'SEO2',
    name: '서울',
    inOperation: false,
    lat: 37.4939,
    lon: 126.9171
  },
  { code: 'SEO3', name: '서울', inOperation: true, lat: 37.4939, lon: 126.917 },
  {
    code: 'SES',
    name: '서산',
    inOperation: false,
    lat: 36.7893,
    lon: 126.4531
  },
  {
    code: 'SES2',
    name: '서산',
    inOperation: false,
    lat: 36.7893,
    lon: 126.4531
  },
  {
    code: 'SESA',
    name: '서석',
    inOperation: true,
    lat: 37.7196,
    lon: 128.1735
  },
  { code: 'SGMA', name: '상면', inOperation: true, lat: 37.8282, lon: 127.288 },
  {
    code: 'SGNA',
    name: '성남',
    inOperation: true,
    lat: 37.4461,
    lon: 127.1832
  },
  {
    code: 'SGP',
    name: '서귀포',
    inOperation: false,
    lat: 33.2587,
    lon: 126.4994
  },
  {
    code: 'SGP(P)',
    name: '서귀포',
    inOperation: false,
    lat: 33.2587,
    lon: 126.4994
  },
  {
    code: 'SGP2',
    name: '서귀포',
    inOperation: true,
    lat: 33.2587,
    lon: 126.4993
  },
  {
    code: 'SH2B',
    name: '서화',
    inOperation: true,
    lat: 38.2685,
    lon: 128.2524
  },
  {
    code: 'SHHB',
    name: '시흥',
    inOperation: false,
    lat: 37.3488,
    lon: 126.7039
  },
  {
    code: 'SIJA',
    name: '시종',
    inOperation: true,
    lat: 34.8954483,
    lon: 126.588043
  },
  { code: 'SKBA', name: '석보', inOperation: true, lat: 36.521, lon: 129.1791 },
  {
    code: 'SKC',
    name: '속초',
    inOperation: false,
    lat: 38.2899,
    lon: 128.5219
  },
  {
    code: 'SKC2',
    name: '속초',
    inOperation: true,
    lat: 38.2898,
    lon: 128.5219
  },
  {
    code: 'SLSA',
    name: '설성',
    inOperation: true,
    lat: 37.1349,
    lon: 127.5196
  },
  {
    code: 'SMKB',
    name: '새만금',
    inOperation: false,
    lat: 35.6891,
    lon: 126.5561
  },
  {
    code: 'SMWA',
    name: '심원',
    inOperation: true,
    lat: 35.5259,
    lon: 126.5522
  },
  {
    code: 'SNDA',
    name: '신동',
    inOperation: true,
    lat: 37.2617,
    lon: 128.5956
  },
  {
    code: 'SNGB',
    name: '신기',
    inOperation: true,
    lat: 37.3465,
    lon: 129.0865
  },
  {
    code: 'SNNA',
    name: '신녕',
    inOperation: true,
    lat: 36.0502,
    lon: 128.7111
  },
  {
    code: 'SNWA',
    name: '서귀포남원',
    inOperation: true,
    lat: 33.279813,
    lon: 126.705114
  },
  {
    code: 'SOC',
    name: '속초',
    inOperation: false,
    lat: 38.2422,
    lon: 128.5669
  },
  {
    code: 'SOD',
    name: '종로구',
    inOperation: false,
    lat: 37.5714,
    lon: 126.9661
  },
  {
    code: 'SODA',
    name: '종로구',
    inOperation: true,
    lat: 37.5714,
    lon: 126.9661
  },
  {
    code: 'SOG',
    name: '서귀포',
    inOperation: false,
    lat: 33.239,
    lon: 126.5671
  },
  {
    code: 'SSP',
    name: '성산',
    inOperation: false,
    lat: 37.4939,
    lon: 126.9171
  },
  {
    code: 'SUBA',
    name: '수비',
    inOperation: true,
    lat: 36.7826,
    lon: 129.2211
  },
  { code: 'SUC', name: '순천', inOperation: false, lat: 35.0698, lon: 127.238 },
  {
    code: 'SUCA',
    name: '순창',
    inOperation: true,
    lat: 35.373621,
    lon: 127.138635
  },
  {
    code: 'SUW',
    name: '수원',
    inOperation: false,
    lat: 37.2683,
    lon: 126.9856
  },
  {
    code: 'SWO',
    name: '수원',
    inOperation: false,
    lat: 37.2808,
    lon: 126.9823
  },
  {
    code: 'SWO2',
    name: '수원',
    inOperation: true,
    lat: 37.2808,
    lon: 126.9824
  },
  {
    code: 'TAB',
    name: '태백',
    inOperation: false,
    lat: 37.1672,
    lon: 128.9883
  },
  { code: 'TAG', name: '대구', inOperation: false, lat: 35.876, lon: 128.6194 },
  { code: 'TAHA', name: '태하', inOperation: true, lat: 37.515, lon: 120.8118 },
  {
    code: 'TAIA',
    name: '태인',
    inOperation: true,
    lat: 35.6507,
    lon: 126.9318
  },
  {
    code: 'TANB',
    name: '태안',
    inOperation: true,
    lat: 36.6731,
    lon: 126.1353
  },
  {
    code: 'TBA',
    name: '태백',
    inOperation: false,
    lat: 37.1226,
    lon: 128.9523
  },
  {
    code: 'TBA2',
    name: '태백',
    inOperation: true,
    lat: 37.1224,
    lon: 128.9523
  },
  {
    code: 'TEJ',
    name: '대전',
    inOperation: false,
    lat: 36.3725,
    lon: 127.3711
  },
  {
    code: 'TEJ2',
    name: '대전',
    inOperation: true,
    lat: 36.37249,
    lon: 127.371137
  },
  { code: 'TOH', name: '동해', inOperation: false, lat: 37.507, lon: 129.1238 },
  { code: 'TOHA', name: '동해', inOperation: true, lat: 37.507, lon: 129.1238 },
  {
    code: 'TOY',
    name: '통영',
    inOperation: false,
    lat: 34.8452,
    lon: 128.4361
  },
  {
    code: 'TOY(P)',
    name: '통영',
    inOperation: false,
    lat: 34.8454,
    lon: 128.4356
  },
  { code: 'UDO', name: '우도', inOperation: true, lat: 33.5227, lon: 126.9538 },
  {
    code: 'UJBA',
    name: '의정부',
    inOperation: true,
    lat: 37.7548,
    lon: 127.1063
  },
  { code: 'UJN', name: '울진', inOperation: false, lat: 36.992, lon: 129.413 },
  {
    code: 'UJNA',
    name: '울진',
    inOperation: true,
    lat: 36.9926,
    lon: 129.4135
  },
  {
    code: 'UL1',
    name: '울릉',
    inOperation: false,
    lat: 37.4809,
    lon: 130.8987
  },
  {
    code: 'ULDB',
    name: '울릉도',
    inOperation: false,
    lat: 37.4809,
    lon: 130.8987
  },
  {
    code: 'ULDR',
    name: '울릉도',
    inOperation: true,
    lat: 37.4809,
    lon: 130.8987
  },
  {
    code: 'ULJ',
    name: '울진',
    inOperation: false,
    lat: 36.7021,
    lon: 129.4084
  },
  {
    code: 'ULJ2',
    name: '온정',
    inOperation: false,
    lat: 36.7021,
    lon: 129.4083
  },
  {
    code: 'ULL',
    name: '울릉도',
    inOperation: false,
    lat: 37.4736,
    lon: 120.9008
  },
  {
    code: 'ULLB',
    name: '울릉도시추공',
    inOperation: false,
    lat: 37.5406,
    lon: 130.9169
  },
  {
    code: 'ULS',
    name: '울산',
    inOperation: false,
    lat: 35.5543,
    lon: 129.3202
  },
  {
    code: 'UNCA',
    name: '웅촌',
    inOperation: true,
    lat: 35.4695,
    lon: 129.2395
  },
  {
    code: 'USN',
    name: '울산',
    inOperation: false,
    lat: 35.7024,
    lon: 129.1232
  },
  {
    code: 'USN2',
    name: '울산',
    inOperation: true,
    lat: 35.7024,
    lon: 129.1232
  },
  {
    code: 'WAJB',
    name: '완주',
    inOperation: true,
    lat: 35.937821,
    lon: 127.293127
  },
  {
    code: 'WAN',
    name: '완도',
    inOperation: false,
    lat: 34.3959,
    lon: 126.7019
  },
  {
    code: 'WAN2',
    name: '완도',
    inOperation: true,
    lat: 34.3959,
    lon: 126.7019
  },
  {
    code: 'WICA',
    name: '위천',
    inOperation: true,
    lat: 35.7312,
    lon: 127.8015
  },
  {
    code: 'WJU',
    name: '원주',
    inOperation: false,
    lat: 37.4034,
    lon: 128.0526
  },
  {
    code: 'WJU2',
    name: '원주',
    inOperation: false,
    lat: 37.4034,
    lon: 128.0527
  },
  {
    code: 'WNBA',
    name: '원북',
    inOperation: true,
    lat: 36.8238,
    lon: 126.2572
  },
  {
    code: 'WON',
    name: '원주',
    inOperation: false,
    lat: 37.3342,
    lon: 127.9426
  },
  { code: 'YAGA', name: '양동', inOperation: true, lat: 37.407, lon: 127.7569 },
  {
    code: 'YALB',
    name: '야로',
    inOperation: true,
    lat: 35.7279,
    lon: 128.1934
  },
  {
    code: 'YAP',
    name: '양평',
    inOperation: false,
    lat: 37.4889,
    lon: 127.4943
  },
  {
    code: 'YAPA',
    name: '양평',
    inOperation: false,
    lat: 37.489,
    lon: 127.4942
  },
  {
    code: 'YAY',
    name: '양양',
    inOperation: false,
    lat: 38.0195,
    lon: 128.7232
  },
  {
    code: 'YAYA',
    name: '강현',
    inOperation: true,
    lat: 38.1438,
    lon: 128.6025
  },
  { code: 'YAYB', name: '양양', inOperation: true, lat: 38.0255, lon: 128.716 },
  {
    code: 'YC2B',
    name: '연천',
    inOperation: true,
    lat: 38.0398,
    lon: 126.9257
  },
  {
    code: 'YCH',
    name: '예천',
    inOperation: false,
    lat: 36.6296,
    lon: 128.4259
  },
  {
    code: 'YCHB',
    name: '예천',
    inOperation: true,
    lat: 36.6222,
    lon: 128.4373
  },
  {
    code: 'YDGA',
    name: '영동',
    inOperation: true,
    lat: 36.0925,
    lon: 127.7943
  },
  {
    code: 'YEAB',
    name: '예안',
    inOperation: true,
    lat: 36.6611,
    lon: 128.8872
  },
  {
    code: 'YEG',
    name: '영광',
    inOperation: false,
    lat: 35.2837,
    lon: 126.4772
  },
  {
    code: 'YEGA',
    name: '영광',
    inOperation: true,
    lat: 35.2837,
    lon: 126.4776
  },
  {
    code: 'YES',
    name: '여수',
    inOperation: false,
    lat: 34.7395,
    lon: 127.7405
  },
  {
    code: 'YESA',
    name: '여수',
    inOperation: true,
    lat: 34.7395,
    lon: 127.7405
  },
  { code: 'YEYB', name: '영양', inOperation: true, lat: 36.6251, lon: 129.088 },
  {
    code: 'YGAA',
    name: '용암',
    inOperation: true,
    lat: 35.8532,
    lon: 128.3657
  },
  {
    code: 'YGBA',
    name: '양북',
    inOperation: true,
    lat: 35.79543,
    lon: 129.3865
  },
  {
    code: 'YGGA',
    name: '양구',
    inOperation: true,
    lat: 38.0979,
    lon: 127.9852
  },
  {
    code: 'YGJA',
    name: '용정',
    inOperation: false,
    lat: 35.0278,
    lon: 128.4835
  },
  {
    code: 'YJD',
    name: '영종도',
    inOperation: false,
    lat: 37.4803,
    lon: 126.4485
  },
  {
    code: 'YJD2',
    name: '영종도',
    inOperation: false,
    lat: 37.4802,
    lon: 126.4395
  },
  {
    code: 'YJD3',
    name: '영종도',
    inOperation: true,
    lat: 37.499,
    lon: 126.5493
  },
  {
    code: 'YKDB',
    name: '욕지도',
    inOperation: true,
    lat: 34.6223,
    lon: 128.2734
  },
  {
    code: 'YNCB',
    name: '연천',
    inOperation: false,
    lat: 38.0398,
    lon: 126.9258
  },
  {
    code: 'YNDB',
    name: '연도',
    inOperation: true,
    lat: 34.4323,
    lon: 127.8011
  },
  { code: 'YOA', name: '영암', inOperation: true, lat: 34.7655, lon: 126.7379 },
  {
    code: 'YOC',
    name: '영천',
    inOperation: false,
    lat: 35.9773,
    lon: 128.9512
  },
  {
    code: 'YOCB',
    name: '영천',
    inOperation: true,
    lat: 35.9771,
    lon: 128.9511
  },
  {
    code: 'YOD',
    name: '영덕',
    inOperation: false,
    lat: 36.5332,
    lon: 129.4094
  },
  {
    code: 'YODB',
    name: '영덕',
    inOperation: true,
    lat: 36.5333,
    lon: 129.4096
  },
  {
    code: 'YOGA',
    name: '영북',
    inOperation: true,
    lat: 38.0942,
    lon: 127.2765
  },
  {
    code: 'YOJ',
    name: '영주',
    inOperation: false,
    lat: 36.8719,
    lon: 128.5167
  },
  {
    code: 'YOJA',
    name: '용정',
    inOperation: true,
    lat: 35.022225,
    lon: 128.492818
  },
  { code: 'YOJB', name: '영주', inOperation: true, lat: 36.872, lon: 128.5166 },
  { code: 'YOS', name: '여수', inOperation: false, lat: 34.735, lon: 127.739 },
  { code: 'YOW', name: '영월', inOperation: false, lat: 37.1812, lon: 128.457 },
  {
    code: 'YOW2',
    name: '영월',
    inOperation: true,
    lat: 37.1812,
    lon: 128.4569
  },
  {
    code: 'YPDB',
    name: '소연평도',
    inOperation: true,
    lat: 37.608,
    lon: 125.71
  },
  { code: 'YSAB', name: '예산', inOperation: true, lat: 36.742, lon: 126.8156 },
  {
    code: 'YSDA',
    name: '여서도',
    inOperation: true,
    lat: 33.9866,
    lon: 126.9205
  },
  {
    code: 'YSU',
    name: '백운산',
    inOperation: false,
    lat: 35.1027,
    lon: 127.5968
  },
  {
    code: 'YUGA',
    name: '유구',
    inOperation: true,
    lat: 36.5406,
    lon: 126.9473
  },
]
